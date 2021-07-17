const gulp = require('gulp')
const path = require('path')
const _ = require('lodash')
const fs = require('fs')
const replace = require('gulp-replace')
const rename = require('gulp-rename')
const components = require('./components.json')
// 有些组件要过滤掉, 包括内置组件和指令组件
const excludedComponents = [
  'locale',
  'loading',
  'message',
  'message-box',
  'notification',
  'infinite-scroll'
]
const needComponents = []
const homeNeedComponents = []
// const transName = ( name ) => {
//   let nameArr = name.split('-')
//   if(nameArr && nameArr.length > 1) {
//     let first = nameArr[0]
//     let second = nameArr[1]
//     seconde = second.char
//   }
// }
// doc 打包成文档
gulp.task('doc', (cb) => {
  return gulp
    .src('./docs/component_origin/*.md')
    .pipe(
      replace(/::demo==(\w+)-(.+)==(.*)/g, function (match, p1, p2, p3) {
        // console.log(match, p1, p2, p3)
        var str = `
<ClientOnly>
  <${p1}-${p2}></${p1}-${p2}>
</ClientOnly>
      `
        str += '\n\n'
        // tips
        if (p3.toString().trim()) {
          str += `:::tip\n${p3}\n:::\n\n`
        }
        var fileName = `docs/.vuepress/components/${p1}/${p2}.vue`
        var fileStr = fs.readFileSync(path.resolve(fileName))
        str += '```vue\n'
        var tplArr = [],
          cssArr = [],
          jsArr = [],
          canAddTpl = false,
          canAddCss = false,
          canAddJs = false
        fileStr.toString().replace(/(.+)/g, function (match) {
          // 添加template
          if (match.indexOf('<demo-block') > -1) {
            match = ''
            canAddTpl = true
          }
          if (match.indexOf('</demo-block>') > -1) {
            canAddTpl = false
          }

          if (canAddTpl && match.trim()) {
            tplArr.push(match.substring(4, match.length))
          }
          // 添加css
          if (match.indexOf('<style') > -1) {
            canAddCss = true
            match = ''
            cssArr.push('<style>')
          }
          if (match.indexOf('</style>') > -1) {
            canAddCss = false
          }

          if (canAddCss && match.trim()) {
            cssArr.push(match)
          }
          // 忽略js
          if (match.indexOf('script--ignore--start') > -1) {
            canAddJs = false
            match = ''
          }
          if (match.indexOf('script--ignore--end') > -1) {
            canAddJs = true
            match = ''
          }
          // 添加js
          if (match.indexOf('<script doc') > -1) {
            canAddJs = true
            match = ''
            jsArr.push('<script>')
          }
          if (match.indexOf('</script>') > -1) {
            canAddJs = false
          }
          if (canAddJs && match.trim()) {
            jsArr.push(match)
          }
        })
        str += tplArr.join('\n')
        if (jsArr.length) {
          str += '\n\n' + jsArr.join('\n') + '\n</script>'
        }
        if (cssArr.length) {
          str += '\n\n' + cssArr.join('\n') + '\n</style>'
        }
        str += '\n```'
        // console.log(str)
        return str
      })
    )
    .pipe(gulp.dest('./docs/component'))
})

gulp.task('vuepress', (cb) => {
  return gulp
    .src('./docs/.vuepress/enhanceApp_orgin.js')
    .pipe(
      replace(/gulp==(\w+)/g, function (match, p1) {
        var str = 'enhanceApp_origin由构建出来\n\n'
        // console.log(match, p1, p2)
        if (p1 === 'import') {
          for (let k in components) {
            if (excludedComponents.indexOf(k) === -1) {
              needComponents.push(k)
            }
            str += `import ${k} from './src/${components[k]}'\n`
          }
          console.log(str)
        }

        if (p1 === 'use') {
          needComponents.map((item) => {
            str += `Vue.component(${item}.name,${item}) \n`
          })
        }
        return str
      })
    )
    .pipe(rename('enhanceApp_build.js'))
    .pipe(gulp.dest('./docs/.vuepress/'))
})
// gulpStart::demo-button-base::gulpEnd
gulp.task('home', (cb) => {
  return gulp
    .src('./src/views/home_origin.vue')
    .pipe(
      replace(/(.*gulpStart::(.*)::gulpEnd.*)/g, function (match, p1, p2) {
        // console.log(match)
        // console.log(p2)
        var str = ''
        let mode = p2.split('-')
        // html 引入组件 如 <button-demo-base></button-demo-base>
        if (mode.length > 1) {
          let n1 = mode[0]
          let n2 = `${mode[1]}-${mode[2]}`
          // 转换成首字母大写并保存
          homeNeedComponents.push(`${n1}-${n2}`)
          str += `    <${n1}-${n2}></${n1}-${n2}>\n`
        }
        if (mode.length === 1) {
          if (mode[0] === 'import') {
            _.each(homeNeedComponents, function (item) {
              let arr = item.split('-')
              let itemName = _.upperFirst(_.camelCase(item))
              let itemPath = `'docs/.vuepress/components/${arr[0]}/${arr[1]}-${arr[2]}'`
              str += `import ${itemName} from ${itemPath}\n`
            })
          }
          if (mode[0] === 'init') {
            _.each(homeNeedComponents, function (item) {
              let itemName = _.upperFirst(_.camelCase(item))
              str += `    [${itemName}.name]: ${itemName}\n`
            })
          }
        }
        return str
      })
    )
    .pipe(rename('Home_build.vue'))
    .pipe(gulp.dest('./src/views'))
})
// 合并任务
// gulp.task('buildDoc', ['doc', 'vuepress'])

const gulp = require('gulp')

gulp.task('doc', (cb) => {
  return gulp
    .src('./doc/component_origin/*.md')
    .pipe(
      replace(/:::demo====(\w+)-(.+)====(.*)/g),
      function (match, p1, p2, p3) {
        var str = `
       <ClientOnly>
       <${p1}-${p2}></${p1}-${p2}>
       </ClientOnly>
       `
        str += '\n\n'
        if (p3.toString().trim()) {
          str += `:::tip ${p3} \n:::\n\n`
        }
      }
    )
})

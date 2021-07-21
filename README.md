# dr-ui

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).



## dev分支: 不使用.


## sass部分提示

- @at-root 指定到根元素
```scss
  // 转换前
  .page {
    width: 20px;
    @at-root .child {
       width: 25px;
    }
  }
```

```css
  // 转换后
   .page {
     width: 20px;
   }
   .child {
     width: 25px;
   }
```

- mix($color1,$color2,percent)
这个用于颜色混合
```scss
  $white: #fff;
  $other: #ff3000;
  // 2个颜色进行混合，$white占25%
  $bgc: mix($white,$other,25%)
```

- str-slice(string,start,end)
```scss
  // 从位置2截取到位置-2
  // 起始为1，即a
  $a:str-slice("abcd",2,-2) // bc
```

- str-index(string,substring)
返回substring在string的首次出现位置
```scss
  $a:str-index(abcd,a) //1
  $a:str-index(abcd,x) // null
```

- inspect 
返回 字符串

```scss
// 如果传入的是 &, 而&如果表示的是 dr-button
// => "dr-button"
$selector: inspect($selector) 
```
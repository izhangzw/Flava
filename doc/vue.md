# 搭建
## 如何开始
```
npm i -g vue-cli
vue init webpack flava
```
# 我解决了什么问题  
1. .vue 中直接写scss
```
yarn add node-sass@4.14.1 -D
yarn add sass-loader@7.3.1 -D
```

# 我还想解决什么问题
- [x] .vue 中直接写scss
  - [x] 全局样式应该在哪引入 - App.vue
  - [x] 全局引入 scss, 在components里面可以直接使用全局变量 - sass-resource-loader
- [x] 如何按需加载路由
- [x] mixin safe-area
- [ ] eslint . 
  - [ ] 开发模式下不检测格式
  - [x] 如何自定义eslint规则
  - [ ] --fix快速 format
- [x] ExtractTextPlugin 怎么用，可以解决 css中引用图片的问题么
- [ ] webpack 执行顺序
- [ ] 如何实现图片背景带箭头
- [x] 1像素边框mixin
- [ ] mock data
- [ ] 封装 fetch.js <-- axios

# Something Important
数据代理  
`Object.defineProperty`  
数据劫持  
design pattern  
数据检测的原理   

# 坑
## node-sass   
### node / node-sass / scss-loader 版本匹配问题   
> Module build failed: TypeError: this.getOptions is not a function  

[参考 node-sass Git](https://github.com/sass/node-sass)  
`nodejs@12.14.1`  
`node-sass@4.14.1`  
`sass-loader@7.3.1`  

## scss  
### 全局引入scss, 直接使用全局变量  
[参考](https://zhuanlan.zhihu.com/p/180228946)  
```
yarn add sass-resources-loader -D
```

虽然在App.vue中引入了所有css, 但定义的变量/mixin还是找不到  
```
Module build failed: 
  background-color: $timelineColor;
                   ^
      Undefined variable: "$timelineColor".
      in x/memories/memories.vue (line 53, column 21)
```
所以要借助 `sass-resources-loader` 来配置全局 scss 文件路径   
在 /build/utils.js 文件下找到下面指定的这行代码：
```
exports.cssLoaders = function (options) {
  ...
  return {
    ...
    scss: generateLoaders('sass'), /* 找到这行代码 */
    ...
  }
}
```
替换成下面所示的内容
```
exports.cssLoaders = function (options) {
  ...
  return {
    ...
    scss: generateLoaders('sass').concat(
      {
        loader: 'sass-resources-loader',
        options: {
          resources: [
            path.resolve(__dirname, '../src/assets/base/variable.scss'),
            path.resolve(__dirname, '../src/assets/mixins/all.scss')
          ]
        }
      }
    ),
    ...
  }
}
```
### 字体图标不显示, 控制台有警告   
> Failed to decode downloaded font: <URL>   
> OTS parsing error: invalid sfntVersion: 1008813135

是由于找不到字体文件
1. 把字体文件放到static目录下，确保webpack加载到
2. 修改字体文件url绝对地址 `$fa-font-path: "~/static/fonts" !default;`


### scss内引用的背景图片找不到   
> This relative module was not found:   

由于webpack在编译过程中会检测css中图片的是否可用，所以会报错。   
如果图片放在 `static/images/` 中，会直接生成到 `dist/static/images/` 下，那么图片可以这么引用   
`background-image: url('~/static/images/xxx.png')`


## Homebrew
> Version value must be a string; got a NilClass () (TypeError)
```
// 升级brew
brew update
brew -v
```

## Webpack3+

### extract-text-webpack-plugin 有什么用
> 抽文本插件  

该插件的主要是为了抽*.vue中的`css`到单独的文件中  
防止将`css`和`js`在一起  
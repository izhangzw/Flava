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
- [ ] 如何按需加载路由
- [ ] 全局样式应该在哪引入 
- [x] 全局引入 scss, 在components里面可以直接使用全局变量
- [ ] 如何实现图片背景带箭头
- [ ] 如何自定义eslint规则
- [ ] mixin safe-area


数据代理  
`Object.defineProperty`  
数据劫持  
design pattern  
  
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

### 字体图标不显示, 控制台有警告   
> Failed to decode downloaded font: <URL>   
> OTS parsing error: invalid sfntVersion: 1008813135

是由于找不到字体文件
1. 把字体文件放到static目录下，确保webpack加载到
2. 修改字体文件url绝对地址 `$fa-font-path: "~/static/fonts" !default;`

## Homebrew
> Version value must be a string; got a NilClass () (TypeError)
```
// 升级brew
brew update
brew -v
```

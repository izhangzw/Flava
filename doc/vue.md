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
- [ ] style 中引入 scss

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


## Homebrew
> Version value must be a string; got a NilClass () (TypeError)
```
// 升级brew
brew update
brew -v
```

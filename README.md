# cope

> 将中审连的组件集成进来

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run all tests
npm test
```

```
  1.用到的技术
    1.1. 技术框架：vue  element-ui  axios 
    1.2. css 预编译为  scss

  2.重点文件说明：
    2.1. utils中 （都已经在main.js中注册了。）
        2.1.1  1.1axios.js将axios重新封装了   
        2.1.2  filters.js里面是全局的过滤器方法
        2.1.3  utils.js是全局的注册方法。  
        
             

```
For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

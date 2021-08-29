<template>
  <div id="app">
    <!-- <menu></menu> -->
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
html{font-family: "STHeiti","Microsoft YaHei","Helvetica Neue",Helvetica,Arial,sans-serif;}
html,body,header,section,footer,div,ul,ol,li,img,a,span,em,del,legend,center,strong,var,fieldset,form,label,dl,dt,dd,cite,input,hr,time,mark,code,figcaption,figure,textarea,h1,h2,h3,h4,h5,h6,p{margin:0;border:0;padding:0;font-style:normal;color:rgb(50,50,50);font-size: 16px;outline: 0;}
html,body {-webkit-touch-callout:none;-webkit-text-size-adjust:none;-webkit-tap-highlight-color:rgba(0, 0, 0, 0);-webkit-user-select:none;background-color: #fff;height: 100%;width:100%;}
nav,article,aside,details,main,header,footer,section,fieldset,figcaption,figure{display: block;}
img,a,button,em,del,strong,var,label,cite,small,time,mark,code,textarea{display:inline-block;}
header,section,footer {position:relative;}
ol,ul{list-style:none;}
input,button,textarea {border:0;margin:0;padding:0;font-size:1em;line-height:1em;-webkit-appearance:none;background-color:rgba(0, 0, 0, 0);}
span{display:inline-block;}
a:active, a:hover {outline: 0;}
a, a:visited{text-decoration:none;}
table {border-collapse: collapse;border-spacing:0;}
td,th {padding:0;}
img{border:none}
</style>

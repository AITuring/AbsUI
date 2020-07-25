<template>
<!-- eslint-disable -->
<div class="v-docs">
<div class="markdown-body"><h2>项目整体结构</h2>
<p>项目整体分为example和packages两个文件夹，example中是组件的使用和文档，packages是组件的实现。</p>
<p>packages下components里面每一个组件都有一个文件夹，例如button，button/src/button.vue是button的实现，button/index.js 将button导出
theme/lib中每一个是组件的样式，最后集成到index.scss中</p>
<p>example中docs是组件的文档，下面的main.js引入整个组件和组件的样式，在App.vue展示</p>
</div>
</div>
</template>

    <script>
      /** eslint-disable **/
      

      
      
      export default {
        mounted () {
          console.log('button111')
        },
        components: {
          
        },
        mixins: [
          
        ]
      }
    </script>

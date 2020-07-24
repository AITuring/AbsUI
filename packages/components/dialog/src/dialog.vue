
<template>
  <transition name="dialog-fade">
  <div class="a-dialog__wrapper" v-show="visible" @click.self="handleClose">
      <!-- 读写结构赋值语法 -->
    <div class="a-dialog" :style="{width,marginTop:top}">
      <div class="a-dialog__header">
        <!-- title：可以通过prop修改，也可以通过具名插槽修改，插槽的优先级高于props -->
        <slot name="title">
          <span class="a-dialog__title">{{ title }}</span>
        </slot>

        <button class="a-dialog__headerbtn" @click="handleClose">
          <i class="a-icon-close"></i>
        </button>
      </div>
      <div class="a-dialog__body">
          <!-- 默认插槽 -->
        <slot></slot>
      </div>
      <!-- dialog底部的内容完全由父组件分发。 -->
      <div class="a-dialog__footer" v-if="$slots.footer">
           <!-- footer插槽-->
        <slot name="footer"></slot>
      </div>
    </div>
  </div>
  </transition>
</template>

<script>
export default {
  name: 'ADialog', // 一般这里的name就是我的组件名，注册的时候使用name作为全局组件名
  props: {
    title: {
      type: String,
      default: '提示'
    },
    width: {
      type: String,
      default: '30%'
    },
    top: {
      type: String,
      default: '15vh'
    },
    visible: {
      type: Boolean,
      default: false
    }
  },
  created () {
    // console.log(this.plain)
  },
  methods: {
    handleClose () {
      // 切换显示，无法直接修改props里面的属性visible，所以通过sync修饰符实现
      this.$emit('update:visible', false)
    }
  }
}
</script>

<style lang="scss">

</style>

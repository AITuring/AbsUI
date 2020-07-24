<template>
     <button  @click="handleClick($event)" class="a-button" :class="[`a-button--${type}`,{
         'is-plain':plain,
         'is-round':round,
         'is-circle ':circle,
          'is-disabled': disabled
     }]"
     :disabled="disabled"
     >
     <i v-if="icon" :class="icon"></i>
         <span v-if="$slots.default">
            <slot></slot>
         </span>
     </button>
</template>

<script>

export default {
  name: 'AButton', // 一般这里的name就是我的组件名，注册的时候使用name作为全局组件名，使用的时候<lx-button>
  props: {
    type: {
      type: String,
      default: 'default'
    },
    plain: {
      type: Boolean, // 对于props传递的参数数据类型是布尔类型 的时候，默认值是flase，此时如果写了参数不需要要指定值，它会自动传入true类型
      default: false
    },
    round: {
      type: Boolean, // 对于props传递的参数数据类型是布尔类型 的时候，默认值是flase，此时如果写了参数不需要要指定值，它会自动传入true类型
      default: false
    },
    circle: {
      type: Boolean, // 对于props传递的参数数据类型是布尔类型 的时候，默认值是flase，此时如果写了参数不需要要指定值，它会自动传入true类型
      default: false
    },
    icon: {
      type: String,
      default: ''
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  created () {
    console.log(this.plain)
  },
  methods: {
    handleClick (event) {
      this.$emit('click', event)
    }
  }
}
</script>



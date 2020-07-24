<template>
 <label class="a-checkbox" :class="{'is-checked':isChecked}">
    <span class="a-checkbox__input">
      <span class="a-checkbox__inner"></span>
      <input type="checkbox" class="a-checkbox__original" :name="name" :value="label" v-model="model">
    </span>
    <span class="a-checkbox__label">
      <slot></slot>
      <template v-if="!$slots.default">{{label}}</template>
    </span>
  </label>
</template>

<script>
export default {
  name: 'ACheckbox', // 一般这里的name就是我的组件名，注册的时候使用name作为全局组件名，使用的时候<lx-button>
  data () {
    return {
    }
  },
  inject: {
    CheckboxGroup: {
      default: ''
    }
  },
  props: {
    label: {
      type: String,
      default: ''
    },
    name: {
      type: String,
      default: ''
    },
    value: null

  },
  created () {},
  methods: {

  },
  computed: {
    model: {
      get () {
        // 如果是group的话，就是CheckboxGroup里面的value数组类型
        return this.isGroup ? this.CheckboxGroup.value : this.value
      },
      set (value) {
        this.isGroup ? this.CheckboxGroup.$emit('input', value)
          : this.$emit('input', value)
      }
    },
    isGroup () {
      return !!this.CheckboxGroup
    },
    isChecked () {
      if (this.isGroup) {
        return this.model.includes(this.label)
      } else {
        return this.model
      }
    }
  }
}
</script>


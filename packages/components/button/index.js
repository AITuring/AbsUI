import AButton from './src/button.vue'

AButton.install = function ( Vue ) {
  Vue.component(AButton.name, AButton)
}

export default AButton
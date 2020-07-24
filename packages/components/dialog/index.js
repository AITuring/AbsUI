import ADialog from './src/dialog.vue'

ADialog.install = function ( Vue ) {
  Vue.component(ADialog.name, ADialog)
}

export default ADialog
import YButton from './components/button.vue'
import type { App } from 'vue'
import './style/index.scss'

const components = [
  YButton
]

export function install(app: App) {
  components.forEach(component => {
    app.component(component.name || component.displayName, component)
  })
}

export default {
  install
}

export {
  YButton
}
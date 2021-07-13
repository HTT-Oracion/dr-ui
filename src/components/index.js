import Button from './button'
import ButtonGroup from './button-group'

const components = [Button, ButtonGroup]

const install = (Vue) => {
  components.map((component) => {
    Vue.component(component.name, component)
  })
}

export default install

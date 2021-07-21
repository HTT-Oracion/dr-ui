import Button from './button'
import ButtonGroup from './button-group'
import DemoBlock from './demo-block'
const components = [Button, ButtonGroup, DemoBlock]

const install = (Vue) => {
  components.map((component) => {
    Vue.component(component.name, component)
  })
}

export default install

import Button from './button'
import ButtonGroup from './button-group'
import DemoBlock from './demo-block'
import Input from './input'
const components = [Button, ButtonGroup, DemoBlock, Input]

const install = (Vue) => {
  components.map((component) => {
    Vue.component(component.name, component)
  })
}

export default install

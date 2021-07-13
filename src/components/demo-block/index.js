import DemoBlock from './src/demo-block'

DemoBlock.install = (Vue) => {
   Vue.component(DemoBlock.name,DemoBlock)
}

export default DemoBlock
//enhanceApp_origin由构建出来
import DemoBlock from '../../src/components/demo-block/index.js'
import button from '../../src/components/button/index.js'
import buttonGroup from '../../src/components/button-group/index.js'

import '../../src/styles/index.scss'


export default ({
  Vue
})=> {
  //enhanceApp_origin由构建出来
Vue.component(DemoBlock.name,DemoBlock) 
Vue.component(button.name,button) 
Vue.component(buttonGroup.name,buttonGroup) 

}

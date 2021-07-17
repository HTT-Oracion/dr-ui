<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <h2>{{ msg }}</h2>
    <dr-button>123</dr-button>
    <button-demo-base></button-demo-base>
    <button-demo-base></button-demo-base>
  </div>
</template>

<script>
import ButtonDemoBase from 'docs/.vuepress/components/button/demo-base'

export default {
  name: 'HomeOrigin',
  components: {
    [ButtonDemoBase.name]: ButtonDemoBase
  },
  data() {
    return {
      msg: 'vue2.x 组件库练习'
    }
  }
}
</script>

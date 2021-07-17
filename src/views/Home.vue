<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <h2>{{ msg }}</h2>
    <dr-button>123</dr-button>
  </div>
</template>

<script>
// @ is an alias to /src
// import  from '../../docs/.vuepress/components/button/demo-base'
export default {
  name: 'Home',
  components: {},
  data() {
    return {
      msg: 'vue2.x 组件库练习'
    }
  }
}
</script>

<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <h2>{{ msg }}</h2>
    <dr-button>123</dr-button>
    <button-demo-base></button-demo-base>
    <!-- <dr-button-group>
      <dr-button @click="handleClick">123</dr-button>
      <dr-button>123</dr-button>
      <dr-button size="mini">123</dr-button>
    </dr-button-group> -->

    <dr-input v-model="msg"></dr-input>
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
  },
  methods: {
    handleClick() {
      console.log(1)
    }
  }
}
</script>

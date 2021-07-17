<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <h2>{{ msg }}</h2>
    <dr-button size="large">large</dr-button>
    <dr-button>default</dr-button>
    <dr-button size="small">small</dr-button>

    <h2>颜色</h2>
    <dr-button>default</dr-button>
    <dr-button type="primary">primary</dr-button>
    <dr-button type="success">success</dr-button>
    <dr-button type="danger">danger</dr-button>
    <dr-button type="warning">warning</dr-button>
    <dr-button type="info">info</dr-button>

    <h2>朴素按钮</h2>

    <dr-button>default</dr-button>
    <dr-button type="primary" plain>primary</dr-button>
    <dr-button type="success" plain>success</dr-button>
    <dr-button type="danger" plain>danger</dr-button>
    <dr-button type="warning" plain>warning</dr-button>
    <dr-button type="info" plain>info</dr-button>
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

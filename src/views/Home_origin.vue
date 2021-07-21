<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <h2>{{ msg }}</h2>
    <dr-button>123</dr-button>
    <!-- gulpStart::button-demo-base::gulpEnd -->
  </div>
</template>

<script>
//::gulpStart::import::gulpEnd
export default {
  name: 'HomeOrigin',
  components: {
    //::gulpStart::init::gulpEnd
  },
  data() {
    return {
      msg: 'vue2.x 组件库练习'
    }
  }
}
</script>

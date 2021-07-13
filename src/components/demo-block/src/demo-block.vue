<template>
  <!-- 用于包裹demo的block组件 -->
  <div
    class="demo-block"
    :class="[
      customClass ? customClass : '',
      noBorder ? 'demo-not-bordered' : ''
    ]"
  >
    <div class="source">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DemoBlock',
  props: {
    noBorder: Boolean,
    customClass: String
  }
}
</script>

<style lang="scss">
.demo-block {
  border: 1px solid #ddd;
  border-radius: 3px;
  margin-top: 10px;
  transition: 0.3s;
  .source {
    padding: 24px;
  }
}

.demo-not-bordered {
  border: 0;
  .source {
    padding: 0;
  }
}
</style>

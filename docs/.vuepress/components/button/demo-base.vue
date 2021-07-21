<template>
   <demo-block :noBorder="false">
     <dr-button>default</dr-button>
     <dr-button type="primary">primary</dr-button>
     <dr-button type="danger">danger</dr-button>
     <dr-button type="warning">warning</dr-button>
     <dr-button type="info">info</dr-button>
   </demo-block>
</template>

<script doc>
//script--ignore--start

export default {
  name: 'ButtonDemoBase'
}
//script--ignore--end
</script>

<style scoped>
.demo {
  color: #fff;
}
</style>
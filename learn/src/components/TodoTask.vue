<template>
  <div class="TodoTask">
    <h1>{{ msg }}</h1>
    <h2>System Engineer</h2>
   
  </div>
</template>

<script>
export default {
  name: 'TodoTask',
  data () {
    return {
      msg: 'Kapele John Bosco'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: circle;
  padding: 60;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #36a016;
}
</style>

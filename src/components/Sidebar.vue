<template>
    <aside>
        <ul>
            <li><a href="#/vue">Vue</a></li>
            <li><a href="#/">Home</a></li>
        </ul>
    </aside>
</template>

<script>
export default {
    name: 'Sidebar',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>

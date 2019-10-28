<template>
  <div id="app">
    <MessageProvider>
      <div id="nav">
        <router-link to="/">Home</router-link> |
        <router-link to="/about">About</router-link> |
        <router-link to='/gallery'>Gallery</router-link>
      </div>
      <router-view />
    </MessageProvider>
  </div>
</template>

<script>
import { createComponent, provide } from '@vue/composition-api'
import { MessageProvider } from './store'
export default createComponent({
  name: 'App',
  components: {
    MessageProvider
  }
})
</script>

<style lang="less">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>

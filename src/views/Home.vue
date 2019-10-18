<template>
  <div class='home'>
    <img alt='Vue logo' src='../assets/logo.png' />
    <Counter :count='state'/>
    <button @click='increment'>增加</button>
  </div>
</template>

<script>
// @ is an alias to /src
import { createComponent, ref } from '@vue/composition-api'
import Counter from '@/components/Counter.vue'

export default createComponent({
  name: 'home',
  components: {
    Counter
  },
  setup () {
    const state = ref(0)

    function increment () {
      state.value ++
    }

    return {
      state,
      increment
    }
  }
})
</script>

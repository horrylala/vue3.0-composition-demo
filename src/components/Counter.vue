<template>
  <div>
    <p>当前count值是：{{ state.count }}, 三倍是: {{ state.tripple }}</p>
  </div>
</template>

<script>
import { createComponent, reactive, computed } from '@vue/composition-api'
export default createComponent({
  name: 'Counter',
  props: {
    count: Number
  },
  setup (props) {
    const state = reactive({
      count: computed(() => props.count),
      tripple: computed(() => props.count * 3)
    })

    return {
      state
    }
  }
})
</script>

<style>

</style>


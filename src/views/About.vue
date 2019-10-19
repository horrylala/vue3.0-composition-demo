<template>
  <div class="about">
    <h4>This is an about page</h4>
    <p>you have {{unread.length}} messages</p>
  </div>
</template>

<script>
import { createComponent } from '@vue/composition-api'
import { useMessage } from '../store'
export default createComponent({
  name: 'About',
  setup () {
    const {
      messages,
      addMessage,
      unread
    } = useMessage()

    addMessage({
      text: 'hello, first message',
      read: false
    })

    return {
      unread
    }
  }
})
</script>
<template>
  <div>You have {{unread.value.length}} messages</div>
</template>

<script>
// usage inject
import { inject } from '@vue/composition-api'
export default {
  name: 'MessageBell',
  setup () {
    const {
      state: { messages },
      addMesage,
      unread
    } = inject(Symbol.for('MessageStore'))

    return {
      messages,
      addMesage,
      unread
    }
  }
}
</script>
/** a minimal Vuex-like store */
import '../composition-plugins'
import { reactive, computed, createComponent, provide, toRefs, inject } from '@vue/composition-api'

interface IMessage {
  text: string,
  read: boolean
}

const state = reactive({
  messages: []
} as { messages: IMessage[] })

const actions = {
  addMessage: (message: IMessage) => {
    state.messages.push(message)
  }
}

const getters = {
  unread: computed(() => state.messages.filter(message => !message.read))
}

export const key = Symbol('MessageStore')

export const MessageProvider = createComponent({
  setup() {
    provide(key, {
      ...toRefs(state),
      ...actions,
      ...getters
    })
  },
  render(h: any) {
    return h('div', this.$slots.default)
  }
})

export const useMessage = () => inject(key)


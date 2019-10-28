# vue3.0-composition-demo

Hi, I'm realy excited that Vue 3 source code is public[github.com/vuejs/vue-next](https://github.com/vuejs/vue-next).The killer feature of Vue 3 is composition api.In this demo, i will show some usecases, and there maybe many mistakes, but my main purpose is to show the new feature, if you get stucked or ignored ,just let me kown and make an [issue](https://github.com/horrylala/vue3.0-composition-demo/issues/new)

## somthing before the demo
There are two ways to expirence the new features.
- One is use source code to build a file to import in *script* tag.Details can be shown in [contibution guide](https://github.com/vuejs/vue-next/blob/master/.github/contributing.md#project-structure)
- The other one is import *@vue-composition-api* in vue2.+ project to make it work.*This demo* uses this method.

## Main usecase
There maybe many new features, i just plan to show these as follows:

- [x] reactive and refs
- [x] props and computed
- [x] inject / provide
- [x] use functions

### reactive and refs
Q: What's the difference between reactive and ref
A: They are two different writing types to observe object.

```javascript
// type 1
let x = 0
let y = 1

function handleSth (x, y) {
  // do sth
}

// type2
let opts = {
  x: 0,
  y: 1
}

function handleSth (opts) {
  // do sth
}
```

*reactive* likes type 2 while *ref* likes type 1

### props and computed
There is  not too much different between Vue 2 and Vue 3 in props and computed.
But subtle changes.

### inject / provide
*provide* and *inject* enables dependency injection similar to vue 2.x *provide/inject*,It can only be called during setup() with a current active instance.
In files *store/index.ts*, there is a example of *inject* and *provide* .

```javascript
import { provide, inject } from 'vue'

const ThemeSymbol = Symbol()

const Ancestor = {
  setup () {
    provide(ThemeSymbol, 'dark')
  }
}

const Descendent = {
  setup () {
    const theme = inject(ThemeSymbol, 'light' /* optional value */)
    return {
      theme
    }
  }
}

```
Of course , *provide/inject* can also retain reactivity.
```javascript
// in provider
const themeRef = ref('dark')
provide(ThemeSymbol, themeRef)

// in inject
const theme = inject(ThemeSymbol, ref('light'))
watch(() => {
  console.log(`theme set to :${theme.value}`)
})
```


### use functions
*use* is a new syntax of Vue 3.0.
It can extract logic usage and reuse some code, for example , scroll event and touch event and so on. 


## Other resources
- [api-introduction](https://vue-composition-api-rfc.netlify.com/#api-introduction)
- [api.htm](https://vue-composition-api-rfc.netlify.com/api.html#setup)

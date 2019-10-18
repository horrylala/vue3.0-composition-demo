# vue3.0-composition-demo

Hi, I'm realy excited that Vue 3 source code is public[github.com/vuejs/vue-next](https://github.com/vuejs/vue-next).The killer feature of Vue 3 is composition api.In this demo, i will show some usecases, and there maybe many mistakes, but my main purpose is to show the new feature, if you get stucked or ignored ,just let me kown and make an [issue]()

## somthing before the demo
There are two ways to expirence the new features.
- One is use source code to build a file to import in *script* tag.Details can be shown in [contibution guide]()
- The other one is import *@vue-composition-api* in vue2.+ project to make it work.*This demo* uses this method.

## Mian usecase
There maybe many new features, i just plan to show these as follows:

- [ ] reactive and refs
- [ ] props and computed
- [ ] inject / provide
- [ ] use functions

### reactive and refs
> due: 10-18
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
> due: 10-21
There is  not too much different between Vue 2 and Vue 3 in props and computed.
But subtle changes.

### inject / provide
> due: 10-23

### use functions
> due: 10-24


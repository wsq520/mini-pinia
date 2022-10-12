import { computed } from 'vue'

export function createGetters(store, getters) {
  for (let getter in getters) {
    // 绑定this并且传递state作为参数
    store[getter] = computed(getters[getter].bind(store.$state, store.$state))
    store.$state[getter] = store[getter]
  }
}
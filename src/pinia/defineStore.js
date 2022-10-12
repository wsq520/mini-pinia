import { reactive, inject } from 'vue'

import { createState, createActions, createGetters } from './options'

export default (
  name,
  {
    state,
    getters,
    actions
  }) => {
  const store = {}

  if (state && typeof state === 'function') {
    createState(store, state)
  }

  if (actions && Object.keys(actions).length > 0) {
    createActions(store, actions)
  }

  if (getters && Object.keys(getters).length > 0) {
    createGetters(store, getters)
  }

  return () => {
    const setSubStore = inject('setSubStore')
    const piniaStore = setSubStore(name, reactive(store))

    return piniaStore[name]
  }
}
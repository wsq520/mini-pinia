<template>
  <div id="app">
    <todo-list/>
  </div>
</template>

<script setup>
import TodoList from './components/TodoList/index.vue'
import { useTodoListStore } from './store/index'

const todoListStore = useTodoListStore()
console.log(todoListStore)
</script>

<style  scoped>

</style>
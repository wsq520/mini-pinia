<template>
  <div>
    <input type="text" placeholder="请输入内容" v-model="inputRef">
    <button @click="addTodo">Add Todo</button>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useTodoListStore } from '../../../store'

const inputRef = ref('')
const todoListStore = useTodoListStore()

const addTodo = () => {
  todoListStore.addTodo(inputRef.value)
  inputRef.value = ''
}
</script>

<style lang="scss" scoped>

</style>
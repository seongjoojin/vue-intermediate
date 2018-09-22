<template>
  <div id="app">
    <TodoHeader></TodoHeader>
    <TodoInput></TodoInput>
    <TodoList></TodoList>
    <TodoFooter></TodoFooter>
  </div>
</template>

<script>
import TodoHeader from "./components/TodoHeader.vue"
import TodoInput from "./components/TodoInput.vue"
import TodoList from "./components/TodoList.vue"
import TodoFooter from "./components/TodoFooter.vue"

export default {
  components: {
    TodoHeader: TodoHeader,
    TodoInput: TodoInput,
    TodoList: TodoList,
    TodoFooter: TodoFooter
  },
  metaInfo: {
    meta: [
      { name: "viewport", content: "width=device-width, initial-scale=1" }
    ],
    link: [
      { rel: "icon", href: "./assets/favicon.ico", type: "image/x-icon" },
      {
        rel: "shortcut icon",
        href: "./assets/favicon.ico",
        type: "image/x-icon"
      },
      {
        href: "https://fonts.googleapis.com/css?family=Ubuntu",
        rel: "stylesheet"
      }
    ]
  }
}
</script>

<style>
</style>

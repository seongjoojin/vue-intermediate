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
    TodoHeader,
    TodoInput,
    TodoList,
    TodoFooter
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
body {
  text-align: center;
  background-color: #f6f6f6;
}
input {
  border-style: groove;
  width: 200px;
}
button {
  border-style: groove;
}
.shadow {
  box-shadow: 5px 10px 10px rgba(0, 0, 0, 0.03);
}
</style>

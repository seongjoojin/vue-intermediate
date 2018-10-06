<template>
  <div id="app">
    <TodoHeader></TodoHeader>
    <TodoInput v-on:addTodoItem="addOneItem"></TodoInput>
    <TodoList
      v-bind:propsdata="todoItems"
      v-on:removeItem="removeOneItem"
      v-on:toggleItem="toggleOneItem"
    ></TodoList>
    <TodoFooter v-on:clearAll="clearAllItems"></TodoFooter>
  </div>
</template>

<script>
import TodoHeader from "./components/TodoHeader.vue"
import TodoInput from "./components/TodoInput.vue"
import TodoList from "./components/TodoList.vue"
import TodoFooter from "./components/TodoFooter.vue"

export default {
  data() {
    return {
      todoItems: []
    }
  },
  components: {
    TodoHeader: TodoHeader,
    TodoInput: TodoInput,
    TodoList: TodoList,
    TodoFooter: TodoFooter
  },
  created() {
    if (localStorage.length > 0) {
      for (let i = 0; i < localStorage.length; i++) {
        if (
          localStorage.key(i) !== "Bitdefender_Block" &&
          localStorage.key(i) !== "loglevel:webpack-dev-server"
        ) {
          this.todoItems.push(
            JSON.parse(localStorage.getItem(localStorage.key(i)))
          )
        }
      }
    }
  },
  methods: {
    addOneItem(todoItem) {
      const obj = { completed: false, item: todoItem }
      localStorage.setItem(todoItem, JSON.stringify(obj))
      this.todoItems.push(obj)
    },
    removeOneItem(todoItem, index) {
      localStorage.removeItem(todoItem.item)
      this.todoItems.splice(index, 1)
    },
    toggleOneItem(todoItem, index) {
      todoItem.completed = !todoItem.completed
      localStorage.setItem(todoItem.item, JSON.stringify(todoItem))
    },
    clearAllItems() {
      this.todoItems = []
      localStorage.clear()
    }
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

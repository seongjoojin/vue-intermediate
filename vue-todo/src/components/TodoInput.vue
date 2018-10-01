<template>
    <div class="inputBox shadow">
        <input type="text" v-model="newTodoItem" @keyup.enter="addTodo">
        <span class="addContainer" @click="addTodo">
          <v-icon name="plus" class="addBtn plus" />
        </span>
        <Modal v-if="showModal" @close="showModal = false">
          <!--
            you can use custom content here to overwrite
            default content
          -->
          <h3 slot="header">경고!<span @click="showModal = false"><v-icon name="times" class="closeModalBtn" /></span></h3>
          <p slot="body">값을 입력해주세요</p>
        </Modal>
    </div>
</template>

<script>
import Modal from "./common/Modal"

export default {
  components: {
    Modal: Modal
  },
  data: function() {
    return {
      newTodoItem: "",
      showModal: false
    }
  },
  methods: {
    addTodo: function() {
      if (this.newTodoItem !== "") {
        this.$emit("addTodoItem", this.newTodoItem)
        this.clearInput()
      } else {
        this.showModal = !this.showModal
      }
    },
    clearInput: function() {
      this.newTodoItem = ""
    }
  }
}
</script>

<style scoped>
input:focus {
  outline: none;
}
.inputBox {
  background: white;
  height: 50px;
  line-height: 50px;
  border-radius: 5px;
}
.inputBox input {
  border-style: none;
  font-size: 0.9rem;
}
.addContainer {
  float: right;
  background: linear-gradient(to right, #6478fb, #8763fb);
  display: block;
  width: 3rem;
  border-radius: 0 5px 5px 0;
}
.addBtn {
  color: white;
  vertical-align: middle;
}
.closeModalBtn {
  color: #42b983;
  width: 32px;
  height: 24px;
  position: relative;
  top: 5px;
}
</style>

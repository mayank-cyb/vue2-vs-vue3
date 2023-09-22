<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <h1>Vue 3</h1>
  <div id="outside-app"></div>
  <TheSuspense />
  <TheTeleport />
  <!--v-model implementation-->
  <!--1. vue 3 v-model updated use-->
  <!--2. Multiple v-model bindings on the same component-->
  <BaseInput 
    type="email"
    class="base-input"
    label="Enter your email:"
  />
  <pre>{{ email }}</pre>
  <TheForm 
      v-model:numberInput="numberInput"
      v-model:firstName="firstName" 
  />
  <!---->
  <!--Watching an array-->
  <button @click="addEleToArray" class="btn">Add number to List</button>
  <NumberList :arr="arr" />
  <TodoList />
</template>

<script>
import NumberList from './components/NumberList.vue'
import TheForm from './components/TheForm.vue'
import BaseInput from './components/BaseComponents/BaseInput.vue'
import TodoList from './components/TodoList.vue'
import TheSuspense from './components/TheSuspense.vue'
import TheTeleport from './components/TheTeleport.vue'

export default {
  name: 'App',
  components: {
    NumberList,
    TheForm,
    TodoList,
    TheSuspense,
    BaseInput,
    TheTeleport
},
  data() {
    return {
      arr: [],
      numberInput: null,
      firstName: '',
      email: null
    }
  },
  watch: {
    //correct way to watch a mutated array
    //  arr: {
    //    handler(newVal) {
    //      console.log("watching the mutated array", newVal);
    //    },
    //    deep: true,
    //  },
    // vue 3 feature: correct way to watch a replaced array this way without specifying deep: true
    arr(newVal) {
      console.log("watching the replaced array", newVal);
    }
  },

  methods: {
    addEleToArray() {
      //mutating an array, the watcher without deep: true won't watch
      //this.arr.push(this.number);
      //replacing the array, the watcher without deep: true will watch
      console.log(this.$children);
      this.arr = [...this.arr, this.numberInput];
      // console.log(this.arr);
      //console.log(Object.is(this.arr === [...this.arr, this.number]));
    }
  }
}
</script>

<style lang="scss">
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: $color_primary;
    margin-top: 60px;
    background: $lsx_primary_background;
    h1 {
      color: $color_secondary;
    }
  }
  .btn {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    min-width: 8rem;
    border-radius: 0.25rem;
    padding: 0.5rem;
  }
  input {
    min-width: 10rem;
    height: 2rem;
    border-radius: 0.25rem;
    margin: 0.375rem 0.25rem;
  }

</style>

<template>
  <div>
    <h3>Counter App</h3>
    <p>{{ counter }}</p>
    <button @click="decrement()"> - </button>
    <button @click="increment()"> + </button>
  </div>
</template>

<script>
  export default {
    name: 'counter',
    computed: {
      counter() {
        return this.$store.state.counter
      }
    },
    methods: {
      decrement() {
        this.$store.commit('decrement');
      },
      increment() {
        this.$store.commit('increment');
      },
    },
  };
</script>

<style scoped=""></style>

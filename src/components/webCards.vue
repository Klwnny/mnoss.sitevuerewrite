<script setup>
import { ref } from 'vue'

const awesome = ref(false)

function toggle() {
  awesome.value = !awesome.value
}
</script>

<template>
  <article>
    <header>
      <h1><slot></slot></h1>
    </header>
    <p v-if="awesome">Welcome!</p>
    <p v-else><span aria-busy="true">Generating your link...</span></p>
    <footer>
      <button @click="toggle" v-if="awesome">Return to loading...</button>
      <button @click="toggle" v-else>Click to skip!</button>
    </footer>
  </article>
</template>

<script setup>
import { ref } from 'vue'

const awesome = ref(true)

function toggle() {
  awesome.value = !awesome.value
}
</script>

<template>
  <h1>Hello World!</h1>
  <p>mnoss personal site</p>
  <nav role="group">
    <RouterLink to="/" role="button" v-if="awesome" disabled>Home </RouterLink>
    <RouterLink to="/" role="button" @click="toggle" v-else>Home </RouterLink>
    <RouterLink to="/about" role="button" @click="toggle" v-if="awesome">About Me</RouterLink>
    <RouterLink to="/about" role="button" v-else disabled>About Me</RouterLink>
  </nav>
  <main>
    <RouterView />
  </main>
</template>

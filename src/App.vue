<script>
export default {
  methods: {
    goToAbout() {
      this.$router.push('/')
    }
  }
}
</script>
<template>
  <h1 @click="goToAbout" id="h1z1">Hello World!</h1>
  <p>mnoss personal site</p>
  <nav role="group">
    <RouterLink to="/" role="button">Home </RouterLink>
    <RouterLink to="/about" role="button">About Me</RouterLink>
    <RouterLink to="/resume" role="button">Resume</RouterLink>
    <RouterLink to="/" role="button" disabled>Index</RouterLink>
    <RouterLink to="/" role="button" disabled>Blog</RouterLink>
  </nav>
  <main>
    <RouterView />
  </main>
</template>

<style>
#h1z1 {
  cursor: pointer;
}
</style>

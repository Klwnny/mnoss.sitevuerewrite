<template>
  <article>
    <header>
      <h1><slot name="header"></slot></h1>
    </header>
    <p>
      <slot name="body"></slot>
    </p>
    <footer>
      <span name="footer"></span>
    </footer>
  </article>
</template>

<script setup></script>
<style></style>

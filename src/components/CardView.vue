<template>
  <article>
    <header>
      <h1><slot name="header"></slot></h1>
    </header>
    <p>
      <slot name="body"></slot>
    </p>
    <footer>
      <slot name="footer"></slot>
    </footer>
  </article>
</template>

<script setup></script>
<style></style>

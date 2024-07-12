<script setup>
import JSConfetti from 'js-confetti'
import webCards from './components/webCards.vue'

const confetti = new JSConfetti()

function showConfetti() {
  confetti.addConfetti({
    emojis: ['🌈', '⚡️', '💥', '✨', '💫', '🌸'],
    emojiSize: 50,
    confettiNumber: 6
  })
}
</script>

<template>
  <webCards @click="showConfetti"> hello world! </webCards>
</template>

<style></style>

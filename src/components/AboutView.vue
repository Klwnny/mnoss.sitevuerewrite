<script setup>
import CardView from './CardView.vue'
</script>

<template>
  <div class="grid">
    <CardView>
      <template #header>So.. Who Am I?</template>
      <template #body>
        Whats up, My name is Yuming Ge, & some may know me as Eugene. I'm commonly known on the
        internet as @Klwnny or @Mnoss! From Game Design to Full Stack Development, I look forward to
        doing all kinds of projects!
      </template>
    </CardView>
    <CardView>
      <template #header>Projects</template>
      <template #body>
        <table>
          <tbody>
            <tr>
              <th scope="row">Authentication with firebase:</th>
              <td>
                <a href="https://firebasetest.mnoss.site/" target="_blank">Firebase Website</a>
              </td>
            </tr>
            <tr>
              <th scope="row">ReactJS Gallery:</th>
              <td><a href="https://test.mnoss.site/" target="_blank">React Website</a></td>
            </tr>
            <tr>
              <th scope="row">School Projects:</th>
              <td><a href="https://replit.com/@klwnc" target="_blank">Replit Account</a></td>
            </tr>
            <tr>
              <th scope="row">Final Project 2024:</th>
              <td>
                <a href="https://stardewvalleycs2024final.mnoss.site/" target="_blank"
                  >Database Project</a
                >
              </td>
            </tr>
          </tbody>
        </table>
      </template>
    </CardView>
  </div>
  <CardView>
    <template #header>Currently Learning 📝</template>
    <template #body>
      <details open>
        <summary>JavaScript</summary>
        <p>
          Within Javascript, I've been learning many different codebases, such as the popular
          database distribution MongoDB. Something else that ive been caught up to is the
          authentication portion for Firebase. More to come soon!
        </p>
      </details>
      <details>
        <summary>ReactJS & VueJS</summary>
        <ul>
          <li>ReactJS has been a centerpiece of most of my projects.</li>
          <li>This website was made with VueJS!</li>
        </ul>
      </details>
      <details>
        <summary>CSS Libraries!</summary>
        <ul>
          <li>UIkit is the standard Library I use for most of my websites</li>
          <li>This website was made with PicoCSS!</li>
        </ul>
      </details>
    </template>
  </CardView>
</template>

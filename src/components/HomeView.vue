<script setup>
import CardView from './CardView.vue'
</script>

<template>
  <div>
    <CardView>
      <template #header> Hello!, Im @mnoss! </template>
      <template #body>
        <h4>Contacts:</h4>
        <table>
          <tbody>
            <tr>
              <th scope="row">Discord:</th>
              <td><a href="https://discord.com/" target="_blank">@mnoss</a></td>
            </tr>
            <tr>
              <th scope="row">Github:</th>
              <td><a href="https://github.com/Klwnny" target="_blank">@Klwnny</a></td>
            </tr>
            <tr>
              <th scope="row">Email:</th>
              <td><a href="mailto:mnoss@mnoss.site" target="_blank">mnoss@mnoss.site</a></td>
            </tr>
            <tr>
              <th scope="row">Linkedin:</th>
              <td>
                <a href="https://www.linkedin.com/in/yuming-ge-520577308/" target="_blank"
                  >@mnoss</a
                >
              </td>
            </tr>
          </tbody>
        </table>
      </template>
    </CardView>
  </div>
</template>

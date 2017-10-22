<template>
  <table class="table">
    <thead>
      <tr>
        <th>File Name</th>
        <th>Copy Url</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="file in pastLinks" :key="file.link">
        <td>{{file.baseName}}</td>
        <td>{{file.link}}</td>
      </tr>
    </tbody>
  </table>
</template>

<script>
import { mapState } from 'vuex';

export default {
  computed: {
    ...mapState({
      pastLinks: state =>
        state.pastLinks.map(link => {
          const baseName = link.split('/').pop();
          return { link, baseName };
        }),
    }),
  },
};
</script>

<style lang="scss">

</style>


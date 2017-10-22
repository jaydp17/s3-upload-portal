<template>
  <footer class="footer-padding">
    <div class="field is-grouped is-grouped-multiline">

      <tag tag="Version" :value="version" />
      <tag tag="license" :value="licenseValue" />

    </div>
  </footer>
</template>

<script>
import Tag from './Tag.vue';

const { version, license } = require('~/package.json');

export default {
  components: { Tag },
  data() {
    return { version, license };
  },
  computed: {
    licenseValue() {
      return `${this.license} License`;
    },
  },
};
</script>


<style lang="scss" scoped>
.footer-padding {
  padding: 50px 31px 41px;
}
.justified-center {
  justify-content: center;
}
</style>

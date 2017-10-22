<template>
  <div class="container">
    <my-header/>
    <nuxt/>
    <my-footer/>
  </div>
</template>

<script>
import MyFooter from '~/components/Footer.vue';
import MyHeader from '~/components/Header.vue';

export default {
  components: {
    MyHeader,
    MyFooter,
  },
};
</script>

<style lang="scss">

</style>

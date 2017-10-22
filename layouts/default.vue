<template>
  <div @dragover.prevent @drop.prevent>
    <div class="container container-flex" >
      <my-header/>
        <div class="wrap">
          <nuxt/>
        </div>
      <my-footer/>
    </div>
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

<style lang="scss" scoped>
.container-flex {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
.wrap {
  display: flex;
  flex-direction: column;
  flex: 1;
}
</style>

<template>
  <div class="control">
    <div class="tags has-addons justified-center">
      <span class="tag is-dark">{{ tag }}</span>
      <span class="tag">{{ value }}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: ['tag', 'value'],
};
</script>


<style lang="scss" scoped>
.justified-center {
  justify-content: center;
}
</style>

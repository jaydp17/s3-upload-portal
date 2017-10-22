<template>
  <div>
    <span v-if="!showCopied" @click="onCopyClick" class="click-copy">
      <img src="~/assets/img/copy-16.svg" alt="copy-icon" >
    </span>
    <span class="text-copied" v-else>Copied!</span>
  </div>
</template>

<script>
import copy from 'copy-to-clipboard';

export default {
  props: ['text'],
  data() {
    return { showCopied: false };
  },
  methods: {
    onCopyClick() {
      this.showCopied = true;
      copy(this.text);
      console.log('text', this.text);
      setTimeout(() => {
        this.showCopied = false;
      }, 1000);
    },
  },
};
</script>

<style lang="scss" scoped>
.click-copy {
  cursor: pointer;
  padding: 0.25em 1em;
}
.text-copied {
  color: #0a8dff;
}
</style>

<template>
  <div>
    <span v-if="!showCopied">
      <img src="~/assets/img/copy-16.svg" alt="copy-icon" @click="onCopyClick">
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
      }, 2000);
    },
  },
};
</script>

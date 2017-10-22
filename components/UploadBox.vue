<template>
<div class="field">
  <div class="file is-centered is-boxed has-name">
    <label class="file-label">
      <input class="file-input" type="file" name="file" @change="onFileChange($event.target.files[0])">
      <span class="file-cta">
        <span class="file-icon">
          <i class="fa fa-upload"></i>
        </span>
        <span class="file-label">
          Choose a file…
        </span>
      </span>
      <span class="file-name" v-if="!!fileName">
        {{ fileName }}
      </span>
    </label>
  </div>
</div>
</template>

<script>
export default {
  data() {
    return {
      file: null,
    };
  },
  computed: {
    fileName() {
      return this.file && this.file.name;
    },
  },
  methods: {
    async onFileChange(file) {
      if (!file) return undefined;
      this.file = file;
      console.log('got file');
      return null;
    },
  },
};
</script>

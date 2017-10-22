<template>
  <div class="upload-window">
    <img class="upload-img" src="../assets/img/upload.svg" />
    <p class="upload-text">Drop your file here to start uploading</p>
    <form method="post" action="upload" enctype="multipart/form-data">
      <input id="file-upload" type="file" name="file" @change="onFileChange($event.target.files[0])">
      <label 
      id="browse"
      title="Select a file to upload"
      for="file-upload" class="button is-info is-large">
        Select a file to upload
      </label>
    </form>
  </div>
</template>

<script>
export default {
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


<style lang="scss" scoped>
.upload-window {
  border: 3px dashed rgba(0, 148, 251, 0.5);
  height: 255px;
  border-radius: 4px;
  transition: transform 0.15s;
  padding: 15px;
  display: block;

  .upload-img {
    margin: 20px 0 0px;
  }
  .upload-text {
    margin: 20px 0 20px;
  }
  #file-upload {
    opacity: 0;
    overflow: hidden;
    position: absolute;
    z-index: -1;
  }
}
</style>


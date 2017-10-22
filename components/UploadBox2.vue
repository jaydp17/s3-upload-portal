<template>
  <div class="upload-window">
    <img class="upload-img" src="../assets/img/upload.svg" />
    <p class="upload-text">Drop your file here to start uploading</p>
    <button class="button is-info is-large">Select a file to upload</button>
  </div>
</template>

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
}
</style>


<template>
  <div class="upload-window" 
    :class="{ ondrag: isDraggedIn }" 
    @dragover.prevent="isDraggedIn = true"  
    @dragleave.prevent="isDraggedIn = false"
    @drop.prevent="onDrop">

    <template v-if="!isUploading">
      <img src="../assets/img/upload.svg" />
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
    </template>
    <template v-else>
      <upload-progress :percentage="percentage" class="upload-progress"/>
    </template>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import axios from '~/plugins/axios';
import UploadProgress from './UploadProgress.vue';

export default {
  components: {
    UploadProgress,
  },
  computed: {
    ...mapState({
      isUploading: state => state.current.isUploading,
      percentage: state => state.current.percentCompleted,
    }),
  },
  data() {
    return { isDraggedIn: false };
  },
  methods: {
    async onFileChange(file) {
      if (!file) return;
      this.file = file;
      this.$store.commit('updateProgress', { percentCompleted: 0 });
      this.$store.commit('setIsUploading', { isUploading: true });
      const { signedUrl, newFileName } = await this.getSignedUrl(file);
      this.$store.dispatch('uploadFileToSignedUrl', { file, signedUrl, newFileName });
    },
    async getSignedUrl(file) {
      const { data } = await axios.get('/api/sign-s3', {
        withCredentials: true,
        params: { fileName: file.name, fileType: file.type },
      });
      return data;
    },
    onDrop(event) {
      this.isDraggedIn = false;
      const target = event.dataTransfer;
      if (target.files.length === 0) {
        return undefined;
      }
      if (target.files.length > 1 || target.files[0].size === 0) {
        return alert('Uploading multiple files or a folder is currently not supported');
      }
      console.log('VueBox:onDrop', target.files);
      return this.onFileChange(target.files[0]);
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
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

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
.upload-window.ondrag {
  border: 5px dashed rgba(0, 148, 251, 0.5);
  height: 251px;
  -ms-transform: scale(1.04);
  transform: scale(1.04);
  border-radius: 4.2px;
}
.upload-progress {
  width: 50%;
}
</style>


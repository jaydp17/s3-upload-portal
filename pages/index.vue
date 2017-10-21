<template>
  <form method="post" enctype="multipart/form-data">
    <div>
      <label for="file">Choose file to upload</label>
      <input type="file" id="file-input" name="file" multiple @change="filesChange($event.target.files)" >
    </div>
    <div>
      <button>Submit</button>
    </div>
  </form>
</template>

<script>
import axios from '~/plugins/axios';

export default {
  // async asyncData() {
  //   const { data } = await axios.get('/api/users');
  //   return { users: data };
  // },
  head() {
    return {
      title: 'Upload File',
    };
  },
  methods: {
    async getSignedRequest(file) {
      const { data } = await axios.get('/api/sign-s3', {
        withCredentials: true,
        params: { fileName: file.name, fileType: file.type },
      });
      return data;
    },
    async uploadFileToSignedUrl(file, signedUrl) {
      const { data } = await axios.put(signedUrl, { data: file });
      return data;
    },
    async filesChange(filesList) {
      const file = filesList[0];
      if (file == null) {
        return alert('No file selected.');
      }
      const { signedUrl } = await this.getSignedRequest(file);
      return this.uploadFileToSignedUrl(file, signedUrl);
    },
  },
};
</script>

<style scoped>

</style>

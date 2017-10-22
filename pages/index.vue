<template>
  <div class="columns is-centered has-text-centered">
    <div class="column is-half is-narrow">
      <h1 class="subtitle is-3 title-spacing">Uploads to S3 Bucket</h1>
      <upload-box2 />
    </div>
  </div>
</template>

<script>
import axios from '~/plugins/axios';
import UploadBox2 from '~/components/UploadBox2.vue';

export default {
  // async asyncData() {
  //   const { data } = await axios.get('/api/users');
  //   return { users: data };
  // },
  components: {
    UploadBox2,
  },
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
.title-spacing {
  margin: 1em 0 1em 0;
}
</style>

<template>
  <nav class="navbar is-transparent my-navbar" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <a class="navbar-item" href="/">
        <img src="~/assets/img/logo.svg" alt="logo" >
        <h1 class="logo-title">Upload</h1>
      </a>
    </div>
    <div class="navbar-end">
      <a class="navbar-item" :href="githubLink" target="_blank" rel="noopener">
        <img src="~/assets/img/github-icon.svg" alt="github-icon" width="32px">
      </a>
      <!-- <a class="navbar-item" href="https://twitter.com/jaydp17" target="_blank">
        <img src="~/assets/img/twitter-icon.svg" alt="twitter-icon" width="32px">
      </a> -->
    </div>
  </nav>
</template>

<script>
export default {
  computed: {
    githubLink() {
      return process.env.GITHUB_PAGE;
    },
  },
};
</script>


<style lang="scss" scoped>
@import '~assets/css/variables.scss';

.my-navbar {
  padding-top: 31px;
}
.logo-title {
  color: $text-color;
  font-size: 32px;
  font-weight: 500;
  margin: 0;
  position: relative;
  top: -1px;
  letter-spacing: 1px;
  margin-left: 8px;
  &:hover {
    color: $primary-text-color;
  }
}
</style>

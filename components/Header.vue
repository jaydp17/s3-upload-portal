<template>
  <nav class="navbar is-transparent my-navbar" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <a class="navbar-item" href="/">
        <img src="~/assets/img/logo.svg" alt="logo" >
        <h1 class="logo-title">Upload</h1>
      </a>

      <button class="button navbar-burger">
        <span></span>
        <span></span>
        <span></span>
      </button>
    </div>
    <div class="navbar-end">
      <a class="navbar-item is-hidden-desktop-only" href="https://github.com/jgthms/bulma" target="_blank">
        <span class="icon" style="color: #333;">
          <i class="fa fa-lg fa-github"></i>
        </span>
      </a>
      <a class="navbar-item is-hidden-desktop-only" href="https://twitter.com/jgthms" target="_blank">
        <span class="icon" style="color: #55acee;">
          <i class="fa fa-lg fa-twitter"></i>
        </span>
      </a>
    </div>
  </nav>
</template>

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

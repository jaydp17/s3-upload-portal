<template>
  <div>
    <progress class="progress" :value="percentage" max="100">{{percentage}}%</progress>
  </div>
</template>

<script>
export default {
  props: ['percentage'],
};
</script>

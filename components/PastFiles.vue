<template>
<div class="wrap" v-if="showPastLinks">
  <table class="table-override">
    <thead class="thead-override">
      <tr>
        <th class="filename-list th-override">File Name</th>
        <th class="copyurl-list th-override has-text-centered">Copy Url</th>
      </tr>
    </thead>
    <tbody class="tbody-override">
      <tr v-for="file in pastLinks" :key="file.link">
        <td class="overflow-col td-override">{{file.baseName}}</td>
        <td class="td-override has-text-centered">
          <copy-icon :text="file.link" />
        </td>
      </tr>
    </tbody>
  </table>
</div>
</template>

<script>
import { mapState } from 'vuex';
import CopyIcon from './CopyIcon.vue';

export default {
  components: {
    CopyIcon,
  },
  computed: {
    ...mapState({
      showPastLinks: state => state.pastLinks.length > 0,
      pastLinks: state =>
        state.pastLinks.map(link => {
          const baseName = link.split('/').pop();
          return { link, baseName };
        }),
    }),
  },
};
</script>

<style lang="scss">
.wrap {
  margin: 3em 0;
}
.filename-list {
  width: 70%;
}
.copyurl-list {
  width: 30%;
}
.table-override {
  table-layout: fixed;
  width: 100%;
  border-collapse: collapse;
  font-family: Segoe UI, SF Pro Text, sans-serif;
}
.thead-override {
  vertical-align: middle;
}
.tbody-override {
  word-wrap: break-word;
  word-break: break-all;
}
.th-override {
  font-size: 16px;
  color: #858585;
  font-weight: lighter;
  text-align: left;
  background: rgba(0, 148, 251, 0.05);
  height: 40px;
  border-top: 1px solid rgba(0, 148, 251, 0.1);
  padding: 0 19px;
  white-space: nowrap;
  vertical-align: middle;
}
.td-override {
  font-size: 15px;
  vertical-align: middle;
  color: #4a4a4a;
  padding: 0 19px;
  line-height: 40px;
  position: relative;
}
.overflow-col {
  text-overflow: ellipsis;
  max-width: 0;
  overflow: hidden;
  white-space: nowrap;
}
</style>


<template>
<div class="wrap" v-if="showPastLinks">
  <table class="table table-override">
    <thead>
      <tr>
        <th class="filename-list th-override">File Name</th>
        <th class="copyurl-list th-override">Copy Url</th>
      </tr>
    </thead>
    <tbody class="tbody-override">
      <tr v-for="file in pastLinks" :key="file.link">
        <td class="overflow-col td-override">{{file.baseName}}</td>
        <td class="td-override">{{file.link}}</td>
      </tr>
    </tbody>
  </table>
</div>
</template>

<script>
import { mapState } from 'vuex';

export default {
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
  border-collapse: collapse;
  font-family: Segoe UI, SF Pro Text, sans-serif;
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
}
.td-override {
  font-size: 15px;
  vertical-align: top;
  color: #4a4a4a;
  padding: 17px 19px 0;
  line-height: 23px;
  position: relative;
}
.overflow-col {
  text-overflow: ellipsis;
  max-width: 0;
  overflow: hidden;
  white-space: nowrap;
}
</style>


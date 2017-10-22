import Vuex from 'vuex';

const createStore = () =>
  new Vuex.Store({
    state: {
      current: {},
      pastLinks: [],
    },
    mutations: {
      saveSignedUrl(state, { signedUrl }) {
        state.current.signedUrl = signedUrl;
      },
      saveLink(state, { link }) {
        state.pastLinks.push(link);
      },
    },
    actions: {
      async uploadFileToSignedUrl(context, { file, signedUrl, newFileName }) {
        // not sure why but wasn't working with axios -_-
        await fetch(signedUrl, { method: 'PUT', body: file });
        context.commit('saveLink', { link: `${process.env.OUTPUT_URL_PREFIX}/${newFileName}` });
      },
    },
  });

export default createStore;

import Vuex from 'vuex';
import axios from '~/plugins/axios';

const createStore = () =>
  new Vuex.Store({
    state: {
      current: { isUploading: false, percentCompleted: 0 },
      pastLinks: [],
    },
    mutations: {
      saveSignedUrl(state, { signedUrl }) {
        state.current.signedUrl = signedUrl;
      },
      saveLink(state, { link }) {
        state.pastLinks.push(link);
      },
      updateProgress(state, { percentCompleted }) {
        state.current.percentCompleted = percentCompleted;
      },
      setIsUploading(state, { isUploading }) {
        state.current.isUploading = isUploading;
      },
    },
    actions: {
      async uploadFileToSignedUrl(context, { file, signedUrl, newFileName }) {
        const options = {
          headers: { 'Content-Type': file.type },
          onUploadProgress: ({ loaded, total }) => {
            const percentCompleted = Math.round(loaded * 100 / total);
            context.commit('updateProgress', { percentCompleted });
          },
        };
        await axios.put(signedUrl, file, options);
        context.commit('setIsUploading', { isUploading: false });
        context.commit('saveLink', { link: `${process.env.OUTPUT_URL_PREFIX}/${newFileName}` });
      },
    },
  });

export default createStore;

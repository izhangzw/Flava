// {
//   title: '',
//   contents: '',
//   coverType: 'text',
//   created: +new Date(),
//   updated: +new Date(),
//   iconTags: [],
//   textTags: [],
//   latitude: 0,
//   longitude: 0,
//   images: []
// }
export default {
  namespaced: true,
  actions: {
    fetchRecords(context) {
      // TODO fetch mock
      context.commit('fetchRecords', [{
        id: 0,
        title: 'Greenmonster Inc.',
        contents: '#666 Gsan-dong, Greenmonster',
        coverType: 'text'
      }, {
        id: 1,
        title: 'Greenmonster Inc.',
        contents: '#666 Gsan-dong, Greenmonster',
        coverType: 'place'
      }, {
        id: 2,
        title: 'Greenmonster Inc.',
        contents: '#666 Gsan-dong, Greenmonster',
        coverType: 'photo',
        images: [1]
      }, {
        id: 3,
        title: 'Jay Chou.',
        contents: 'Still Fantasy....',
        coverType: 'music'
      }])
    }
  },
  mutations: {
    fetchRecords(state, records) {
      state.memories = records
    }
  },
  state: {
    memories: []
  },
  getters: {}
}

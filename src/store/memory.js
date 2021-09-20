export default {
  namespaced: true,
  state: {
    memories: [],
    memory: {
      id: '0',
      title: '',
      contents: '',
      coverType: 'text',
      created: +new Date(),
      updated: +new Date(),
      iconTags: [],
      textTags: [],
      latitude: 0,
      longitude: 0,
      images: []
    }
  },
  actions: {
    saveRecord(ctx, data) {
      const {state} = ctx
      ctx.commit('saveRecord', Object.assign(state.memory, data))
    },
    // deleteRecord(ctx, id) {},
    queryRecords(ctx, filter = {}) {
      // TODO fetch mock
      ctx.commit('queryRecords', [{
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
    },
    findRecord(ctx, id) {
      ctx.commit('findRecord', id)
    },
  },
  mutations: {
    saveRecord(state, data) {
      state.memories.push(data)
    },
    // deleteRecord(state, id) {},
    queryRecords(state, datas) {
      state.memories = datas
    },
    findRecord(state, id) {
      state.memory = state.memories.filter(data => data.id === id)[0]
    }
  },
  getters: {
  }
}

import fetch from '@/services/fetch'

class Memory {
  id = +new Date()
  title = 'Default Tile'
  contents = 'Default contents'
  coverType = 'text'
  created = +new Date()
  updated = +new Date()
  iconTags = []
  textTags= []
  latitude= 0
  longitude= 0
  images= []
  constructor(data) {
    Object.assign(this, data)
  }
}
export default {
  namespaced: true,
  state: {
    memories: [{
      id: 0,
      title: 'Greenmonster Inc.',
      contents: '#666 Gsan-dong, Greenmonster #666 Gsan-dong, Greenmonster',
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
    }],
    memoryId: ''
  },
  actions: {
    async saveRecord(ctx, data) {
      // eslint-disable-next-line no-new
      ctx.commit('SAVE_RECORD', new Memory(data))
    },
    deleteRecord(ctx, id) {
      const index = ctx.memories.findIndex(v => v.id === id)
      if (index !== -1) {
        ctx.commit('DELETE_RECORD', index)
      } else {
        alert(`没找到${id}的数据`)
      }
    },
    async queryRecords(ctx, filter = {}) {
      const memories = await fetch.get('memories')
      ctx.commit('QUERY_RECORDS', memories)
    },
    findRecord(ctx, id) {
      ctx.commit('FIND_RECORD', id)
    },
  },
  mutations: {
    SAVE_RECORD(state, data) {
      console.log(data)
      state.memories.unshift(data)
    },
    DELETE_RECORD(state, index) {
      state.memories.splice(index, 1)
    },
    QUERY_RECORDS(state, datas) {
      state.memories = datas
    },
    FIND_RECORD(state, id) {
      state.memoryId = id
    }
  },
  getters: {
    memory(state) {
      const index = state.memories.findIndex(data => data.id === state.memoryId)
      if (index !== -1) {
        return state.memories[index]
      } else {
        // call server
      }
    }
  }
}

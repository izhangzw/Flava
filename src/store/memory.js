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
      id: '100',
      title: 'Greenmonster Inc.',
      contents: '#666 Gsan-dong, Greenmonster #666 Gsan-dong, Greenmonster',
      coverType: 'text'
    }, {
      id: '101',
      title: 'Greenmonster Inc.',
      contents: '#666 Gsan-dong, Greenmonster',
      coverType: 'place'
    }, {
      id: '102',
      title: 'Greenmonster Inc.',
      contents: '#666 Gsan-dong, Greenmonster',
      coverType: 'photo',
      images: [1]
    }, {
      id: '103',
      title: 'Jay Chou.',
      contents: 'Still Fantasy....',
      coverType: 'music'
    }],
    memory: null
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
      ctx.commit('FIND_RECORD', ctx.state.memories.filter(memory => memory.id === id)[0])
    },
  },
  mutations: {
    SAVE_RECORD(state, data) {
      state.memories.unshift(data)
    },
    DELETE_RECORD(state, index) {
      state.memories.splice(index, 1)
    },
    QUERY_RECORDS(state, datas) {
      state.memories = datas
    },
    FIND_RECORD(state, memory) {
      state.memory = memory
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

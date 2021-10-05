import { Random } from 'mockjs'
import {TYPES} from '@/constants/memory'

const memories = {
  'data|5': [{
    id: '@guid',
    title: Random.title(1),
    'contents': Random.sentence(2),
    'coverType|1': TYPES,
    created: Random.datetime('yyyy-MM-dd HH:mm:ss'),
    updated: Random.datetime('yyyy-MM-dd HH:mm:ss'),
    iconTags: [],
    textTags: [],
    images: [],
    latitude: 0,
    longitude: 0,
  }]
}
export default {
  'get|memories': memories
}

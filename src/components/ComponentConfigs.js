import {CardAttr} from './card/index'
import {GridLayoutAttr} from './layout/grid/index'

export const ComponentConfigs = [
  {
    type: 'card',
    title: '基本卡片',
    components: [
      CardAttr
    ]
  },
  {
    type: 'layout',
    title: '基本布局',
    components: [
      GridLayoutAttr
    ]
  },
  {
    type: 'chart',
    title: '基本图表',
    components: []
  }
]

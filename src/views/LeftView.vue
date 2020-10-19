<template>
  <el-collapse>
    <el-collapse-item v-for="(c,i) in ComponentConfigs" :title="c.title" :name="i" :key="i">
      <draggable v-model="c.components"
        :options="{group:{name:'people',pull:'clone', animation:150}}"
        @end="handleEnd"
        >
        <div v-for="(d,j) in c.components" :key="j">
          {{d.label}}
        </div>
      </draggable>
    </el-collapse-item>
  </el-collapse>
</template>

<script>
  import {ComponentConfigs} from '../components/ComponentConfigs'
  import draggable from 'vuedraggable'
  export default {
    name: "LeftView",
    components: {draggable},
    data () {
      return {
        ComponentConfigs,
      }
    },
    methods:{
      handleEnd() {
        console.log('======================')
      }
    }
  }
</script>

<style scoped>

</style>

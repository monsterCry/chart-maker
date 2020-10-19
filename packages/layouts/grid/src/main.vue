<template>
  <el-row class="grid-layout-content">
    <template v-for="(l,i) in layout.colums">
      <draggable
        :options="{group:{name:'people'}}"
        v-model="l.components"
      >
        <el-col :span="l.span" :key="i" class="col-content">
          <template v-for="(c,j) in l.components">
            <grid-layout :layout="c" v-if="c.name=='gridlayout'" :key="j"></grid-layout>
            <card :card="c" v-if="c.name=='card'" :key="j"></card>
          </template>
        </el-col>
      </draggable>
    </template>
  </el-row>
</template>

<script>
  import Card from "../../card/Card";
  import draggable from 'vuedraggable'
  export default {
    name: "GridLayout",
    props: ['layout'],
    components: {draggable, Card}
  }
</script>

<style scoped>
  .grid-layout-content {
    min-height: 230px;
    margin-top: 5px;
    background: rosybrown;
  }
  .col-content {
    min-height: 230px;
  }
</style>

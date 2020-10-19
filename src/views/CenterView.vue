<template>
  <draggable
    :options="{group:{name:'people'}}"
    v-model="dragList.items"
  >
    <div class="component-content" >
        <div v-if="dragList.items.length < 1">拖入组件</div>
        <div v-else>
          <template v-for="(c,i) in dragList.items">
            <grid-layout :layout="c" v-if="c.name=='gridlayout'" :key="i"></grid-layout>
            <card :card="c" v-if="c.name=='card'" :key="i"></card>
          </template>
        </div>
    </div>
  </draggable>
</template>

<script>
    import GridLayout from "../components/layout/grid/GridLayout";
    import Card from "../components/card/Card";
    import draggable from 'vuedraggable'
    export default {
      name: "CenterView",
      props: ['dragList'],
      components: {draggable, GridLayout,Card}
    }
</script>

<style scoped>
.component-content {
  width: 100%;
  min-height: 260px;
  background: antiquewhite;
}
</style>

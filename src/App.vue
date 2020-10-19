<template>
  <div id="app">
    <el-container>
      <el-header>
        这里头部
      </el-header>
      <el-container>
        <el-aside>
          <left-view></left-view>
        </el-aside>
        <el-container>
          <el-main>
            <center-view :dragList="dragList"></center-view>
          </el-main>
        </el-container>
        <el-aside>
          <right-view></right-view>
        </el-aside>
      </el-container>
    </el-container>
  </div>
</template>

<script>
  import LeftView from "./views/LeftView";
  import RightView from "./views/RightView";
  import CenterView from "./views/CenterView";
  export default {
    name: 'app',
    components: {LeftView, RightView, CenterView},
    data () {
      return {
        dragList: {
          items: []
        }
      }
    }
  }
</script>

<style>
  html {
    width: 100%;
    height: 100%;
    margin: 0px;
  }
  body {
    width: 100%;
    height: 100%;
    margin: 0px;
  }
</style>

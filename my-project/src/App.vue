<template>
  <div id="app">
    <el-container style="height: 900px;">
      <el-header>
        <img src="./resources/logo.png" class="image">
        <span>XXXX管理系统</span>
      </el-header>
      <el-container>
        <el-aside width="200px">
          <el-row class="tac">
            <el-col :span="24">
              <el-menu :default-active="$route.path" c default-active="2"
                       class="el-menu-vertical-demo"
                       background-color="#001529"
                       text-color="#fff"
                       active-text-color="#ffd04b"
                       router>
                <el-menu-item index="/main">main</el-menu-item>
                <el-menu-item index="/about">about</el-menu-item>
                <el-menu-item index="/other">other</el-menu-item>
              </el-menu>
            </el-col>
          </el-row>
        </el-aside>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>

  </div>
</template>

<script lang="ts">
  import Vue from 'vue'
  import Component from 'vue-class-component'

  @Component({})
  export default class App extends Vue {
  }
</script>

<style>
  .el-header, .el-footer {
    background-color: #fff;
    border: 1px solid #ccc;
    color: #333;
    padding-left: 30px;
    line-height: 60px;
  }

  .el-header span {
    font-family: 'Microsoft YaHei';
    font-weight: bold;
    font-size: 20px;
  }

  .el-header img {
    width: 20px;
  }

  .el-aside {
    background-color: #001529;
    color: #333;
    text-align: center;
    line-height: 200px;
  }

  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 160px;
  }

  body > .el-container {
    margin-bottom: 40px;
  }

  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
  }

</style>

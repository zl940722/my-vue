<template>
  <el-table
    :data="data"
    height="100%"
    border
    style="width: 100%">
    <el-table-column
      prop="date"
      label="日期"
      width="180">
    </el-table-column>
    <el-table-column
      prop="name"
      label="姓名"
      width="180">
    </el-table-column>
    <el-table-column
      prop="address"
      label="地址">
    </el-table-column>
  </el-table>
</template>

<style>
  .el-main{
    line-height: 0;
  }
</style>


<script lang="ts">
  import Vue from 'vue'
  import Component from 'vue-class-component'
  import HomeApi from '../../store/homeApi' // api统一放在store

  const api = new HomeApi();

  @Component({})
  export default class Home extends Vue {
      data = api.data().tableData3
  }
</script>


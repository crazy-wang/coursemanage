<template>
  <div class="dwtytksq">
    <div class="selected-module">
      <el-card>
        <i class="el-icon-search"></i>
        <div class="select-item">
          <span>姓名：</span>
          <el-input v-model="name" placeholder="请输入内容" clearable></el-input>
        </div>
        <div class="select-item">
          <span>日期：</span>
          <el-date-picker
            v-model="startData"
            type="date"
            placeholder="选择开始日期">
          </el-date-picker>
          <el-date-picker
            v-model="endData"
            type="date"
            placeholder="选择结束日期">
          </el-date-picker>
        </div>
        <div class="btn-group">
          <el-button type="primary">查询记录</el-button>
          <el-button type="danger">清除条件</el-button>
        </div>
      </el-card>
    </div>
    <div class="table-module">
      <el-card>
        <!--<div class="btn-group">-->
          <!--<el-button type="primary" @click="addRecord">添加记录</el-button>-->
          <!--<el-button type="danger" @click="deleteRecord">删除记录</el-button>-->
        <!--</div>-->
        <el-table
          :data="tableData"
          border
          style="width: 100%">
          <el-table-column
            type="selection"
            width="55">
          </el-table-column>
          <el-table-column
            label="姓名"
            type="index"
            width="50">
          </el-table-column>
          <el-table-column
            prop="date"
            label="所在项目"
            width="180">
          </el-table-column>
          <el-table-column
            prop="name"
            label="调课时间"
            width="180">
          </el-table-column>
          <el-table-column
            prop="name"
            label="调课节次"
            width="180">
          </el-table-column>
          <el-table-column
            prop="address"
            label="调课班级">
          </el-table-column>
          <el-table-column
            prop="address"
            label="换课老师姓名">
          </el-table-column>
          <el-table-column
            prop="address"
            label="换课科目">
          </el-table-column>
          <el-table-column
            prop="address"
            label="换课时间">
          </el-table-column>
          <el-table-column
            prop="address"
            label="换课节次">
          </el-table-column>
          <el-table-column
            prop="address"
            label="换课方式">
          </el-table-column>
          <el-table-column
            prop="address"
            label="状态">
          </el-table-column>
          <el-table-column
            fixed="right"
            label="操作"
            width="120">
            <template slot-scope="scope">
              <el-button
                @click.native.prevent="handleClick(scope.$index, tableData)"
                type="text"
                size="small">
                待定
              </el-button>
            </template>
          </el-table-column>
        </el-table>
      </el-card>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .dwtytksq {
    .selected-module {
      .el-icon-search {
        font-size: 34px;
      }
      .select-item {
        display: inline-block;
        margin-right: 20px;
        .el-input {
          display: inline-block;
          width: 200px;
        }
      }
      .btn-group {
        float: right;
      }
    }
    .table-module {
      .btn-group {
        margin-bottom: 10px;
      }
    }
  }
</style>

<script>
  export default {
    data() {
      return {
        name: '',
        tableData: [
          {
            date: '2016-05-02',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1518 弄'
          }, {
            date: '2016-05-04',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1517 弄'
          }, {
            date: '2016-05-01',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1519 弄'
          }, {
            date: '2016-05-03',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1516 弄'
          }],
        startData: '',
        endData: '',
      }
    },
    methods: {
      handleClick() {

      },
      addRecord() {
        this.dialogAddVisible = true
      },
      deleteRecord() {

      }
    }
  }
</script>

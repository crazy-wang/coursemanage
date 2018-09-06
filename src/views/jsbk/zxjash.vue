<template>
  <div class="zxjash">
    <div class="select-module">
      <el-card>
        <i class="el-icon-search"></i>
        <div class="select-item">
          <span>学期:</span>
          <el-select v-model="value1" placeholder="请选择学期">
            <el-option
              v-for="item in optionsValue1"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
        </div>
        <div class="select-item">
          <span>课程名称:</span>
          <el-input v-model="value2" placeholder="请输入课程名称"></el-input>
        </div>
        <div class="select-item">
          <span>教室状态:</span>
          <el-select v-model="value3" placeholder="请选择">
            <el-option
              v-for="item in optionsValue3"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
        </div>
        <div class="select-item">
          <span>教师名称:</span>
          <el-input v-model="value4" placeholder="请输入"></el-input>
        </div>
        <div class="btn-group">
          <el-button type="primary">查 询</el-button>
          <el-button type="danger">清除条件</el-button>
        </div>
      </el-card>
    </div>
    <div class="table-module">
      <el-card>
        <el-table
          :data="tableData"
          border
          style="width: 100%">
          <el-table-column
            label="学期"
            type="index"
            width="50">
          </el-table-column>
          <el-table-column
            prop="date"
            label="课程"
            width="180">
          </el-table-column>
          <el-table-column
            prop="name"
            label="教室名称"
            width="180">
          </el-table-column>
          <el-table-column
            prop="name"
            label="教师名称"
            width="180">
          </el-table-column>
          <el-table-column
            prop="address"
            label="教室状态">
          </el-table-column>
          <el-table-column
            prop="address"
            label="评价">
          </el-table-column>
          <el-table-column
            prop="address"
            label="操作">
          </el-table-column>
        </el-table>
      </el-card>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .zxjash {
    .select-module {
      .el-icon-search {
        font-size: 34px;
      }
      .select-item {
        display: inline-block;
        margin-right: 20px;
        .el-select, .el-input {
          display: inline-block;
          width: 150px;
        }
      }
      .btn-group {
        float: right;
      }
    }
    .table-module {
      margin-top: 20px;
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
        value1: '',
        value2: '',
        value3: '',
        value4: '',
        optionsValue1: [
          {
            value: '1',
            label: '1'
          }
        ],
        optionsValue3: [
          {
            value: '1',
            label: '1'
          }
        ],
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
      }
    },
    methods: {
      exportReport() {},
    },
    mounted() {

    }
  }
</script>

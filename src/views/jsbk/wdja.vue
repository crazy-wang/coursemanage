<template>
  <div class="wdja">
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
          <span>课程:</span>
          <el-select v-model="value2" placeholder="请选择课程">
            <el-option
              v-for="item in optionsValue2"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
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
          <span>教室名称:</span>
          <el-select v-model="value4" placeholder="请选择">
            <el-option
              v-for="item in optionsValue4"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
        </div>
        <div class="btn-group">
          <el-button type="primary">查 询</el-button>
          <el-button type="danger">清除条件</el-button>
        </div>
      </el-card>
    </div>
    <div class="table-module">
      <el-card>
        <div class="btn-group">
          <el-button type="primary" @click="addApply">新增申请</el-button>
          <el-button type="success" @click="exportReport">导出报表</el-button>
        </div>
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
            label="专业"
            width="180">
          </el-table-column>
          <el-table-column
            prop="name"
            label="年级"
            width="180">
          </el-table-column>
          <el-table-column
            prop="name"
            label="班级"
            width="180">
          </el-table-column>
          <el-table-column
            prop="address"
            label="课程">
          </el-table-column>
          <el-table-column
            prop="address"
            label="课时">
          </el-table-column>
        </el-table>
      </el-card>
    </div>
    <div class="dialog-module">
      <el-dialog title="收货地址" :visible.sync="dialogApplyVisible">
        <div class="content">
        </div>
        <div slot="footer" class="dialog-footer">
          <el-button @click="dialogApplyVisible = false">取 消</el-button>
          <el-button type="primary" @click="dialogApplyVisible = false">确 定</el-button>
        </div>
      </el-dialog>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .wdja {
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
    .dialog-module {
      .content {
        .el-icon-search {
          font-size: 34px;
          margin-right: 20px;
        }
        .content-item {
          display: inline-block;
          margin-right: 20px;
          .el-select {
            display: inline-block;
            width: 200px;
          }
        }
      }
    }
  }
</style>

<script>
  import {getToken} from "../../utils/auth";

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
        optionsValue2: [
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
        optionsValue4: [
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
        dialogApplyVisible: false,
        // 分页
        currentPageValue: 1,
        showPageNum: 10,
        totalNum: null,
      }
    },
    methods: {
      addApply() {
        this.dialogApplyVisible = true
      },
      exportReport() {},
      async loadTableData() {
        let params = {
          token: getToken(),
          index: this.currentPageValue,
          pagemax: this.showPageNum,
          courseName: this.value2,
          year: this.value1,
          status: this.value3,
          caseName: this.value4
        }
        let res = await this.axios.get('http://47.93.50.57:800/v1/jsbk/case/getdata', {params})
        console.log('返回的列表')
        console.log(res)
        let resData = res.data
        this.totalNum = resData.count
        this.tableData = resData.data
      }
    },
    mounted() {
      this.loadTableData()
    }
  }
</script>

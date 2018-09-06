<template>
  <div class="jyzwh">
    <div class="select-module">
      <el-card>
        <i class="el-icon-search"></i>
        <div class="select-item">
          <span>教研组名称:</span>
          <el-input v-model="value1" placeholder="请输入内容"></el-input>
        </div>
        <div class="btn-group">
          <el-button type="primary">查 询</el-button>
        </div>
      </el-card>
    </div>
    <div class="table-module">
      <el-card>
        <div class="btn-group">
          <el-button type="primary" @click="addGroup">新增教研组</el-button>
          <el-button type="success" @click="exportReport">导 出</el-button>
        </div>
        <el-table
          :data="tableData"
          border
          style="width: 100%">
          <el-table-column
            label="教研组名称"
            prop="Name"
            width="50">
          </el-table-column>
          <el-table-column
            prop="GroupLeader"
            label="组长"
            width="180">
          </el-table-column>
          <el-table-column
            prop="GroupMember"
            label="成员"
            width="180">
          </el-table-column>
          <el-table-column
            label="操作"
            width="120">
            <template slot-scope="scope">
              <el-button
                @click.native.prevent="editClick(scope.$index, tableData)"
                type="text"
                size="small">
                编辑
              </el-button>
              <el-button
                @click.native.prevent="deleteClick(scope.$index, tableData)"
                type="text"
                size="small">
                删除
              </el-button>
            </template>
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
  .jyzwh {
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
        totalNum: null
      }
    },
    methods: {
      addGroup() {
        this.dialogApplyVisible = true
      },
      exportReport() {},
      editClick() {},
      deleteClick() {},
      async loadTableData() {
        let params = {
          token: getToken(),
          index: this.currentPageValue,
          pagemax: this.showPageNum,
          name: this.value1
        }
        let res = await this.axios.get('http://47.93.50.57:800/v1/jsbk/group/getdata', {params})
        console.log('返回的列表')
        console.log(res)
        let resData = res.data
        this.totalNum = resData.count
        this.tableData = resData.data
      }
    },
    created() {
      this.loadTableData()
    }
  }
</script>

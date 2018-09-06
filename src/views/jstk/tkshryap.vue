<template>
  <div class="tkshryap">
    <div class="selected-module">
      <el-card>
        <i class="el-icon-search"></i>
        <div class="select-item">
          <span>流程名称：</span>
          <el-input v-model="processName" placeholder="请输入内容" clearable></el-input>
        </div>
        <div class="btn-group">
          <el-button type="primary">查询记录</el-button>
          <el-button type="danger">清除条件</el-button>
        </div>
      </el-card>
    </div>
    <div class="table-module">
      <el-card>
        <div class="btn-group">
          <el-button type="primary" @click="addRecord">添加记录</el-button>
          <el-button type="danger" @click="deleteRecord">删除记录</el-button>
        </div>
        <el-table
          :data="tableData"
          border
          style="width: 100%">
          <el-table-column
            label="显示顺序"
            type="index"
            width="50">
          </el-table-column>
          <el-table-column
            prop="date"
            label="名称"
            width="180">
          </el-table-column>
          <el-table-column
            prop="name"
            label="审核最小天数"
            width="180">
          </el-table-column>
          <el-table-column
            prop="name"
            label="人员安排"
            width="180">
          </el-table-column>
          <el-table-column
            prop="address"
            label="流程说明">
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
                配置操作人员
              </el-button>
            </template>
          </el-table-column>
        </el-table>
      </el-card>
    </div>
    <div class="dialog-module">
      <!--以前的弹框可以用-->
      <el-dialog title="审核人员设置" :visible.sync="dialogEquipVisible" custom-class="equip-dialog">
        <div class="content">
          <el-transfer v-model="transferValue" :data="transferData" :titles="['部门内人员列表', '已选人员列表']"></el-transfer>
        </div>
        <div slot="footer" class="dialog-footer">
          <el-button @click="dialogEquipVisible = false">取 消</el-button>
          <el-button type="primary" @click="dialogEquipVisible = false">确 定</el-button>
        </div>
      </el-dialog>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .tkshryap {
    .selected-module {
      .el-icon-search {
        font-size: 34px;
      }
      .select-item {
        display: inline-block;
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
    .dialog-module {

    }
  }
</style>

<script>
  export default {
    data() {
      return {
        processName: '',
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
        dialogEquipVisible: false,
        transferValue: [],
        transferData: [
          {
            key: '张哲',
            label: '张哲'
          },
          {
            key: '小眼',
            label: '小眼'
          },
          {
            key: '某某某',
            label: '某某某'
          }
        ]
      }
    },
    methods: {
      handleClick() {
        this.dialogEquipVisible = true
      }
    }
  }
</script>

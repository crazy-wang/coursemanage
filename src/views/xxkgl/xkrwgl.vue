<template>
  <div class="xkrwgl">
    <div class="content">
      <el-card>
        <div class="btn-group">
          <el-button type="primary" @click="addTask">增加任务</el-button>
          <el-button type="danger">删除</el-button>
        </div>
        <el-table
          :data="tableData"
          border
          style="width: 100%">
          <el-table-column
            type="selection"
            width="55">
          </el-table-column>
          <el-table-column
            prop="date"
            label="任务编号"
            width="180">
          </el-table-column>
          <el-table-column
            prop="name"
            label="任务名称"
            width="180">
          </el-table-column>
          <el-table-column
            prop="name"
            label="所属学期"
            width="180">
          </el-table-column>
          <el-table-column
            prop="name"
            label="任务开始日期"
            width="180">
          </el-table-column>
          <el-table-column
            prop="name"
            label="任务结束日期"
            width="180">
          </el-table-column>
          <el-table-column
            prop="name"
            label="是否对教师启用"
            width="180">
          </el-table-column>
          <el-table-column
            prop="name"
            label="是否对学生启用"
            width="180">
          </el-table-column>
          <el-table-column
            label="操作">
            <template slot-scope="scope">
              <el-button
                @click.native.prevent="deleteRow(scope.$index, tableData4)"
                type="text"
                size="small">
                修改
              </el-button>
            </template>
          </el-table-column>
        </el-table>
      </el-card>
    </div>
    <!--增加任务-->
    <el-dialog title="提示" :visible.sync="dialogAddVisible">
      <el-row>
        <el-col :span="2">1</el-col>
        <el-col :span="2">2</el-col>
        <el-col :span="2">3</el-col>
        <el-col :span="2">4</el-col>
        <el-col :span="2">5</el-col>
        <el-col :span="2">6</el-col>
        <el-col :span="2">7</el-col>
        <el-col :span="2">8</el-col>
        <el-col :span="2">9</el-col>
        <el-col :span="2">10</el-col>
        <el-col :span="2">11</el-col>
        <el-col :span="2">12</el-col>
      </el-row>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogAddVisible = false">返 回</el-button>
        <el-button type="primary" @click="dialogAddVisible = false">保 存</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<style lang="scss" scoped>
  .xkrwgl {
    .content {
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
        dialogAddVisible: false
      }
    },
    methods: {
      deleteRow(index, rows) {
        rows.splice(index, 1);
      },
      addTask() {
        this.dialogAddVisible = true
      }
    }
  }
</script>

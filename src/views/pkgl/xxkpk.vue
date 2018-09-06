<template>
  <div class="course2">
    <el-dialog
      title="提示"
      :visible.sync="dialogVisible"
      width="30%">
      <p>自动排课将清除手动排课中所有课的排课结果！</p>
      <p>特别当未选择班级时，更是将大批量的更改系统数据，请谨慎操作！</p>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
      </span>
    </el-dialog>
    <div class="select-module">
      <el-card>
        <i class="el-icon-search" style="font-size: 30px; font-weight: bold; color: #409eff; margin: 0 20px 0 0; position: relative; top: 5px;"></i>
        <div class="select-item">
          <span>学期:</span>
          <el-select v-model="value1" placeholder="请选择">
            <el-option
              v-for="item in optionsValue1"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
        </div>
        <div class="select-item">
          <span>年级:</span>
          <el-select v-model="value2" placeholder="请选择">
            <el-option
              v-for="item in optionsValue2"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
        </div>
        <div class="select-item">
          <span>教学班级:</span>
          <el-select v-model="value3" placeholder="请选择">
            <el-option
              v-for="item in optionsValue3"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
        </div>
      </el-card>
    </div>
    <div class="content-module">
      <el-card>
        <!--筛选条件-->
        <div class="but-group-module">
          <el-button type="warning" @click="autoPK">自动排课</el-button>
          <el-button type="primary" @click="handlePK">手动排课</el-button>
          <el-button type="danger">清除条件</el-button>
        </div>
        <div class="content-table" v-show="showTable">
          <el-row style="text-align: center">
            <el-col :span="3">节数</el-col>
            <el-col :span="3">周一</el-col>
            <el-col :span="3">周二</el-col>
            <el-col :span="3">周三</el-col>
            <el-col :span="3">周四</el-col>
            <el-col :span="3">周五</el-col>
            <el-col :span="3">周六</el-col>
            <el-col :span="3">周日</el-col>
          </el-row>
          <row-cell></row-cell>
        </div>
      </el-card>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .course2 {
    padding: 20px 15px;
    .select-module {
      .select-item {
        display: inline-block;
        margin-right: 30px;
      }
    }
    .content-module {
      margin-top: 20px;
      background-color: #090;
      .el-card {
        /*background-color: #f00;*/
      }
      .el-col {
        border: 1px solid #ccc;
        height: 30px;
        padding: 5px 0;
      }
      .but-group-module {
        margin-bottom: 10px;
      }
    }
  }
</style>

<script>
  import rowCell from '../../components/tableCell/rowCell'
  export default {
    data() {
      return {
        value1: '',
        value2: '',
        value3: '',
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
        dialogVisible: false,
        showTable: false
      }
    },
    components: {
      rowCell
    },
    methods: {
      autoPK() {
        this.dialogVisible = true
      },
      handlePK() {
        this.showTable = !this.showTable
      }
    }
  }
</script>

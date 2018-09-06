<template>
  <div class="xxkkbsz">
    <div class="table-div">
      <el-table
        :data="tableData"
        border
        style="width: 100%">
        <el-table-column
          prop="ClassId"
          label="编号"
          width="100">
        </el-table-column>
        <el-table-column
          prop="Name"
          label="名称"
          width="100">
        </el-table-column>
        <el-table-column
          prop="StartTime"
          label="开始时间"
          width="100">
        </el-table-column>
        <el-table-column
          prop="EndTime"
          label="结束时间"
          width="100">
        </el-table-column>
        <el-table-column
          prop="Mon"
          label="周一"
          width="100">
        </el-table-column>
        <el-table-column
          prop="Tue"
          label="周二"
          width="100">
        </el-table-column>
        <el-table-column
          prop="Wed"
          label="周三"
          width="100">
        </el-table-column>
        <el-table-column
          prop="Thu"
          label="周四"
          width="100">
        </el-table-column>
        <el-table-column
          prop="Fri"
          label="周五"
          width="100">
        </el-table-column>
        <el-table-column
          prop="Sat"
          label="周六"
          width="100">
        </el-table-column>
        <el-table-column
          prop="Sun"
          label="周日"
          width="100">
        </el-table-column>
        <el-table-column
          label="操作"
          width="100">
          <template slot-scope="scope">
            <el-button @click="handleClick(scope.row)" type="text" size="small">修改</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <!--增加提示-->
    <el-dialog title="选修课表编辑" :visible.sync="dialogEditVisible" width="50%" top="5vh" custom-class="edit-course-dialog">
      <div class="top">
        <div>
          <el-button type="primary" @click="saveEditData">保存提交</el-button>
          <el-button type="primary" @click="resetDialogData">重置</el-button>
          <el-button type="primary">返回</el-button>
        </div>
      </div>
      <div class="bottom">
        <div class="item">
          <span>名称：</span>
          <el-input v-model="currentName"></el-input>
          <span class="red-tips">*</span>
        </div>
        <div class="item">
          <span>开始时间：</span>
          <el-input v-model="startTime"></el-input>
          <span class="red-tips">*</span>
        </div>
        <div class="item">
          <span>结束时间：</span>
          <el-input v-model="endTime"></el-input>
          <span class="red-tips">*</span>
        </div>
        <div class="item">
          <span>周一是否启用</span>
          <el-select v-model="monValue" placeholder="请选择">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
          <span class="red-tips">*</span>
        </div>
        <div class="item">
          <span>周二是否启用</span>
          <el-select v-model="tueValue" placeholder="请选择">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
          <span class="red-tips">*</span>
        </div>
        <div class="item">
          <span>周三是否启用</span>
          <el-select v-model="wedValue" placeholder="请选择">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
          <span class="red-tips">*</span>
        </div>
        <div class="item">
          <span>周四是否启用</span>
          <el-select v-model="thuValue" placeholder="请选择">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
          <span class="red-tips">*</span>
        </div>
        <div class="item">
          <span>周五是否启用</span>
          <el-select v-model="friValue" placeholder="请选择">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
          <span class="red-tips">*</span>
        </div>
        <div class="item">
          <span>周六是否启用</span>
          <el-select v-model="satValue" placeholder="请选择">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
          <span class="red-tips">*</span>
        </div>
        <div class="item">
          <span>周日是否启用</span>
          <el-select v-model="sunValue" placeholder="请选择">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
          <span class="red-tips">*</span>
        </div>
      </div>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogAddVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogAddVisible = false">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<style lang="scss" scoped>
.xxkkbsz {
  .table-div {
    text-align: center;
    /*padding: 10px;*/
    border: 1px solid #ccc;
  }
  .edit-course-dialog {
    .top {
      text-align: right;
      .el-button {
        width: 100px;
      }
    }
    .bottom {
      .el-input {
        width: 200px;
        display: inline-block;
      }
      .el-select {
        width: 200px;
      }
      .item {
        margin-bottom: 10px;
        span {
          display: inline-block;
          width: 100px;
        }
      }
    }
    .el-dialog__body {
      padding: 15px 20px;
    }
  }
  .red-tips {
    color: #f33;
  }
}
</style>

<script>
import {getToken} from "../../utils/auth";

export default {
    data() {
      return {
        tableData: [],
        dialogEditVisible: false,

        currentName: '',
        startTime: '',
        endTime: '',
        monValue: '',
        tueValue: '',
        wedValue: '',
        thuValue: '',
        friValue: '',
        satValue: '',
        sunValue: '',
        options: [
          {
            value: '启用',
            label: '启用'
          },
          {
            value: '未启用',
            label: '未启用'
          }
        ]
      }
    },
    methods: {
      handleClick(params) {
        console.log(params)
        this.dialogEditVisible = true
      },
      async loadTableData() {
        let params = {
          token: getToken(),
          style: 1
        }
        let res = await this.axios.get('v1/sksj/getdata', {params: params})
        let resData = res.data.data
        // console.log('哈哈')
        // console.log(resData)
        this.tableData = resData
        // console.log(this.tableData)
      },
      async saveEditData () {
        let params = {
          token: getToken(),
          id: 1, // 编号
          style: 1,
          name: this.currentName,
          startTime: this.startTime,
          endTime: this.endTime,
          mon: this.monValue,
          tue: this.tueValue,
          wed: this.wedValue,
          thu: this.thuValue,
          fri: this.friValue,
          sat: this.satValue,
          sun: this.sunValue,
        }
        let res = await this.axios.post('v1/sksj/edit_action', params)
        let resData = res.data.code
        if (resData === 200) {
          this.$message({
            message: '修改成功',
            type: 'success',
            duration: 1000
          });
          this.dialogEditVisible = false
        } else {
          alert('返回code不是200')
        }
      },
      resetDialogData() {
        this.currentName = ''
        this.startTime = ''
        this.endTime = ''
        this.monValue = ''
        this.tueValue = ''
        this.wedValue = ''
        this.thuValue = ''
        this.friValue = ''
        this.satValue = ''
        this.sunValue = ''
      }
    },
    created() {
      this.loadTableData()
    }
  }
</script>

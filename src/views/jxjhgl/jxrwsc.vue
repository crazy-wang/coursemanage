<template>
  <div class="jxrwsc">
    <div class="select-module">
      <el-card>
        <i class="el-icon-search" style="font-size: 30px; font-weight: bold; color: #409eff; margin: 0 20px 0 0; position: relative; top: 5px;"></i>
        <div class="select-item">
          <span>所属专业:</span>
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
          <span>计划年级:</span>
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
          <span>班级:</span>
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
          <span>计划编号:</span>
          <el-input v-model="value4" placeholder="请输入">
          </el-input>
        </div>
        <div class="select-item">
          <span>生成情况:</span>
          <el-select v-model="value5" placeholder="请选择">
            <el-option
              v-for="item in optionsValue5"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
        </div>
        <div class="fr">
          <el-button type="primary" @click="findQuery">查询</el-button>
          <el-button type="danger" @click="clearParams">清除条件</el-button>
        </div>
      </el-card>
    </div>
    <el-card>
      <div class="table-module">
        <el-table
          :data="tableData"
          border
          style="width: 100%">
          <el-table-column
            prop="PlanId"
            label="计划编号"
            width="100">
          </el-table-column>
          <el-table-column
            prop="Major"
            label="计划专业"
            width="100">
          </el-table-column>
          <el-table-column
            prop="PlanGrade"
            label="计划年级"
            width="100">
          </el-table-column>
          <el-table-column
            prop="PlanClass"
            label="计划班级"
            width="100">
          </el-table-column>
          <el-table-column
            prop="TotalCredits"
            label="总学分要求"
            width="100">
          </el-table-column>
          <el-table-column
            prop="Status"
            label="生成情况"
            width="100">
          </el-table-column>
          <el-table-column
            label="操作"
            width="100">
            <template slot-scope="scope">
              <el-button @click="handleClick1(scope.row)" type="text" size="small">查看</el-button>
              <el-button @click="handleClick2(scope.row)" type="text" size="small">查看课程</el-button>
            </template>
          </el-table-column>
          <el-table-column
            prop="Status"
            label="任务生成操作"
            width="100">
          </el-table-column>
        </el-table>
      </div>
    </el-card>
    <div class="add-dialog">
      <el-dialog title="提示" :visible.sync="dialogAddVisible" width="50%" top="5vh" custom-class="add-course-dialog">
        <div class="content">
          <div class="item">
            <span>计划编号：</span>
            <el-input v-model="planId" :disabled="true"></el-input>
            <span class="red-tips">*修改时只读</span>
          </div>
          <div class="item">
            <span>专业：</span>
            <el-select v-model="majorValue" placeholder="请选择">
              <el-option
                v-for="item in majorOptions"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
            <span class="red-tips">*</span>
          </div>
          <div class="item">
            <span>计划年级</span>
            <el-select v-model="gradeValue" placeholder="请选择">
              <el-option
                v-for="item in gradeOptions"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
            <span class="red-tips">*</span>
          </div>
          <div class="item">
            <span>班级</span>
            <el-select v-model="classValue" placeholder="请选择">
              <el-option
                v-for="item in classOptions"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
            <span class="red-tips">*</span>
          </div>
          <div class="item">
            <span>总学分要求：</span>
            <el-input v-model="creditsValue"></el-input>
            <span class="red-tips">如170.5</span>
          </div>
          <div class="item">
            <span>建立年月</span>
            <el-date-picker
              v-model="FMValue"
              type="month"
              placeholder="选择月">
            </el-date-picker>
            <span class="red-tips">*</span>
          </div>
          <div class="item">
            <span>适用学制：</span>
            <el-input v-model="systemValue"></el-input>
            <span class="red-tips">如2.5</span>
          </div>
          <div class="item">
            <span>培养目标：</span>
            <el-input
              type="textarea"
              autosize
              placeholder="请输入内容"
              v-model="targetValue">
            </el-input>
          </div>
          <div class="item">
            <span>申请日期：</span>
            <el-input
              placeholder="请输入内容"
              v-model="applyDataValue"
              :disabled="true">
            </el-input>
            <span class="red-tips">自动生成 不可修改</span>
          </div>
          <div class="item">
            <span>申请说明：</span>
            <el-input
              type="textarea"
              autosize
              placeholder="请输入内容"
              v-model="applyValue">
            </el-input>
          </div>
        </div>
        <div slot="footer" class="dialog-footer">
          <el-button @click="dialogAddVisible = false">取 消</el-button>
          <el-button type="primary" @click="saveApplyData">保 存</el-button>
        </div>
      </el-dialog>
    </div>
    <div class="look-dialog">
      <el-dialog title="教学计划课程-查看" :visible.sync="dialogPlanVisible" width="98%" custom-class="add-course-dialog">
        <div>内容待定</div>
      </el-dialog>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.jxrwsc {
  .select-module {
    .select-item {
      display: inline-block;
      margin-right: 20px;
      .el-select, .el-input {
        width: 110px;
      }
    }
  }
  .table-module {
    text-align: center;
    /*padding: 10px;*/
    border: 1px solid #ccc;
  }
  .add-course-dialog {
    .content {
      .el-input {
        width: 200px;
        display: inline-block;
      }
      .el-select {
        width: 200px;
      }
      .el-textarea {
        max-width: 500px;
      }
      .item {
        margin-bottom: 10px;
        span {
          display: inline-block;
          width: 130px;
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
        value1: '',
        value2: '',
        value3: '',
        value4: '',
        value5: '',
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
        optionsValue5: [
          {
            value: '启用',
            label: '启用'
          },
          {
            value: '未启用',
            label: '未启用'
          }
        ],
        tableData: [],
        currentPageValue: 1, // 当前第几页
        pageNum: 10, // 每页数量
        totalData: '',
        dialogPlanVisible: false,
        dialogAddVisible: false,
        // 弹框里的值
        planId: '',
        majorValue: '',
        gradeValue: '',
        classValue: '',
        creditsValue: '',
        FMValue: '',
        systemValue: '',
        targetValue: '',
        applyDataValue: '',
        applyValue: '',
        majorOptions: [
          {
            value: '1',
            label: '1'
          }
        ],
        gradeOptions: [
          {
            value: '1',
            label: '1'
          }
        ],
        classOptions: [
          {
            value: '1',
            label: '1'
          }
        ]
      }
    },
    methods: {
      async loadTableData() {
        let params = {
          token: getToken(),
          index: this.currentPageValue,
          pagemax: this.pageNum,
          major: this.value1,
          grade: this.value2,
          class: this.value3,
          palnId: this.value4,
        }
        let res = await this.axios.get('v1/jxjh/getdata', {params: params})
        console.log('哈哈')
        console.log(res)
        let resData = res.data
        this.tableData = resData.data
        this.totalData = resData.count
        // console.log(this.tableData)
      },
      findQuery() {

      },
      clearParams() {},
      handleClick1(params) {
        this.dialogAddVisible = true
      },
      handleClick2(params) {
        this.dialogPlanVisible = true
      }
    },
    created() {
      this.loadTableData()
    }
  }
</script>

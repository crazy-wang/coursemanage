<template>
  <div class="tkgl">
    <div class="selected-module">
      <el-card>
        <i class="el-icon-search"></i>
        <div class="select-item">
          <span>学期：</span>
          <el-select v-model="termValue" placeholder="请选择">
            <el-option
              v-for="item in termOptions"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
        </div>
        <div class="select-item">
          <span>专业：</span>
          <el-select v-model="majorValue" placeholder="请选择">
            <el-option
              v-for="item in majorOptions"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
        </div>
        <div class="select-item">
          <span>年级：</span>
          <el-select v-model="gradeValue" placeholder="请选择">
            <el-option
              v-for="item in gradeOptions"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
        </div>
        <div class="select-item">
          <span>班级：</span>
          <el-select v-model="classValue" placeholder="请选择">
            <el-option
              v-for="item in classOptions"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
        </div>
        <div class="btn-group">
          <el-button type="primary">查看课表</el-button>
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
  .tkgl {
    .selected-module {
      .el-icon-search {
        font-size: 34px;
      }
      .select-item {
        display: inline-block;
        margin-right: 20px;
        .el-select {
          display: inline-block;
          width: 150px;
        }
      }
      .btn-group {
        float: right;
      }
    }
  }
</style>

<script>
  export default {
    data() {
      return {
        termValue: '',
        majorValue: '',
        gradeValue: '',
        classValue: '',
        termOptions: [
          {
            value: '选项1',
            label: '黄金糕'
          },
          {
            value: '选项2',
            label: '双皮奶'
          }
        ],
        majorOptions: [
          {
            value: '选项1',
            label: '黄金糕'
          },
          {
            value: '选项2',
            label: '双皮奶'
          }
        ],
        gradeOptions: [
          {
            value: '选项1',
            label: '黄金糕'
          },
          {
            value: '选项2',
            label: '双皮奶'
          }
        ],
        classOptions: [
          {
            value: '选项1',
            label: '黄金糕'
          },
          {
            value: '选项2',
            label: '双皮奶'
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
    }
  }
</script>

<template>
  <div class="xksz">
    <div class="select-module">
      <el-card>
        <el-row>
          <el-col :span="22">
            <div class="select-item">
              <span>每门选课最多选课人数:</span>
              <el-input
                placeholder="请输入内容"
                v-model="value1"
                clearable>
              </el-input>
            </div>
            <div class="select-item">
              <span>每门选修课班级最多选课人数:</span>
              <el-input
                placeholder="请输入内容"
                v-model="value2"
                clearable>
              </el-input>
            </div>
          </el-col>
        </el-row>
        <el-row style="margin-top: 20px;">
          <el-col :span="22">
            <div class="select-item">
              <span>女生最大选课数:</span>
              <el-input
                placeholder="请输入内容"
                v-model="value3"
                clearable>
              </el-input>
            </div>
            <div class="select-item">
              <span>男生最大选课数:</span>
              <el-input
                placeholder="请输入内容"
                v-model="value4"
                clearable>
              </el-input>
            </div>
          </el-col>
          <el-col :span="1">
            <el-button type="primary">保存</el-button>
          </el-col>
        </el-row>
      </el-card>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .xksz {
    .select-module {
      .select-item {
        display: inline-block;
        margin-right: 30px;
        .el-input {
          width: 150px;
        }
        span {
          display: inline-block;
          width: 220px;
        }
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
      }
    }
  }
</script>

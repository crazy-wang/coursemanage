<template>
  <div class="pkcssz">
    <el-card>
      <el-row :gutter="20">
        <el-col :span="24">
          <div class="content-item">
            <span>最大排节数:</span>
            <el-input v-model="value1" placeholder="请输入内容"></el-input>
            <span class="red tips">*最小值为1</span>
          </div>
          <div class="content-item">
            <span>文化课每天最大排课数:</span>
            <el-input v-model="value2" placeholder="请输入内容"></el-input>
            <span class="red tips">*最小值为1</span>
          </div>
          <div class="content-item">
            <span>专业课每天最大排课数:</span>
            <el-input v-model="value3" placeholder="请输入内容"></el-input>
            <span class="red tips">*最小值为1</span>
          </div>
        </el-col>
      </el-row>
    </el-card>
    <el-card>
      <div class="content-item">
        <span>上午课下午不可排:</span>
        <el-select v-model="value4" placeholder="请选择">
          <el-option
            v-for="item in options4"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
      </div>
      <div class="content-item">
        <span>是否优先连排:</span>
        <el-select v-model="value5" placeholder="请选择">
          <el-option
            v-for="item in options5"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
      </div>
      <div class="content-item">
        <span>文化课是否优先上午排课:</span>
        <el-select v-model="value6" placeholder="请选择">
          <el-option
            v-for="item in options6"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
      </div>
      <div class="content-item">
        <span>专业课是否优先下午排课:</span>
        <el-select v-model="value7" placeholder="请选择">
          <el-option
            v-for="item in options7"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
      </div>
    </el-card>
    <el-card>
      <el-row :gutter="20">
        <el-col :span="24">
          <div class="content-item">
            <span>教师一周最大课时:</span>
            <el-input v-model="value8" placeholder="请输入内容"></el-input>
          </div>
          <div class="content-item">
            <span>同一班级同一科目每周最多节数:</span>
            <el-input v-model="value9" placeholder="请输入内容"></el-input>
          </div>
          <div class="content-item">
            <span>每个班级每天最多课节数:</span>
            <el-input v-model="value10" placeholder="请输入内容"></el-input>
          </div>
        </el-col>
      </el-row>
    </el-card>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        value1: '',
        value2: '',
        value3: '',
        value4: '',
        value5: '',
        value6: '',
        value7: '',
        value8: '',
        value9: '',
        value10: '',
        options4: [
          {
            value: '是',
            label: '是'
          }, {
            value: '否',
            label: '否'
          }
        ],
        options5: [
          {
            value: '是',
            label: '是'
          }, {
            value: '否',
            label: '否'
          }
        ],
        options6: [
          {
            value: '是',
            label: '是'
          }, {
            value: '否',
            label: '否'
          }
        ],
        options7: [
          {
            value: '是',
            label: '是'
          }, {
            value: '否',
            label: '否'
          }
        ],
      }
    }
  }
</script>

<style lang="scss" scoped>
.pkcssz {
  padding: 20px 15px;
  .el-card {
    margin-bottom: 20px;
  }
  .content-item {
    display: inline-block;
    margin-right: 30px;
    .tips {
      font-size: 12px;
    }
  }
  .el-input, .el-select {
    width: 120px;
  }
}
</style>

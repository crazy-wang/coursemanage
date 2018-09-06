<template>
  <div class="row-cell">
    <!--删除提示-->
    <el-dialog
      title="提示"
      :visible.sync="dialogVisible"
      width="30%">
      <span>该时间点尚未排课，无需删除操作。</span>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
      </span>
    </el-dialog>
    <!--表格内容-->
    <div class="content-item" v-for="(item, index) in propsData">
      <el-row>
        <el-col :span="3" class="cell-title">{{item.cellTitle}}</el-col>
        <el-col :span="3" v-for="(list, flag) in item.cellContent">
          <cell :content="list" @clickDelete="clickDelete" @clickAdd="clickAdd(flag, index)"></cell>
        </el-col>
        <!--<el-col :span="3"></el-col>-->
        <!--<el-col :span="3">性能三</el-col>-->
        <!--<el-col :span="3"></el-col>-->
        <!--<el-col :span="3"></el-col>-->
        <!--<el-col :span="3"></el-col>-->
        <!--<el-col :span="3"></el-col>-->
      </el-row>
    </div>
    <!--增加提示-->
    <el-dialog title="提示" :visible.sync="dialogAddVisible" width="98%" custom-class="add-course-dialog">
      <div class="top">
        <h3>待排课程</h3>
        <div>
          <div class="num">
            待排课时:<span class="num-blue">3</span>
          </div>
          <div class="num">
            已排课时:<span class="num-blue">0</span>
          </div>
          <div class="num">
            未排课时:<span class="num-blue">3</span>
          </div>
          <div class="num">
            排错课时:<span class="num-red">0</span>
          </div>
        </div>
      </div>
      <el-row class="bottom bg-blue">
        <el-col :span="3">课程号</el-col>
        <el-col :span="3">课程名称</el-col>
        <el-col :span="3">教师工号</el-col>
        <el-col :span="3">教师姓名</el-col>
        <el-col :span="2">教室编号</el-col>
        <el-col :span="2">教室名称</el-col>
        <el-col :span="1">周课时</el-col>
        <el-col :span="1">已排课时</el-col>
        <el-col :span="1">未排课时</el-col>
        <el-col :span="1">优先排课</el-col>
        <el-col :span="3">智能提醒</el-col>
        <el-col :span="1">操作</el-col>
      </el-row>
      <el-row class="bottom">
        <el-col :span="3">{{this.courseDetial.id}}</el-col>
        <el-col :span="3">{{this.courseDetial.name}}</el-col>
        <el-col :span="3">{{this.courseDetial.teacherID}}</el-col>
        <el-col :span="3">{{this.courseDetial.teacherName}}</el-col>
        <el-col :span="2">{{this.courseDetial.roomID}}</el-col>
        <el-col :span="2">{{this.courseDetial.roomName}}</el-col>
        <el-col :span="1">{{this.courseDetial.weekTime}}</el-col>
        <el-col :span="1">{{this.courseDetial.done}}</el-col>
        <el-col :span="1">{{this.courseDetial.none}}</el-col>
        <el-col :span="1"></el-col>
        <el-col :span="3"></el-col>
        <el-col :span="1"><a href="javascript:;" @click="addCourse(courseDetial)">选定</a></el-col>
      </el-row>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogAddVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogAddVisible = false">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<style lang="scss" scoped>
  .row-cell {
    text-align: center;
    .content-item {
      .cell-title {
        height: 100px;
        border: 1px solid #ccc;
        vertical-align: middle;
        padding-top: 40px;
      }
      /*.cell-item {*/
        /*height: 80px;*/
        /*border: 1px solid #ccc;*/
        /*.content {*/
          /*text-align: center;*/
          /*.detial {*/
            /*display: block;*/
          /*}*/
        /*}*/
      /*}*/
    }
    .add-course-dialog {
      .top {
        text-align: left;
        border: 1px solid #ccc;
        h3 {
          background-color: #409eff;
        }
        .num {
          display: inline-block;
          font-size: 18px;
          font-weight: bold;
          margin-right: 30px;
          .num-blue {
            color: #409eff;
          }
          .num-red {
            color: #f56c6c;
          }
        }
      }
      .bottom {
        .el-col {
          height: 50px;
          line-height: 50px;
          border: 1px solid #ccc;
        }
      }
      .bg-blue {
        background-color: #409eff;
        color: #fff;
        font-weight: bold;
      }
    }
  }
</style>

<script>
  import cell from './cell'
  export default {
    data() {
      return {
        currentFlag: '', // 个
        currentIndex: '', // 行
        propsData: [
          {
            cellTitle: '第1、2节课',
            cellContent: [
              {
                name: 'IBM',
                code: '联想集团',
                teacher: 'AB80/CBI'
              },
              {
                name: 'IBM',
                code: '联想集团',
                teacher: 'AB80/CBI'
              },
              {},
              {},
              {},
              {},
              {}
            ]
          },
          {
            cellTitle: '第二节课',
            cellContent: [
              {
                name: 'IBM',
                code: '联想集团',
                teacher: 'AB80/CBI'
              },
              {
                name: 'IBM',
                code: '联想集团',
                teacher: 'AB80/CBI'
              },
              {},
              {},
              {},
              {},
              {}
            ]
          },
          {
            cellTitle: '第三节课',
            cellContent: [
              {
                name: 'IBM',
                code: '联想集团',
                teacher: 'AB80/CBI'
              },
              {
                name: 'IBM',
                code: '联想集团',
                teacher: 'AB80/CBI'
              },
              {},
              {},
              {},
              {},
              {}
            ]
          },
          {
            cellTitle: '第四节课',
            cellContent: [
              {
                name: 'IBM',
                code: '联想集团',
                teacher: 'AB80/CBI'
              },
              {
                name: 'IBM',
                code: '联想集团',
                teacher: 'AB80/CBI'
              },
              {},
              {},
              {},
              {},
              {}
            ]
          },
          {
            cellTitle: '第五节课',
            cellContent: [
              {
                name: 'IBM',
                code: '联想集团',
                teacher: 'AB80/CBI'
              },
              {
                name: 'IBM',
                code: '联想集团',
                teacher: 'AB80/CBI'
              },
              {},
              {},
              {},
              {},
              {}
            ]
          },
          {
            cellTitle: '第六节课',
            cellContent: [
              {
                name: 'IBM',
                code: '联想集团',
                teacher: 'AB80/CBI'
              },
              {
                name: 'IBM',
                code: '联想集团',
                teacher: 'AB80/CBI'
              },
              {},
              {},
              {},
              {},
              {}
            ]
          },
          {
            cellTitle: '第七节课',
            cellContent: [
              {
                name: 'IBM',
                code: '联想集团',
                teacher: 'AB80/CBI'
              },
              {
                name: 'IBM',
                code: '联想集团',
                teacher: 'AB80/CBI'
              },
              {},
              {},
              {},
              {},
              {}
            ]
          }
        ],
        dialogVisible: false, // 删除
        dialogAddVisible: false, // 增加
        courseDetial: {
          id: '0007',
          name: '体育',
          teacherID: '|0000006|0000007',
          teacherName: '|代朋辉|吴关见',
          roomID: '00004',
          roomName: 'B501',
          weekTime: '3',
          done: '0',
          none: '3'
        }
      }
    },
    components: {
      cell
    },
    methods: {
      clickDelete(params) {
        console.log(params)
        if (Object.keys(params).length === 0) {
          this.dialogVisible = true
        }
      },
      clickAdd(flag, index) {
        console.log(`点击的是第${flag}个和${index}行`)
        this.dialogAddVisible = true
        this.currentFlag = flag
        this.currentIndex = index
      },
      addCourse(params) {
        this.dialogAddVisible = false
        // this.propsData[this.currentIndex].cellContent[this.currentFlag].name = params.name
        // this.propsData[this.currentIndex].cellContent[this.currentFlag].code = params.teacherID
        // this.propsData[this.currentIndex].cellContent[this.currentFlag].teacher = params.teacherName
        this.$set(this.propsData[this.currentIndex].cellContent[this.currentFlag], 'name', params.name)
        this.$set(this.propsData[this.currentIndex].cellContent[this.currentFlag], 'code', params.teacherID)
        this.$set(this.propsData[this.currentIndex].cellContent[this.currentFlag], 'teacher', params.teacherName)
      }
    }
  }
</script>

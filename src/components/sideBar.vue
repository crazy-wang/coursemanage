<template>
  <div class="side-bar">
    <el-scrollbar style="height: 100vh">
      <el-menu
        :unique-opened="true"
        :router="true"
        default-active="2"
        class="el-menu-vertical-demo"
        @open="handleOpen"
        @close="handleClose"
        background-color="#304156"
        text-color="#fff"
        active-text-color="#ffd04b">
        <el-submenu index="1">
          <template slot="title">
            <i class="el-icon-location"></i>
            <span>教学课程管理</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="1-1">教学课程申请</el-menu-item>
            <el-menu-item index="1-2">教学课程审核</el-menu-item>
            <el-menu-item index="1-3">教学课程维护</el-menu-item>
          </el-menu-item-group>
          <!--<el-submenu index="1-4">-->
          <!--<template slot="title">选项4</template>-->
          <!--<el-menu-item index="1-4-1">选项1</el-menu-item>-->
          <!--</el-submenu>-->
        </el-submenu>
        <el-submenu index="2">
          <template slot="title">
            <i class="el-icon-menu"></i>
            <span slot="title">排课管理</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="/pkgl/xxkpk">选修课排课</el-menu-item>
            <el-menu-item index="/pkgl/pkcssz">排课参数设置</el-menu-item>
            <el-submenu index="2-3">
              <template slot="title">教师不排课时间设置</template>
              <el-menu-item index="2-3-1">开始设置时间</el-menu-item>
            </el-submenu>
            <el-menu-item index="2-4">必修课排课（新增）</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <el-submenu index="3">
          <template slot="title">
            <i class="el-icon-document"></i>
            <span slot="title">上课时间设置</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="/sksjsz/xxkkbsz">选修课课表设置</el-menu-item>
            <el-menu-item index="/sksjsz/bxkkbsz">必修课课表设置</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <el-submenu index="4">
          <template slot="title">
            <i class="el-icon-setting"></i>
            <span slot="title">教学计划管理</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="/jxjhgl/jhsq">计划申请</el-menu-item>
            <el-menu-item index="/jxjhgl/jhsh">计划审核</el-menu-item>
            <el-menu-item index="/jxjhgl/jhwh">计划维护</el-menu-item>
            <el-menu-item index="/jxjhgl/jxrwsc">教学任务生成</el-menu-item>
            <el-menu-item index="/jxjhgl/jxrwfp">教学任务分配</el-menu-item>
            <el-menu-item index="/jxjhgl/jxrwsh">教学任务审核</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <el-submenu index="5">
          <template slot="title">
            <i class="el-icon-setting"></i>
            <span slot="title">选修课管理</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="/xxkgl/xksz">选课设置</el-menu-item>
            <el-menu-item index="/xxkgl/xkrwgl">选课任务管理</el-menu-item>
            <el-menu-item index="4-3">开课申请</el-menu-item>
            <el-menu-item index="4-4">开课审核</el-menu-item>
            <el-menu-item index="4-5">选修课排课（新增）</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <el-submenu index="6">
          <template slot="title">
            <i class="el-icon-setting"></i>
            <span slot="title">查询统计报表</span>
          </template>
          <el-submenu index="6-1">
            <template slot="title">学生选课情况查询</template>
            <el-menu-item index="6-1-1">查看选课情况</el-menu-item>
          </el-submenu>
        </el-submenu>
        <el-submenu index="7">
          <template slot="title">
            <i class="el-icon-setting"></i>
            <span slot="title">课表管理</span>
          </template>
        </el-submenu>
        <el-submenu index="8">
          <template slot="title">
            <i class="el-icon-setting"></i>
            <span slot="title">协作组管理</span>
          </template>
        </el-submenu>
        <el-submenu index="9">
          <template slot="title">
            <i class="el-icon-setting"></i>
            <span slot="title">集备管理</span>
          </template>
        </el-submenu>
        <el-submenu index="10">
          <template slot="title">
            <i class="el-icon-setting"></i>
            <span slot="title">集备检查（新增）</span>
          </template>
        </el-submenu>
        <el-submenu index="11">
          <template slot="title">
            <i class="el-icon-setting"></i>
            <span slot="title">教师备课</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="/jsbk/ksgl">课时管理</el-menu-item>
            <el-menu-item index="/jsbk/wdja">我的教案</el-menu-item>
            <el-menu-item index="/jsbk/jyzwh">教研组维护</el-menu-item>
            <el-menu-item index="/jsbk/zxjash">执行教案审核</el-menu-item>
            <el-menu-item index="/jsbk/rdjacxtj">入档教室查询统计</el-menu-item>
            <el-menu-item index="/jsbk/jxjdtjb">教学进度统计报表</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <el-submenu index="12">
          <template slot="title">
            <i class="el-icon-setting"></i>
            <span slot="title">教师调课</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="/jstk/tkshryap">调课审核人员安排</el-menu-item>
            <el-menu-item index="/jstk/tksq">调课申请</el-menu-item>
            <el-menu-item index="/jstk/dwtytksq">待我同意调课申请</el-menu-item>
            <el-menu-item index="/jstk/tksh">调课审核</el-menu-item>
            <el-menu-item index="/jstk/tkgl">调课管理</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
      </el-menu>
    </el-scrollbar>
  </div>
</template>

<script>
  export default {
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>

<style lang="scss" scoped>
  .side-bar {
    width: 200px;
    min-height: 100vh;
    background-color: #304156;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 100;
    overflow: auto;
    .el-menu {
      border-right: 0; // 解决elementui自带右边框bug
    }
  }
</style>

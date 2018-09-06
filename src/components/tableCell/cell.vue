<template>
  <div class="cell">
    <div class="cell-item">
      <h5 class="top clearfix">
        <a href="javascript:;" class="leftLink fl" @click="clickAdd">排课</a>
        <a href="javascript:;" class="rightLink fr" @click="clickDelete(content)">删除</a>
      </h5>
      <div class="content">
        <span class="detial">
          {{content.name}}
        </span>
        <span class="detial">
          {{content.code}}
        </span>
        <span class="detial">
          {{content.teacher}}
        </span>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
  .cell {
    text-align: center;
    .cell-item {
      height: 100px;
      padding: 5px;
      box-sizing: border-box;
      border: 1px solid #ccc;
      .content {
        text-align: center;
        .detial {
          display: block;
        }
      }
    }

  }
</style>

<script>
  export default {
    data() {
      return {

      }
    },
    props: [
      'content'
    ],
    methods: {
      clickDelete(data) {
        this.$emit('clickDelete', data)
      },
      clickAdd() {
        this.$emit('clickAdd')
      }
    }
  }
</script>

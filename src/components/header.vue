<template>
  <div class="header">
    <div>
      <el-button @click="login" class="login">登录</el-button>
    </div>
  </div>
</template>

<script>
  import {setToken, getToken} from '../utils/auth'
  export default {
    methods: {
      async login() {
        let params = {
          name: 'admin',
          pwd: '123'
        }
        let res = await this.axios.post('v1/login', params)
        let resData = res.data.data
        // console.log('登录返回')
        console.log(res)
        setToken(resData.token)
        // alert(2)
        // console.log(getToken())
      }
    }
  }
</script>

<style lang="scss" scoped>
  .header {
    height: 50px;
    width: calc(100% - 200px);
    /*width: 100%;*/
    margin-left: 200px;
    position: fixed;
    z-index: 20;
    top: 0;
    box-sizing: border-box;
    background-color: #fff;
    border-bottom: 1px solid #d8dce5;
    box-shadow: 0 1px 3px 0 rgba(0,0,0,.12), 0 0 3px 0 rgba(0,0,0,.04);
    .login {
      position: absolute;
      right: 10px;
      top: 5px;
    }
  }
</style>

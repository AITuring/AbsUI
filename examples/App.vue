<template>
  <div id="app">
    <div class="container">
      <h1>|x| Abs UI</h1>
      <h2>按钮</h2>
      <AllButton></AllButton>

    <h2>dialog</h2>
    <div class="row">
      <a-button @click="visiblestate = true" type="primary">dialog显示</a-button>
    </div> 

    <!-- 对话框 -->
    <a-dialog :visible.sync="visiblestate" title="测试dialog" top="20px" width="80%">
      <!-- 使用具名插槽title修改dialog组件的标题部分 -->
      <template v-slot:title>
        <h4>标题内容</h4>
      </template>
      <!-- 通过默认插槽分发dialogbody内容 -->
      <div>
        <lx-form :model="user" labelWidth="100px">
          <lx-form-item label="用户名" style="width:80%;">
            <lx-input placeholder="请输入用户名" v-model="user.username"></lx-input>
          </lx-form-item>
          <lx-form-item label="激活" style="text-align:left;">
            <lx-switch activeColor="#f56c6c" v-model="user.active"></lx-switch>
          </lx-form-item>
          <lx-form-item label="爱好" style="width:80%;text-align:left;">
            <lx-checkbox-group v-model="user.hobies1">
              <lx-checkbox label="篮球" name="hoby">篮球</lx-checkbox>
              <lx-checkbox label="羽毛球" name="hoby">羽毛球</lx-checkbox>
              <lx-checkbox label="足球" name="hoby">足球</lx-checkbox>
            </lx-checkbox-group>
          </lx-form-item>
        </lx-form>
      </div>
      <!-- 通过具名插槽footer为footer分发内容 -->
      <template v-slot:footer>
        <a-button @click="visiblestate = false">取消</a-button>
        <a-button type="primary">确定</a-button>
      </template>
    </a-dialog>

    <h2>message提示框</h2>
    <div class="row">
      <a-button @click="showMessage('info')">打开消息提示</a-button>
      <a-button @click="showMessage('close')">带关闭按钮</a-button>
      <a-button @click="showMessage('sucess')">成功</a-button>
      <a-button @click="showMessage('warning')">警告</a-button>
      <a-button @click="showMessage('error')">错误</a-button>
    </div>

    <h2>input输入框</h2>
    <div class="row">
      <lx-input disabled name="username" placeholder="请输入用户名" style="width:60%;" type="text"></lx-input>
      <lx-input placeholder="请输入商品名" style="width:60%;" type="text" v-model="shopname"></lx-input>
      <lx-input clearable placeholder="请输入课程名" style="width:60%;" type="text" v-model="couresename"></lx-input>
      <lx-input placeholder="密码" showPassword style="width:60%;" type="text" v-model="password"></lx-input>
    </div>
    <h2>switch按钮</h2>
    <div class="row">
      <lx-switch activeColor="#f56c6c" v-model="active"></lx-switch>
    </div>
    <h2>单选框</h2>
    <div class="row">
      <lx-radio label="0" v-model="mySex">男</lx-radio>
      <lx-radio label="1" v-model="mySex">女</lx-radio>
    </div>
    <h2>单选框组</h2>
    <div class="row">
      <lx-radio-groud v-model="fruit">
        <lx-radio label="2">苹果</lx-radio>
        <lx-radio label="3">香蕉</lx-radio>
        <lx-radio label="4">芒果</lx-radio>
      </lx-radio-groud>
    </div>
    <h2>复选框</h2>
    <div class="row">
      <lx-checkbox label="1" name="hoby" v-model="hoby">篮球</lx-checkbox>
    </div>
    <h2>复选框组</h2>
    <div class="row">
      <lx-checkbox-group v-model="hobies">
        <lx-checkbox label="篮球" name="hoby">篮球</lx-checkbox>
        <lx-checkbox label="羽毛球" name="hoby">羽毛球</lx-checkbox>
        <lx-checkbox label="足球" name="hoby">足球</lx-checkbox>
      </lx-checkbox-group>
    </div>
    <h2>form表单和包裹表单控件组件</h2>
    <div class="row">
      <lx-form :model="model" labelWidth="100px">
        <lx-form-item label="用户名" style="width:80%;">
          <lx-input placeholder="请输入用户名" v-model="model.username"></lx-input>
        </lx-form-item>
        <lx-form-item label="激活" style="text-align:left;">
          <lx-switch activeColor="#f56c6c" v-model="model.active"></lx-switch>
        </lx-form-item>
        <lx-form-item label="爱好" style="width:80%;text-align:left;">
          <lx-checkbox-group v-model="model.hobies1">
            <lx-checkbox label="篮球" name="hoby">篮球</lx-checkbox>
            <lx-checkbox label="羽毛球" name="hoby">羽毛球</lx-checkbox>
            <lx-checkbox label="足球" name="hoby">足球</lx-checkbox>
          </lx-checkbox-group>
        </lx-form-item>
        <lx-form-item style="width:80%;">
          <a-button>重置</a-button>
          <a-button type="primary">提交</a-button>
        </lx-form-item>
      </lx-form>
    </div>
    </div>
  </div>
</template>

<script>
import AllButton from './components/AllButton.vue'
export default {
  name: "App",
  data () {
    return {
      clickVal: "click事件",
      visiblestate: false,
      shopname: "",
      username: "",
      couresename: "大学英语",
      password: "",
      active: false,
      mySex: "",
      fruit: "2",
      hoby: "",
      hobies: [],
      model: {
        username: "",
        active: false,
        hobies1: []
      },
      user: {
        username: "",
        active: false,
        hobies1: []
      }
    };
  },
  components: {
    AllButton
  },
  methods: {
    testclick (a) {
      if (typeof a === "undefined") {
        console.log("test")
      } else {
        console.log(a)
      }
    },
    showMessage (type) {
      // 显示关闭按钮
      if (type === "close") {
        this.$message({
          showClose: true
        });
      } else {
        this.$message({
          type: type
        });
      }
    }
  }
};
</script>

<style lang="scss" scoped>
#app {
  max-width: 1200px;
  margin: 0 auto;
  // padding-left: 30%;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  .container{
    box-shadow: 0 4px 30px 0 rgba(223, 225, 230, 1);
    padding:20px;
  }

  .row {
    margin-bottom: 30px;
    .a-button {
      margin-right: 10px;
    }
  }
}
</style>

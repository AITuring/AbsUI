<template>
  <div class="acontainer">
    <div class="row">
      <a-button @click="testclick()">按钮</a-button>
      <a-button @click="testclick('111')" type="default">默认按钮</a-button>
      <a-button @click="testclick('222')" type="primary">按钮</a-button>
      <a-button @click="testclick('333')" type="info">按钮</a-button>
      <a-button @click="testclick('444')" type="success">按钮</a-button>
      <a-button @click="testclick('555')" type="danger">按钮</a-button>
    </div>
    <div class="row">
      <a-button plain type="default">朴素按钮</a-button>
      <a-button plain type="primary">朴素按钮</a-button>
      <a-button plain type="info">朴素按钮</a-button>
      <a-button plain type="success">朴素按钮</a-button>
      <a-button plain type="danger">朴素按钮</a-button>
    </div>
    <div class="row">
      <a-button plain round type="default">圆角按钮</a-button>
      <a-button plain round type="primary">圆角按钮</a-button>
      <a-button plain round type="info">圆角按钮</a-button>
      <a-button plain round type="success">圆角按钮</a-button>
      <a-button plain round type="danger">圆角按钮</a-button>
    </div>
    <div class="row">
      <a-button
        @click="
          clickVal === 'click事件'
            ? (clickVal = '圆')
            : (clickVal = 'click事件')
        "
        circle
        plain
        type="default"
      >{{ clickVal }}</a-button>
      <a-button circle icon="lx-icon-milk-tea" plain type="primary"></a-button>
      <a-button circle icon="lx-icon-potato-strips" plain type="info"></a-button>
      <a-button circle plain type="success">圆形按钮</a-button>
      <a-button circle plain type="danger">圆形按钮</a-button>
    </div>
    <div class="row">
      <a-button>禁用按钮</a-button>
      <a-button disabled type="default">禁用按钮</a-button>
      <a-button disabled type="primary">禁用按钮</a-button>
      <a-button disabled type="info">禁用按钮</a-button>
      <a-button disabled type="success">禁用按钮</a-button>
      <a-button disabled type="danger">禁用按钮</a-button>
    </div>
  </div>
</template>

<script>
export default {
  name: "AllButton",
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
  components: {},
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
    .nav-title{
      font-size: 30px !important;
    }
    .row {
    margin-bottom: 30px;
    .a-button {
      margin-right: 10px;
    }
  }

  }
}
</style>

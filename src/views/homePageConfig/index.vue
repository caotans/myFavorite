<template>
  <div class="homePage-config">
    <el-container>
      <el-header><h2 style="color: #67C23A">city的个人收藏</h2></el-header>
      <el-main>
        <el-tabs v-model="activeName" @tab-click="onTabClick">
          <el-tab-pane name="myWork">
            <span slot="label"><i class="el-icon-date"></i> 我的工作</span>
          </el-tab-pane>
          <el-tab-pane label="音频" name="myRadio"></el-tab-pane>
          <el-tab-pane label="视频" name="myVideo"></el-tab-pane>
          <el-tab-pane label="技术" name="myTechnology"></el-tab-pane>
          <el-tab-pane label="各种官网" name="myOfficial"></el-tab-pane>
          <el-tab-pane label="其他" name="other"></el-tab-pane>
        </el-tabs>
        <div class="tagsLayout">
          <el-tag
            v-for="tag in listData"
            @click="openNewPage(tag.location)"
            :type="tag.color"
            closable
            :disable-transitions="false"
            @close="handleClose(tag)">
            {{tag.name}}
          </el-tag>
          <el-input
            class="input-new-tag"
            v-if="inputVisible"
            v-model="inputValue"
            ref="saveTagInput"
            size="small"
            @keyup.enter.native="handleInputConfirm"
            @blur="handleInputConfirm"

          >
          </el-input>
          <el-button v-else class="button-new-tag" size="small" @click="showInput">+ 新增网页</el-button>


        </div>

      </el-main>
    </el-container>
  </div>
</template>

<script>
  import { mapActions, mapGetters } from "vuex";

  export default {
    name: "homePage",
    data() {
      return {

        activeName: "myWork",
        listData: [],
        inputVisible: false,
        inputValue: ''

      };
    },
    computed: {
      ...mapGetters([

      ]),
      tableData() {

      }
    },
    created() {
      this.readJsonFile(this.activeName).then(response => {
        if (response.data) {
          const result = response.data[this.activeName];
          this.listData = result;
        }
      });
    },
    methods: {
      ...mapActions([
        "readJsonFile"
      ]),
      onTabClick(tab) {
        this.readJsonFile(tab.name).then(response => {
          if (response.data) {
            const result = response.data[this.activeName];
            this.listData = result;
          }
        });
        // 获取不同的数据源
      },
      handleClose(tag) {
        this.dynamicTags.splice(this.dynamicTags.indexOf(tag), 1);
      },

      showInput() {
        this.inputVisible = true;
        this.$nextTick(_ => {
          this.$refs.saveTagInput.$refs.input.focus();
        });
      },

      handleInputConfirm() {
        const inputValue = this.inputValue;
        if (inputValue) {
          // alert(inputValue);
          this.listData.push({ "name": inputValue.split("=")[0], "location": inputValue.split("=")[1] });
        }
        this.inputVisible = false;
        this.inputValue = '';
      },
      openNewPage(location) {
        console.log(location + "====" + this.activeName);
        if (location.indexOf("http") !== -1) {
          window.open(location, '_target');
        } else if (location.indexOf("https") !== -1) {
          window.open(location, '_target');
        } else {
          window.open("http://" + location, '_target');
        }
      }

    }
  };
</script>

<style lang='scss'>
  .homePage-config {
    font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;

    .fosun-email-header {
      margin-bottom: 2rem;
      display: flex;
      width: auto;
      justify-content: center;
      align-items: center;

      > * {
        flex-shrink: 0;
        flex-grow: 0;
        margin-right: 1em;
      }
    }

    .table {
      thead .cell {
        text-align: center;
      }

      .item {
        padding: .5rem;
      }

      .el-table {
        margin-bottom: 2rem;
      }

      .contentv div {
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
        -webkit-line-clamp: 2;
      }
    }

    .el-form {
      .canshu {
        // display: flex;

        .el-form-item__content {
          display: flex;
          text-align: left;
        }

        .block {
          display: flex;
        }

        .el-input {
          width: auto;
        }
      }
    }

    .tagsLayout{
      min-height: 780px;
      flex-wrap:  wrap;
      display: flex;
      justify-content: space-around;
      align-content:flex-start ;
      cursor: pointer;

    }
    .el-tag + .el-tag {
      margin-left: 10px;

    }
    .button-new-tag {
      margin-left: 10px;
      height: 32px;
      line-height: 30px;
      padding-top: 0;
      padding-bottom: 0;
      background-color: #F56C6C;
      color: #fff;
    }
    .input-new-tag {
      width: 90px;
      margin-left: 10px;
      vertical-align: bottom;
    }
  }
</style>

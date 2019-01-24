<template>
  <div>
    dsssssssssssssssssssssss
  </div>
</template>

<script>
  import {mapActions, mapGetters} from "vuex";

  export default {
    name: "homePage",
    data() {
      return {

        sendmesForm: []

      };
    },
    computed: {
      ...mapGetters([

      ]),
      tableData() {

      }
    },
    created() {

    },
    methods: {
      ...mapActions([

      ]),
      search() {

      }

    }
  };
</script>

<style lang='scss'>
  .fosun-email-config {
    padding: 2rem 5rem;

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
  }
</style>

<template>
  <div>
    <el-table :data="tableData" border style="width: 100%">
      <el-table-column prop="name" label="姓名">
      </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button type="text" class="up-btn" v-if="scope.row.canUp" @click="getShelves(scope.row)">上架</el-button>
          <template>
            <el-popover placement="bottom-start" title="标题" width="200" trigger="click" content="无法下架提示" :disabled="flag">
              <el-button type="text" @click="getShelves(scope.row, false)" class="down-btn" slot="reference"
                v-if="scope.row.canDown && scope.row.code === 0" :disabled="btnFlag">下架 - 500</el-button>
              <el-button type="text" @click="getShelves(scope.row, true)" class="down-btn" slot="reference"
                v-if="scope.row.canDown && scope.row.code === 1" :disabled="btnFlag">下架 - 200</el-button>
            </el-popover>
          </template>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>




<script>
// api
// eslint-disable-next-line no-unused-vars
import { removeFromShelvesReq500, removeFromShelvesReq200 } from "../../services/test.js";
export default {
  data() {
    return {
      tableData: [
        {
          name: '王小虎',
          state: 0,
          canUp: true,
          code: 3,
        },
        {
          name: '李小龙',
          state: 1,
          canDown: true,
          code: 0,
        },
        {
          name: '成大龙',
          state: 1,
          canDown: true,
          code: 1,
        }
      ],
      flag: true,
      btnFlag: false,
    };
  },
  methods: {
    async getShelves(row, flag = true) {
      // 按钮禁用
      this.btnFlag = true;
      console.log('state', row.state)
      // 当row.state为0走上架接口正常
      // 当row.state为1走下架接口
      // 如果200el-popover组件不生效就是卡片没出来

      if (row.state === 0) {
        console.log('上架')
      }
      if (row.state === 1) {
        if (flag) {

          removeFromShelvesReq200().then(() => {
            this.handleDown200().then(() => {
            }).finally(() => {
              this.btnFlag = false;
            })
          })

        } else {

          removeFromShelvesReq500().then(() => {
          }).catch(() => {
            // 卡片显示
            this.flag = false;
            this.handleDown500().then(() => {
              // 卡片消失
              this.flag = true;
            }).finally(() => {
              // 按钮恢复
              this.btnFlag = false;
            })
          })

        }
      }
    },
    handleDown200() {
      return new Promise((resolve) => {
        setTimeout(() => {
          console.log('下架200 - 成功')
          resolve()
        }, 1000)
      })
    },
    handleDown500() {
      return new Promise((resolve) => {
        setTimeout(() => {
          console.log('下架500 - 失败')
          resolve() // 失败的情况
        }, 1000)
      })
    }
  }
};
</script>

<style scoped>
.up-btn {
  background-color: #409eff;
  color: #fff;
  border-color: #409eff;
  margin-right: 10px;
  width: 80px;
}

.down-btn {
  background-color: #f56c6c;
  /* color: #fff; */
  color: black;
  border-color: #f56c6c;
  width: 80px;
}
</style>

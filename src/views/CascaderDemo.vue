<template>
  <div class="home">
    <el-button type="primary" @click="handleTestMockData" class="mockBtn">
      cascader-demo
    </el-button>
    <div class="layout">
      <div class="left">
        <el-dropdown @command="handleCommand">
          <el-button type="primary"> 切换数据 </el-button>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item command="0">dataA</el-dropdown-item>
            <el-dropdown-item command="1">dataB</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
      <div class="right">
        <el-cascader
          v-model="checkValue"
          @change="change"
          class="cascader"
          :options="options"
          :props="props"
          clearable
        ></el-cascader>
      </div>
    </div>
  </div>
</template>

<script>
import { getTestCascaderData, getCascaderData } from "@/services/cascader";

export default {
  data() {
    return {
      checkValue: [],
      props: { multiple: true },
      options: [],
      lastCheckValue: [],
      selectNone: false,
      lastNone: false,
      oriData: [],
    };
  },
  created() {
    // 级联数据初始化
    this.getOriData();
  },
  methods: {
    // mock数据测试请求
    async handleTestMockData() {
      const res = await getTestCascaderData();
      this.$message.success(`${res.msg}`);
    },
    // 获取级联数据
    async getOriData() {
      const { list = [] } = await getCascaderData();
      const len = list.length;
      for (let i = 0; i < len; i++) {
        list[i].push({
          value: "none",
          label: "无",
        });
      }
      this.oriData = list;
      this.options = this.oriData[0];
    },
    // 级联选择器选中触发
    change(selectedValues) {
      // console.info("lastCheckValue", this.lastCheckValue);
      // console.info("selectedValues", selectedValues);
      const checkValueLen = selectedValues.length;

      // 方案一：判断最后一项
      // if (checkValueLen > 1) {
      //   if (selectedValues[checkValueLen - 1].includes("none")) {
      //     // console.info("user select none");
      //     this.checkValue = this.checkValue.filter((item) =>
      //       item.includes("none")
      //     );
      //   } else {
      //     // console.info("user select other");
      //     this.checkValue = this.checkValue.filter(
      //       (item) => !item.includes("none")
      //     );
      //   }
      // }

      // 方案二：记录比对
      // 上一次
      for (let i = 0; i < this.lastCheckValue.length; i++) {
        const item = this.lastCheckValue[i];
        if (item.includes("none")) {
          this.lastNone = true;
        } else {
          this.lastNone = false;
        }
      }

      // 当次
      for (let i = 0; i < checkValueLen; i++) {
        const item = selectedValues[i];
        if (item.includes("none")) {
          this.selectNone = true;
        } else {
          this.selectNone = false;
        }
      }

      if (this.selectNone && !this.lastNone) {
        console.info("user select none");
        this.checkValue = this.checkValue.filter((item) =>
          item.includes("none")
        );
      } else {
        console.info("user select other");
        this.checkValue = this.checkValue.filter(
          (item) => !item.includes("none")
        );
      }

      this.lastCheckValue = this.checkValue;
    },
    // 切换级联数据
    async handleCommand(command) {
      const typeNum = parseInt(command);
      // console.log("typeNum", typeNum);
      this.options = this.oriData[typeNum];
      this.checkValue = []; // 原来选择的数据清空
    },
  },

};
</script>
<style scoped>
.mockBtn {
  margin: 10px;
}
.layout {
  display: flex;
}
.left {
  margin-right: 30px;
}
</style>

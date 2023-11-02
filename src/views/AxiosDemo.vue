<template>
  <div class="AxiosDemo">
    <button @click="handleFetch">发送请求</button>
    <div>
      <div>可以看到这里先渲染 => {{ sum || 0}}</div>
      <div>可以看到这里后渲染 => {{ doubleSum || 0 }}</div>
    </div>
    <div v-html="testDataHtml" class="html-container"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      testDataHtml: "",
      arrList: [],
      sum: 0,
      arrListDouble: [],
      doubleSum: 0,
    };
  },
  computed: {},
  mounted() {},
  methods: {
    // 模拟调用方法1
    actionMethod1() {
      // 假如你需要拿到什么值，你可以用一个promise包裹，这里暂时不用async了
      // 用setTimeout模拟异步
      return new Promise((resolve) => {
        let sum = 0;
        for (let index = 1; index < 10000; index++) {
          this.arrList.push(index);
          sum += index;
        }
        // 用1秒，模拟比方法2慢
        setTimeout(() => {
          this.sum = sum // 模拟直接渲染
          resolve(sum);
        }, 1000);
      });
    },
    // 模拟调用方法2
    actionMethod2() {
      return new Promise((resolve) => {
        let sum = 0;
        for (let index = 1; index < 100; index ++) {
          this.arrListDouble.push(index * 2);
          sum += index * 2;
        }
        // 用0.5毫米，模拟比方法1快，
        setTimeout(() => {
          this.doubleSum = sum // 模拟直接渲染
          resolve(sum);
        }, 500);
      });
    },
    handleFetch() {
      // 不用promise.all，改用调式调用控制流程
      // 控制台正确先输出 方法1 end => 方法2 end
      this.actionMethod1()
        .then(() => {
          console.log('actionMethod1 - end')
          return this.actionMethod2() // 主动返回
        })
        .then(() => {
          console.log('actionMethod2 - end')
        })
        .catch((err) => {
          console.log("handleFetch - err", err);
        });
    },
  },
};
</script>

<style scoped>
.html-container {
  width: 400px;
  height: 400px;
  background-color: #23aaf2;
}
</style>

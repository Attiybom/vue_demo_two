<template>
  <div class="pag">
    <h2>pag</h2>
    <canvas ref="pagCanvas"></canvas>
  </div>
</template>

<script>
// import * as libpag from 'libpag';
import { PAGInit, PAGFile, PAGView } from 'libpag';

// 引入getPagFileReq
// import { getPagFileReq } from "@/services/pag";

export default {
  mounted() {
    this.loadAndPlayPAG();
  },
  methods: {
    async loadAndPlayPAG() {

      // // 确保 libpag 已经初始化
      await PAGInit();

      // 获取 PAG 素材数据
      const response = await fetch('/like.pag');
      console.log('response', response)
      const buffer = await response.arrayBuffer();

      // 加载 PAG 素材为 PAGFile 对象
      const pagFile = await PAGFile.load(buffer);

      // 获取 canvas 元素并设置尺寸
      const canvasElement = this.$refs.pagCanvas;
      canvasElement.width = pagFile.width();
      canvasElement.height = pagFile.height();

      // 实例化 PAGView 对象
      const pagView = await PAGView.init(pagFile, canvasElement);

      // 播放 PAGView
      pagView.play();
    }
  }
};
</script>

<style scoped>
.pag canvas {
  /* 定义您的 canvas 样式 */
}
</style>

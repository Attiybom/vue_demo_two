<template>
  <div class="img-container">
    <div class="text-container" v-show="!imageVisible" @click="toggleImage">
      {{ displayText }}
    </div>
    <el-image ref="previewImage" v-show="imageVisible" style="width: 100px; height: 100px" :src="url" fit="fill"
      @click="toggleImage" :preview-src-list="urlList"></el-image>
  </div>
</template>

<script>
export default {
  name: 'TextImageComponent',
  props: {
    displayText: {
      type: String,
      required: true,
      default: ''
    },
    url: {
      type: String,
      required: true,
      default: ''
    },
    urlList: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      imageVisible: false,
    };
  },
  methods: {
    // 切换显示状态
    toggleImage() {
      // console.log('toggleImage')
      this.imageVisible = !this.imageVisible;
      if (this.imageVisible) {
        this.$nextTick(() => {
          const imageElement = this.$refs.previewImage.$el.querySelector('.el-image__inner');
          if (imageElement) {
            imageElement.click();
          }
        });
      }
    },
  },
};
</script>

<style scoped>
.img-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 200px;
  width: 200px;
  border: 1px solid #ccc;
}

.text-container {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}
</style>

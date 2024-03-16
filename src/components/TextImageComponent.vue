<template>
  <div class="img">
    <div class="img-container">
      <div v-show="!imageVisible" @click="toggleImage">
        {{ displayText }}
      </div>
      <el-image ref="previewImage" v-show="imageVisible" style="width: 100px; height: 100px" :src="url" fit="fill"
        @click="toggleImage" :preview-src-list="urlList"></el-image>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    displayText: {
      type: String,
      default: '默认图片'
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

<style scoped></style>

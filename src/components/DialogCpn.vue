<template>
  <div>
    <div>
      {{ name }}
    </div>
    <img :src="fileUrl" />
  </div>
</template>

<script>
export default {
  props: ["src", "name"],
  data() {
    return {
      fileUrl: "",
    };
  },
  methods: {},
  mounted() {},
  watch: {
    src: {
      immediate: true,
      handler() {
        this.fileUrl = this.src;
      },
    },
  },
};
</script>
<style scoped>
    img{
        width: 300px;
    }
</style>

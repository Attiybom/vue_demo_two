<template>
  <div>
    <input type="file" name="file" @change="fileChange" >
    <button @click="submit">提交</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
    };
  },
  methods: {
    fileChange(e) {
      // console.log('FileUploadComponent', e.target.files)
      console.log('FileUploadComponent', e.target.files[0])// 目前单选，默认取第一个
      const file = e.target.files[0]
      // const fileType = ['image/jpeg', 'image/png']
      // // 假设文件必须要是jpg or jpeg 格式
      // if (!fileType.includes(file.type)) {
      //   this.$message.warning('文件必须是jpg或png格式')
      //   return
      // }
      // // 假设文件的大小有10m限制
      // if (file.size > 10 * 24 * 24 * 24) {
      //   this.$message.warning('文件大小不能超过10兆')
      //   return
      // }
      // 转化为blob对象
      const blobFile = new Blob([file])

      const slice_blob = blobFile.slice(0, 5000)

      // 再把切割后的文件blob 再次转化为file对象，进而上传，这就是文件分片上传的原理
      const slice_file = new File([slice_blob])
        console.log('slice_file', slice_file)
      console.log('blobFile', blobFile)

      // this.$message.success('上传成功！')
    },
    submit() {
      console.log('submit')
    }
  },
  mounted() {},
  watch: {

  },
};
</script>
<style scoped>

</style>

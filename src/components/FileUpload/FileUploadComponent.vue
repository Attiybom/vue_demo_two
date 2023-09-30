<template>
  <div>
    <input type="file" name="file" @change="fileChange" multiple />
    <button @click="submit">提交</button>
    <Divider />
    <div class="imgContainer">
      <!-- <img class="imgBox" :src="imgBase64" /> -->
      <!-- <div v-for="item in fileList" :key="item.name">
        <span >{{ item.name }}</span>
      </div> -->
      <!-- 文件上传百分比 -->
      <div>{{ percentage }}%</div>
    </div>
    <Divider />
    <div class="formContainer">
      <form
        action="/api/fileUpload"
        enctype="multipart/form-data"
        method="post"
      >
        <input type="hidden" />
        <button type="submit">form_btn</button>
      </form>
    </div>
  </div>
</template>

<script>
// import axios from "axios";
import { fileUploadService } from "../../services/fileUpload.js";
import { Divider } from "element-ui";

let fileObj;
export default {
  data() {
    return {
      imgBase64: "",
      fileList: [],
      percentage: 0,
    };
  },
  methods: {
    fileChange(e) {
      // const that = this;
      // const fileArr = e.target.files;
      // ==== 单文件上传
      // console.log('FileUploadComponent', e.target.files)
      // console.log("FileUploadComponent", e.target.files[0]); // 目前单选，默认取第一个
      // const file = e.target.files[0];
      // fileObj = file
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
      // const blobFile = new Blob([file]);
      // const slice_blob = blobFile.slice(0, 5000);
      // 再把切割后的文件blob 再次转化为file对象，进而上传，这就是文件分片上传的原理
      // const slice_file = new File([slice_blob], "test.png");
      // 通过fileReader 转化文件格式
      // const FR = new FileReader();
      // FR.readAsDataURL(slice_file);
      // 由于转化是异步的， 因此需要监听它上传成功后的事件，我们在回调中打印看看
      // FR.onload = () => {
      //   const res = FR.result;
      //   // 由于这里的文件进行了截取，所以上传的文件只有一小部分
      //   that.imgBase64 = res;
      //   console.log("文件转化为64格式后的结果", res);
      // };
      // this.$message.success('上传成功！')

      // ====== 多文件上传
      // if (fileArr.length > 1) {
      //   this.fileList = [...this.fileList, ...fileArr];
      // } else if (fileArr.length === 1) {
      //   this.fileList.push(fileArr[0]);
      // }
      // console.log("fileList", this.fileList);

      // =====  切片上传
      const file = e.target.files[0];
      fileObj = file;
    },
    async submit() {
      console.log("submit");
      // 用formData搭载需要上传的文件
      // const _formData = new FormData()
      // _formData.append('file', fileObj)
      // // 也可以追加其他内容
      // _formData.append('file_name')
      // axios.post('xxx', _formData)

      // == 多文件上传
      // this.fileList.forEach((file) => {
      //   const _formData = new FormData();
      //   //用formData搭载需要上传的文件
      //   _formData.append(file.name + "file_name", file);
      //   axios.post("xxx", _formData);
      // });

      // 切片上传 - 单文件为例
      // 对文件进行切片
      // fileObj 为 获取到的文件实例
      const fileSize = fileObj.size;
      console.log('fileSize', fileSize)
      const limitSize = 10 * 1024;
      let currentSize = 0;

      while (currentSize < fileSize) {
        await fileUploadService(
          fileObj.slice(currentSize, currentSize + limitSize)
        );
        currentSize += limitSize;
        // 超过100， 取100
        this.percentage = Math.min((currentSize / fileSize) * 100, 100);
      }
    },
  },
  mounted() {},
  watch: {},
  components: { Divider },
};
</script>
<style scoped>
.imgContainer {
  display: flex;
  align-items: center;
  justify-content: center;
}
.imgBox {
  width: 400px;
  height: 400px;
}
</style>

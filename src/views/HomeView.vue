<template>
  <div class="home">
    <div>
      <button @click="toCascader">跳转cascader</button>
    </div>
    <Divider />
    <div>
      <div style="margin-bottom: 20px;">demo</div>
      <FileUploadComponent />
    </div>
  </div>
</template>

<script>
import { Divider } from "element-ui";
import FileUploadComponent from '../components/FileUpload/FileUploadComponent'

export default {
  components: {
    FileUploadComponent,
    Divider
  },
  data() {
    return {

    };
  },
  methods: {
    toCascader() {
      this.$router.push('/cascader')
    }
  },
  created() {

  },
};
</script>

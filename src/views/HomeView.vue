<template>
  <div class="home">
    <div class="link-container">
      <router-link to="three">ThreeDemo</router-link>
      <router-link to="cascader">cascader</router-link>
      <router-link to="dialog">dialog</router-link>
      <router-link to="classTable">classTable</router-link>
      <router-link to="pagDemo">pag-demo</router-link>
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

<style scoped>
.link-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
</style>

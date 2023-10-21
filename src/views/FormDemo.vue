<template>
  <div class="home">
    <el-button type="success" @click="showDialog">显示弹窗</el-button>
    <el-dialog title="提示" :visible.sync="dialogVisible" width="40%">
      <div v-for="(item, index) in forms" :key="index">
        <el-form ref="form" :model="forms[index]" label-width="80px">
          <el-form-item :label='`活动名称${index + 1}`'>
            <el-input
              v-model="forms[index].name"
              style="display: inline-block; width: 200px; margin-right: 8px"
            ></el-input>
            <i class="el-icon-delete" @click="removeForm(index)"></i>
          </el-form-item>
          <el-form-item label="时间选择" :required="true">
            <el-date-picker
              type="dates"
              v-model="forms[index]['datePicker']"
              placeholder="选择一个或多个日期"
            >
            </el-date-picker>
          </el-form-item>
        </el-form>
        <el-button type="success" @click="addForm(index)">增加</el-button>
      </div>
    </el-dialog>
    <el-button @click="consoleForms">输出表单实例</el-button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dialogVisible: false,
      // form: [{ name: "", value4: [] }],
      forms: [
        {
          name: '',
          datePicker: []
        }
      ]
    };
  },
  methods: {
    showDialog() {
      this.dialogVisible = true;
    },
    addForm() {
      this.forms.push({
        name: '',
        datePicker: []
      });
    },
    removeForm(index) {
      if (this.forms.length > 1) {
        this.forms.splice(index, 1);
      } else {
        this.$message({
          message: '最后一个表单无法删除！',
          type: 'warning'
        });
      }
    },
    consoleForms() {
      console.log('consoleForms', this.forms)
    }
  },
};
</script>

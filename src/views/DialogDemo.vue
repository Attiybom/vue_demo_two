<template>
  <div class="dialog">
    <div>第一组</div>
    <el-button
      type="primary"
      v-for="(item) in btnList1"
      :key="item.id"
      @click="showDialog(item.src,item.name)"
      >{{ item.name }}</el-button
    >
    <div>第二组</div>
    <el-button
      type="primary"
      v-for="(item)  in btnList2"
      :key="item.id"
      @click="showDialog(item.src,item.name)"
      >{{ item.name }}</el-button
    >
    <div>第三组</div>
    <el-button
      type="primary"
      v-for="(item)  in btnList3"
      :key="item.id"
      @click="showDialog(item.src,item.name)"
      >{{ item.name }}</el-button
    >

    <el-dialog title="提示" :visible.sync="dialogVisible" width="30%">
      <DialogCpn :src="src" :name="name"></DialogCpn>
    </el-dialog>
  </div>
</template>

<script>
import DialogCpn from "../components/DialogCpn.vue";
import { getDialogData } from "@/services/dialog";

export default {
  components: {
    DialogCpn,
  },
  data() {
    return {
      dialogVisible: false,
      src: "",
      name: '',
      oriData: {},
      btnList1: [],
      btnList2: [],
      btnList3: [],

    };
  },
  methods: {
    showDialog(src,name) {
      this.name = name
      this.src = src;
      this.dialogVisible = true;
    },
  },
  async created() {
    const res = await getDialogData()
    this.oriData = res.list
    for (const item in this.oriData) {
      this[item] = this.oriData[item]
    }
  },
};
</script>

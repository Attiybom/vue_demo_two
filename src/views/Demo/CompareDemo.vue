<template>
  <div>dataconver</div>
</template>

<script>
import { res, dataFormSupplierInput, diffAttrList } from "./data.js";
export default {
  data() {
    return {
      res,
      // 拿supplierInfoFormDB的数据 供应商库的供应商信息
      supplierInfoFormDB: {},
      //dataFormSupplierInput 供应商详情信息
      dataFormSupplierInput,
      // diffAttrList,
      diffData: [],
    };
  },
  methods: {
    getSupplierInfoFormDB() {
      const supplierInfoFormDB = this.composeDataFormDB(this.res);
      Object.assign(this.supplierInfoFormDB, supplierInfoFormDB);
      // console.log('assign', this.supplierInfoFormDB)
    },
    composeDataFormDB(rawData) {
      const cData = {};
      diffAttrList.forEach((item) => {
        // 判断是否是字段数组
        if (Array.isArray(item.attrNameOfDB)) {
          // 再次循环，单独存储
          // 由于对比的字段肯定一致，因此只判断其中一个是否是字段数组就可以，也因此只要针对一个循环存储
          item.attrNameOfDB.forEach((attr) => {
            cData[attr] = rawData[attr] || "";
          });
        } else {
          cData[item.attrNameOfSupplier] = rawData[item.attrNameOfDB];
        }
      });
      return cData;
    },

    calculateDiffData() {
      const dataFormSupplierInput = this.dataFormSupplierInput;
      const { supplierInfoFormDB } = this;

      const diffData = [];
      for (const { label, attrNameOfDB, attrNameOfSupplier } of diffAttrList) {
        let dbValue; // 最后用来存储到diffData
        let supplierValue;

        if (Array.isArray(attrNameOfDB) && Array.isArray(attrNameOfSupplier)) {
          // 把需要对比的两个数组，他们的value存在数组里面
          const propertiesFromDB = attrNameOfDB.map(
            (attr) => supplierInfoFormDB[attr] || ""
          );
          const propertiesFromSupplier = attrNameOfSupplier.map(
            (attr) => dataFormSupplierInput[attr] || ""
          );

          // 字段数组
          // 合并成字符串，这一步看你自己需要对数据进行什么操作改
          dbValue = propertiesFromDB.join(" - ");
          supplierValue = propertiesFromSupplier.join(" - ");
        } else {
          // 单个字段
          // 直接存
          dbValue = supplierInfoFormDB[attrNameOfDB];
          supplierValue = dataFormSupplierInput[attrNameOfSupplier];
        }

        // 比对，存储
        if (dbValue !== supplierValue) {
          // console.log("includes", dbValue.includes(" - "));
          diffData.push({
            diffPropertyName: label,
            propertyValueFormDB: dbValue.includes(" - ") ? dbValue.split(" - ") : dbValue,
            propertyValueFormSupplier: supplierValue.includes(" - ") ? supplierValue.split(" - ") : supplierValue,
          });
        }
      }1
      this.diffData = diffData;
      console.log("finally-diffData", diffData);
    },
  },
  async mounted() {
    await this.getSupplierInfoFormDB();
    await this.calculateDiffData();
  },
};
</script>
<style scoped></style>

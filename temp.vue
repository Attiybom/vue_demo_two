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
    },
    composeDataFormDB(rawData) {
      const cData = {};
      diffAttrList.forEach((item) => {
        // 检查是否为数组字段
        if (
          Array.isArray(item.attrNameOfDB) &&
          Array.isArray(item.attrNameOfSupplier)
        ) {
          const propertiesFromDB = [];

          for (let i = 0; i < item.attrNameOfDB.length; i++) {
            const dbAttr = item.attrNameOfDB[i];
            propertiesFromDB.push(rawData[dbAttr] || "");
          }
          console.log('item-', item.attrNameOfSupplier)
          console.log('item-', propertiesFromDB)
          cData[item.attrNameOfSupplier.join(" - ")] =
            propertiesFromDB.join(" - ");
        } else {
          cData[item.attrNameOfSupplier] = rawData[item.attrNameOfDB];
        }
      });
      console.log('cData', cData)
      return cData;
    },
    calculateDiffData() {
      // 对比数据
      const dataFormSupplierInput = this.dataFormSupplierInput;
      const { supplierInfoFormDB } = this;

      // 异常数据存储
      const diffData = [];

      for (const { label, attrNameOfDB, attrNameOfSupplier } of diffAttrList) {
        // 判断对比字段是否是数组形式
        const isArrayField =
          Array.isArray(attrNameOfDB) && Array.isArray(attrNameOfSupplier);

        // 数组形式(复数字段)
        if (isArrayField) {
          console.log("isArrayField", isArrayField);

          let isDifferent = false; // 标识数组中的字段是否有不同
          const propertiesFromDB = [];
          const propertiesFromSupplier = [];

          for (let i = 0; i < attrNameOfDB.length; i++) {
            const dbAttr = attrNameOfDB[i];
            const supplierAttr = attrNameOfSupplier[i];
            propertiesFromDB.push(supplierInfoFormDB[dbAttr] || "");
            propertiesFromSupplier.push(
              dataFormSupplierInput[supplierAttr] || ""
            );

            if (propertiesFromDB[i] !== propertiesFromSupplier[i]) {
              isDifferent = true;
            }
          }
          if (isDifferent) {
            diffData.push({
              diffPropertyName: label,
              propertyValueFormDB: propertiesFromDB.join(" - "),
              propertyValueFormSupplier: propertiesFromSupplier.join(" - "),
            });
            console.log("propertiesFromDB", propertiesFromDB);
            console.log("propertiesFromDB", propertiesFromDB);
          }

          setTimeout(() => {
            console.log("复述形式", diffData);
          });
        } else {
          // 单个字段
          console.log(
            "single",
            label,
            supplierInfoFormDB[attrNameOfDB] || "无",
            dataFormSupplierInput[attrNameOfSupplier]
          );
          console.log(
            "sing-bool",
            supplierInfoFormDB[attrNameOfDB] !==
              dataFormSupplierInput[attrNameOfSupplier]
          );
          if (
            supplierInfoFormDB[attrNameOfDB] !==
            dataFormSupplierInput[attrNameOfSupplier]
          ) {
            diffData.push({
              diffPropertyName: label,
              propertyValueFormDB: supplierInfoFormDB[attrNameOfDB],
              propertyValueFormSupplier:
                dataFormSupplierInput[attrNameOfSupplier],
            });
          }
          setTimeout(() => {
            console.log("单个形式", diffData);
          });
          // 原始对比
          // if (
          //   supplierInfoFormDB[attrNameOfDB] === undefined ||
          //   supplierInfoFormDB[attrNameOfSupplier === null]
          // ) {
          //   continue;
          // }
          // if (
          //   dataFormSupplierInput[attrNameOfDB] === undefined ||
          //   dataFormSupplierInput[attrNameOfSupplier === null]
          // ) {
          //   continue;
          // }
          // if (
          //   supplierInfoFormDB[attrNameOfDB] !==
          //   dataFormSupplierInput[attrNameOfSupplier]
          // ) {
          //   diffData.push({
          //     diffPropertyName: label,
          //     propertyValueFormDB: supplierInfoFormDB[attrNameOfDB],
          //     propertyValueFormSupplier:
          //       dataFormSupplierInput[attrNameOfSupplier],
          //   });
          //   this.diffData = diffData;
          // }
        }
        setTimeout(() => {
          console.log("最后形式", diffData);
        });
      }
    },
  },
  async mounted() {
    await this.getSupplierInfoFormDB();
    await this.calculateDiffData();
  },
};
</script>
<style scoped></style>

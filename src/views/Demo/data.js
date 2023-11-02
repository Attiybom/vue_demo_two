// const supplierInfoFormDB = {
const res = {
  company: "平安人寿",
  companySimple: "",
  stockDataStart: null,
  stockData: null,
  branchType: 1,
  idcardStart: null,
  idcardEnd: null,
};
const dataFormSupplierInput = {
  company: "中国人寿",
  companySimple: "中寿",
  stockData: "2027-11-01 00:00:00",
  stockDataStart: "2020-10-01",
  branchType: 0,
  idcardStart: "1990-07-09",
  idcardEnd: "2025-07-09",
};

const diffAttrList = [
  {
    label: "企业名称",
    attrNameOfDB: "company",
    attrNameOfSupplier: "company",
  },
  {
    label: "企业简称（字号）",
    attrNameOfDB: "companySimple",
    attrNameOfSupplier: "companySimple",
  },
  {
    label: "营业期限",
    attrNameOfDB: ["stockDataStart", "stockData"],
    attrNameOfSupplier: ["stockDataStart", "stockData"],
  },
  {
    label: "是否为分公司",
    attrNameOfDB: "branchType",
    attrNameOfSupplier: "branchType",
  },
  {
    label: "身份证有效期",
    attrNameOfDB: ["idcardStart", "idcardEnd"],
    attrNameOfSupplier: ["idcardStart", "idcardEnd"],
  },
];

export { res, dataFormSupplierInput, diffAttrList };

const categoryRespList = [
  {
    type: "service",
    topCode: "yi",
    topName: "医",
    Code: "ganmao",
    Name: "感冒",
  },
  {
    type: "service",
    topCode: "yi",
    topName: "医",
    Code: "fashao",
    Name: "发烧",
  },
  {
    type: "service",
    topCode: "zhu",
    topName: "住",
    Code: "ganmao",
    Name: "公寓",
  },
  {
    type: "service",
    topCode: "zhu",
    topName: "住",
    Code: "bieye",
    Name: "别野",
  },
  {
    type: "goods",
    topCode: "chi",
    topName: "吃",
    Code: "fan",
    Name: "饭",
  },
  {
    type: "goods",
    topCode: "chi",
    topName: "吃",
    Code: "chi",
    Name: "面",
  },
  {
    type: "goods",
    topCode: "he",
    topName: "喝",
    Code: "yinliao",
    Name: "饮料",
  },
  {
    type: "drivers",
    topCode: "xing",
    topName: "行",
    Code: "ditie",
    Name: "地铁",
  },
  {
    type: "drivers",
    topCode: "xing",
    topName: "行",
    Code: "gongjiao",
    Name: "公交",
  },
  {
    type: "drivers",
    topCode: "xing",
    topName: "行",
    Code: "qiche",
    Name: "汽车",
  },
];

const obj = {};
categoryRespList.forEach((item) => {
  const { type, topName, Name, Code } = item;

  if (!obj[type]) {
    obj[type] = { ...item, Codes: [], Names: [], topNames: [] };
  }

  if (!obj[type].topNames.includes(topName)) {
    obj[type].topNames.push(topName);
  }
  if (!obj[type].Codes.includes(Code)) {
    obj[type].Codes.push(Code);
  }
  if (!obj[type].Names.includes(Name)) {
    obj[type].Names.push(Name);
  }
});

const objArr = Object.values(obj);
console.log("objArr", objArr);

// export default categoryRespList;

import axios from "./index";

// 测试用例
export async function getTestData1() {
  const url = "/api/test1";
  const data = await axios.get(url);
  console.log("axios.get(url)", axios.get(url));
  return data;
}
// 测试用例2
export async function getTestData2() {
  const url = "/api/test2";
  const data = await axios.get(url);

  return data;
}

// 测试用例3 - 下架接口
export async function removeFromShelvesReq500() {
  const url = "/api/removeFromShelves";
  const data = await axios.get(url);

  return data;
}
// 测试用例4 - 下架接口2
export async function removeFromShelvesReq200() {
  const url = "/api/test4";
  const data = await axios.get(url);

  return data;
}

// 测试用例5 - 上架接口
export async function groundingReq() {
  const url = "/api/test4";
  const data = await axios.get(url);

  return data;
}

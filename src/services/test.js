import axios from ".";

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

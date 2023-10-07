import axios from ".";

// 测试用例
export async function getTabData() {
  const url = "/api/tabs";
  const data = await axios.get(url);

  return data;
}

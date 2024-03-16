import axios from ".";

// 测试用例
export async function getPagFileReq() {
  const url = "/api/pagFile";
  const data = await axios.get(url);

  return data;
}

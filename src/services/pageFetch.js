import axios from ".";

// 测试用例
export async function pageFetchReq() {
  const url = "/api/pageFetch";
  const data = await axios.get(url);

  return data;
}

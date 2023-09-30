import axios from ".";

// 测试用例
export async function getDialogData() {
  const url = "/api/dialog";
  const data = await axios.get(url);

  return data;
}

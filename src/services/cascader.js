import axios from ".";

// 测试用例
export async function getTestCascaderData() {
  const url = '/api/cascaderTest'
  const data = await axios.get(url)

  return data
}
// 请求级联数据
export async function getCascaderData() {
  const url = '/api/cascaderList'
  const data = await axios.get(url)

  return data
}

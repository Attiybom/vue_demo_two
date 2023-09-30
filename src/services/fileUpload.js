import axios from ".";

// 文件上传（模拟）
export async function fileUploadService(option) {
  const url = "/api/fileUpload";

  const data = await axios.post(url, option);

  return data;
}

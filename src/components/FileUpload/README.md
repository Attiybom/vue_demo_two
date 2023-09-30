# 前端文件上传 & 文件相关操作
*  上传方式
1.  二进制blob传输 => 用formData搭载file，从而使得文件可以从前端传递给后端
```js
<template>
  <div>
    <input type="file" name="file" @change="fileChange" >
    <button @click="submit">提交</button>
  </div>
</template>

// 通过e.target.files能拿到上传后的文件数组
fileChange(e) {
  console.log('FileUploadComponent', e.target.files)
  // 单个文件上传默认取第一个就可以了
    {/* console.log('FileUploadComponent', e.target.files[0]) */}
},
```
![Alt text](image.png)
* 当我们上传单个文件后，就能拿到该文件的信息，特别注意name，size，type
* 实际开发中，我们有可能会有各种的需求，比如说限制文件的大小(size), 文件的类型(type/name)，
* 文件的切割，我们可以把得到的file对象转化成blob对象，并利用blob的slice方法对原文件进行切割
```js


```


2. base64传输 - 后端需要解析  <- 通过fileReader将文件转化为base64再传递给后端

* 与文件相关的对象
1. file => 通过input标签读过来的文件对象，本质上是blob的子类，但无法直接把file给后端，因此需要一个前后端都认识的东西 => formData
2. blob => 不可变的二进制内容，包含很多操作方法
3. formData => 用于和后端传输的对象
4. fileReader => 多用于把文件读取为某种形式，比如base64/text文本

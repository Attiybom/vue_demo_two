<template>
  <div class="home">
    <span>{{ userInfo }}</span>
    <button @click="handleChange">change-userInfo</button>
  </div>
</template>

<script setup>

import { reactive } from '@vue/composition-api'

const userInfo = reactive({
  id: 101,
  nickName: 'zhangsan'
})

function handleChange() {
  userInfo.nickName = 'lisi'
}

</script>
<style scoped></style>

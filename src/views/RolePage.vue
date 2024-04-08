<template>
  <div>
    <div v-for="(role, index) in rolesArr" class="role-item" :key="role.id" >
      <div>{{ role.name + (index + 1)}} </div>
      <input type="text" placeholder="请输入内容">

    </div>
    <br/>
    <button @click="addRole">Add</button>
  </div>
</template>




<script>
export default {
  data() {
    return {
      rolesArr: [
        {
          id: 1,
          name: '规则'
        },
      ]
    };
  },
  computed: {

  },
  methods: {
    addRole() {
      this.rolesArr.push({
        id: this.rolesArr.length + 1,
        name: '规则'
      });
    }
  }
};
</script>

<style scoped>
/* .role-item {
  display: flex;
} */
</style>

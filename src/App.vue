<template>
  <div class="p-2 info-bg-dark">
    <h1>
      <router-link to="/" class="text-white text-decoration-none">常用元件與函式</router-link>
      
    </h1>
  </div>

  <div class="d-flex">
    <nav class="d-flex flex-column col-2 p-2 min-vh-100 info-shadow">
      <router-link to="customer-management-preview" class="btn btn-light" :class="{ 'active' : $route.name == 'customer-management-preview' }" >客戶管理</router-link>
      <router-link to="query-contract" class="btn btn-light" :class="{ 'active' : $route.name == 'query-contract' }" >合約查詢</router-link>
      <router-link to="notification-management" class="btn btn-light" :class="{ 'active' : $route.name == 'notification-management' }" >通知管理</router-link>
      <hr>
      ©Copyleft
    </nav>
    <div class="col-10 p-2">
      <router-view />
    </div>
  </div>




</template>

<style lang="scss" scoped>
</style>

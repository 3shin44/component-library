<template>
  <div class="p-2 info-bg-dark">
    <h1>
      <router-link to="/" class="text-white text-decoration-none">常用元件與函式</router-link>

    </h1>
  </div>

  <div class="d-flex">
    <nav class="d-flex flex-column col-2 p-2 info-shadow nav-height">
      <!-- render router list by "renderList" -->
      <div v-for="(item, index) in renderList" :key="index">
        <!-- Type: Catagory -->
        <div v-if="item.type == 'title'">
          <p class="fs-6 fw-bolder"><font-awesome-icon :icon="item.routerLink" /> {{item.pageName}}</p>
        </div>

        <!-- Type: Article -->
        <div v-else>
          <router-link :to="item.routerLink" class="btn btn-light w-100"
            :class="{ 'active' : $route.name == item.routerLink }">
            {{item.pageName}}
          </router-link>
        </div>
      </div>

      <hr>
      © Copyleft
    </nav>
    <div class="col-10 p-2">
      <!-- default page content -->
      <div v-if="$route.name==null" class="w-100 px-3">
        <p class="text-center fs-3"> - the task is failed successfully -</p>
        <br>
        <p class="fw-bold">說明</p>
        <p>本專案為常用元件與函式庫，僅供查詢使用</p>
        <br>
        <p class="fw-bold">重要套件與版本</p>
        <ul>
          <li>bootstrap: ^5.2.3 / popperjs: ^2.11.6</li>
          <li>fortawesome: ^6.2.1</li>
          <li>element-plus: ^2.2.26</li>
          <li>vue: ^3.2.13</li>
          <li>vue-router: ^4.0.3</li>
          <li>vuex: ^3.2.13</li>
          <li>vue: ^4.0.0</li>
        </ul>
      </div>
      <router-view />
    </div>
  </div>

</template>

<script>
  import { reactive, toRefs } from 'vue'

  export default {
    name: 'App',

    setup() {
      const data = reactive({
        // 頁面清單
        renderList: [
          // Catagory: type="title", routerLink = "fontAwesome string", pageName="title name"
          // Article: type="link", routerLink = "router path", pageName="article name"
          {
            type: "title",
            routerLink: "fa-solid fa-cubes",
            pageName: "元件"
          },
          {
            type: "title",
            routerLink: "fa-solid fa-code",
            pageName: "語法"
          },
          {
            type: "link",
            routerLink: "sort-by-date",
            pageName: "陣列中物件排序"
          },
          {
            type: "title",
            routerLink: "fa-solid fa-chart-area",
            pageName: "版面配置(跑版)"
          },
          {
            type: "link",
            routerLink: "iphone-fullscreen",
            pageName: "iPhone跑版"
          },
          {
            type: "title",
            routerLink: "fa-solid fa-gears",
            pageName: "專案環境建置"
          },
          {
            type: "title",
            routerLink: "fa-solid fa-gears",
            pageName: "LEGACY"
          },
          {
            type: "link",
            routerLink: "test-field",
            pageName: "TEST FIELD"
          },
          {
            type: "link",
            routerLink: "customer-management-preview",
            pageName: "客戶管理"
          },
          {
            type: "link",
            routerLink: "query-contract",
            pageName: "合約查詢"
          },
        ]
      })

      return {
        ...toRefs(data),
      }
    }
  }
</script>

<style lang="scss" scoped>
</style>
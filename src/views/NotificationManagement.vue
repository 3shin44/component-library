<template>
  <div class="notification-management-tabs">
    <h2 class="text-center py-3">通知管理</h2>

    <!-- <div class="info-row pb-1">
      <el-button type="primary"><font-awesome-icon class="pe-1" icon="fa-solid fa-plus" /> 新增</el-button>
    </div> -->

    <div class="d-flex justify-content-start flex-wrap border p-3 bg-secondary bg-opacity-10 rounded-3">

      <div class="col-12 p-2">
        <h3 class="text-center">新增合約到期通知</h3>
      </div>

      <div class="info-row">
        <div class="col-2 lh-lg fw-bold text-center">設定項目</div>
        <div class="col-2 lh-lg fw-bold text-center">預設狀態</div>
        <div class="col-8 lh-lg fw-bold text-center">自定義條件</div>
      </div>

      <div class="info-row">
        <div class="col-4">主旨</div>
        <div class="col-8">
          <el-input class="w-100" v-model="title" />
        </div>
      </div>

      <div class="info-row">
        <div class="col-4">對象</div>
        <div class="col-4">
          <el-input class="w-100" v-model="manualContact" placeholder='手動輸入, 請以","分隔, 如: name1@com, name2@com' />
        </div>
        <div class="col-4">
          <el-select v-model="SelectContact" class="w-100" multiple :clearable="true" placeholder="通訊錄" :collapse-tags="true" >
            <el-option
              v-for="(item, index) in contacts"
              :key="index"
              :label="item"
              :value="item"
            />
          </el-select>
        </div>
      </div>

      <div class="info-row">
        <div class="col-4">設定日期</div>
        <div class="col-8">
          <el-select v-model="SelectDate" multiple placeholder="選擇日期"  :clearable="true" >
            <el-option v-for="(item, index) in 31" :key="index" :label="item" :value="item" />
          </el-select>
        </div>
      </div>

      <div class="info-row">
        <div class="col-4">設定時間</div>
        <div class="col-8">
          <el-select v-model="SelectTime" multiple placeholder="選擇時間"  :clearable="true" >
            <el-option v-for="(item, index) in 24" :key="index" :label="item" :value="item" />
          </el-select>
        </div>
      </div>

      <div class="info-row">
        <div class="col-2 d-flex align-items-center">
          <p>合約起算日</p>
        </div>
        <div class="col-2 d-flex justify-content-center align-items-center">
          <el-switch v-model="initDate_Default" class="align-items-center" active-text="不限" />
        </div>
        <div class="col-8 d-flex justify-content-start align-items-center">
          <div>
            <el-date-picker :disabled="initDate_Default" v-model="initDate" type="daterange" range-separator="至"
              start-placeholder="起始日期" end-placeholder="結束日期" />
          </div>
        </div>
      </div>

      <div class="info-row" v-for="(item, index) in queryType" :key="index">
        <div class="col-2 d-flex align-items-center">
          <p>{{ item.queryItem }}</p>
        </div>
        <div class="col-2 d-flex justify-content-center align-items-center">
          <el-switch v-model="item.defaultNotSelect" class="align-items-center" active-text="不限" />
        </div>
        <div class="col-8 d-flex justify-content-start align-items-center">
          <div>
            <SelectItem :source-data="item.conditions" :default-disabled="item.defaultNotSelect"
              @selected-items="result=>item.results = result" />
          </div>
        </div>
      </div>

      <div class="col-12 d-flex justify-content-center mt-3">
        <el-button type="primary">新增</el-button>
      </div>

    </div>
  </div>
</template>

<script>
  import { reactive, toRefs } from 'vue'
  import SelectItem from '../components/SelectItem.vue'
  export default {
    name: 'NotificationManagement',
    components: {
      SelectItem
    },
    setup() {
      const sectionData = reactive({
        SelectDate: [],
        SelectTime: [],
        SelectContact: [],
        title: "",
        manualContact: "",
        contacts: ["Wayne", "Jonny", "George", "Frank", "Susan", "Leo"],
        initDate_Default: true,
        initDate: [],
        queryType: [
          {
            queryItem: "合約業務員",
            defaultNotSelect: true,
            conditions: ["業務員A", "業務員B", "業務員C"],
            results: []
          },
          {
            queryItem: "合約類型",
            defaultNotSelect: true,
            conditions: ["一般合約", "維護合約"],
            results: []
          }
        ]
      })

      return {
        ...toRefs(sectionData),

      }
    }
  }
</script>

<style scoped>

</style>
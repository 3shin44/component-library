<template>
  <div class="query-contract-query w-100">
    <div class="col-12 p-2">
      <h3 class="text-center">合約查詢</h3>
    </div>

    <div class="info-row">
      <div class="col-2 lh-lg fw-bold text-center">查詢項目</div>
      <div class="col-2 lh-lg fw-bold text-center">預設查詢</div>
      <div class="col-8 lh-lg fw-bold text-center">自定義條件</div>
    </div>

    <div class="info-row">
      <div class="col-2  d-flex align-items-center">
        <p>合約起算日</p>
      </div>
      <div class="col-2  d-flex justify-content-center align-items-center">
        <el-switch v-model="initDate_Default" class="align-items-center" active-text="不限" />
      </div>
      <div class="col-8  d-flex justify-content-start align-items-center">
        <div>
          <el-date-picker :disabled="initDate_Default" v-model="initDate" type="daterange" range-separator="至"
            start-placeholder="起始日期" end-placeholder="結束日期" />
        </div>
      </div>
    </div>

    <div class="info-row">
      <div class="col-2 d-flex align-items-center">
        <p>合約到期日</p>
      </div>
      <div class="col-2 d-flex justify-content-center align-items-center">
        <el-switch v-model="expireDate_Default" class="align-items-center" active-text="不限" />
      </div>
      <div class="col-8 d-flex justify-content-start align-items-center">
        <div>
          <el-date-picker :disabled="expireDate_Default" v-model="expireDate" type="daterange" range-separator="至"
            start-placeholder="起始日期" end-placeholder="結束日期" />
        </div>
      </div>
    </div>

    <div class="info-row">
      <div class="col-2 d-flex align-items-center">
        <p>產業</p>
      </div>
     
      <div class="col-2 d-flex justify-content-center align-items-center">
        <el-switch v-model="customer_Default" class="align-items-center" active-text="不限" />
      </div>
      <div class="col-2 d-flex justify-content-center align-items-center">
        <el-select v-model="sectionSelect" multiple collapse-tags placeholder="產業" :clearable="true"
          :disabled="customer_Default">
          <el-option v-for="(item, index) in section" :key="index" :label="item" :value="item" />
        </el-select>
      </div>
      <div class="col-2 d-flex justify-content-center align-items-center">
        <el-select v-model="custNameSelect" multiple collapse-tags placeholder="客戶名稱" :clearable="true"
          :disabled="customer_Default">
          <el-option v-for="(item, index) in custName" :key="index" :label="item" :value="item" />
        </el-select>
      </div>
      <div class="col-2 d-flex justify-content-center align-items-center">
        <el-select v-model="custIdSelect" multiple collapse-tags placeholder="客戶編號" :clearable="true"
          :disabled="customer_Default">
          <el-option v-for="(item, index) in custId" :key="index" :label="item" :value="item" />
        </el-select>
      </div>
      <div class="col-2 d-flex justify-content-center align-items-center">
        <el-select v-model="agentSelect" multiple collapse-tags placeholder="負責業務" :clearable="true"
          :disabled="customer_Default">
          <el-option v-for="(item, index) in agent" :key="index" :label="item" :value="item" />
        </el-select>
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
      <el-button type="primary">查詢</el-button>
    </div>
  </div>
</template>

<script>
  import { reactive, toRefs } from 'vue'
  import SelectItem from '../../components/SelectItem.vue'
  export default {
    name: 'QueryContractQuery',
    components: {
      SelectItem
    },
    setup() {
      const queryData = reactive({
        // Default皆為預設查詢條件
        initDate_Default: true,
        initDate: [],

        expireDate_Default: true,
        expireDate: [],

        customer_Default: true,
        section: ["金融", "證券", "保險"],
        sectionSelect: [],
        custName: ["國泰", "富邦", "兆豐"],
        custNameSelect: [],
        custId: ["A001", "A002", "B001"],
        custIdSelect: [],
        agent: ["James", "Jenny", "Winnie"],
        agentSelect: [],


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
          },
          {
            queryItem: "合約寄出狀態",
            defaultNotSelect: true,
            conditions: ["未寄出", "已寄出"],
            results: []
          },
          {
            queryItem: "繳款狀態",
            defaultNotSelect: true,
            conditions: ["未繳清", "已繳清"],
            results: []
          },
          {
            queryItem: "專案驗收狀態",
            defaultNotSelect: true,
            conditions: ["未驗收", "已驗收"],
            results: []
          },
          {
            queryItem: "定期維護",
            defaultNotSelect: true,
            conditions: ["未完成", "已完成"],
            results: []
          },
          {
            queryItem: "檔案歸檔",
            defaultNotSelect: true,
            conditions: ["未歸檔", "已歸檔"],
            results: []
          },
          {
            queryItem: "合約類型",
            defaultNotSelect: true,
            conditions: ["未寄出", "已寄出"],
            results: []
          }
        ],
        foo_array: [],
        bar_options: [1, 2, 3]
      })

      const queryMethods = reactive({
      })

      function isDateSelected(datePicker, control) {
        datePicker
      }

      return {
        ...toRefs(queryData),
        ...toRefs(queryMethods),
      }
    }
  }
</script>

<style scoped>

</style>
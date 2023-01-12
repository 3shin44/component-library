<template>
  <div class="query-contract-tabs">
    <h2 class="text-center py-3">合約查詢</h2>

    <div class="btn-group">
      <button v-for="(item, index) in subviewList" :key="index"
        @click="currentComponent = item.subview"
        :class="{'active' : currentComponent == item.subview}"
        type="button" class="btn btn-outline-primary btn-sm mb-2">
        {{item.name}}
      </button>
    </div>

    <div class="d-flex justify-content-start flex-wrap border p-3 bg-secondary bg-opacity-10 rounded-3">
      <!-- 依據業務劃分為次元件: 合約查詢, 款項查詢, 定維查詢 -->
      <component :is="currentComponent"></component>

    </div>
  </div>
</template>


<script>
  import { reactive, toRefs } from 'vue'
  import QueryContractQuery from './subviews/QueryContractQuery.vue'
  import QueryContractPayment from './subviews/QueryContractPayment.vue'
  import QueryContractMaintain from './subviews/QueryContractMaintain.vue'

  export default {
    name: 'QueryContract',
    components: {
      QueryContractQuery, QueryContractPayment, QueryContractMaintain
    },
    setup() {
      const data = reactive({
        currentComponent: 'QueryContractQuery',
        subviewList: [
          {
            subview: 'QueryContractQuery',
            name: '合約查詢'
          },
          {
            subview: 'QueryContractPayment',
            name: '款項查詢'
          },
          {
            subview: 'QueryContractMaintain',
            name: '定期維護查詢'
          }
        ]
      })

      return {
        ...toRefs(data),

      }
    }
  }
</script>

<style scoped>

</style>
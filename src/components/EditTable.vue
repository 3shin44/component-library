<template>
    <div class="edit-table">

        <el-table border :data="gridData">
            <el-table-column v-for="(item, index) in sourceData" 
            property="contact" label="客戶聯絡人" />
        </el-table>
  
    </div>
  </template>
  
  <script>
    import { reactive, toRefs } from 'vue'
    export default {
      name: 'EditTable',
      props:{

      },
      setup(props) {
      const data = reactive({ 
        sourceData: []
      })
  
      return {
        ...toRefs(data),
        }
      }
    }
    </script>
  
    <style lang="scss">

    </style>
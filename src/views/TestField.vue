<template>
  <div class="test-field-tabs">
    <h2 class="text-center py-3">Test Field</h2>

    <input type="text" id="ext1" :maxlength="limitLength('ext1')" @keyup="preventHalf('ext1')">
    <p>Limit: {{ limitLength('ext1') }}</p>
    <p>Listening data: {{ syncValue }}</p>
    <p>Detect FullWidth Char: {{ isDetected }}</p>

    <div v-for="(item, index) in renderList" :key="index">
      <label :for="item.id">id: {{ item.id }}, Limit: {{ limitLength(item.id) }}  </label>
      <input type="text" :id="item.id" :maxlength="limitLength(item.id)" @keyup="preventHalf(item.id)" @change="preventHalf(item.id)">
    </div>

  </div>
</template>

<script>
  import { reactive, toRefs } from 'vue'

  export default {
    name: 'TestField',
    setup() {
      const sectionData = reactive({
        inputData: "",
        syncValue: "",
        renderList: [
          {
            id: "ext1",
            limit: 5
          },
          {
            id: "ext2",
            limit: 10
          },
          {
            id: "ext3",
            limit: 3
          }

        ]
      })

      const methods = reactive({
        // dynamic limit length
        limitLength(id) {
          let convertTable = {
            custName: "ext1",
            phone: "ext2",
            plateNumber: "ext3"
          }
          // convert to original key name
          function getKeyByValue(object, value) {
            return Object.keys(object).find(key => object[key] === value);
          }

          id = getKeyByValue(convertTable, id)

          switch (id) {
            case "custName":
              return 2

            case "phone":
              return 3

            case "plateNumber":
              return 4

          }
        },

        preventHalf(id) {
          const target = document.getElementById(id)
          target.value = target.value.replaceAll(/[\uff00-\uffff]/g, "")
        }
      })

      return {
        ...toRefs(sectionData),
        ...toRefs(methods),
      }
    }
  }
</script>

<style scoped>

</style>
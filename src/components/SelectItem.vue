<template>
  <div class="select-item">

    <el-checkbox-group v-model="selectedResult" :disabled="notSelected">
      <el-checkbox v-for="(item, index) in renderData" :key="index" :label="item" />
    </el-checkbox-group>

  </div>
</template>

<script>
  import { reactive, toRefs, watch } from 'vue'
  export default {
    name: 'SelectItem',
    props: {
      sourceData: {
        type: Array,
        default: () => []
      },
      defaultDisabled: {
        type: Boolean,
        default: true
      }
    },
    setup(props, { emit }) {
      const data = reactive({
        renderData: props.sourceData,
        selectedResult: [],
        notSelected: props.defaultDisabled
      })

      // 監看上層資料 變動時更新
      watch(props, () => {
        data.notSelected = props.defaultDisabled
        if (data.notSelected) {
          data.selectedResult = []
        }
      })

      // emit: 選擇結果
      watch(data, () => {
        emit("selected-items", data.selectedResult)
      })

      return {
        ...toRefs(data),
      }
    }
  }
</script>
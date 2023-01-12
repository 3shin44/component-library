<template>
  <div class="iphone-fullscreen-tabs">
    <h2 class="text-center py-3">iPhone 全螢幕(垂直方向)滿版跑版</h2>

  </div>
</template>

<script>
  import { reactive, toRefs } from 'vue'

  export default {
    name: 'IphoneFullscreen',
    setup() {
      const sectionData = reactive({

      })

      return {
        ...toRefs(sectionData),

      }
    }
  }
</script>

<style scoped>

</style>
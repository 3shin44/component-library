<template>
  <div class="section-name-tabs">
    <h2 class="text-center py-3">Section Name</h2>

  </div>
</template>

<script>
  import { reactive, toRefs } from 'vue'

  export default {
    name: 'SectionName',
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
<template>
  <div class="sort-by-date-tabs">
    <h2 class="text-center py-3">陣列中物件依據日期排序</h2>
    <h3 class="mt-4">Example</h3>
    <div class="border p-3 bg-secondary bg-opacity-10 rounded-3 d-flex">
      <div class="col-5 p-3">
        <div class="border p-3 bg-secondary bg-opacity-50 rounded-3 ">
<pre class="info-pre"><code>// 原始陣列
let array = [] 
array = [ 
  { 
    Date: "2022-01-01", 
    Id: 1 
  }, 
  { 
    Date: "2022-02-05", 
    Id: 2 
  }, 
  { 
    Date: "2022-03-10", 
    Id: 3 
  } 
]</code></pre>
        </div>
      </div>
      <div class="col-2 p-3 d-flex align-items-center justify-content-center">
        <div>
          <font-awesome-icon class="fa-2xl" icon="fa-solid fa-arrow-right" />
        </div>
      </div>
      <div class="col-5 p-3">
        <div class="border p-3 bg-secondary bg-opacity-50 rounded-3 ">
<pre class="info-pre"><code>// 依日期由新至舊排序
array = [ 
  { 
    Date: "2022-03-10", 
    Id: 3 
  },
  { 
    Date: "2022-02-05", 
    Id: 2 
  }, 
  { 
    Date: "2022-01-01", 
    Id: 1 
  },
]</code></pre>
        </div>
      </div>
    </div>

    <h3 class="mt-4">Function</h3>
    <div class="border p-3 bg-secondary bg-opacity-10 rounded-3">
<pre class="info-pre"><code>function sortByDate(array, dateKey) {
  array.sort( (a, b)=> {
    return new Date(b[dateKey]) - new Date(a[dateKey])
  })
}</code></pre>
    </div>

    <h3 class="mt-4">References</h3>
    <div>
      <a href="https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Array/sort">MDN: Array.prototype.sort()</a>
    </div>


  </div>
</template>

<script>
  import { reactive, toRefs } from 'vue'

  export default {
    name: 'SortByDate',
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
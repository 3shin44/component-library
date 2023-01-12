<template>
  <div class="customer-management-tabs">
    <h2 class="text-center py-3">客戶管理</h2>

    <!-- (上半部) 新增/編輯客戶資料表格 -->
    <div class="d-flex justify-content-start flex-wrap border p-3 bg-secondary bg-opacity-10 rounded-3">

      <div class="col-12 p-2">
        <h3 class="text-center">公司資料</h3>
        <div class="d-flex justify-content-between">
          <div class="d-flex justify-content-center align-items-center">
            <font-awesome-icon class="me-2" icon="fa-solid fa-pen-to-square" />
            <el-switch v-model="editCompany" />
          </div>
          <div class="d-flex justify-content-center align-items-center">
            <el-popconfirm width="220" confirm-button-text="確認" cancel-button-text="取消" confirm-button-type="danger"
              cancel-button-type="info" hide-icon @confirm="deleteCompany" title="確認刪除此公司資料?">
              <template #reference>
                <el-button size="small" type="danger" :disabled="!editCompany">
                  <font-awesome-icon icon="fa-solid fa-trash-can" />
                </el-button>
              </template>
            </el-popconfirm>
          </div>
        </div>
      </div>

      <div class="col-4 p-2">
        <p class="pb-2">客戶編號</p>
        <el-input v-model="companyInfo.companyId" :disabled="!editCompany" />
      </div>
      <div class="col-4 p-2">
        <p class="pb-2">客戶名稱</p>
        <el-input v-model="companyInfo.custName" :disabled="!editCompany" />
      </div>
      <div class="col-4 p-2">
        <p class="pb-2">產業</p>
        <el-select class="w-100" placeholder="產業" v-model="companyInfo.sector" :clearable="true" multiple collapse-tags :disabled="!editCompany">
          <el-option v-for="item in companyInfo.allSector" :key="item" :label="item" :value="item" />
        </el-select>
      </div>
      <div class="col-4 p-2">
        <p class="pb-2">負責業務</p>
        <el-select class="w-100" placeholder="負責業務" v-model="companyInfo.agent" :clearable="true" :disabled="!editCompany" multiple collapse-tags >
          <el-option v-for="(item, index) in companyInfo.allAgent" :key="index" :label="item" :value="item" />
        </el-select>
      </div>
      <div class="col-4 p-2">
        <p class="pb-2">統一編號</p>
        <el-input v-model="companyInfo.taxID" :disabled="!editCompany" />
      </div>
      <div class="col-4 p-2">
        <p class="pb-2">發票地址</p>
        <el-input v-model="companyInfo.taxAddress" :disabled="!editCompany" />
      </div>
      <div class="col-4 p-2">
        <p class="pb-2">電話</p>
        <el-input v-model="companyInfo.tel" :disabled="!editCompany" />
      </div>
      <div class="col-4 p-2">
        <p class="pb-2">傳真</p>
        <el-input v-model="companyInfo.fax" :disabled="!editCompany" />
      </div>
      <div class="col-4 p-2">
        <p class="pb-2">服務地址</p>
        <el-input v-model="companyInfo.address" :disabled="!editCompany" />
      </div>
      <div class="col-4 p-2">
        <p class="pb-2">備註</p>
        <el-input v-model="companyInfo.note" :disabled="!editCompany" :rows="2" type="textarea" />
      </div>

      <div class="col-12 d-flex justify-content-center">
        <el-button type="primary" :disabled="!editCompany">儲存</el-button>
      </div>

    </div>


    <!-- (下半部) 聯絡人資料 -->
    <div class="mt-5 p-3 border bg-secondary bg-opacity-10 rounded-3">
      <h3 class="text-center">聯絡人資料</h3>
      <el-button class="mb-3" type="primary" plain @click="handleInsert"><font-awesome-icon
          icon="fa-solid fa-user-plus" />新增聯絡人</el-button>
      <el-table class="pt-3" header-cell-class-name="text-center" :data="contactAddressBook">
        <el-table-column label="常用">
          <template #default="scope">
            <div class="text-center large-star">
              <el-rate size="large" clearable :max="1" v-model="scope.row.frequentContact" />
            </div>
          </template>
        </el-table-column>
        <el-table-column property="contact" label="客戶聯絡人" />
        <el-table-column property="occupation" label="職稱" />
        <el-table-column property="dept" label="所屬部門" />
        <el-table-column property="tel" label="公司電話" />
        <el-table-column property="call" label="行動電話" />
        <el-table-column property="email" label="電子信箱" />
        <el-table-column property="address" label="聯絡地址" />
        <el-table-column label="編輯" width="150">
          <template #default="scope">
            <div class="d-flex justify-content-center">
              <el-button size="small" @click="handleEdit(scope.$index, scope.row)"><font-awesome-icon
                  icon="fa-solid fa-pen" /></el-button>

              <!-- 確認刪除按鈕 -->
              <el-popconfirm width="220" persistent confirm-button-text="確認" cancel-button-text="取消"
                confirm-button-type="danger" cancel-button-type="info" hide-icon
                @confirm="handleDelete(scope.$index, scope.row)" title="確認刪除此聯絡人資料?">
                <template #reference>
                  <el-button size="small" type="danger">
                    <font-awesome-icon icon="fa-solid fa-trash-can" />
                  </el-button>
                </template>
              </el-popconfirm>
            </div>
          </template>
        </el-table-column>
      </el-table>

      <div class="d-flex justify-content-center mt-3">
        <el-button type="primary" @click="handleUpdate">儲存</el-button>
      </div>
    </div>

    <!-- 聯絡人資料 (dialog) -->
    <el-dialog v-model="openContactDialog" :close-on-click-modal="false" :close-on-press-escape="false" width="60%"
      :title="isEditContact ? '編輯聯絡人資料' : '新增聯絡人資料' ">
      <div class="row">
        <div class="col-3 pb-1 pb-1">
          常用聯絡人
        </div>
        <div class="col-9 pb-1 pb-1">
          <el-switch v-model="editItem.frequentContact" :active-value="1" :inactive-value="0" />
        </div>

        <div class="col-3 pb-1 pb-1">
          客戶聯絡人
        </div>
        <div class="col-9 pb-1 pb-1">
          <el-input v-model="editItem.contact" />
        </div>

        <div class="col-3 pb-1">
          職稱
        </div>
        <div class="col-9 pb-1">
          <el-input v-model="editItem.occupation" />
        </div>

        <div class="col-3 pb-1">
          所屬部門
        </div>
        <div class="col-9 pb-1">
          <el-input v-model="editItem.dept" />
        </div>

        <div class="col-3 pb-1">
          公司電話
        </div>
        <div class="col-9 pb-1">
          <el-input v-model="editItem.tel" />
        </div>

        <div class="col-3 pb-1">
          行動電話
        </div>
        <div class="col-9 pb-1">
          <el-input v-model="editItem.call" />
        </div>

        <div class="col-3 pb-1">
          電子信箱
        </div>
        <div class="col-9 pb-1">
          <el-input v-model="editItem.email" />
        </div>

        <div class="col-3 pb-1">
          聯絡地址
        </div>
        <div class="col-9 pb-1">
          <el-input v-model="editItem.address" />
        </div>
      </div>

      <div class="row pt-3">
        <div class="d-flex justify-content-center">
          <el-button type="primary" @click="handleUpdate">{{ isEditContact ? '儲存' : '新增' }}</el-button>
          <el-button @click="openContactDialog = false">取消</el-button>
        </div>
      </div>

    </el-dialog>

  </div>
</template>

<script>
  import { reactive, toRefs } from 'vue'

  export default {
    name: 'CustomerManagement',
    setup() {
      const companyData = reactive({
        // 公司資料編輯狀態, toggle與input鎖定狀態
        editCompany: false,
        companyInfo: {
          "companyId": "A0001",
          "custName": "亞新",
          "sector": ["證券"],
          "allSector": ["證券", "保險", "金融"],
          "agent": ["Joe", "Eric", "Kyle"],
          "allAgent": ["Joe", "Cartman", "Tony", "Bruce", "Eric", "Kyle"], 
          "taxID": "12390490",
          "taxAddress": "臺北市信義區市府路1號",
          "tel": "02-27208889",
          "fax": "02-27208889",
          "address": "臺北市信義區市府路1號",
          "note": "外縣市請撥02-27208889"
        }
      })


      // 公司資料 功能函式
      const companyMethods = reactive({
        // 刪除公司資料
        deleteCompany() {
          console.log("drop company data");
        }
      })


      // 聯絡人資料
      const contactData = reactive({
        openContactDialog: false,
        // 兩種狀態: 編輯與新增, 預設為編輯狀態
        isEditContact: true,
        currentItem: {},
        editItem: {},
        contactAddressBook: [
          {
            contact: "侯淑華",
            occupation: "處長",
            dept: "公關資訊處",
            tel: "02-27208889",
            call: "0910151101",
            email: "services@mail.taipei.gov.tw",
            address: "臺北市信義區市府路1號10樓",
            frequentContact: 1
          },
          {
            contact: "蕭柏鈞",
            occupation: "主任",
            dept: "資通安全中心",
            tel: "02-27208889",
            call: "0910151101",
            email: "services@mail.taipei.gov.tw",
            address: "臺北市信義區市府路1號10樓",
            frequentContact: 0
          },
          {
            contact: "林麗琪",
            occupation: "主秘",
            dept: "秘書室",
            tel: "02-27208889",
            call: "0910151101",
            email: "services@mail.taipei.gov.tw",
            address: "臺北市信義區市府路1號10樓",
            frequentContact: 0
          }
        ]
      })

      // 聯絡人函式
      const contactMethods = reactive({
        // 編輯
        handleEdit(index) {
          contactData.isEditContact = true
          // 更新目前編輯對象 供後續更新使用
          contactData.currentItem = contactData.contactAddressBook[index]
          // 轉換出新資料供暫存編輯用
          contactData.editItem = JSON.parse( JSON.stringify(contactData.currentItem) )
          contactData.openContactDialog = true
        },

        // 刪除
        handleDelete(index) {
          contactData.contactAddressBook.splice(index, 1)
        },

        // 插入新聯絡人
        handleInsert() {
          contactData.isEditContact = false
          contactData.editItem = {
            contact: "",
            occupation: "",
            dept: "",
            tel: "",
            call: "",
            email: "",
            address: "",
            frequentContact: 0
          }
          contactData.openContactDialog = true
        },

        // 更新
        handleUpdate() {
          if (contactData.isEditContact) {
            for (const [key, value] of Object.entries(contactData.currentItem)) {
              contactData.currentItem[key] = contactData.editItem[key]
            }
          } else {
            contactData.contactAddressBook.push(contactData.editItem)
          }
          contactData.openContactDialog = false
        }
      })

      // expose the state to the template
      return {
        // 公司
        ...toRefs(companyData),
        ...toRefs(companyMethods),
        // 聯絡人
        ...toRefs(contactData),
        ...toRefs(contactMethods),
      }
    }
  }
</script>

<style scoped>
  /* 由vue scoped產生才抓得到 */
  /* 星星變大顆 */
  .large-star .el-rate {
    --el-rate-icon-size: 25px;
  }
</style>
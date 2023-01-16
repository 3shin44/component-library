(function(){"use strict";var e={8430:function(e,t,l){var a=l(9242),n=l(3396),o=l(7139);const c={class:"p-2 info-bg-dark"},s={class:"d-flex"},i={class:"d-flex flex-column col-2 p-2 info-shadow nav-height"},d={key:0},r={class:"fs-6 fw-bolder"},u={key:1},m=(0,n._)("hr",null,null,-1),p={class:"col-10 p-2"},f={key:0,class:"w-100 px-3"},y=(0,n.uE)('<p class="text-center fs-3"> - the task is failed successfully -</p><br><p class="fw-bold">說明</p><p>本專案為常用元件與函式庫，僅供查詢使用</p><br><p class="fw-bold">重要套件與版本</p><ul><li>bootstrap: ^5.2.3 / popperjs: ^2.11.6</li><li>fortawesome: ^6.2.1</li><li>element-plus: ^2.2.26</li><li>vue: ^3.2.13</li><li>vue-router: ^4.0.3</li><li>vuex: ^3.2.13</li><li>vue: ^4.0.0</li></ul>',7),v=[y];function b(e,t,l,a,y,b){const _=(0,n.up)("router-link"),g=(0,n.up)("font-awesome-icon"),w=(0,n.up)("router-view");return(0,n.wg)(),(0,n.iD)(n.HY,null,[(0,n._)("div",c,[(0,n._)("h1",null,[(0,n.Wm)(_,{to:"/",class:"text-white text-decoration-none"},{default:(0,n.w5)((()=>[(0,n.Uk)("常用元件與函式")])),_:1})])]),(0,n._)("div",s,[(0,n._)("nav",i,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(e.renderList,((t,l)=>((0,n.wg)(),(0,n.iD)("div",{key:l},["title"==t.type?((0,n.wg)(),(0,n.iD)("div",d,[(0,n._)("p",r,[(0,n.Wm)(g,{icon:t.routerLink},null,8,["icon"]),(0,n.Uk)(" "+(0,o.zw)(t.pageName),1)])])):((0,n.wg)(),(0,n.iD)("div",u,[(0,n.Wm)(_,{to:t.routerLink,class:(0,o.C_)(["btn btn-light w-100",{active:e.$route.name==t.routerLink}])},{default:(0,n.w5)((()=>[(0,n.Uk)((0,o.zw)(t.pageName),1)])),_:2},1032,["to","class"])]))])))),128)),m,(0,n.Uk)(" © Copyleft ")]),(0,n._)("div",p,[null==e.$route.name?((0,n.wg)(),(0,n.iD)("div",f,v)):(0,n.kq)("",!0),(0,n.Wm)(w)])])],64)}var _=l(4870),g={name:"App",setup(){const e=(0,_.qj)({renderList:[{type:"title",routerLink:"fa-solid fa-cubes",pageName:"元件"},{type:"title",routerLink:"fa-solid fa-code",pageName:"語法"},{type:"link",routerLink:"sort-by-date",pageName:"陣列中物件排序"},{type:"title",routerLink:"fa-solid fa-chart-area",pageName:"版面配置(跑版)"},{type:"link",routerLink:"iphone-fullscreen",pageName:"iPhone跑版"},{type:"title",routerLink:"fa-solid fa-gears",pageName:"專案環境建置"},{type:"title",routerLink:"fa-solid fa-gears",pageName:"LEGACY"},{type:"link",routerLink:"test-field",pageName:"TEST FIELD"},{type:"link",routerLink:"customer-management-preview",pageName:"客戶管理"},{type:"link",routerLink:"query-contract",pageName:"合約查詢"}]});return{...(0,_.BK)(e)}}},w=l(89);const V=(0,w.Z)(g,[["render",b]]);var h=V,x=l(2483);const D=e=>((0,n.dD)("data-v-25a0f7b3"),e=e(),(0,n.Cn)(),e),I={class:"customer-management-tabs"},C=D((()=>(0,n._)("h2",{class:"text-center py-3"},"客戶管理",-1))),W={class:"d-flex justify-content-start flex-wrap border p-3 bg-secondary bg-opacity-10 rounded-3"},k={class:"col-12 p-2"},j=D((()=>(0,n._)("h3",{class:"text-center"},"公司資料",-1))),S={class:"d-flex justify-content-between"},U={class:"d-flex justify-content-center align-items-center"},q={class:"d-flex justify-content-center align-items-center"},N={class:"col-4 p-2"},K=D((()=>(0,n._)("p",{class:"pb-2"},"客戶編號",-1))),L={class:"col-4 p-2"},B=D((()=>(0,n._)("p",{class:"pb-2"},"客戶名稱",-1))),A={class:"col-4 p-2"},E=D((()=>(0,n._)("p",{class:"pb-2"},"產業",-1))),H={class:"col-4 p-2"},Y=D((()=>(0,n._)("p",{class:"pb-2"},"負責業務",-1))),O={class:"col-4 p-2"},T=D((()=>(0,n._)("p",{class:"pb-2"},"統一編號",-1))),z={class:"col-4 p-2"},Q=D((()=>(0,n._)("p",{class:"pb-2"},"發票地址",-1))),Z={class:"col-4 p-2"},P=D((()=>(0,n._)("p",{class:"pb-2"},"電話",-1))),M={class:"col-4 p-2"},F=D((()=>(0,n._)("p",{class:"pb-2"},"傳真",-1))),J={class:"col-4 p-2"},R=D((()=>(0,n._)("p",{class:"pb-2"},"服務地址",-1))),G={class:"col-4 p-2"},$=D((()=>(0,n._)("p",{class:"pb-2"},"備註",-1))),X={class:"col-12 d-flex justify-content-center"},ee={class:"mt-5 p-3 border bg-secondary bg-opacity-10 rounded-3"},te=D((()=>(0,n._)("h3",{class:"text-center"},"聯絡人資料",-1))),le={class:"text-center large-star"},ae={class:"d-flex justify-content-center"},ne={class:"d-flex justify-content-center mt-3"},oe={class:"row"},ce=D((()=>(0,n._)("div",{class:"col-3 pb-1 pb-1"}," 常用聯絡人 ",-1))),se={class:"col-9 pb-1 pb-1"},ie=D((()=>(0,n._)("div",{class:"col-3 pb-1 pb-1"}," 客戶聯絡人 ",-1))),de={class:"col-9 pb-1 pb-1"},re=D((()=>(0,n._)("div",{class:"col-3 pb-1"}," 職稱 ",-1))),ue={class:"col-9 pb-1"},me=D((()=>(0,n._)("div",{class:"col-3 pb-1"}," 所屬部門 ",-1))),pe={class:"col-9 pb-1"},fe=D((()=>(0,n._)("div",{class:"col-3 pb-1"}," 公司電話 ",-1))),ye={class:"col-9 pb-1"},ve=D((()=>(0,n._)("div",{class:"col-3 pb-1"}," 行動電話 ",-1))),be={class:"col-9 pb-1"},_e=D((()=>(0,n._)("div",{class:"col-3 pb-1"}," 電子信箱 ",-1))),ge={class:"col-9 pb-1"},we=D((()=>(0,n._)("div",{class:"col-3 pb-1"}," 聯絡地址 ",-1))),Ve={class:"col-9 pb-1"},he={class:"row pt-3"},xe={class:"d-flex justify-content-center"};function De(e,t,l,a,c,s){const i=(0,n.up)("font-awesome-icon"),d=(0,n.up)("el-switch"),r=(0,n.up)("el-button"),u=(0,n.up)("el-popconfirm"),m=(0,n.up)("el-input"),p=(0,n.up)("el-option"),f=(0,n.up)("el-select"),y=(0,n.up)("el-rate"),v=(0,n.up)("el-table-column"),b=(0,n.up)("el-table"),_=(0,n.up)("el-dialog");return(0,n.wg)(),(0,n.iD)("div",I,[C,(0,n._)("div",W,[(0,n._)("div",k,[j,(0,n._)("div",S,[(0,n._)("div",U,[(0,n.Wm)(i,{class:"me-2",icon:"fa-solid fa-pen-to-square"}),(0,n.Wm)(d,{modelValue:e.editCompany,"onUpdate:modelValue":t[0]||(t[0]=t=>e.editCompany=t)},null,8,["modelValue"])]),(0,n._)("div",q,[(0,n.Wm)(u,{width:"220","confirm-button-text":"確認","cancel-button-text":"取消","confirm-button-type":"danger","cancel-button-type":"info","hide-icon":"",onConfirm:e.deleteCompany,title:"確認刪除此公司資料?"},{reference:(0,n.w5)((()=>[(0,n.Wm)(r,{size:"small",type:"danger",disabled:!e.editCompany},{default:(0,n.w5)((()=>[(0,n.Wm)(i,{icon:"fa-solid fa-trash-can"})])),_:1},8,["disabled"])])),_:1},8,["onConfirm"])])])]),(0,n._)("div",N,[K,(0,n.Wm)(m,{modelValue:e.companyInfo.companyId,"onUpdate:modelValue":t[1]||(t[1]=t=>e.companyInfo.companyId=t),disabled:!e.editCompany},null,8,["modelValue","disabled"])]),(0,n._)("div",L,[B,(0,n.Wm)(m,{modelValue:e.companyInfo.custName,"onUpdate:modelValue":t[2]||(t[2]=t=>e.companyInfo.custName=t),disabled:!e.editCompany},null,8,["modelValue","disabled"])]),(0,n._)("div",A,[E,(0,n.Wm)(f,{class:"w-100",placeholder:"產業",modelValue:e.companyInfo.sector,"onUpdate:modelValue":t[3]||(t[3]=t=>e.companyInfo.sector=t),clearable:!0,multiple:"","collapse-tags":"",disabled:!e.editCompany},{default:(0,n.w5)((()=>[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(e.companyInfo.allSector,(e=>((0,n.wg)(),(0,n.j4)(p,{key:e,label:e,value:e},null,8,["label","value"])))),128))])),_:1},8,["modelValue","disabled"])]),(0,n._)("div",H,[Y,(0,n.Wm)(f,{class:"w-100",placeholder:"負責業務",modelValue:e.companyInfo.agent,"onUpdate:modelValue":t[4]||(t[4]=t=>e.companyInfo.agent=t),clearable:!0,disabled:!e.editCompany,multiple:"","collapse-tags":""},{default:(0,n.w5)((()=>[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(e.companyInfo.allAgent,((e,t)=>((0,n.wg)(),(0,n.j4)(p,{key:t,label:e,value:e},null,8,["label","value"])))),128))])),_:1},8,["modelValue","disabled"])]),(0,n._)("div",O,[T,(0,n.Wm)(m,{modelValue:e.companyInfo.taxID,"onUpdate:modelValue":t[5]||(t[5]=t=>e.companyInfo.taxID=t),disabled:!e.editCompany},null,8,["modelValue","disabled"])]),(0,n._)("div",z,[Q,(0,n.Wm)(m,{modelValue:e.companyInfo.taxAddress,"onUpdate:modelValue":t[6]||(t[6]=t=>e.companyInfo.taxAddress=t),disabled:!e.editCompany},null,8,["modelValue","disabled"])]),(0,n._)("div",Z,[P,(0,n.Wm)(m,{modelValue:e.companyInfo.tel,"onUpdate:modelValue":t[7]||(t[7]=t=>e.companyInfo.tel=t),disabled:!e.editCompany},null,8,["modelValue","disabled"])]),(0,n._)("div",M,[F,(0,n.Wm)(m,{modelValue:e.companyInfo.fax,"onUpdate:modelValue":t[8]||(t[8]=t=>e.companyInfo.fax=t),disabled:!e.editCompany},null,8,["modelValue","disabled"])]),(0,n._)("div",J,[R,(0,n.Wm)(m,{modelValue:e.companyInfo.address,"onUpdate:modelValue":t[9]||(t[9]=t=>e.companyInfo.address=t),disabled:!e.editCompany},null,8,["modelValue","disabled"])]),(0,n._)("div",G,[$,(0,n.Wm)(m,{modelValue:e.companyInfo.note,"onUpdate:modelValue":t[10]||(t[10]=t=>e.companyInfo.note=t),disabled:!e.editCompany,rows:2,type:"textarea"},null,8,["modelValue","disabled"])]),(0,n._)("div",X,[(0,n.Wm)(r,{type:"primary",disabled:!e.editCompany},{default:(0,n.w5)((()=>[(0,n.Uk)("儲存")])),_:1},8,["disabled"])])]),(0,n._)("div",ee,[te,(0,n.Wm)(r,{class:"mb-3",type:"primary",plain:"",onClick:e.handleInsert},{default:(0,n.w5)((()=>[(0,n.Wm)(i,{icon:"fa-solid fa-user-plus"}),(0,n.Uk)("新增聯絡人")])),_:1},8,["onClick"]),(0,n.Wm)(b,{class:"pt-3","header-cell-class-name":"text-center",data:e.contactAddressBook},{default:(0,n.w5)((()=>[(0,n.Wm)(v,{label:"常用"},{default:(0,n.w5)((e=>[(0,n._)("div",le,[(0,n.Wm)(y,{size:"large",clearable:"",max:1,modelValue:e.row.frequentContact,"onUpdate:modelValue":t=>e.row.frequentContact=t},null,8,["modelValue","onUpdate:modelValue"])])])),_:1}),(0,n.Wm)(v,{property:"contact",label:"客戶聯絡人"}),(0,n.Wm)(v,{property:"occupation",label:"職稱"}),(0,n.Wm)(v,{property:"dept",label:"所屬部門"}),(0,n.Wm)(v,{property:"tel",label:"公司電話"}),(0,n.Wm)(v,{property:"call",label:"行動電話"}),(0,n.Wm)(v,{property:"email",label:"電子信箱"}),(0,n.Wm)(v,{property:"address",label:"聯絡地址"}),(0,n.Wm)(v,{label:"編輯",width:"150"},{default:(0,n.w5)((t=>[(0,n._)("div",ae,[(0,n.Wm)(r,{size:"small",onClick:l=>e.handleEdit(t.$index,t.row)},{default:(0,n.w5)((()=>[(0,n.Wm)(i,{icon:"fa-solid fa-pen"})])),_:2},1032,["onClick"]),(0,n.Wm)(u,{width:"220",persistent:"","confirm-button-text":"確認","cancel-button-text":"取消","confirm-button-type":"danger","cancel-button-type":"info","hide-icon":"",onConfirm:l=>e.handleDelete(t.$index,t.row),title:"確認刪除此聯絡人資料?"},{reference:(0,n.w5)((()=>[(0,n.Wm)(r,{size:"small",type:"danger"},{default:(0,n.w5)((()=>[(0,n.Wm)(i,{icon:"fa-solid fa-trash-can"})])),_:1})])),_:2},1032,["onConfirm"])])])),_:1})])),_:1},8,["data"]),(0,n._)("div",ne,[(0,n.Wm)(r,{type:"primary",onClick:e.handleUpdate},{default:(0,n.w5)((()=>[(0,n.Uk)("儲存")])),_:1},8,["onClick"])])]),(0,n.Wm)(_,{modelValue:e.openContactDialog,"onUpdate:modelValue":t[20]||(t[20]=t=>e.openContactDialog=t),"close-on-click-modal":!1,"close-on-press-escape":!1,width:"60%",title:e.isEditContact?"編輯聯絡人資料":"新增聯絡人資料"},{default:(0,n.w5)((()=>[(0,n._)("div",oe,[ce,(0,n._)("div",se,[(0,n.Wm)(d,{modelValue:e.editItem.frequentContact,"onUpdate:modelValue":t[11]||(t[11]=t=>e.editItem.frequentContact=t),"active-value":1,"inactive-value":0},null,8,["modelValue"])]),ie,(0,n._)("div",de,[(0,n.Wm)(m,{modelValue:e.editItem.contact,"onUpdate:modelValue":t[12]||(t[12]=t=>e.editItem.contact=t)},null,8,["modelValue"])]),re,(0,n._)("div",ue,[(0,n.Wm)(m,{modelValue:e.editItem.occupation,"onUpdate:modelValue":t[13]||(t[13]=t=>e.editItem.occupation=t)},null,8,["modelValue"])]),me,(0,n._)("div",pe,[(0,n.Wm)(m,{modelValue:e.editItem.dept,"onUpdate:modelValue":t[14]||(t[14]=t=>e.editItem.dept=t)},null,8,["modelValue"])]),fe,(0,n._)("div",ye,[(0,n.Wm)(m,{modelValue:e.editItem.tel,"onUpdate:modelValue":t[15]||(t[15]=t=>e.editItem.tel=t)},null,8,["modelValue"])]),ve,(0,n._)("div",be,[(0,n.Wm)(m,{modelValue:e.editItem.call,"onUpdate:modelValue":t[16]||(t[16]=t=>e.editItem.call=t)},null,8,["modelValue"])]),_e,(0,n._)("div",ge,[(0,n.Wm)(m,{modelValue:e.editItem.email,"onUpdate:modelValue":t[17]||(t[17]=t=>e.editItem.email=t)},null,8,["modelValue"])]),we,(0,n._)("div",Ve,[(0,n.Wm)(m,{modelValue:e.editItem.address,"onUpdate:modelValue":t[18]||(t[18]=t=>e.editItem.address=t)},null,8,["modelValue"])])]),(0,n._)("div",he,[(0,n._)("div",xe,[(0,n.Wm)(r,{type:"primary",onClick:e.handleUpdate},{default:(0,n.w5)((()=>[(0,n.Uk)((0,o.zw)(e.isEditContact?"儲存":"新增"),1)])),_:1},8,["onClick"]),(0,n.Wm)(r,{onClick:t[19]||(t[19]=t=>e.openContactDialog=!1)},{default:(0,n.w5)((()=>[(0,n.Uk)("取消")])),_:1})])])])),_:1},8,["modelValue","title"])])}l(7658);var Ie={name:"CustomerManagement",setup(){const e=(0,_.qj)({editCompany:!1,companyInfo:{companyId:"A0001",custName:"亞新",sector:["證券"],allSector:["證券","保險","金融"],agent:["Joe","Eric","Kyle"],allAgent:["Joe","Cartman","Tony","Bruce","Eric","Kyle"],taxID:"12390490",taxAddress:"臺北市信義區市府路1號",tel:"02-27208889",fax:"02-27208889",address:"臺北市信義區市府路1號",note:"外縣市請撥02-27208889"}}),t=(0,_.qj)({deleteCompany(){console.log("drop company data")}}),l=(0,_.qj)({openContactDialog:!1,isEditContact:!0,currentItem:{},editItem:{},contactAddressBook:[{contact:"侯淑華",occupation:"處長",dept:"公關資訊處",tel:"02-27208889",call:"0910151101",email:"services@mail.taipei.gov.tw",address:"臺北市信義區市府路1號10樓",frequentContact:1},{contact:"蕭柏鈞",occupation:"主任",dept:"資通安全中心",tel:"02-27208889",call:"0910151101",email:"services@mail.taipei.gov.tw",address:"臺北市信義區市府路1號10樓",frequentContact:0},{contact:"林麗琪",occupation:"主秘",dept:"秘書室",tel:"02-27208889",call:"0910151101",email:"services@mail.taipei.gov.tw",address:"臺北市信義區市府路1號10樓",frequentContact:0}]}),a=(0,_.qj)({handleEdit(e){l.isEditContact=!0,l.currentItem=l.contactAddressBook[e],l.editItem=JSON.parse(JSON.stringify(l.currentItem)),l.openContactDialog=!0},handleDelete(e){l.contactAddressBook.splice(e,1)},handleInsert(){l.isEditContact=!1,l.editItem={contact:"",occupation:"",dept:"",tel:"",call:"",email:"",address:"",frequentContact:0},l.openContactDialog=!0},handleUpdate(){if(l.isEditContact)for(const[e,t]of Object.entries(l.currentItem))l.currentItem[e]=l.editItem[e];else l.contactAddressBook.push(l.editItem);l.openContactDialog=!1}});return{...(0,_.BK)(e),...(0,_.BK)(t),...(0,_.BK)(l),...(0,_.BK)(a)}}};const Ce=(0,w.Z)(Ie,[["render",De],["__scopeId","data-v-25a0f7b3"]]);var We=Ce;const ke={class:"query-contract-tabs"},je=(0,n._)("h2",{class:"text-center py-3"},"合約查詢",-1),Se={class:"btn-group"},Ue=["onClick"],qe={class:"d-flex justify-content-start flex-wrap border p-3 bg-secondary bg-opacity-10 rounded-3"};function Ne(e,t,l,a,c,s){return(0,n.wg)(),(0,n.iD)("div",ke,[je,(0,n._)("div",Se,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(e.subviewList,((t,l)=>((0,n.wg)(),(0,n.iD)("button",{key:l,onClick:l=>e.currentComponent=t.subview,class:(0,o.C_)([{active:e.currentComponent==t.subview},"btn btn-outline-primary btn-sm mb-2"]),type:"button"},(0,o.zw)(t.name),11,Ue)))),128))]),(0,n._)("div",qe,[((0,n.wg)(),(0,n.j4)((0,n.LL)(e.currentComponent)))])])}const Ke={class:"query-contract-query w-100"},Le=(0,n.uE)('<div class="col-12 p-2"><h3 class="text-center">合約查詢</h3></div><div class="info-row"><div class="col-2 lh-lg fw-bold text-center">查詢項目</div><div class="col-2 lh-lg fw-bold text-center">預設查詢</div><div class="col-8 lh-lg fw-bold text-center">自定義條件</div></div>',2),Be={class:"info-row"},Ae=(0,n._)("div",{class:"col-2 d-flex align-items-center"},[(0,n._)("p",null,"合約起算日")],-1),Ee={class:"col-2 d-flex justify-content-center align-items-center"},He={class:"col-8 d-flex justify-content-start align-items-center"},Ye={class:"info-row"},Oe=(0,n._)("div",{class:"col-2 d-flex align-items-center"},[(0,n._)("p",null,"合約到期日")],-1),Te={class:"col-2 d-flex justify-content-center align-items-center"},ze={class:"col-8 d-flex justify-content-start align-items-center"},Qe={class:"info-row"},Ze=(0,n._)("div",{class:"col-2 d-flex align-items-center"},[(0,n._)("p",null,"產業")],-1),Pe={class:"col-2 d-flex justify-content-center align-items-center"},Me={class:"col-2 d-flex justify-content-center align-items-center"},Fe={class:"col-2 d-flex justify-content-center align-items-center"},Je={class:"col-2 d-flex justify-content-center align-items-center"},Re={class:"col-2 d-flex justify-content-center align-items-center"},Ge={class:"col-2 d-flex align-items-center"},$e={class:"col-2 d-flex justify-content-center align-items-center"},Xe={class:"col-8 d-flex justify-content-start align-items-center"},et={class:"col-12 d-flex justify-content-center mt-3"};function tt(e,t,l,a,c,s){const i=(0,n.up)("el-switch"),d=(0,n.up)("el-date-picker"),r=(0,n.up)("el-option"),u=(0,n.up)("el-select"),m=(0,n.up)("SelectItem"),p=(0,n.up)("el-button");return(0,n.wg)(),(0,n.iD)("div",Ke,[Le,(0,n._)("div",Be,[Ae,(0,n._)("div",Ee,[(0,n.Wm)(i,{modelValue:e.initDate_Default,"onUpdate:modelValue":t[0]||(t[0]=t=>e.initDate_Default=t),class:"align-items-center","active-text":"不限"},null,8,["modelValue"])]),(0,n._)("div",He,[(0,n._)("div",null,[(0,n.Wm)(d,{disabled:e.initDate_Default,modelValue:e.initDate,"onUpdate:modelValue":t[1]||(t[1]=t=>e.initDate=t),type:"daterange","range-separator":"至","start-placeholder":"起始日期","end-placeholder":"結束日期"},null,8,["disabled","modelValue"])])])]),(0,n._)("div",Ye,[Oe,(0,n._)("div",Te,[(0,n.Wm)(i,{modelValue:e.expireDate_Default,"onUpdate:modelValue":t[2]||(t[2]=t=>e.expireDate_Default=t),class:"align-items-center","active-text":"不限"},null,8,["modelValue"])]),(0,n._)("div",ze,[(0,n._)("div",null,[(0,n.Wm)(d,{disabled:e.expireDate_Default,modelValue:e.expireDate,"onUpdate:modelValue":t[3]||(t[3]=t=>e.expireDate=t),type:"daterange","range-separator":"至","start-placeholder":"起始日期","end-placeholder":"結束日期"},null,8,["disabled","modelValue"])])])]),(0,n._)("div",Qe,[Ze,(0,n._)("div",Pe,[(0,n.Wm)(i,{modelValue:e.customer_Default,"onUpdate:modelValue":t[4]||(t[4]=t=>e.customer_Default=t),class:"align-items-center","active-text":"不限"},null,8,["modelValue"])]),(0,n._)("div",Me,[(0,n.Wm)(u,{modelValue:e.sectionSelect,"onUpdate:modelValue":t[5]||(t[5]=t=>e.sectionSelect=t),multiple:"","collapse-tags":"",placeholder:"產業",clearable:!0,disabled:e.customer_Default},{default:(0,n.w5)((()=>[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(e.section,((e,t)=>((0,n.wg)(),(0,n.j4)(r,{key:t,label:e,value:e},null,8,["label","value"])))),128))])),_:1},8,["modelValue","disabled"])]),(0,n._)("div",Fe,[(0,n.Wm)(u,{modelValue:e.custNameSelect,"onUpdate:modelValue":t[6]||(t[6]=t=>e.custNameSelect=t),multiple:"","collapse-tags":"",placeholder:"客戶名稱",clearable:!0,disabled:e.customer_Default},{default:(0,n.w5)((()=>[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(e.custName,((e,t)=>((0,n.wg)(),(0,n.j4)(r,{key:t,label:e,value:e},null,8,["label","value"])))),128))])),_:1},8,["modelValue","disabled"])]),(0,n._)("div",Je,[(0,n.Wm)(u,{modelValue:e.custIdSelect,"onUpdate:modelValue":t[7]||(t[7]=t=>e.custIdSelect=t),multiple:"","collapse-tags":"",placeholder:"客戶編號",clearable:!0,disabled:e.customer_Default},{default:(0,n.w5)((()=>[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(e.custId,((e,t)=>((0,n.wg)(),(0,n.j4)(r,{key:t,label:e,value:e},null,8,["label","value"])))),128))])),_:1},8,["modelValue","disabled"])]),(0,n._)("div",Re,[(0,n.Wm)(u,{modelValue:e.agentSelect,"onUpdate:modelValue":t[8]||(t[8]=t=>e.agentSelect=t),multiple:"","collapse-tags":"",placeholder:"負責業務",clearable:!0,disabled:e.customer_Default},{default:(0,n.w5)((()=>[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(e.agent,((e,t)=>((0,n.wg)(),(0,n.j4)(r,{key:t,label:e,value:e},null,8,["label","value"])))),128))])),_:1},8,["modelValue","disabled"])])]),((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(e.queryType,((e,t)=>((0,n.wg)(),(0,n.iD)("div",{class:"info-row",key:t},[(0,n._)("div",Ge,[(0,n._)("p",null,(0,o.zw)(e.queryItem),1)]),(0,n._)("div",$e,[(0,n.Wm)(i,{modelValue:e.defaultNotSelect,"onUpdate:modelValue":t=>e.defaultNotSelect=t,class:"align-items-center","active-text":"不限"},null,8,["modelValue","onUpdate:modelValue"])]),(0,n._)("div",Xe,[(0,n._)("div",null,[(0,n.Wm)(m,{"source-data":e.conditions,"default-disabled":e.defaultNotSelect,onSelectedItems:t=>e.results=t},null,8,["source-data","default-disabled","onSelectedItems"])])])])))),128)),(0,n._)("div",et,[(0,n.Wm)(p,{type:"primary"},{default:(0,n.w5)((()=>[(0,n.Uk)("查詢")])),_:1})])])}const lt={class:"select-item"};function at(e,t,l,a,o,c){const s=(0,n.up)("el-checkbox"),i=(0,n.up)("el-checkbox-group");return(0,n.wg)(),(0,n.iD)("div",lt,[(0,n.Wm)(i,{modelValue:e.selectedResult,"onUpdate:modelValue":t[0]||(t[0]=t=>e.selectedResult=t),disabled:e.notSelected},{default:(0,n.w5)((()=>[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(e.renderData,((e,t)=>((0,n.wg)(),(0,n.j4)(s,{key:t,label:e},null,8,["label"])))),128))])),_:1},8,["modelValue","disabled"])])}var nt={name:"SelectItem",props:{sourceData:{type:Array,default:()=>[]},defaultDisabled:{type:Boolean,default:!0}},setup(e,{emit:t}){const l=(0,_.qj)({renderData:e.sourceData,selectedResult:[],notSelected:e.defaultDisabled});return(0,n.YP)(e,(()=>{l.notSelected=e.defaultDisabled,l.notSelected&&(l.selectedResult=[])})),(0,n.YP)(l,(()=>{t("selected-items",l.selectedResult)})),{...(0,_.BK)(l)}}};const ot=(0,w.Z)(nt,[["render",at]]);var ct=ot,st={name:"QueryContractQuery",components:{SelectItem:ct},setup(){const e=(0,_.qj)({initDate_Default:!0,initDate:[],expireDate_Default:!0,expireDate:[],customer_Default:!0,section:["金融","證券","保險"],sectionSelect:[],custName:["國泰","富邦","兆豐"],custNameSelect:[],custId:["A001","A002","B001"],custIdSelect:[],agent:["James","Jenny","Winnie"],agentSelect:[],queryType:[{queryItem:"合約業務員",defaultNotSelect:!0,conditions:["業務員A","業務員B","業務員C"],results:[]},{queryItem:"合約類型",defaultNotSelect:!0,conditions:["一般合約","維護合約"],results:[]},{queryItem:"合約寄出狀態",defaultNotSelect:!0,conditions:["未寄出","已寄出"],results:[]},{queryItem:"繳款狀態",defaultNotSelect:!0,conditions:["未繳清","已繳清"],results:[]},{queryItem:"專案驗收狀態",defaultNotSelect:!0,conditions:["未驗收","已驗收"],results:[]},{queryItem:"定期維護",defaultNotSelect:!0,conditions:["未完成","已完成"],results:[]},{queryItem:"檔案歸檔",defaultNotSelect:!0,conditions:["未歸檔","已歸檔"],results:[]},{queryItem:"合約類型",defaultNotSelect:!0,conditions:["未寄出","已寄出"],results:[]}],foo_array:[],bar_options:[1,2,3]}),t=(0,_.qj)({});return{...(0,_.BK)(e),...(0,_.BK)(t)}}};const it=(0,w.Z)(st,[["render",tt]]);var dt=it;const rt={class:"query-contract-payment w-100"},ut=(0,n._)("div",{class:"col-12 p-2"},[(0,n._)("h3",{class:"text-center"},"款項查詢")],-1),mt=[ut];function pt(e,t,l,a,o,c){return(0,n.wg)(),(0,n.iD)("div",rt,mt)}var ft={name:"QueryContractPayment",components:{},setup(){return{}}};const yt=(0,w.Z)(ft,[["render",pt]]);var vt=yt;const bt={class:"query-contract-maintain w-100"},_t=(0,n._)("div",{class:"col-12 p-2"},[(0,n._)("h3",{class:"text-center"},"定期維護查詢")],-1),gt=[_t];function wt(e,t,l,a,o,c){return(0,n.wg)(),(0,n.iD)("div",bt,gt)}var Vt={name:"QueryContractMaintain",components:{},setup(){return{}}};const ht=(0,w.Z)(Vt,[["render",wt]]);var xt=ht,Dt={name:"QueryContract",components:{QueryContractQuery:dt,QueryContractPayment:vt,QueryContractMaintain:xt},setup(){const e=(0,_.qj)({currentComponent:"QueryContractQuery",subviewList:[{subview:"QueryContractQuery",name:"合約查詢"},{subview:"QueryContractPayment",name:"款項查詢"},{subview:"QueryContractMaintain",name:"定期維護查詢"}]});return{...(0,_.BK)(e)}}};const It=(0,w.Z)(Dt,[["render",Ne]]);var Ct=It;const Wt={class:"notification-management-tabs"},kt=(0,n._)("h2",{class:"text-center py-3"},"通知管理",-1),jt={class:"d-flex justify-content-start flex-wrap border p-3 bg-secondary bg-opacity-10 rounded-3"},St=(0,n.uE)('<div class="col-12 p-2"><h3 class="text-center">新增合約到期通知</h3></div><div class="info-row"><div class="col-2 lh-lg fw-bold text-center">設定項目</div><div class="col-2 lh-lg fw-bold text-center">預設狀態</div><div class="col-8 lh-lg fw-bold text-center">自定義條件</div></div>',2),Ut={class:"info-row"},qt=(0,n._)("div",{class:"col-4"},"主旨",-1),Nt={class:"col-8"},Kt={class:"info-row"},Lt=(0,n._)("div",{class:"col-4"},"對象",-1),Bt={class:"col-4"},At={class:"col-4"},Et={class:"info-row"},Ht=(0,n._)("div",{class:"col-4"},"設定日期",-1),Yt={class:"col-8"},Ot={class:"info-row"},Tt=(0,n._)("div",{class:"col-4"},"設定時間",-1),zt={class:"col-8"},Qt={class:"info-row"},Zt=(0,n._)("div",{class:"col-2 d-flex align-items-center"},[(0,n._)("p",null,"合約起算日")],-1),Pt={class:"col-2 d-flex justify-content-center align-items-center"},Mt={class:"col-8 d-flex justify-content-start align-items-center"},Ft={class:"col-2 d-flex align-items-center"},Jt={class:"col-2 d-flex justify-content-center align-items-center"},Rt={class:"col-8 d-flex justify-content-start align-items-center"},Gt={class:"col-12 d-flex justify-content-center mt-3"};function $t(e,t,l,a,c,s){const i=(0,n.up)("el-input"),d=(0,n.up)("el-option"),r=(0,n.up)("el-select"),u=(0,n.up)("el-switch"),m=(0,n.up)("el-date-picker"),p=(0,n.up)("SelectItem"),f=(0,n.up)("el-button");return(0,n.wg)(),(0,n.iD)("div",Wt,[kt,(0,n._)("div",jt,[St,(0,n._)("div",Ut,[qt,(0,n._)("div",Nt,[(0,n.Wm)(i,{class:"w-100",modelValue:e.title,"onUpdate:modelValue":t[0]||(t[0]=t=>e.title=t)},null,8,["modelValue"])])]),(0,n._)("div",Kt,[Lt,(0,n._)("div",Bt,[(0,n.Wm)(i,{class:"w-100",modelValue:e.manualContact,"onUpdate:modelValue":t[1]||(t[1]=t=>e.manualContact=t),placeholder:'手動輸入, 請以","分隔, 如: name1@com, name2@com'},null,8,["modelValue"])]),(0,n._)("div",At,[(0,n.Wm)(r,{modelValue:e.SelectContact,"onUpdate:modelValue":t[2]||(t[2]=t=>e.SelectContact=t),class:"w-100",multiple:"",clearable:!0,placeholder:"通訊錄","collapse-tags":!0},{default:(0,n.w5)((()=>[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(e.contacts,((e,t)=>((0,n.wg)(),(0,n.j4)(d,{key:t,label:e,value:e},null,8,["label","value"])))),128))])),_:1},8,["modelValue"])])]),(0,n._)("div",Et,[Ht,(0,n._)("div",Yt,[(0,n.Wm)(r,{modelValue:e.SelectDate,"onUpdate:modelValue":t[3]||(t[3]=t=>e.SelectDate=t),multiple:"",placeholder:"選擇日期",clearable:!0},{default:(0,n.w5)((()=>[((0,n.wg)(),(0,n.iD)(n.HY,null,(0,n.Ko)(31,((e,t)=>(0,n.Wm)(d,{key:t,label:e,value:e},null,8,["label","value"]))),64))])),_:1},8,["modelValue"])])]),(0,n._)("div",Ot,[Tt,(0,n._)("div",zt,[(0,n.Wm)(r,{modelValue:e.SelectTime,"onUpdate:modelValue":t[4]||(t[4]=t=>e.SelectTime=t),multiple:"",placeholder:"選擇時間",clearable:!0},{default:(0,n.w5)((()=>[((0,n.wg)(),(0,n.iD)(n.HY,null,(0,n.Ko)(24,((e,t)=>(0,n.Wm)(d,{key:t,label:e,value:e},null,8,["label","value"]))),64))])),_:1},8,["modelValue"])])]),(0,n._)("div",Qt,[Zt,(0,n._)("div",Pt,[(0,n.Wm)(u,{modelValue:e.initDate_Default,"onUpdate:modelValue":t[5]||(t[5]=t=>e.initDate_Default=t),class:"align-items-center","active-text":"不限"},null,8,["modelValue"])]),(0,n._)("div",Mt,[(0,n._)("div",null,[(0,n.Wm)(m,{disabled:e.initDate_Default,modelValue:e.initDate,"onUpdate:modelValue":t[6]||(t[6]=t=>e.initDate=t),type:"daterange","range-separator":"至","start-placeholder":"起始日期","end-placeholder":"結束日期"},null,8,["disabled","modelValue"])])])]),((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(e.queryType,((e,t)=>((0,n.wg)(),(0,n.iD)("div",{class:"info-row",key:t},[(0,n._)("div",Ft,[(0,n._)("p",null,(0,o.zw)(e.queryItem),1)]),(0,n._)("div",Jt,[(0,n.Wm)(u,{modelValue:e.defaultNotSelect,"onUpdate:modelValue":t=>e.defaultNotSelect=t,class:"align-items-center","active-text":"不限"},null,8,["modelValue","onUpdate:modelValue"])]),(0,n._)("div",Rt,[(0,n._)("div",null,[(0,n.Wm)(p,{"source-data":e.conditions,"default-disabled":e.defaultNotSelect,onSelectedItems:t=>e.results=t},null,8,["source-data","default-disabled","onSelectedItems"])])])])))),128)),(0,n._)("div",Gt,[(0,n.Wm)(f,{type:"primary"},{default:(0,n.w5)((()=>[(0,n.Uk)("新增")])),_:1})])])])}var Xt={name:"NotificationManagement",components:{SelectItem:ct},setup(){const e=(0,_.qj)({SelectDate:[],SelectTime:[],SelectContact:[],title:"",manualContact:"",contacts:["Wayne","Jonny","George","Frank","Susan","Leo"],initDate_Default:!0,initDate:[],queryType:[{queryItem:"合約業務員",defaultNotSelect:!0,conditions:["業務員A","業務員B","業務員C"],results:[]},{queryItem:"合約類型",defaultNotSelect:!0,conditions:["一般合約","維護合約"],results:[]}]});return{...(0,_.BK)(e)}}};const el=(0,w.Z)(Xt,[["render",$t]]);var tl=el;const ll={class:"iphone-fullscreen-tabs"},al=(0,n._)("h2",{class:"text-center py-3"},"iPhone 全螢幕(垂直方向)滿版跑版",-1),nl=[al];function ol(e,t,l,a,o,c){return(0,n.wg)(),(0,n.iD)("div",ll,nl)}var cl={name:"IphoneFullscreen",setup(){const e=(0,_.qj)({});return{...(0,_.BK)(e)}}};const sl=(0,w.Z)(cl,[["render",ol]]);var il=sl;const dl={class:"sort-by-date-tabs"},rl=(0,n._)("h2",{class:"text-center py-3"},"陣列中物件依據日期排序",-1),ul=(0,n._)("h3",{class:"mt-4"},"Example",-1),ml={class:"border p-3 bg-secondary bg-opacity-10 rounded-3 d-flex"},pl=(0,n._)("div",{class:"col-5 p-3"},[(0,n._)("div",{class:"border p-3 bg-secondary bg-opacity-50 rounded-3"},[(0,n._)("pre",{class:"info-pre"},[(0,n._)("code",null,'// 原始陣列\nlet array = [] \narray = [ \n  { \n    Date: "2022-01-01", \n    Id: 1 \n  }, \n  { \n    Date: "2022-02-05", \n    Id: 2 \n  }, \n  { \n    Date: "2022-03-10", \n    Id: 3 \n  } \n]')])])],-1),fl={class:"col-2 p-3 d-flex align-items-center justify-content-center"},yl=(0,n._)("div",{class:"col-5 p-3"},[(0,n._)("div",{class:"border p-3 bg-secondary bg-opacity-50 rounded-3"},[(0,n._)("pre",{class:"info-pre"},[(0,n._)("code",null,'// 依日期由新至舊排序\narray = [ \n  { \n    Date: "2022-03-10", \n    Id: 3 \n  },\n  { \n    Date: "2022-02-05", \n    Id: 2 \n  }, \n  { \n    Date: "2022-01-01", \n    Id: 1 \n  },\n]')])])],-1),vl=(0,n.uE)('<h3 class="mt-4">Function</h3><div class="border p-3 bg-secondary bg-opacity-10 rounded-3"><pre class="info-pre"><code>function sortByDate(array, dateKey) {\n  array.sort( (a, b)=&gt; {\n    return new Date(b[dateKey]) - new Date(a[dateKey])\n  })\n}</code></pre></div><h3 class="mt-4">References</h3><div><a href="https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Array/sort">MDN: Array.prototype.sort()</a></div>',4);function bl(e,t,l,a,o,c){const s=(0,n.up)("font-awesome-icon");return(0,n.wg)(),(0,n.iD)("div",dl,[rl,ul,(0,n._)("div",ml,[pl,(0,n._)("div",fl,[(0,n._)("div",null,[(0,n.Wm)(s,{class:"fa-2xl",icon:"fa-solid fa-arrow-right"})])]),yl]),vl])}var _l={name:"SortByDate",setup(){const e=(0,_.qj)({});return{...(0,_.BK)(e)}}};const gl=(0,w.Z)(_l,[["render",bl]]);var wl=gl;const Vl={class:"test-field-tabs"},hl=(0,n._)("h2",{class:"text-center py-3"},"Test Field",-1),xl=["maxlength"],Dl=["for"],Il=["id","maxlength","onKeyup","onChange"];function Cl(e,t,l,a,c,s){return(0,n.wg)(),(0,n.iD)("div",Vl,[hl,(0,n._)("input",{type:"text",id:"ext1",maxlength:e.limitLength("ext1"),onKeyup:t[0]||(t[0]=t=>e.preventHalf("ext1"))},null,40,xl),(0,n._)("p",null,"Limit: "+(0,o.zw)(e.limitLength("ext1")),1),(0,n._)("p",null,"Listening data: "+(0,o.zw)(e.syncValue),1),(0,n._)("p",null,"Detect FullWidth Char: "+(0,o.zw)(e.isDetected),1),((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(e.renderList,((t,l)=>((0,n.wg)(),(0,n.iD)("div",{key:l},[(0,n._)("label",{for:t.id},"id: "+(0,o.zw)(t.id)+", Limit: "+(0,o.zw)(e.limitLength(t.id)),9,Dl),(0,n._)("input",{type:"text",id:t.id,maxlength:e.limitLength(t.id),onKeyup:l=>e.preventHalf(t.id),onChange:l=>e.preventHalf(t.id)},null,40,Il)])))),128))])}var Wl={name:"TestField",setup(){const e=(0,_.qj)({inputData:"",syncValue:"",renderList:[{id:"ext1",limit:5},{id:"ext2",limit:10},{id:"ext3",limit:3}]}),t=(0,_.qj)({limitLength(e){let t={custName:"ext1",phone:"ext2",plateNumber:"ext3"};function l(e,t){return Object.keys(e).find((l=>e[l]===t))}switch(e=l(t,e),e){case"custName":return 2;case"phone":return 3;case"plateNumber":return 4}},preventHalf(e){const t=document.getElementById(e);t.value=t.value.replaceAll(/[\uff00-\uffff]/g,"")}});return{...(0,_.BK)(e),...(0,_.BK)(t)}}};const kl=(0,w.Z)(Wl,[["render",Cl]]);var jl=kl;const Sl=[{path:"/customer-management-preview",name:"customer-management-preview",component:We},{path:"/query-contract",name:"query-contract",component:Ct},{path:"/notification-management",name:"notification-management",component:tl},{path:"/sort-by-date",name:"sort-by-date",component:wl},{path:"/iphone-fullscreen",name:"iphone-fullscreen",component:il},{path:"/test-field",name:"test-field",component:jl}],Ul=(0,x.p7)({history:(0,x.r5)(),routes:Sl});var ql=Ul,Nl=l(65),Kl=(0,Nl.MT)({state:{},getters:{},mutations:{},actions:{},modules:{}}),Ll=(l(2166),l(3494)),Bl=l(7749),Al=l(8539),El=l(7326);l(4415);Ll.vI.add(Al.mRB),(0,a.ri)(h).component("font-awesome-icon",Bl.GN).use(El.Z).use(Kl).use(ql).mount("#app")}},t={};function l(a){var n=t[a];if(void 0!==n)return n.exports;var o=t[a]={exports:{}};return e[a].call(o.exports,o,o.exports,l),o.exports}l.m=e,function(){var e=[];l.O=function(t,a,n,o){if(!a){var c=1/0;for(r=0;r<e.length;r++){a=e[r][0],n=e[r][1],o=e[r][2];for(var s=!0,i=0;i<a.length;i++)(!1&o||c>=o)&&Object.keys(l.O).every((function(e){return l.O[e](a[i])}))?a.splice(i--,1):(s=!1,o<c&&(c=o));if(s){e.splice(r--,1);var d=n();void 0!==d&&(t=d)}}return t}o=o||0;for(var r=e.length;r>0&&e[r-1][2]>o;r--)e[r]=e[r-1];e[r]=[a,n,o]}}(),function(){l.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(t,{a:t}),t}}(),function(){l.d=function(e,t){for(var a in t)l.o(t,a)&&!l.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})}}(),function(){l.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){var e={143:0};l.O.j=function(t){return 0===e[t]};var t=function(t,a){var n,o,c=a[0],s=a[1],i=a[2],d=0;if(c.some((function(t){return 0!==e[t]}))){for(n in s)l.o(s,n)&&(l.m[n]=s[n]);if(i)var r=i(l)}for(t&&t(a);d<c.length;d++)o=c[d],l.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return l.O(r)},a=self["webpackChunkcomponent_library"]=self["webpackChunkcomponent_library"]||[];a.forEach(t.bind(null,0)),a.push=t.bind(null,a.push.bind(a))}();var a=l.O(void 0,[998],(function(){return l(8430)}));a=l.O(a)})();
//# sourceMappingURL=app.6dfc3f53.js.map
(function(){"use strict";var t={7063:function(t,e,a){var o=a(9242),n=a(678),r=a(3396);const s={class:"tw-card"},i=(0,r._)("div",{class:"tw-heading"},"Let's Get Started!!!!",-1),u=(0,r._)("h1",{class:"mb-8 text-slate-500"},"Take a few minutes and get a policy started.",-1),l={for:"usdot",class:"block mb-12 relative"},c=(0,r._)("div",{class:"tw-label text-xl font-body font-light left-1/2 -translate-x-1/2"},"Enter your DOT Number",-1);function d(t,e,a,n,d,m){return(0,r.wg)(),(0,r.j4)(o.uT,{appear:""},{default:(0,r.w5)((()=>[(0,r._)("div",s,[i,u,(0,r._)("label",l,[(0,r.wy)((0,r._)("input",{type:"text",required:"",id:"usdot",class:"text-center w-4/5 text-xl font-light pt-4 pb-4 rounded-2xl",autocomplete:"off","onUpdate:modelValue":e[0]||(e[0]=t=>m.usdot_number=t),onKeyup:e[1]||(e[1]=(0,o.D2)(((...t)=>m.verifyDOTNumber&&m.verifyDOTNumber(...t)),["enter"]))},null,544),[[o.nr,m.usdot_number]]),c]),(0,r._)("button",{type:"button",class:"tw-btn",onClick:e[2]||(e[2]=(...t)=>m.verifyDOTNumber&&m.verifyDOTNumber(...t))},"Get Started")])])),_:1})}var m={name:"EnterDOT",data(){return{}},computed:{usdot_number:{get(){return this.$store.usdot_number},set(t){this.$store.commit("updateDOTNumber",t)}},route_index:{get(){return this.$store.state.curr_route_index},set(t){this.$store.commit("updateRouteIndex",t)}}},methods:{verifyDOTNumber(){this.getDOTInformation(this.$store.state.usdot_number)},abbrState(t,e){var a=[["Arizona","AZ"],["Alabama","AL"],["Alaska","AK"],["Arkansas","AR"],["California","CA"],["Colorado","CO"],["Connecticut","CT"],["District of Columbia","DC"],["Delaware","DE"],["Florida","FL"],["Georgia","GA"],["Hawaii","HI"],["Idaho","ID"],["Illinois","IL"],["Indiana","IN"],["Iowa","IA"],["Kansas","KS"],["Kentucky","KY"],["Louisiana","LA"],["Maine","ME"],["Maryland","MD"],["Massachusetts","MA"],["Michigan","MI"],["Minnesota","MN"],["Mississippi","MS"],["Missouri","MO"],["Montana","MT"],["Nebraska","NE"],["Nevada","NV"],["New Hampshire","NH"],["New Jersey","NJ"],["New Mexico","NM"],["New York","NY"],["North Carolina","NC"],["North Dakota","ND"],["Ohio","OH"],["Oklahoma","OK"],["Oregon","OR"],["Pennsylvania","PA"],["Rhode Island","RI"],["South Carolina","SC"],["South Dakota","SD"],["Tennessee","TN"],["Texas","TX"],["Utah","UT"],["Vermont","VT"],["Virginia","VA"],["Washington","WA"],["West Virginia","WV"],["Wisconsin","WI"],["Wyoming","WY"]];if("abbr"==e){t=t.replace(/\w\S*/g,(function(t){return t.charAt(0).toUpperCase()+t.substr(1).toLowerCase()}));for(let e=0;e<a.length;e++)if(a[e][0]==t)return a[e][1]}else if("name"==e){t=t.toUpperCase();for(let e=0;e<a.length;e++)if(a[e][1]==t)return a[e][0]}},getDOTInformation(t){const e=this;fetch(`https://mobile.fmcsa.dot.gov/qc/services/carriers/id/${t}?webKey=27b663ed331bff071a9f02ba8d726e3558a665aa`).then((t=>t.json())).then((function(t){let a=t.content;a.phyState=e.abbrState(a.phyState,"name"),a.ownerFirstName="Chris",a.ownerLastName="Loewenberg",a.ownerEmail="cloewenberg@cottinghambutler.com",a.ownerPhone="563-580-7440",a.contactFirstName="",a.contactLastName="",a.contactEmail="",a.contactPhone="",a.vins=["3ALXA7005JDJP9024","3BPDLJ0X5KF105195","2NPNHM6X5BM129425","3HSNUAPT1GN012442","1nkzxptx0pj244058","3ALXA7009GDHD7190","1HSDJAPR4GH226196","1FVXA7CG1GLHD7202","1XKFDP9X4DJ331854","3HSDGAPN8FN659570"],e.$store.commit("updateDOTData",a)})).then((function(){e.$router.push({name:"verifyDOT"})}))},setRoutes(){const t=this,e=this.$router.getRoutes();let a=0;this.curr_route=this.$router.currentRoute.value,e.forEach((function(e,o){e.name===t.curr_route.name&&(a=o)})),this.route_index=a}},mounted(){this.setRoutes(),localStorage.removeItem("usdot_number"),localStorage.removeItem("usdot_data"),localStorage.removeItem("owner_is_contact"),localStorage.removeItem("brokerage_authority"),localStorage.removeItem("insurance_effective_date"),localStorage.removeItem("cargo"),localStorage.removeItem("plan_selected")}},p=a(89);const _=(0,p.Z)(m,[["render",d]]);var h=_;const g={class:"tw-card"},f=(0,r._)("h1",{class:"tw-heading"},"Verify DOT Information",-1),b={class:"max-w-sm m-auto text-left"},v=(0,r._)("legend",null,"Company Details",-1),w={class:"field-group"},y=(0,r._)("legend",null,"Equipment Details",-1);function x(t,e,a,n,s,i){const u=(0,r.up)("BaseInput");return(0,r.wg)(),(0,r.j4)(o.uT,{appear:""},{default:(0,r.w5)((()=>[(0,r._)("div",g,[f,(0,r._)("div",b,[(0,r._)("fieldset",null,[v,(0,r.Wm)(u,{type:"text",id:"company_name",label:"Company Name",modelValue:i.company_name,"onUpdate:modelValue":e[0]||(e[0]=t=>i.company_name=t)},null,8,["modelValue"]),(0,r.Wm)(u,{type:"text",id:"address_street",label:"Address",modelValue:i.usdot_data.phyStreet,"onUpdate:modelValue":e[1]||(e[1]=t=>i.usdot_data.phyStreet=t)},null,8,["modelValue"]),(0,r.Wm)(u,{type:"text",id:"address_city",label:"City",modelValue:i.usdot_data.phyCity,"onUpdate:modelValue":e[2]||(e[2]=t=>i.usdot_data.phyCity=t)},null,8,["modelValue"]),(0,r._)("div",w,[(0,r.Wm)(u,{type:"text",id:"address_state",label:"State",modelValue:i.usdot_data.phyState,"onUpdate:modelValue":e[3]||(e[3]=t=>i.usdot_data.phyState=t)},null,8,["modelValue"]),(0,r.Wm)(u,{type:"text",id:"address_zip",label:"Zip Code",modelValue:i.usdot_data.phyZipcode,"onUpdate:modelValue":e[4]||(e[4]=t=>i.usdot_data.phyZipcode=t)},null,8,["modelValue"])])]),(0,r._)("fieldset",null,[y,(0,r.Wm)(u,{type:"text",id:"total_power_units",label:"Total Power Units",modelValue:i.usdot_data.totalPowerUnits,"onUpdate:modelValue":e[5]||(e[5]=t=>i.usdot_data.totalPowerUnits=t)},null,8,["modelValue"])]),(0,r._)("button",{type:"button",class:"tw-btn mt-7 m-auto block",onClick:e[6]||(e[6]=t=>i.verifyDOTData())},"Verify")])])])),_:1})}var $=a(65),N=a(7139);const D=["for"],S=["type","id","max","value"],I=["textContent"];function C(t,e,a,o,n,s){return(0,r.wg)(),(0,r.iD)("label",{for:a.id,class:"text-left block mb-5 relative"},[(0,r._)("input",{class:"w-full rounded-lg",type:a.type,id:a.id,max:a.max,value:a.modelValue,onInput:e[0]||(e[0]=(...t)=>s.updateInput&&s.updateInput(...t)),required:""},null,40,S),(0,r._)("div",{class:"tw-label",textContent:(0,N.zw)(a.label)},null,8,I)],8,D)}var V={name:"BaseInput",props:{id:{type:String,default:""},label:{type:String,default:""},modelValue:{type:[String,Number],default:""},max:{type:String,default:"1000000"},type:{type:String,default:"text"}},methods:{updateInput(t){this.$emit("update:modelValue",t.target.value)}}};const k=(0,p.Z)(V,[["render",C]]);var O=k,R=a(3053),T=a(9117),P={setup(){return{v$:(0,R.ZP)()}},name:"VerifyDOT",components:{BaseInput:O},data(){return{form:{company_name:""}}},validations(){return{form:{company_name:{required:T.C1}}}},computed:{...(0,$.rn)({usdot_data:t=>t.usdot_data}),usdot_data:{get(){return this.$store.state.usdot_data},set(t){this.$store.commit("updateDOTData",t)}},company_name:{get(){return this.usdot_data.legalName},set(t){this.$store.commit("updateCompanyName",t)}},route_index:{get(){return this.$store.state.curr_route_index},set(t){this.$store.commit("updateRouteIndex",t)}}},methods:{verifyDOTData(){this.usdot_data.totalPowerUnits>10?this.$router.push({name:"notEligible"}):this.$router.push({name:"ownerDetails"})},setRoutes(){const t=this,e=this.$router.getRoutes();let a=0;this.curr_route=this.$router.currentRoute.value,e.forEach((function(e,o){e.name===t.curr_route.name&&(a=o)})),this.route_index=a}},mounted(){this.setRoutes()}};const E=(0,p.Z)(P,[["render",x]]);var A=E;const j={class:"tw-card"},U=(0,r._)("h1",{class:"tw-heading"},"Owner Details",-1),L={class:"max-w-sm m-auto text-left"},B={class:"field-group"};function F(t,e,a,n,s,i){const u=(0,r.up)("BaseInput"),l=(0,r.up)("BaseCheckbox");return(0,r.wg)(),(0,r.j4)(o.uT,{appear:""},{default:(0,r.w5)((()=>[(0,r._)("div",j,[U,(0,r._)("div",L,[(0,r._)("fieldset",null,[(0,r._)("div",B,[(0,r.Wm)(u,{type:"text",id:"owner_first_name",label:"First Name",modelValue:t.usdot_data.ownerFirstName,"onUpdate:modelValue":e[0]||(e[0]=e=>t.usdot_data.ownerFirstName=e)},null,8,["modelValue"]),(0,r.Wm)(u,{type:"text",id:"owner_last_name",label:"Last Name",modelValue:t.usdot_data.ownerLastName,"onUpdate:modelValue":e[1]||(e[1]=e=>t.usdot_data.ownerLastName=e)},null,8,["modelValue"])]),(0,r.Wm)(u,{type:"text",id:"owner_phone",label:"Phone",modelValue:t.usdot_data.ownerPhone,"onUpdate:modelValue":e[2]||(e[2]=e=>t.usdot_data.ownerPhone=e)},null,8,["modelValue"]),(0,r.Wm)(u,{type:"email",id:"owner_email",label:"Email",modelValue:t.usdot_data.ownerEmail,"onUpdate:modelValue":e[3]||(e[3]=e=>t.usdot_data.ownerEmail=e)},null,8,["modelValue"]),(0,r.Wm)(l,{id:"owner_is_contact",label:"Owner is primary contact",modelValue:i.owner_is_contact,"onUpdate:modelValue":e[4]||(e[4]=t=>i.owner_is_contact=t)},null,8,["modelValue"])]),(0,r._)("button",{type:"button",class:"tw-btn mt-5 block m-auto",onClick:e[5]||(e[5]=t=>i.nextSection())},"Next")])])])),_:1})}const W=["for"],Z=["id","name","value"],M=["textContent"];function H(t,e,a,o,n,s){return(0,r.wg)(),(0,r.iD)("label",{for:a.id,class:"text-left block mb-5 flex flex-column items-center"},[(0,r._)("input",{type:"checkbox",id:a.id,name:a.id,value:a.modelValue,onChange:e[0]||(e[0]=(...t)=>s.updateInput&&s.updateInput(...t))},null,40,Z),(0,r._)("div",{class:"text-slate-600 font-base pl-3",textContent:(0,N.zw)(a.label)},null,8,M)],8,W)}var q={name:"BaseCheckbox",props:{id:{type:String,default:""},label:{type:String,default:""},modelValue:{type:[String,Number,Boolean],default:""}},methods:{updateInput(t){this.$store.dispatch("updateOwnerIsContact",t.target),this.$store.commit("updateOwnerIsContact",event.target.checked)}},mounted(){}};const G=(0,p.Z)(q,[["render",H]]);var J=G,z={name:"OwnerDetails",components:{BaseInput:O,BaseCheckbox:J},computed:{...(0,$.rn)({usdot_data:t=>t.usdot_data,owner_is_contact:t=>t.owner_is_contact}),owner_is_contact:{get(){return this.$store.state.owner_is_contact},set(t){this.$store.commit("updateOwnerIsContact",t)}},route_index:{get(){return this.$store.state.curr_route_index},set(t){this.$store.commit("updateRouteIndex",t)}}},methods:{nextSection(){this.owner_is_contact?(this.usdot_data.contactFirstName=this.usdot_data.ownerFirstName,this.usdot_data.contactLastName=this.usdot_data.ownerLastName,this.usdot_data.contactPhone=this.usdot_data.ownerPhone,this.usdot_data.contactEmail=this.usdot_data.ownerEmail):(this.usdot_data.contactFirstName="",this.usdot_data.contactLastName="",this.usdot_data.contactPhone="",this.usdot_data.contactEmail=""),this.$store.commit("updateDOTData",this.usdot_data),console.log(this.owner_is_contact),this.owner_is_contact?this.$router.push({name:"insuranceEffectiveDate"}):this.$router.push({name:"contactDetails"})},setRoutes(){const t=this,e=this.$router.getRoutes();let a=0;this.curr_route=this.$router.currentRoute.value,e.forEach((function(e,o){e.name===t.curr_route.name&&(a=o)})),this.route_index=a}},mounted(){this.setRoutes()}};const Y=(0,p.Z)(z,[["render",F]]);var K=Y;const X={class:"tw-card"},Q=(0,r._)("h1",{class:"tw-heading"},"Contact Details",-1),tt={class:"max-w-sm m-auto text-left"},et={class:"field-group"};function at(t,e,a,n,s,i){const u=(0,r.up)("BaseInput");return(0,r.wg)(),(0,r.j4)(o.uT,{appear:""},{default:(0,r.w5)((()=>[(0,r._)("div",X,[Q,(0,r._)("div",tt,[(0,r._)("fieldset",null,[(0,r._)("div",et,[(0,r.Wm)(u,{type:"text",id:"contact_first_name",label:"First Name",modelValue:t.usdot_data.contactFirstName,"onUpdate:modelValue":e[0]||(e[0]=e=>t.usdot_data.contactFirstName=e)},null,8,["modelValue"]),(0,r.Wm)(u,{type:"text",id:"contact_last_name",label:"Last Name",modelValue:t.usdot_data.contactLastName,"onUpdate:modelValue":e[1]||(e[1]=e=>t.usdot_data.contactLastName=e)},null,8,["modelValue"])]),(0,r.Wm)(u,{type:"text",id:"contact_phone",label:"Phone",modelValue:t.usdot_data.contactPhone,"onUpdate:modelValue":e[2]||(e[2]=e=>t.usdot_data.contactPhone=e)},null,8,["modelValue"]),(0,r.Wm)(u,{type:"email",id:"contact_email",label:"Email",modelValue:t.usdot_data.contactEmail,"onUpdate:modelValue":e[3]||(e[3]=e=>t.usdot_data.contactEmail=e)},null,8,["modelValue"])]),(0,r._)("button",{type:"button",class:"tw-btn mt-5 block m-auto",onClick:e[4]||(e[4]=t=>i.verifyDOTData())},"Next")])])])),_:1})}var ot={name:"ContactDetails",components:{BaseInput:O},computed:{...(0,$.rn)({usdot_data:t=>t.usdot_data}),route_index:{get(){return this.$store.state.curr_route_index},set(t){this.$store.commit("updateRouteIndex",t)}}},methods:{verifyDOTData(){this.$store.commit("updateDOTData",this.usdot_data),this.$router.push({name:"insuranceEffectiveDate"})},setRoutes(){const t=this,e=this.$router.getRoutes();let a=0;this.curr_route=this.$router.currentRoute.value,e.forEach((function(e,o){e.name===t.curr_route.name&&(a=o)})),this.route_index=a}},mounted(){this.setRoutes()}};const nt=(0,p.Z)(ot,[["render",at]]);var rt=nt;const st={class:"tw-card"},it=(0,r._)("h1",{class:"tw-heading"},"Insurance Effective Date?",-1),ut={class:"max-w-sm m-auto text-left"},lt={class:"absolute bottom-6 right-6 bg-slate-800 text-white p-6 drop-shadow-lg rounded-lg"},ct={key:0},dt=(0,r._)("strong",null,"Creating Prospect...",-1),mt=[dt],pt={key:1},_t=(0,r._)("strong",null,"Prospect Created:",-1);function ht(t,e,a,n,s,i){const u=(0,r.up)("BaseInput");return(0,r.wg)(),(0,r.j4)(o.uT,{appear:""},{default:(0,r.w5)((()=>[(0,r._)("main",null,[(0,r._)("div",st,[it,(0,r._)("div",ut,[(0,r.Wm)(u,{type:"date",id:"insurance_effective_date",label:"Date",max:"999-12-31",modelValue:i.insurance_effective_date,"onUpdate:modelValue":e[0]||(e[0]=t=>i.insurance_effective_date=t)},null,8,["modelValue"]),(0,r._)("button",{type:"button",class:"tw-btn mt-5 block m-auto",onClick:e[1]||(e[1]=(...t)=>i.nextSection&&i.nextSection(...t))},"Next")])]),(0,r._)("div",lt,[1===s.prospect.prospect_id.length?((0,r.wg)(),(0,r.iD)("span",ct,mt)):((0,r.wg)(),(0,r.iD)("span",pt,[_t,(0,r.Uk)(" "+(0,N.zw)(s.prospect.prospect_id),1)]))])])])),_:1})}var gt={name:"InsuranceEffectiveDate",components:{BaseInput:O},data(){return{prospect:{status:Number,prospect_id:String}}},computed:{...(0,$.rn)({create_prospect:t=>t.create_prospect,insurance_effective_date:t=>t.insurance_effective_date}),insurance_effective_date:{get(){return this.$store.state.insurance_effective_date},set(t){this.$store.commit("updateInsuranceEffectiveDate",t)}},route_index:{get(){return this.$store.state.curr_route_index},set(t){this.$store.commit("updateRouteIndex",t)}}},methods:{nextSection:function(){this.$router.push({name:"brokerageAuthority"})},setRoutes(){const t=this,e=this.$router.getRoutes();let a=0;this.curr_route=this.$router.currentRoute.value,e.forEach((function(e,o){e.name===t.curr_route.name&&(a=o)})),this.route_index=a},createProspect(){const t=this;if("undefined"!==typeof this.$store.state.usdot_data.contactFirstName){const e={firstname:this.$store.state.usdot_data.contactFirstName,lastname:this.$store.state.usdot_data.contactLastName,company:this.$store.state.usdot_data.legalName,email:this.$store.state.usdot_data.contactEmail,phone:this.$store.state.usdot_data.contactPhone,city:this.$store.state.usdot_data.phyCity,state:this.$store.state.usdot_data.phyState,postal:this.$store.state.usdot_data.phyZipcode};fetch("https://anddone.giganticdesign.com/create-prospect",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}).then((t=>t.json())).then((e=>{console.log("Success:",e),t.prospect=e})).catch((t=>{console.error("Error:",t)}))}}},mounted(){this.setRoutes(),this.create_prospect&&this.createProspect()}};const ft=(0,p.Z)(gt,[["render",ht]]);var bt=ft;const vt={class:"tw-card"},wt=(0,r._)("h1",{class:"tw-heading"},"Brokerage Authority",-1),yt={class:"max-w-sm m-auto text-left"},xt={class:"field-group flex justify-around"},$t={for:"yes",class:"radio-button"},Nt=(0,r._)("div",{class:"label"},"Yes",-1),Dt={for:"no",class:"radio-button"},St=(0,r._)("div",{class:"label"},"No",-1);function It(t,e,a,n,s,i){return(0,r.wg)(),(0,r.j4)(o.uT,{appear:""},{default:(0,r.w5)((()=>[(0,r._)("div",vt,[wt,(0,r._)("div",yt,[(0,r._)("div",xt,[(0,r._)("label",$t,[Nt,(0,r.wy)((0,r._)("input",{type:"radio",id:"yes",name:"brokerage_authority",value:"Yes","onUpdate:modelValue":e[0]||(e[0]=t=>i.brokerage_authority=t),tabindex:"1"},null,512),[[o.G2,i.brokerage_authority]])]),(0,r._)("label",Dt,[St,(0,r.wy)((0,r._)("input",{type:"radio",id:"no",name:"brokerage_authority",value:"No","onUpdate:modelValue":e[1]||(e[1]=t=>i.brokerage_authority=t),tabindex:"2"},null,512),[[o.G2,i.brokerage_authority]])])]),(0,r._)("button",{type:"button",class:"tw-btn mt-5 block m-auto",onClick:e[2]||(e[2]=(...t)=>i.nextSection&&i.nextSection(...t)),tabindex:"3"},"Next")])])])),_:1})}var Ct={name:"BrokerageAuthority",data(){return{brokerage_authority_options:["Yes","No"]}},computed:{brokerage_authority:{get(){return this.$store.state.brokerage_authority},set(t){this.$store.commit("updateBrokerageAuthority",t)}},route_index:{get(){return this.$store.state.curr_route_index},set(t){this.$store.commit("updateRouteIndex",t)}}},methods:{updateRadio(t){this.brokerage_authority=t},nextSection(){this.$router.push({name:"cargoCarried"})},setRoutes(){const t=this,e=this.$router.getRoutes();let a=0;this.curr_route=this.$router.currentRoute.value,e.forEach((function(e,o){e.name===t.curr_route.name&&(a=o)})),this.route_index=a}},mounted(){this.setRoutes()}};const Vt=(0,p.Z)(Ct,[["render",It]]);var kt=Vt;const Ot={class:"tw-card"},Rt=(0,r._)("h1",{class:"tw-heading"},"Cargo Carried",-1),Tt={class:"max-w-sm m-auto text-left"},Pt=["textContent"],Et=["for"],At=["name","id","onUpdate:modelValue"],jt=(0,r._)("div",{class:"absolute right-2 top-1/2 -translate-y-1/2 text-slate-400"},"%",-1);function Ut(t,e,a,n,s,i){return(0,r.wg)(),(0,r.j4)(o.uT,{appear:""},{default:(0,r.w5)((()=>[(0,r._)("div",Ot,[Rt,(0,r._)("div",Tt,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(i.cargo,((t,e)=>((0,r.wg)(),(0,r.iD)("div",{class:"flex items-center mb-4",key:t.name},[(0,r._)("label",{textContent:(0,N.zw)(t.name),class:"text-xl"},null,8,Pt),(0,r._)("label",{for:"cargo_carried_"+e+"_percentage",class:"relative w-24 ml-auto"},[(0,r.wy)((0,r._)("input",{type:"number",max:"100",name:"cargo_carried_"+e+"_percentage",id:"cargo_carried_"+e+"_percentage","onUpdate:modelValue":e=>t.percentage=e,class:"text-right w-full rounded-lg"},null,8,At),[[o.nr,t.percentage]]),jt],8,Et)])))),128)),(0,r._)("button",{type:"button",class:"tw-btn mt-5 block m-auto",onClick:e[0]||(e[0]=e=>t.$router.push({name:"tractorVINs"}))},"Next")])])])),_:1})}var Lt={name:"CargoCarried",data(){return{}},computed:{...(0,$.rn)({cargo:t=>t.cargo}),cargo:{get(){return this.$store.state.cargo},set(t){this.$store.commit("updateCargo",t)}},route_index:{get(){return this.$store.state.curr_route_index},set(t){this.$store.commit("updateRouteIndex",t)}}},watch:{cargo:{deep:!0,handler(){this.$store.commit("updateCargo",this.cargo)}}},methods:{setRoutes(){const t=this,e=this.$router.getRoutes();let a=0;this.curr_route=this.$router.currentRoute.value,e.forEach((function(e,o){e.name===t.curr_route.name&&(a=o)})),this.route_index=a}},mounted(){this.setRoutes()}};const Bt=(0,p.Z)(Lt,[["render",Ut]]);var Ft=Bt;const Wt={class:"tw-card"},Zt=(0,r._)("h1",{class:"tw-heading"},"Your Vehicles",-1),Mt={class:"max-w-lg m-auto text-left"},Ht={class:"pb-9"},qt={class:"text-lg tracking-wider"},Gt=["textContent"],Jt=["textContent"],zt=["onClick"],Yt={for:"add_vin",class:"mt-4 text-left flex items-center pl-4 pr-4 relative"},Kt=["disabled"],Xt=(0,r._)("div",{class:"tw-label"},"Enter a VIN",-1),Qt=["disabled"];function te(t,e,a,n,s,i){return(0,r.wg)(),(0,r.j4)(o.uT,{appear:""},{default:(0,r.w5)((()=>[(0,r._)("div",Wt,[Zt,(0,r._)("div",Mt,[(0,r._)("div",Ht,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(i.vin_data,(t=>((0,r.wg)(),(0,r.iD)("div",{class:"p-4 flex justify-between items-center border-b border-slate-300",key:t},[(0,r._)("div",qt,[(0,r._)("div",{class:"font-display text-xl text-slate-800 tracking-wider font-semibold",textContent:(0,N.zw)(`${t.year} ${t.make} ${t.model}`)},null,8,Gt),(0,r._)("div",{class:"tracking-widest text-slate-400 text-base uppercase font-medium",textContent:(0,N.zw)(t.vin)},null,8,Jt)]),(0,r._)("button",{class:"tw-btn tw-btn-small bg-red-400 text-white",onClick:e=>i.removeVIN(t.vin)},"Remove",8,zt)])))),128)),(0,r._)("label",Yt,[(0,r.wy)((0,r._)("input",{type:"text",name:"add_vin",id:"add_vin",class:"mr-4 grow uppercase rounded-xl",disabled:i.vin_data.length>9,"onUpdate:modelValue":e[0]||(e[0]=t=>s.added_vin=t),required:""},null,8,Kt),[[o.nr,s.added_vin]]),Xt,(0,r._)("button",{class:"tw-btn tw-btn-small bg-green-400 text-white whitespace-nowrap",disabled:0===s.added_vin.length||i.vin_data.length>9,onClick:e[1]||(e[1]=t=>i.addVIN())},"Add VIN",8,Qt)])]),(0,r._)("button",{type:"button",class:"tw-btn mt-5 block m-auto",onClick:e[2]||(e[2]=e=>t.$router.push({name:"selectPlan"}))},"Next")])])])),_:1})}var ee={name:"TractorVINs",data(){return{added_vin:""}},computed:{...(0,$.rn)({usdot_data:t=>t.usdot_data}),vin_data:{get(){return this.$store.state.vin_data},set(t){this.$store.commit("updateVinData",t)}},route_index:{get(){return this.$store.state.curr_route_index},set(t){this.$store.commit("updateRouteIndex",t)}}},methods:{addVIN(){this.added_vin.length>0&&!this.vinIsDuplicate(this.added_vin)&&(this.vinLookup(this.added_vin),this.added_vin="")},vinIsDuplicate(t){const e=this.vin_data.filter((e=>e.vin===t));return e.length>0},removeVIN(t){this.vin_data.forEach(((e,a)=>{e.vin===t&&a>-1&&this.vin_data.splice(a,1)}))},vinIsValid(t){const e=t;var a=new RegExp("^[A-HJ-NPR-Z\\d]{8}[\\dX][A-HJ-NPR-Z\\d]{2}\\d{6}$");return e.match(a)},vinLookup(t){const e=this,a={vin:t,make:String,model:String,year:String};fetch(`https://vpic.nhtsa.dot.gov/api/vehicles/DecodeVin/${t}?format=json`).then((t=>t.json())).then((function(t){t.Results.forEach((t=>{"Make"===t.Variable&&(a.make=t.Value),"Model"===t.Variable&&(a.model=t.Value),"Model Year"===t.Variable&&(a.year=t.Value)})),null!==a.make&&null!==a.model&&null!==a.year&&e.$store.commit("addVin",a)}))},getAllVinData(){const t=this;this.usdot_data.vins.slice(0,this.usdot_data.totalPowerUnits).forEach((e=>t.vinLookup(e)))},setRoutes(){const t=this,e=this.$router.getRoutes();let a=0;this.curr_route=this.$router.currentRoute.value,e.forEach((function(e,o){e.name===t.curr_route.name&&(a=o)})),this.route_index=a}},mounted(){this.setRoutes(),this.getAllVinData()}};const ae=(0,p.Z)(ee,[["render",te]]);var oe=ae;const ne={class:"tw-card"},re=(0,r._)("h1",{class:"tw-heading"},"Select a Plan",-1),se={class:"max-w-sm m-auto text-left"},ie={class:"flex justify-center mb-10"},ue={class:"w-2/4"},le={class:"text-4xl font-bold"},ce=(0,r._)("div",{class:"font-bold text-gray-400 text-sm uppercase tracking-wider"},"Premium Amount",-1),de={class:"w-2/4"},me=["value"],pe=["textContent"];function _e(t,e,a,n,s,i){return(0,r.wg)(),(0,r.j4)(o.uT,{appear:""},{default:(0,r.w5)((()=>[(0,r._)("div",ne,[re,(0,r._)("div",se,[(0,r._)("div",ie,[(0,r._)("div",ue,[(0,r._)("span",le,(0,N.zw)(i.premium),1),ce]),(0,r._)("div",de,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(t.plan_options,(t=>((0,r.wg)(),(0,r.iD)("label",{class:"flex items-center mb-2",key:t.deductible.label},[(0,r.wy)((0,r._)("input",{type:"radio",name:"deductible",value:t.deductible.amount,"onUpdate:modelValue":e[0]||(e[0]=t=>i.plan_selected=t)},null,8,me),[[o.G2,i.plan_selected]]),(0,r._)("div",{class:"ml-2",textContent:(0,N.zw)(t.deductible.label)},null,8,pe)])))),128))])]),(0,r._)("button",{type:"button",class:"tw-btn mt-5 block m-auto",onClick:e[1]||(e[1]=t=>i.goToSignNow())},"Next")])])])),_:1})}var he={name:"SelectPlan",computed:{...(0,$.rn)({plan_options:t=>t.plan_options,plan_selected:t=>t.plan_selected,contact_email:t=>t.usdot_data.contactEmail,contact_first_name:t=>t.usdot_data.contactFirstName,contact_last_name:t=>t.usdot_data.contactLastName}),show_payment:{get(){return this.$store.show_payment},set(t){this.$store.commit("updateShowPayment",t)}},plan_selected:{get(){return this.$store.state.plan_selected},set(t){this.$store.commit("updatePlans",t)}},route_index:{get(){return this.$store.state.curr_route_index},set(t){this.$store.commit("updateRouteIndex",t)}},premium(){const t=this,e=this.plan_options.filter((function(e){return e.deductible.amount===t.plan_selected}));return e[0].premium.label}},methods:{setRoutes(){const t=this,e=this.$router.getRoutes();let a=0;this.curr_route=this.$router.currentRoute.value,e.forEach((function(e,o){e.name===t.curr_route.name&&(a=o)})),this.route_index=a},goToSignNow(){window.location=`https://flywheel.giganticdesign.com/signnow/?email=${this.contact_email}&first_name=${this.contact_first_name}&last_name=${this.contact_last_name}&return_uri=${window.location.protocol}//${window.location.host}/payment`}},mounted(){this.setRoutes(),this.show_payment=!1}};const ge=(0,p.Z)(he,[["render",_e]]);var fe=ge;const be=(0,r._)("div",{class:"questionset card"},[(0,r._)("h1",null,"Sign"),(0,r._)("div",{class:"content"},[(0,r._)("button",{type:"button"},"Sign Document")])],-1);function ve(t,e,a,n,s,i){return(0,r.wg)(),(0,r.j4)(o.uT,{appear:""},{default:(0,r.w5)((()=>[be])),_:1})}var we={name:"signNow"};const ye=(0,p.Z)(we,[["render",ve]]);var xe=ye;const $e=(0,r._)("div",{class:"questionset card"},[(0,r._)("h1",{class:"tw-heading text-center"},"Payment"),(0,r._)("div",{class:"content"},[(0,r._)("div",{id:"mywidget"})])],-1);function Ne(t,e,a,n,s,i){return(0,r.wg)(),(0,r.j4)(o.uT,{appear:""},{default:(0,r.w5)((()=>[$e])),_:1})}var De={name:"ChoosePayment",computed:{...(0,$.rn)({plan_options:t=>t.plan_options,plan_selected:t=>t.plan_selected}),plan_selected:{get(){return this.$store.state.plan_selected},set(t){this.$store.commit("updatePlans",t)}}},methods:{createOrder(t){const e=this,a=`Title-${(new Date).toUTCString()}`;fetch("https://anddone.giganticdesign.com/create-payment-intent",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({amount:t,title:a,shortDescription:"shortDescription",paymentDescription:"paymentDescription",invoiceNumber:"invoiceNumber-005",expiresIn:"3000",intent:{paymentTypes:["DebitCard","CreditCard","ACH"]}})}).then((t=>t.json())).then((t=>{const a={theme:"classic",container:"mywidget"},o=t.paymentIntentToken,n=new AndDone(o,a);let r=setInterval((()=>{fetch(`https://flywheel.giganticdesign.com/ipfs/check-payment.php?token=${o}`).then((t=>t.text())).then((t=>{"success"==t&&(clearInterval(r),e.$router.push({name:"accountBound"}))})).catch((t=>console.log("error",t)))}),500);n.onload=t=>{}}))}},mounted(){const t=this.plan_options.filter((function(t){return t.selected}))[0];this.createOrder(t.premium.amount)}};const Se=(0,p.Z)(De,[["render",Ne]]);var Ie=Se,Ce=a.p+"img/loading.b46a058d.svg";const Ve=t=>((0,r.dD)("data-v-130ec676"),t=t(),(0,r.Cn)(),t),ke={key:0,class:"tw-card"},Oe=Ve((()=>(0,r._)("h1",{class:"tw-heading mb-2"},"Binding Account",-1))),Re=Ve((()=>(0,r._)("p",null,"Please wait while we bind your account.",-1))),Te=Ve((()=>(0,r._)("img",{src:Ce,class:"loading"},null,-1))),Pe=[Oe,Re,Te],Ee={key:1,class:"tw-card"},Ae=Ve((()=>(0,r._)("h1",{class:"tw-heading mb-2"},"Hooray!",-1))),je=Ve((()=>(0,r._)("p",{class:"text-2xl mb-8"},"We've bound your account!",-1))),Ue=Ve((()=>(0,r._)("p",null,[(0,r._)("strong",null,"Policy Number")],-1))),Le=["textContent"];function Be(t,e,a,n,s,i){return(0,r.wg)(),(0,r.j4)(o.uT,{appear:""},{default:(0,r.w5)((()=>[(0,r._)("main",null,[1===s.account.uniqueEntity.length?((0,r.wg)(),(0,r.iD)("div",ke,Pe)):((0,r.wg)(),(0,r.iD)("div",Ee,[Ae,je,Ue,(0,r._)("p",{textContent:(0,N.zw)(s.account.uniqueEntity),class:"font-bold text-7xl"},null,8,Le)]))])])),_:1})}var Fe=a(74),We={name:"AccountBound",data(){return{account:{accountName:String,agencyCode:String,branchCode:String,contactFirstName:String,contactLastName:String,invoiceLayout:String,isPersonal:Boolean,OptionName:String,serviceRoles:Array,statementLayout:String,statementPageBreak:String,uniqueEntity:Number}}},methods:{createClient(){const t=this;fetch(`https://flywheel.giganticdesign.com/swagger/create-client.php?firstname=${this.$store.state.usdot_data.ownerFirstName}&lastname=${this.$store.state.usdot_data.ownerLastName}&company=${this.$store.state.usdot_data.legalName}`).then((t=>t.json())).then((e=>{console.log(e),t.account=e,t.fireConfetti()}))},fireConfetti(){var t=200,e={origin:{y:.3}};function a(a,o){(0,Fe.Z)(Object.assign({},e,o,{particleCount:Math.floor(t*a)}))}a(.25,{spread:26,startVelocity:55}),a(.2,{spread:60}),a(.35,{spread:100,decay:.91,scalar:.8}),a(.1,{spread:120,startVelocity:25,decay:.92,scalar:1.2}),a(.1,{spread:120,startVelocity:45})}},mounted(){console.log(this.account.uniqueEntity.length),this.createClient()}};const Ze=(0,p.Z)(We,[["render",Be],["__scopeId","data-v-130ec676"]]);var Me=Ze;const He=(0,r._)("div",{class:"tw-card"},[(0,r._)("h1",{class:"tw-heading"},"Not Eligible"),(0,r._)("p",null,"Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor quas accusamus deserunt animi quam deleniti magnam accusantium asperiores odit id dolorum praesentium ipsum rerum, atque aut ex voluptates repudiandae earum!")],-1);function qe(t,e,a,n,s,i){return(0,r.wg)(),(0,r.j4)(o.uT,{appear:""},{default:(0,r.w5)((()=>[He])),_:1})}var Ge={name:"NotEligible"};const Je=(0,p.Z)(Ge,[["render",qe]]);var ze=Je;const Ye=[{path:"/",name:"enterDOT",component:h},{path:"/verify-dot",name:"verifyDOT",component:A},{path:"/owner-details",name:"ownerDetails",component:K},{path:"/contact-details",name:"contactDetails",component:rt},{path:"/insurance-effective-date",name:"insuranceEffectiveDate",component:bt},{path:"/brokerage-authority",name:"brokerageAuthority",component:kt},{path:"/cargo-carried",name:"cargoCarried",component:Ft},{path:"/tractor-vins",name:"tractorVINs",component:oe},{path:"/select-plan",name:"selectPlan",component:fe},{path:"/payment",name:"choosePayment",component:Ie},{path:"/account-bound",name:"accountBound",component:Me},{path:"/not-eligible",name:"notEligible",component:ze},{path:"/sign",name:"signNow",component:xe}],Ke=(0,n.p7)({history:(0,n.PO)(),routes:Ye});var Xe=Ke;const Qe=(0,$.MT)({state:{create_prospect:!0,usdot_number:Number,usdot_data:{},page_valid:!1,owner_is_contact:!1,insurance_effective_date:"",brokerage_authority:String,plan_selected:0,vin_data:[],show_payment:!1,prev_route:Object,curr_route:Object,next_route:Object,prev_route_index:Number,curr_route_index:Number,next_route_index:Number,plan_options:[{selected:!0,deductible:{label:"No Deductible",amount:0},premium:{label:"$12,000",amount:12e3}},{selected:!1,deductible:{label:"$1,000",amount:1e3},premium:{label:"$10,000",amount:1e4}},{selected:!1,deductible:{label:"$5,000",amount:5e3},premium:{label:"$9,000",amount:9e3}}],cargo:[{carried:!1,name:"General Freight",percentage:0},{carried:!1,name:"Bulk Liquid",percentage:0},{carried:!1,name:"Furniture",percentage:0},{carried:!1,name:"Beer",percentage:0},{carried:!1,name:"Live Animals",percentage:0},{carried:!1,name:"Refrigerated Goods",percentage:0}]},mutations:{initializeStore(t){localStorage.getItem("usdot_number")&&(t.usdot_number=localStorage.getItem("usdot_number")),localStorage.getItem("usdot_data")&&(t.usdot_data=JSON.parse(localStorage.getItem("usdot_data"))),localStorage.getItem("owner_is_contact")&&(t.owner_is_contact=localStorage.getItem("owner_is_contact")),localStorage.getItem("brokerage_authority")&&(t.brokerage_authority=localStorage.getItem("brokerage_authority")),localStorage.getItem("insurance_effective_date")&&(t.insurance_effective_date=localStorage.getItem("insurance_effective_date")),localStorage.getItem("cargo")&&(t.cargo=JSON.parse(localStorage.getItem("cargo"))),localStorage.getItem("plan_selected")&&(t.plan_options.forEach((function(t){t.deductible.amount==parseInt(localStorage.getItem("plan_selected"))?t.selected=!0:t.selected=!1})),t.plan_selected=parseInt(localStorage.getItem("plan_selected")))},updateRouteIndex(t,e){t.prev_route_index=e-1,t.curr_route_index=e,t.next_route_index=e+1},updatePrevRoute(t,e){t.prev_route=e},updateCurrentRoute(t,e){t.curr_route=e},updateNextRoute(t,e){t.next_route=e},updateShowPayment(t,e){t.show_payment=e},updateDOTNumber(t,e){localStorage.setItem("usdot_number",e),t.usdot_number=e},updateDOTData(t,e){e.totalPowerUnits=parseInt(e.totalPowerUnits),localStorage.setItem("usdot_data",JSON.stringify(e)),t.usdot_data=e},addVin(t,e){t.vin_data.push(e)},updateOwnerIsContact(t,e){localStorage.setItem("owner_is_contact",e),t.owner_is_contact=e},updateBrokerageAuthority(t,e){localStorage.setItem("brokerage_authority",e),t.brokerage_authority=e},updateInsuranceEffectiveDate(t,e){localStorage.setItem("insurance_effective_date",e),t.insurance_effective_date=e},updateCargo(t,e){localStorage.setItem("cargo",JSON.stringify(e)),t.cargo=e},updatePlans(t,e){t.plan_options.forEach((function(t){t.deductible.amount==e?t.selected=!0:t.selected=!1})),localStorage.setItem("plan_selected",e),t.plan_selected=e},updatePageValid(t,e){t.page_valid=e}},actions:{updateOwnerIsContact(t,e){t.owner_is_contact=e}}});var ta=Qe;const ea={class:"pl-5 pr-5"};function aa(t,e,a,o,n,s){const i=(0,r.up)("NavigationHeader"),u=(0,r.up)("router-view");return(0,r.wg)(),(0,r.iD)(r.HY,null,[(0,r.Wm)(i),(0,r._)("div",ea,[(0,r.Wm)(u)])],64)}const oa=(0,r._)("div",{class:"flex justify-between items-center pl-11 pr-11 pt-6 pb-6 mb-16 bg-white border-b border-slate-300"},[(0,r._)("div",{class:"text-xl uppercase font-sans font-bold"},"Flywheel"),(0,r._)("div",{class:"actions"})],-1);function na(t,e,a,o,n,s){const i=(0,r.up)("BreadCrumbs");return(0,r.wg)(),(0,r.iD)(r.HY,null,[oa,(0,r.Wm)(i)],64)}const ra={class:"progress"};function sa(t,e,a,o,n,s){return(0,r.wg)(),(0,r.iD)("div",ra)}var ia={name:"BreadCrumbs",data(){return{}},computed:{...(0,$.rn)({prev_route_index:t=>t.prev_route_index,curr_route_index:t=>t.prev_route_index,next_route_index:t=>t.next_route_index}),prev_route(){return this.$store.state.prev_route_index>=0?this.$router.getRoutes()[this.$store.state.prev_route_index]:""},curr_route(){return this.$router.getRoutes()[this.$store.state.curr_route_index]},next_route(){return this.$store.state.prev_route_index<this.$router.getRoutes().length?this.$router.getRoutes()[this.$store.state.next_route_index]:""}},mounted(){}};const ua=(0,p.Z)(ia,[["render",sa]]);var la=ua,ca={name:"NavigationHeader",components:{BreadCrumbs:la}};const da=(0,p.Z)(ca,[["render",na]]);var ma=da,pa={name:"App",components:{NavigationHeader:ma},computed:{...(0,$.rn)({usdot_data:t=>t.usdot_data})},mounted(){let t=document.createElement("script");t.setAttribute("src","//www.socialintents.com/api/chat/socialintents.1.3.js#2c9fa6c384285fc4018433f7215c098a"),t.setAttribute("async","async"),document.head.appendChild(t),Object.keys(this.usdot_data).length}};const _a=(0,p.Z)(pa,[["render",aa]]);var ha=_a;(0,o.ri)({extends:ha,beforeCreate(){this.$store.commit("initializeStore")}}).use(Xe).use(ta).mount("#app")}},e={};function a(o){var n=e[o];if(void 0!==n)return n.exports;var r=e[o]={exports:{}};return t[o](r,r.exports,a),r.exports}a.m=t,function(){var t=[];a.O=function(e,o,n,r){if(!o){var s=1/0;for(c=0;c<t.length;c++){o=t[c][0],n=t[c][1],r=t[c][2];for(var i=!0,u=0;u<o.length;u++)(!1&r||s>=r)&&Object.keys(a.O).every((function(t){return a.O[t](o[u])}))?o.splice(u--,1):(i=!1,r<s&&(s=r));if(i){t.splice(c--,1);var l=n();void 0!==l&&(e=l)}}return e}r=r||0;for(var c=t.length;c>0&&t[c-1][2]>r;c--)t[c]=t[c-1];t[c]=[o,n,r]}}(),function(){a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,{a:e}),e}}(),function(){a.d=function(t,e){for(var o in e)a.o(e,o)&&!a.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:e[o]})}}(),function(){a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){a.p="/"}(),function(){var t={143:0};a.O.j=function(e){return 0===t[e]};var e=function(e,o){var n,r,s=o[0],i=o[1],u=o[2],l=0;if(s.some((function(e){return 0!==t[e]}))){for(n in i)a.o(i,n)&&(a.m[n]=i[n]);if(u)var c=u(a)}for(e&&e(o);l<s.length;l++)r=s[l],a.o(t,r)&&t[r]&&t[r][0](),t[r]=0;return a.O(c)},o=self["webpackChunkFlywheel"]=self["webpackChunkFlywheel"]||[];o.forEach(e.bind(null,0)),o.push=e.bind(null,o.push.bind(o))}();var o=a.O(void 0,[998],(function(){return a(7063)}));o=a.O(o)})();
//# sourceMappingURL=app.18d30bf1.js.map
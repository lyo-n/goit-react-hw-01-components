(this["webpackJsonpgoit-react-hw-01-components"]=this["webpackJsonpgoit-react-hw-01-components"]||[]).push([[0],[,function(e,a,t){e.exports={profile:"profile_profile__11rpx",avatar:"profile_avatar__32hj1",name:"profile_name__1SuKG",tag:"profile_tag__2CYG7",location:"profile_location__AFq5Z",description:"profile_description__3H0v8",stats:"profile_stats__2TKNq",item:"profile_item__3lSAC",label:"profile_label__1pURj",quantity:"profile_quantity__2GJY3"}},function(e,a,t){e.exports={transactionHistory:"transactions_transactionHistory__1vhMq",theadName:"transactions_theadName__2Wz9l",tr:"transactions_tr__3_Dm7"}},function(e,a,t){e.exports={list:"friends_list__32Q2i",item:"friends_item__Slcvx"}},function(e,a,t){e.exports={statistics:"stats_statistics__4zb2o",title:"stats_title__3vLy-",statList:"stats_statList__1tnho",item:"stats_item__2Vi1f"}},,,function(e,a,t){e.exports={main:"main_main__2sje6"}},,function(e){e.exports=JSON.parse('{"name":"Jacques Gluke","tag":"jgluke","location":"Ocho Rios, Jamaica","avatar":"https://www.flaticon.com/svg/static/icons/svg/3784/3784184.svg","stats":{"followers":5603,"views":4827,"likes":1308}}')},function(e){e.exports=JSON.parse('[{"id":"id-1","label":".docx","percentage":22},{"id":"id-2","label":".pdf","percentage":4},{"id":"id-3","label":".mp3","percentage":17},{"id":"id-4","label":".psd","percentage":47},{"id":"id-5","label":".pdf","percentage":10}]')},function(e){e.exports=JSON.parse('[{"avatar":"https://www.flaticon.com/svg/static/icons/svg/763/763704.svg","name":"Mango","isOnline":true,"id":1812},{"avatar":"https://www.flaticon.com/svg/static/icons/svg/1998/1998671.svg","name":"Kiwi","isOnline":false,"id":1137},{"avatar":"https://www.flaticon.com/svg/static/icons/svg/1623/1623681.svg","name":"Ajax","isOnline":true,"id":1213},{"avatar":"https://www.flaticon.com/svg/static/icons/svg/2977/2977285.svg","name":"Jay","isOnline":true,"id":1714},{"avatar":"https://www.flaticon.com/svg/static/icons/svg/1998/1998749.svg","name":"Poly","isOnline":false,"id":1284}]')},function(e){e.exports=JSON.parse('[{"id":"1e0700a2-5183-4291-85cc-2065a036a683","type":"invoice","amount":"964.82","currency":"LRD"},{"id":"a30f821b-4d25-4ff0-abdd-e340b3f0dd2b","type":"payment","amount":"686.50","currency":"WST"},{"id":"44dca67a-8e5a-4798-bf8e-b15efd4e1abd","type":"invoice","amount":"828.62","currency":"UGX"},{"id":"ea8ed3dc-2b68-4a53-905a-53ecb0adef33","type":"withdrawal","amount":"527.80","currency":"ALL"},{"id":"ea76146a-0b00-4b80-bc02-a8c822176712","type":"withdrawal","amount":"371.43","currency":"MUR"},{"id":"63ca02f9-d637-46b5-9237-f3b24425e029","type":"payment","amount":"862.44","currency":"AUD"},{"id":"ed0263e8-59a5-4bf1-87e0-2bb88e53dc34","type":"withdrawal","amount":"907.00","currency":"GEL"},{"id":"6013bad0-750c-4691-8bc2-d8f2b43969c4","type":"withdrawal","amount":"352.52","currency":"UGX"},{"id":"252c7be4-8b06-4fa7-8d42-61fb835b70d5","type":"payment","amount":"388.98","currency":"TOP"},{"id":"4eaab41b-b967-40ac-82ed-85fc66f646f1","type":"deposit","amount":"103.10","currency":"BWP"},{"id":"9648a350-8469-42d5-8bf3-18090de5fe67","type":"withdrawal","amount":"322.32","currency":"MRO"},{"id":"9c5c25fb-1a95-4b2f-8d1f-4c4426d677cc","type":"invoice","amount":"14.79","currency":"PYG"},{"id":"43ef232c-80e9-4d6f-b48a-b22405620de3","type":"payment","amount":"904.86","currency":"CHF"},{"id":"5161682e-e620-4019-ab0a-24ceb10fbd20","type":"withdrawal","amount":"307.08","currency":"NOK"},{"id":"7b119d71-42e6-4c42-a141-6818b07bb9ff","type":"invoice","amount":"275.07","currency":"AWG"},{"id":"a4f65722-65c4-4c28-b1f4-b8ed988bb205","type":"deposit","amount":"213.10","currency":"STD"},{"id":"c6e5784b-0ca3-48d6-86e5-b5128af5a523","type":"invoice","amount":"116.11","currency":"CUP CUC"},{"id":"c9ebed6a-3a02-4b49-ac0d-0534b51f2bfd","type":"invoice","amount":"878.67","currency":"HKD"},{"id":"a4a98b0e-b22c-438b-9f83-de2df52110c8","type":"invoice","amount":"725.03","currency":"UYU UYI"},{"id":"b39bfa7a-0166-4c47-94d6-87d20590f746","type":"payment","amount":"405.45","currency":"MDL"}]')},function(e,a,t){e.exports=t(20)},,,,,,,function(e,a,t){"use strict";t.r(a);var n=t(0),c=t.n(n),s=t(6),r=t.n(s),i=t(7),l=t.n(i),m=t(8),o=t.n(m),d=t(1),u=t.n(d),p=function(e){var a=e.user,t=a.name,n=a.tag,s=a.location,r=a.avatar,i=a.alt,l=a.stats;return c.a.createElement("div",{className:u.a.profile},c.a.createElement("div",{className:u.a.description},c.a.createElement("img",{src:r,alt:i,className:u.a.avatar}),c.a.createElement("p",{className:u.a.name},t),c.a.createElement("p",{className:u.a.tag},"@",n),c.a.createElement("p",{className:u.a.location},s)),c.a.createElement("ul",{className:u.a.stats},c.a.createElement("li",{className:u.a.item},c.a.createElement("span",{className:u.a.label},"Followers"),c.a.createElement("span",{className:u.a.quantity},l.followers)),c.a.createElement("li",{className:u.a.item},c.a.createElement("span",{className:u.a.label},"Views"),c.a.createElement("span",{className:u.a.quantity},l.views)),c.a.createElement("li",{className:u.a.item},c.a.createElement("span",{className:u.a.label},"Likes"),c.a.createElement("span",{className:u.a.quantity},l.likes))))};p.defaultProps={user:o.a.shape({alt:"avatar"})};var f=p,b=t(9),y=t(4),_=t.n(y),v=["#ffa500","#FF0000","#00FF00","#00FFFF","#C0C0C0"],E=function(e){var a=e.title,t=e.stats;return a?c.a.createElement("section",{className:_.a.statistics},c.a.createElement("h2",{className:_.a.title},a),c.a.createElement("ul",{className:_.a.statList},t.map((function(e){return c.a.createElement("li",{className:_.a.item,key:e.id,style:{backgroundColor:v[Math.floor(Math.random()*v.length)]}},c.a.createElement("span",{className:"label"},e.label),c.a.createElement("span",{className:"percentage"},e.percentage,"%"))})))):c.a.createElement("h1",null,"title parametr not input")};E.defaultProps={title:"Upload stats"};var N=E,g=t(10),w=t(3),h=t.n(w),x=function(e){var a=e.friends;return c.a.createElement("ul",{className:h.a.list},a.map((function(e){return c.a.createElement("li",{className:h.a.item,key:e.id},c.a.createElement("span",{className:h.a.status},e.isOnline?c.a.createElement("div",{style:{width:20,height:20,background:"green",borderRadius:50}}):c.a.createElement("div",{style:{width:20,height:20,background:"red",borderRadius:50}})),c.a.createElement("img",{className:h.a.avatar,src:e.avatar,alt:"img",width:"48"}),c.a.createElement("p",{className:h.a.name}))})))},O=t(11),k=t(2),C=t.n(k),F=function(e){var a=e.items;return c.a.createElement("table",{className:C.a.transactionHistory},c.a.createElement("thead",{className:C.a.thead},c.a.createElement("tr",{className:C.a.theadName},c.a.createElement("th",null,"Type"),c.a.createElement("th",null,"Amount"),c.a.createElement("th",null,"Currency"))),c.a.createElement("tbody",{className:C.a.tbody},a.map((function(e){return c.a.createElement("tr",{key:e.id,className:C.a.tr},c.a.createElement("td",{className:C.a.type},e.type),c.a.createElement("td",{className:C.a.amount},e.amount),c.a.createElement("td",{className:C.a.currency},e.currency))}))))},U=t(12),q=function(){return c.a.createElement("div",{className:l.a.main},c.a.createElement(f,{user:b}),c.a.createElement(N,{stats:g}),c.a.createElement(x,{friends:O}),c.a.createElement(F,{items:U}))};r.a.render(c.a.createElement(q,null),document.querySelector("#root"))}],[[13,1,2]]]);
//# sourceMappingURL=main.16b06eae.chunk.js.map
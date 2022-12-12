(function(){"use strict";var t={6803:function(t,e,i){var o=i(942);const n=t=>((0,o.dD)("data-v-26177594"),t=t(),(0,o.Cn)(),t),s={id:"app"},r={class:"content"},a={class:"restaurant-info"},c=n((()=>(0,o._)("p",null," Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla ex quo eum commodi vero veritatis sit excepturi fugit sunt laboriosam odit suscipit, reprehenderit, placeat quisquam adipisci. Tempora assumenda ipsum repellat! ",-1))),l=n((()=>(0,o._)("p",null," Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga ullam reprehenderit delectus mollitia sit recusandae ipsa aperiam maxime quae. Fugiat velit blanditiis, et optio maxime sequi natus, consequatur architecto, vel consectetur corporis? Praesentium iste dolore quae aliquid unde doloremque deleniti! ",-1))),u={class:"menu"};function d(t,e,i,n,d,p){const m=(0,o.up)("Header"),h=(0,o.up)("Items"),v=(0,o.up)("Basket");return(0,o.wg)(),(0,o.iD)("div",s,[(0,o.Wm)(m),(0,o._)("div",r,[(0,o._)("div",a,[c,l,(0,o._)("div",u,[(0,o.Wm)(h,{items:d.items},null,8,["items"])])]),(0,o.Wm)(v)])])}const p=t=>((0,o.dD)("data-v-9eb25efa"),t=t(),(0,o.Cn)(),t),m={class:"navbar"},h=p((()=>(0,o._)("div",{class:"brand-title"},[(0,o._)("h1",null,"Restaurant App")],-1))),v={class:"shopping-cart"},b={key:0};function f(t,e,i,n,s,r){const a=(0,o.up)("font-awesome-icon");return(0,o.wg)(),(0,o.iD)("header",null,[(0,o._)("nav",m,[h,(0,o._)("div",v,[(0,o.Wm)(a,{class:"cart-icon",icon:"fa-cart-shopping",size:"xl"}),t.productsLength>0?((0,o.wg)(),(0,o.iD)("p",b,(0,o.zw)(t.productsLength),1)):(0,o.kq)("",!0)])])])}var g=i(3907),y={name:"Header",computed:{...(0,g.Se)(["productsLength"])}},_=i(3744);const w=(0,_.Z)(y,[["render",f],["__scopeId","data-v-9eb25efa"]]);var q=w;const k={class:"menu-grid"};function C(t,e,i,n,s,r){const a=(0,o.up)("Item");return(0,o.wg)(),(0,o.iD)("div",k,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(i.items,(t=>((0,o.wg)(),(0,o.iD)("div",{class:"menu-item-card",key:t.id},[(0,o.Wm)(a,{item:t},null,8,["item"])])))),128))])}const D=t=>((0,o.dD)("data-v-1d5cd437"),t=t(),(0,o.Cn)(),t),M={class:"card"},x={class:"card-content"},I=D((()=>(0,o._)("img",{src:"https://dummyimage.com/200",alt:""},null,-1))),z={class:"card-text"};function P(t,e,i,n,s,r){const a=(0,o.up)("Modal");return(0,o.wg)(),(0,o.iD)("div",M,[(0,o._)("div",x,[I,(0,o._)("div",z,[(0,o._)("p",null,(0,o.zw)(i.item.title),1),(0,o._)("p",null,"$"+(0,o.zw)(i.item.price),1)]),(0,o._)("button",{type:"button",class:"order-btn",onClick:e[0]||(e[0]=(...t)=>r.showModal&&r.showModal(...t))}," Add to order ")]),(0,o.wy)((0,o.Wm)(a,{title:i.item.title,description:i.item.description,price:i.item.price,id:i.item.id,onClose:r.closeModal},null,8,["title","description","price","id","onClose"]),[[o.F8,s.isModalVisible]])])}const O=t=>((0,o.dD)("data-v-6c161c77"),t=t(),(0,o.Cn)(),t),V={class:"modal-overlay"},Q={class:"modal"},S={class:"modal-header"},j={class:"modal-body"},F=O((()=>(0,o._)("img",{src:"https://via.placeholder.com/150",alt:""},null,-1))),W=O((()=>(0,o._)("br",null,null,-1))),$={class:"modal-btns"},H={type:"submit",class:"btn"},L={class:"modal-footer"};function Y(t,e,i,n,s,r){return(0,o.wg)(),(0,o.iD)("div",V,[(0,o._)("div",Q,[(0,o._)("header",S,[(0,o._)("button",{type:"button",class:"btn-close",onClick:e[0]||(e[0]=e=>t.$emit("close"))}," x ")]),(0,o._)("section",j,[(0,o.WI)(t.$slots,"body",{},(()=>[(0,o._)("form",{class:"order-form",onSubmit:e[2]||(e[2]=(...t)=>r.onSubmit&&r.onSubmit(...t))},[(0,o._)("h2",null,(0,o.zw)(i.title),1),(0,o._)("p",null,(0,o.zw)(i.description),1),F,W,(0,o.wy)((0,o._)("input",{type:"number","onUpdate:modelValue":e[1]||(e[1]=t=>s.quantity=t),placeholder:"Insert Quantity..."},null,512),[[o.nr,s.quantity]]),(0,o._)("div",$,[(0,o._)("button",H,"Add for $"+(0,o.zw)(i.price),1)])],32)]),!0)]),(0,o._)("footer",L,[(0,o.WI)(t.$slots,"footer",{},void 0,!0)])])])}var B={name:"Modal",data(){return{quantity:""}},props:{title:String,description:String,price:Number,id:Number},methods:{onSubmit(t){if(t.preventDefault(),console.log("event",t.target[0].value),0==t.target[0].value||""==t.target[0].value)return"";this.$store.dispatch("setProduct",{id:this.id,title:this.title,quantity:Number(this.quantity),price:this.price}),this.$emit("close")}}};const Z=(0,_.Z)(B,[["render",Y],["__scopeId","data-v-6c161c77"]]);var A=Z,N={name:"Item",props:{item:Object},components:{Modal:A},data(){return{isModalVisible:!1}},methods:{showModal(){console.log("show modal"),this.isModalVisible=!0},closeModal(){console.log("close modal"),this.isModalVisible=!1}},emits:["basket-data"]};const T=(0,_.Z)(N,[["render",P],["__scopeId","data-v-1d5cd437"]]);var K=T,E={name:"Items",data(){return{quantity:String}},props:{items:Array},components:{Item:K}};const G=(0,_.Z)(E,[["render",C],["__scopeId","data-v-486a7224"]]);var R=G;const U={class:"basket-info"},J={class:"basket-card"},X=(0,o._)("h2",null,"Your Order",-1),tt={class:"price"},et={class:"quantity"},it=["onClick"],ot=["onClick"],nt={key:0},st=(0,o._)("h3",null,"Your basket is empty",-1);function rt(t,e,i,n,s,r){const a=(0,o.up)("font-awesome-icon");return(0,o.wg)(),(0,o.iD)("div",U,[(0,o._)("div",J,[t.allProducts.length>0?((0,o.wg)(),(0,o.iD)(o.HY,{key:0},[X,((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(t.allProducts,(e=>((0,o.wg)(),(0,o.iD)("div",{class:"flex-container",key:e.id},[(0,o._)("p",null,(0,o.zw)(e.title),1),(0,o._)("div",tt,[(0,o._)("div",et,[(0,o._)("button",{class:"quantity__btn",onClick:i=>t.incrementQuantity(e.id)}," + ",8,it),(0,o._)("p",null,(0,o.zw)(e.quantity),1),(0,o._)("button",{class:"quantity__btn",onClick:i=>t.decrementQuantity(e.id)}," - ",8,ot)]),(0,o._)("div",null,"$"+(0,o.zw)(e.price),1)])])))),128)),t.totalPrice>0?((0,o.wg)(),(0,o.iD)("p",nt,"Subtotal: "+(0,o.zw)(t.totalPrice),1)):(0,o.kq)("",!0),(0,o._)("div",null,[(0,o._)("button",{onClick:e[0]||(e[0]=(...e)=>t.clearCart&&t.clearCart(...e))},"Clear Cart")])],64)):((0,o.wg)(),(0,o.iD)(o.HY,{key:1},[st,(0,o.Wm)(a,{class:"cart-icon",icon:"fa-cart-shopping",size:"xl"})],64))])])}var at={name:"Basket",computed:{...(0,g.Se)(["allProducts","totalPrice","productsLength"])},methods:{...(0,g.nv)(["incrementQuantity","decrementQuantity","clearCart"])}};const ct=(0,_.Z)(at,[["render",rt]]);var lt=ct,ut={name:"App",components:{Header:q,Items:R,Basket:lt},data(){return{items:[],isModalVisible:!1}},created(){this.items=[{id:1,title:"Classic Burger",description:"4oz beef patty, pickles, onion, lettuce, house sauce",price:105},{id:2,title:"Cheese Burger",description:"4oz beef patty, cheese, pickles, onion, lettuce, house sauce",price:115},{id:3,title:"Double Cheese Burger",description:"Double 4oz beef patty, double cheese, pickles, onion, lettuce, house sauce",price:115},{id:4,title:"Classic Fries",description:"Fries homie",price:35},{id:5,title:"Cheese Fries",description:"Fries homie but with hella cheese",price:40},{id:6,title:"Chili Cheese Fries",description:"Spicy cheese fries on the dead homies",price:45}]},methods:{showModal(){console.log("show modal"),console.log("isVisible",this.isModalVisible),this.isModalVisible=!0},closeModal(){console.log("close modal"),console.log("isVisible",this.isModalVisible),this.isModalVisible=!1}}};const dt=(0,_.Z)(ut,[["render",d],["__scopeId","data-v-26177594"]]);var pt=dt;i(7658);const mt=()=>({strict:!0,products:[]}),ht=mt(),vt={allProducts:t=>t.products,productsLength:t=>t.products.reduce(((t,e)=>t+e.quantity),0),totalPrice:t=>t.products.reduce(((t,e)=>t+e.price*e.quantity),0)},bt={setProduct(t,e){let i=t.products.findIndex((t=>t.id==e.id));console.log("duplicate index",t.products[i]),-1!==i?t.products.splice(i,1,e):t.products.push(e)},incrementQuantity(t,e){console.log("product id",e);let i=t.products.filter((t=>t.id==e));console.log("product",i),i[0].quantity++},decrementQuantity(t,e){let i=t.products.findIndex((t=>t.id==e)),o=t.products[i];console.log("index",i),console.log("product",t.products[i]),console.log("before decrement quantity",o.quantity),o.quantity>0&&o.quantity--,0==o.quantity&&t.products.splice(i,1),console.log("after decrement quantity",o.quantity)},clearCart(t){Object.assign(t,mt()),console.log("new state",t)}},ft={setProduct({commit:t},e){t("setProduct",e)},incrementQuantity({commit:t},e){t("incrementQuantity",e)},decrementQuantity({commit:t},e){t("decrementQuantity",e)},clearCart({commit:t}){t("clearCart")}};var gt={state:ht,getters:vt,mutations:bt,actions:ft};const yt=(0,g.MT)({modules:{modules:gt,namespaced:!0}});var _t=yt,wt=i(3636),qt=i(7810),kt=i(9417);wt.vI.add(kt.yYj);const Ct=(0,o.ri)(pt);Ct.component("font-awesome-icon",qt.GN).use(_t).mount("#app")}},e={};function i(o){var n=e[o];if(void 0!==n)return n.exports;var s=e[o]={exports:{}};return t[o](s,s.exports,i),s.exports}i.m=t,function(){var t=[];i.O=function(e,o,n,s){if(!o){var r=1/0;for(u=0;u<t.length;u++){o=t[u][0],n=t[u][1],s=t[u][2];for(var a=!0,c=0;c<o.length;c++)(!1&s||r>=s)&&Object.keys(i.O).every((function(t){return i.O[t](o[c])}))?o.splice(c--,1):(a=!1,s<r&&(r=s));if(a){t.splice(u--,1);var l=n();void 0!==l&&(e=l)}}return e}s=s||0;for(var u=t.length;u>0&&t[u-1][2]>s;u--)t[u]=t[u-1];t[u]=[o,n,s]}}(),function(){i.d=function(t,e){for(var o in e)i.o(e,o)&&!i.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:e[o]})}}(),function(){i.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={143:0};i.O.j=function(e){return 0===t[e]};var e=function(e,o){var n,s,r=o[0],a=o[1],c=o[2],l=0;if(r.some((function(e){return 0!==t[e]}))){for(n in a)i.o(a,n)&&(i.m[n]=a[n]);if(c)var u=c(i)}for(e&&e(o);l<r.length;l++)s=r[l],i.o(t,s)&&t[s]&&t[s][0](),t[s]=0;return i.O(u)},o=self["webpackChunkvue_restaurant_app"]=self["webpackChunkvue_restaurant_app"]||[];o.forEach(e.bind(null,0)),o.push=e.bind(null,o.push.bind(o))}();var o=i.O(void 0,[998],(function(){return i(6803)}));o=i.O(o)})();
//# sourceMappingURL=app.ce22d86e.js.map
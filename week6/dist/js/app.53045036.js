(function(t){function e(e){for(var s,n,i=e[0],c=e[1],l=e[2],d=0,p=[];d<i.length;d++)n=i[d],Object.prototype.hasOwnProperty.call(r,n)&&r[n]&&p.push(r[n][0]),r[n]=0;for(s in c)Object.prototype.hasOwnProperty.call(c,s)&&(t[s]=c[s]);u&&u(e);while(p.length)p.shift()();return o.push.apply(o,l||[]),a()}function a(){for(var t,e=0;e<o.length;e++){for(var a=o[e],s=!0,i=1;i<a.length;i++){var c=a[i];0!==r[c]&&(s=!1)}s&&(o.splice(e--,1),t=n(n.s=a[0]))}return t}var s={},r={app:0},o=[];function n(e){if(s[e])return s[e].exports;var a=s[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=t,n.c=s,n.d=function(t,e,a){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)n.d(a,s,function(e){return t[e]}.bind(null,s));return a},n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=e,i=i.slice();for(var l=0;l<i.length;l++)e(i[l]);var u=c;o.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"56d7":function(t,e,a){"use strict";a.r(e);var s={};a.r(s),a.d(s,"moneyFormat",(function(){return pe}));a("4de4"),a("4160"),a("b64b"),a("159b");var r=a("5530"),o=(a("e260"),a("e6cf"),a("cca6"),a("a79d"),a("2b0e")),n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("router-view")],1)},i=[],c=(a("5c0b"),a("2877")),l={},u=Object(c["a"])(l,n,i,!1,null,null,null),d=u.exports,p=a("8c4f"),m=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"home"},[a("b-navbar",{attrs:{toggleable:"lg",type:"light",variant:"light",sticky:""}},[a("b-navbar-toggle",{attrs:{target:"nav-collapse"}}),a("b-navbar-brand",[a("router-link",{attrs:{to:"/"}},[t._v("mei")])],1),a("div",{staticClass:"cartItem"},[a("div",{staticClass:"cart pr-1",on:{click:t.openNavbarChartModal}},[a("div",{staticClass:"cart-icon"},[a("span",{staticClass:"totalItems"},[t._v(t._s(this.$store.state.cartDetail.length))]),a("font-awesome-icon",{attrs:{icon:["fa","shopping-cart"]}})],1)])]),a("b-collapse",{attrs:{id:"nav-collapse","is-nav":""}},[a("b-navbar-nav",[a("b-nav-item",[a("router-link",{attrs:{to:"/"}},[t._v("前台頁面")])],1),a("b-nav-item",[a("router-link",{attrs:{to:"/products"}},[t._v("產品列表")])],1),a("b-nav-item",[a("router-link",{attrs:{to:"/cart"}},[t._v("購物車")])],1),a("b-nav-item",[a("router-link",{attrs:{to:"/about"}},[t._v("關於我們")])],1),a("b-nav-item",[a("router-link",{attrs:{to:"/checkout"}},[t._v("結帳")])],1),a("b-nav-item",[a("router-link",{attrs:{to:"/admin/productManagement"}},[t._v("後台產品列表管理")])],1)],1)],1)],1),a("router-view"),a("CartModal",{ref:"cartModal",attrs:{isCart:t.isCart},on:{"update:isCart":function(e){t.isCart=e},"update:is-cart":function(e){t.isCart=e}}})],1)},f=[],v=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"cartModal"},[a("div",{staticClass:"cartbox"},[t.isCheckout?a("div",{staticClass:"content"},[t._m(0),a("div",{staticClass:"body"},[a("div",{staticClass:"cart-menu"},[a("div",{staticClass:"d-flex mb-3"},[a("div",{staticClass:"col-6"},[a("span",{staticClass:"text-left"},[t._v("目前有共 "+t._s(t.cart.length)+" 件 商品")])]),a("div",{staticClass:"col-6 text-right"},[a("button",{staticClass:"btn btn-outline-danger btn-sm",attrs:{type:"button"},on:{click:function(e){return t.removeAllCartItem()}}},[a("font-awesome-icon",{attrs:{icon:["far","trash-alt"]}}),t._v("刪除所有品項 ")],1)])]),a("table",{staticClass:"table"},[t._m(1),this.$store.state.cartDetail.length?a("tbody",t._l(this.$store.state.cartDetail,(function(e){return a("tr",{key:e.id},[a("td",{staticClass:"align-middle"},[a("button",{staticClass:"btn btn-outline-danger btn-sm",attrs:{type:"button"},on:{click:function(a){return t.removeCartItem(e.product.id)}}},[a("font-awesome-icon",{attrs:{icon:["far","trash-alt"]}})],1)]),a("td",{staticClass:"align-middle"},[t._v(" "+t._s(e.product.title)+" ")]),a("td",{staticClass:"align-middle"},[a("div",{staticClass:"input-group"},[a("div",{staticClass:"input-group-prepend"},[a("button",{staticClass:"btn btn-outline-primary",on:{click:function(a){return t.quantityUpdata(e.product.id,e.quantity,"add")}}},[t._v(" + ")])]),a("input",{staticClass:"form-control text-center",attrs:{id:"inlineFormInputGroupUsername",type:"text"},domProps:{value:e.quantity},on:{keyup:function(a){return!a.type.indexOf("key")&&t._k(a.keyCode,"enter",13,a.key,"Enter")?null:t.quantityUpdata(e.product.id,a.target.value)}}}),a("div",{staticClass:"input-group-append"},[a("button",{staticClass:"btn btn-outline-primary",attrs:{disabled:1===e.quantity?"":t.disabled},on:{click:function(a){return t.quantityUpdata(e.product.id,e.quantity,"minus")}}},[t._v(" - ")])])])]),a("td",{staticClass:"align-middle"},[t._v(" "+t._s(e.product.unit)+" ")]),a("td",{staticClass:"align-middle text-right"},[t._v(" "+t._s(t._f("moneyFormat")(e.product.price))+" ")])])})),0):t._e()])]),a("div",{staticClass:"text-right"},[a("span",{staticClass:"text-right",attrs:{colspan:"4"}},[t._v(" 總計 ")]),a("span",{staticClass:"text-right"},[t._v(" "+t._s(t._f("moneyFormat")(this.$store.state.upCartTotalVal))+" ")])])])]):t._e(),t.isCart?a("div",{ref:"cart-menu",class:{cartMenu:t.isCart}},[a("div",{staticClass:"overlay",on:{click:t.closeCart}}),a("div",{staticClass:"dialog-centered cartModalItem",attrs:{role:"document"}},[a("div",{staticClass:"content"},[a("div",{staticClass:"card-header p-3"},[a("span",{staticClass:"title"},[t._v("已選購商品")]),a("button",{staticClass:"close",attrs:{type:"button","aria-label":"Close"},on:{click:t.closeCart}},[a("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])]),a("div",{staticClass:"card-body p-3"},[a("div",{staticClass:"cart-menu-scroll"},[a("div",{staticClass:"text-right mb-3"},[a("button",{staticClass:"btn btn-outline-danger btn-sm",attrs:{type:"button"},on:{click:function(e){return t.removeAllCartItem()}}},[a("font-awesome-icon",{attrs:{icon:["far","trash-alt"]}}),t._v("刪除所有品項 ")],1)]),a("table",{staticClass:"table-sm"},[this.$store.state.cartDetail.length?a("tbody",t._l(this.$store.state.cartDetail,(function(e){return a("tr",{key:e.id},[a("td",{staticClass:"align-middle"},[a("button",{staticClass:"btn btn-outline-danger btn-sm",attrs:{type:"button"},on:{click:function(a){return t.removeCartItem(e.product.id)}}},[a("font-awesome-icon",{attrs:{icon:["far","trash-alt"]}})],1)]),a("td",{staticClass:"align-middle "},[a("div",{staticClass:"cart-img mt-2",style:{backgroundImage:"url("+e.product.imageUrl+")"}})]),a("td",{staticClass:"align-middle"},[a("span",[t._v(t._s(e.product.title))]),a("p",[t._v("x "+t._s(e.quantity)+" / "+t._s(e.product.unit))])]),a("td",{staticClass:"align-middle text-right"},[t._v(" "+t._s(t._f("moneyFormat")(e.product.price))+" ")])])})),0):t._e()])]),a("div",{staticClass:"text-right"},[a("span",{staticClass:"text-right",attrs:{colspan:"4"}},[t._v(" 總計 ")]),a("span",{staticClass:"text-right"},[t._v(" "+t._s(t._f("moneyFormat")(this.$store.state.upCartTotalVal))+" ")])])]),a("div",{staticClass:"card-footer text-right p-2"},[a("button",{staticClass:"btn btn-secondary btn-sm m-1",attrs:{type:"button"},on:{click:t.closeCart}},[t._v("取消")]),a("button",{staticClass:"btn btn-primary btn-sm m-1",attrs:{type:"button"},on:{click:t.goOrder}},[t._v("結帳")])])])])]):t._e()]),a("loading",{attrs:{active:t.isLoading},on:{"update:active":function(e){t.isLoading=e}}}),a("MsgModal",{ref:"msgModal"})],1)},h=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"header"},[a("h5",{staticClass:"title text-center"},[t._v("購物清單")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("thead",[a("th",[t._v("刪除")]),a("th",[t._v("品名")]),a("th",{attrs:{width:"150px"}},[t._v(" 數量 ")]),a("th",[t._v("單位")]),a("th",[t._v("單價")])])}],g=(a("99af"),function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"msgModal"},[a("b-modal",{ref:"msg-modal",attrs:{id:"modal-center",centered:"",title:"訊息"},scopedSlots:t._u([{key:"modal-footer",fn:function(e){e.ok;var s=e.cancel;return[a("b-button",{attrs:{size:"sm",variant:"secondary"},on:{click:function(t){return s()}}},[t._v("關閉")]),t.isGoProducts?a("b-button",{attrs:{size:"sm",variant:"primary"},on:{click:function(e){return t.goProducts()}}},[t._v("繼續購物")]):t._e()]}}])},[a("div",{staticClass:"d-block text-center"},[a("h6",[t._v(t._s(t.msgTxt))])])])],1)}),C=[],b={name:"MsgModal",data:function(){return{msgTxt:"",isGoProducts:!1}},methods:{orderComplete:function(t,e){switch(this.$refs["msg-modal"].show(),t){case"orderComplete":this.msgTxt="恭喜你，已完成訂單。",this.isGoProducts=!0;break;case"AlreadyAddToCart":this.msgTxt=e,this.isGoProducts=!1;break;case"addToCartComplete":this.msgTxt="商品已成功加入購物車。",this.isGoProducts=!1;break;default:break}},hideModal:function(){this.$refs["msg-modal"].hide()},goProducts:function(){this.$router.push({path:"products"})}}},_=b,y=Object(c["a"])(_,g,C,!1,null,null,null),k=y.exports,x={name:"CartModal",props:{isCart:Boolean,isCheckout:Boolean,disabled:Boolean},components:{MsgModal:k},data:function(){return{cart:{},cartTotal:0,isCartComponent:!1,isLoading:!1}},created:function(){this.getCart()},methods:{getCart:function(t){var e=this;this.isLoading=!0;var a="".concat("https://course-ec-api.hexschool.io/","api/").concat("7f7cf697-969f-4e45-83f9-01ea57ba8ea3","/ec/shopping");this.axios({method:"get",url:a}).then((function(a){switch(e.cart=a.data.data,e.cartTotal=0,e.cart.forEach((function(t){e.cartTotal+=t.product.price*t.quantity})),e.$store.commit("reCartDetail",e.cart),e.$store.commit("upCartTotal",e.cartTotal),e.isLoading=!1,t){case"addCaertSuccess":e.$refs.msgModal.orderComplete("addToCartComplete");break;case"orderSuccess":e.$refs.msgModal.orderComplete("orderComplete");break;default:break}})).catch((function(t){console.error(t)}))},quantityUpdata:function(t,e,a){var s=this;switch(this.isLoading=!0,a){case"add":e+=1;break;case"minus":e>1&&(e-=1);break}var r="".concat("https://course-ec-api.hexschool.io/","api/").concat("7f7cf697-969f-4e45-83f9-01ea57ba8ea3","/ec/shopping"),o={product:t,quantity:e};this.axios({method:"patch",url:r,data:o}).then((function(t){s.isLoading=!1,s.getCart()})).catch((function(t){console.error(t)}))},removeCartItem:function(t){var e=this;this.isLoading=!0;var a="".concat("https://course-ec-api.hexschool.io/","api/").concat("7f7cf697-969f-4e45-83f9-01ea57ba8ea3","/ec/shopping/").concat(t);this.axios({method:"delete",url:a}).then((function(t){e.isLoading=!1,e.getCart()})).catch((function(t){console.error(t)}))},removeAllCartItem:function(){var t=this;this.isLoading=!0;var e="".concat("https://course-ec-api.hexschool.io/","api/").concat("7f7cf697-969f-4e45-83f9-01ea57ba8ea3","/ec/shopping/all/product");this.axios({method:"delete",url:e}).then((function(e){t.isLoading=!1,t.getCart()})).catch((function(t){console.error(t)}))},goOrder:function(){this.$router.push({path:"checkout"}),this.isCartComponent=!1,this.$emit("update:isCart",this.isCartComponent)},closeCart:function(){this.isCartComponent=!1,this.$emit("update:isCart",this.isCartComponent)}}},$=x,M=Object(c["a"])($,v,h,!1,null,null,null),P=M.exports,w={name:"Home",components:{CartModal:P},data:function(){return{isCart:!1}},methods:{openNavbarChartModal:function(){this.isCart||(this.isCart=!0)},reGetCart:function(t){this.$refs.cartModal.getCart(t)}}},O=w,T=Object(c["a"])(O,m,f,!1,null,null,null),j=T.exports,E=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"index"},[t._v(" 首頁 ")])},S=[],q={name:"Index"},L=q,D=Object(c["a"])(L,E,S,!1,null,null,null),I=D.exports,A=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"products"},[a("loading",{attrs:{active:t.isLoading},on:{"update:active":function(e){t.isLoading=e}}}),t._v(" 前台產品列表 "),a("div",{staticClass:"container"},[t._m(0),a("div",{staticClass:"row mt-4"},t._l(t.products,(function(e){return a("div",{key:e.id,staticClass:"col-md-4 mb-4"},[a("div",{staticClass:"card"},[a("div",{staticStyle:{height:"150px","background-size":"cover","background-position":"center"},style:{backgroundImage:"url("+e.imageUrl+")"},on:{click:function(a){return t.openModal(e)}}})]),a("div",{staticClass:"card-body"},[a("span",{staticClass:"badge badge-secondary float-right ml-2"},[t._v(t._s(e.category))]),a("h5",{staticClass:"card-title"},[t._v(t._s(e.title))]),a("span",{staticClass:"priceItem"},[a("span",{staticClass:"price"},[t._v(t._s(t._f("moneyFormat")(e.price))+" ")])]),a("span",{staticClass:"completed"},[a("span",{staticClass:"originPrice"},[t._v(t._s(t._f("moneyFormat")(e.origin_price)))])])]),a("div",{staticClass:"card-footer d-flex"},[a("button",{staticClass:"btn btn-outline-secondary btn-sm",attrs:{type:"button"},on:{click:function(a){return t.openModal(e)}}},[t._v("查看更多")]),a("button",{staticClass:"btn btn-primary btn-sm ml-auto",attrs:{type:"button"},on:{click:function(a){return t.addToCart(e)}}},[t._v("加入購物車")])])])})),0)]),a("ProductModal",{ref:"productModal"}),a("MsgModal",{ref:"msgModal"})],1)},N=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"header"},[a("h5",{staticClass:"title text-center"},[t._v("所有產品")])])}],F=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"productModal"},[a("b-modal",{ref:"product-modal",attrs:{"hide-footer":"",title:t.tempProduct.title}},[a("div",{staticClass:"d-block text-center"},[a("img",{staticClass:"img-fluid",attrs:{src:t.tempProduct.imageUrl[0],alt:""}}),a("blockquote",{staticClass:"blockquote mt-3"},[a("p",{staticClass:"mb-0",domProps:{innerHTML:t._s(t.tempProduct.content)}}),a("footer",{staticClass:"blockquote-footer text-right"},[t._v(" "+t._s(t.tempProduct.description)+" ")])]),a("div",{staticClass:"d-flex justify-content-between align-items-baseline"},[a("span",{staticClass:"completed"},[a("span",{staticClass:"currencyIdentifier"},[t._v("原價 ")]),a("span",{staticClass:"originPrice"},[t._v(" "+t._s(t.tempProduct.origin_price))])]),a("span",{staticClass:"priceItem"},[a("span",{staticClass:"currencyIdentifier"},[t._v("特價 ")]),a("span",{staticClass:"price"},[t._v(t._s(t.tempProduct.price)+" ")])])]),a("select",{directives:[{name:"model",rawName:"v-model",value:t.tempProduct.num,expression:"tempProduct.num"}],staticClass:"form-control mt-3",attrs:{name:""},on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.$set(t.tempProduct,"num",e.target.multiple?a:a[0])}}},[a("option",{attrs:{value:"0",disabled:"",selected:""}},[t._v(" 請選擇數量 ")]),t._l(10,(function(e){return a("option",{key:e,domProps:{value:e}},[t._v(" 選購 "+t._s(e)+" "+t._s(t.tempProduct.unit)+" ")])}))],2)]),a("div",{staticClass:"modal-footer"},[a("button",{staticClass:"btn btn-primary btn-sm ml-auto",attrs:{type:"button"},on:{click:function(e){return t.productDetailAddToCart(t.tempProduct)}}},[t._v("加入購物車")])])]),a("loading",{attrs:{active:t.isLoading},on:{"update:active":function(e){t.isLoading=e}}})],1)},G=[],U=(a("d3b7"),a("ac1f"),a("25f0"),a("5319"),{name:"ProductModal",data:function(){return{tempProduct:{imageUrl:[]},isLoading:!1}},methods:{priceFormat:function(t){var e=t.toString(),a=e.replace(/\B(?=(\d{3})+(?!\d))/g,",");return"NT$ "+a},getDetail:function(t){var e=this,a="".concat("https://course-ec-api.hexschool.io/","api/").concat("7f7cf697-969f-4e45-83f9-01ea57ba8ea3","/ec/product/").concat(t);this.axios({method:"get",url:a}).then((function(t){e.tempProduct=t.data.data,e.$set(e.tempProduct,"num",0),e.tempProduct.price=e.priceFormat(e.tempProduct.price),e.tempProduct.origin_price=e.priceFormat(e.tempProduct.origin_price),e.$refs["product-modal"].show()})).catch((function(t){console.error(t)}))},productDetailAddToCart:function(t){console.log(t),this.$parent.addToCart(t,t.num)},closeProductCart:function(){this.$refs["product-modal"].hide()}}}),B=U,z=Object(c["a"])(B,F,G,!1,null,null,null),V=z.exports,J={name:"Products",components:{ProductModal:V,MsgModal:k},data:function(){return{products:[],tempProduct:{},form:{name:"",email:"",tel:"",address:"",payment:"",message:""},carts:{},cartTotal:0,isCart:!1,isLoading:!1,errorMsg:""}},created:function(){this.getProduct()},methods:{getProduct:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;this.isLoading=!0;var a="".concat("https://course-ec-api.hexschool.io/","api/").concat("7f7cf697-969f-4e45-83f9-01ea57ba8ea3","/ec/products?page=").concat(e);this.axios({method:"get",url:a}).then((function(e){t.products=e.data.data,t.isLoading=!1})).catch((function(t){console.error(t)}))},addToCart:function(t){var e=this,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,s="".concat("https://course-ec-api.hexschool.io/","api/").concat("7f7cf697-969f-4e45-83f9-01ea57ba8ea3","/ec/shopping"),r={product:t.id,quantity:a};this.axios({method:"post",url:s,data:r}).then((function(t){e.errorMsg="",e.$refs.productModal.closeProductCart();var a="addCaertSuccess";e.$parent.reGetCart(a)})).catch((function(t){e.errorMsg=t.response.data.errors[0],e.$refs.productModal.closeProductCart(),e.$refs.msgModal.orderComplete("AlreadyAddToCart",e.errorMsg)}))},openModal:function(t){this.tempProduct=JSON.parse(JSON.stringify(t)),this.$refs.productModal.getDetail(this.tempProduct.id)}}},H=J,W=Object(c["a"])(H,A,N,!1,null,null,null),K=W.exports,Q=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"chat"},[t._v(" 購物車 ")])},R=[],X={name:"Chat"},Y=X,Z=Object(c["a"])(Y,Q,R,!1,null,null,null),tt=Z.exports,et=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},at=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"about"},[a("h1",[t._v("This is an about page")])])}],st={name:"About"},rt=st,ot=Object(c["a"])(rt,et,at,!1,null,null,null),nt=ot.exports,it=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"checkout container"},[t._v(" 結帳 "),a("CartModal",{ref:"cartModal",attrs:{isCheckout:t.isCheckout}}),a("div",{staticClass:"my-5 row justify-content-center"},[a("h5",{staticClass:"title"},[t._v("訂單資訊")]),a("validationObserver",{staticClass:"col-md-6",scopedSlots:t._u([{key:"default",fn:function(e){var s=e.invalid;return[a("form",{staticStyle:{"text-align":"left","font-size":"14px"},on:{submit:function(e){return e.preventDefault(),t.createOrder(e)}}},[a("div",{staticClass:"form-group"},[a("validationProvider",{attrs:{rules:"required"},scopedSlots:t._u([{key:"default",fn:function(e){var s=e.errors,r=e.classes;return[a("label",{attrs:{for:"username"}},[t._v("收件人姓名")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.form.name,expression:"form.name"}],staticClass:"form-control",class:r,attrs:{id:"username",type:"text"},domProps:{value:t.form.name},on:{input:function(e){e.target.composing||t.$set(t.form,"name",e.target.value)}}}),s[0]?a("span",{staticClass:"text-danger"},[t._v(t._s(s[0]))]):t._e()]}}],null,!0)})],1),a("div",{staticClass:"form-group"},[a("validation-provider",{attrs:{rules:"required|email"},scopedSlots:t._u([{key:"default",fn:function(e){var s=e.errors,r=e.classes;return[a("label",{attrs:{for:"email"}},[t._v("電子信箱")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.form.email,expression:"form.email"}],staticClass:"form-control",class:r,attrs:{id:"email",type:"text"},domProps:{value:t.form.email},on:{input:function(e){e.target.composing||t.$set(t.form,"email",e.target.value)}}}),s[0]?a("span",{staticClass:"text-danger"},[t._v(t._s(s[0]))]):t._e()]}}],null,!0)})],1),a("div",{staticClass:"form-group"},[a("validation-provider",{attrs:{rules:"required|min:8"},scopedSlots:t._u([{key:"default",fn:function(e){var s=e.errors,r=e.classes;return[a("label",{attrs:{for:"tel"}},[t._v("電話")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.form.tel,expression:"form.tel"}],staticClass:"form-control",class:r,attrs:{id:"tel",type:"text"},domProps:{value:t.form.tel},on:{input:function(e){e.target.composing||t.$set(t.form,"tel",e.target.value)}}}),s[0]?a("span",{staticClass:"text-danger"},[t._v(t._s(s[0]))]):t._e()]}}],null,!0)})],1),a("div",{staticClass:"form-group"},[a("validation-provider",{attrs:{rules:"required"},scopedSlots:t._u([{key:"default",fn:function(e){var s=e.errors,r=e.classes;return[a("label",{attrs:{for:"address"}},[t._v("地址")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.form.address,expression:"form.address"}],staticClass:"form-control",class:r,attrs:{id:"address",type:"text"},domProps:{value:t.form.address},on:{input:function(e){e.target.composing||t.$set(t.form,"address",e.target.value)}}}),s[0]?a("span",{staticClass:"text-danger"},[t._v(t._s(s[0]))]):t._e()]}}],null,!0)})],1),a("div",{staticClass:"form-group"},[a("validation-provider",{attrs:{rules:"required"},scopedSlots:t._u([{key:"default",fn:function(e){var s=e.errors,r=e.classes;return[a("label",{attrs:{for:"payment"}},[t._v("付款方式")]),a("select",{directives:[{name:"model",rawName:"v-model",value:t.form.payment,expression:"form.payment"}],staticClass:"form-control",class:r,attrs:{id:"payment",required:""},on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.$set(t.form,"payment",e.target.multiple?a:a[0])}}},[a("option",{attrs:{value:"",disabled:""}},[t._v("請選擇付款方式")]),t._l(t.paymentTxt,(function(e,s){return a("option",{key:s,domProps:{value:e}},[t._v(t._s(e))])}))],2),s[0]?a("span",{staticClass:"text-danger"},[t._v(t._s(s[0]))]):t._e()]}}],null,!0)})],1),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"message"}},[t._v("留言")]),a("textarea",{directives:[{name:"model",rawName:"v-model",value:t.form.message,expression:"form.message"}],staticClass:"form-control",attrs:{id:"message",cols:"30",rows:"3"},domProps:{value:t.form.message},on:{input:function(e){e.target.composing||t.$set(t.form,"message",e.target.value)}}})]),a("div",{staticClass:"text-right"},[a("button",{staticClass:"btn btn-primary",attrs:{type:"submit",disabled:s}},[t._v("送出")])])])]}}])})],1),a("MsgModal",{ref:"msgModal"})],1)},ct=[],lt={name:"Checkout",components:{CartModal:P,MsgModal:k},props:{},data:function(){return{isCheckout:!0,form:{name:"",email:"",tel:"",address:"",payment:"",message:""},paymentTxt:["WebATM","ATM","Barcode","Credit","ApplePay","GooglePay"]}},methods:{createOrder:function(){var t=this,e="".concat("https://course-ec-api.hexschool.io/","api/").concat("7f7cf697-969f-4e45-83f9-01ea57ba8ea3","/ec/orders");this.axios({method:"post",url:e,data:this.form}).then((function(e){if(e.data.data){var a="orderSuccess";t.$refs.cartModal.getCart(a)}})).catch((function(t){console.error(t)}))}}},ut=lt,dt=Object(c["a"])(ut,it,ct,!1,null,null,null),pt=dt.exports,mt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"dashboard"},[a("div",{staticClass:"navbar",attrs:{id:"nav"}},[a("router-link",{attrs:{to:"/"}},[t._v("前台頁面")]),t._v(" | "),a("router-link",{attrs:{to:"/admin"}},[t._v("後台首頁")]),t._v(" | "),a("router-link",{attrs:{to:"/admin/productManagement"}},[t._v("產品列表管理")]),t._v(" | "),a("router-link",{attrs:{to:"/admin/coupon"}},[t._v("優惠券管理")]),t._v(" | "),a("router-link",{attrs:{to:"/admin/order"}},[t._v("訂單列表管理")]),t._v(" | "),a("router-link",{attrs:{to:"/admin/images"}},[t._v("圖片儲存列表管理")]),a("a",{attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.signout(e)}}},[t._v("登出")])],1),t.checkSuccess?a("router-view",{attrs:{token:t.token}}):t._e()],1)},ft=[],vt={name:"Dashboard",data:function(){return{token:"",checkSuccess:!1}},created:function(){this.checkLogin()},methods:{checkLogin:function(){var t=this;this.token=document.cookie.replace(/(?:(?:^|.*;\s*)hexToken\s*=\s*([^;]*).*$)|^.*$/,"$1"),this.axios.defaults.headers.common.Authorization="Bearer ".concat(this.token);var e="".concat("https://course-ec-api.hexschool.io/","api/auth/check");this.axios.post(e,{api_token:this.token}).then((function(e){e.data.success&&(t.checkSuccess=!0)})).catch((function(e){console.error(e),t.$router.push("/login")}))},signout:function(){document.cookie="hexToken=;expires=; ",this.$router.push("/login")}}},ht=vt,gt=Object(c["a"])(ht,mt,ft,!1,null,null,null),Ct=gt.exports,bt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"login"},[a("div",{staticClass:"container"},[a("form",{staticClass:"form-signin",on:{submit:function(e){return e.preventDefault(),t.signin(e)},keycode:function(e){return e.type.indexOf("key")||13===e.keyCode?t.signin(e):null}}},[a("h1",{staticClass:"h3 mb-3 font-weight-normal"},[t._v(" 請先登入 ")]),a("div",{staticClass:"form-group"},[a("label",{staticClass:"sr-only",attrs:{for:"inputEmail"}},[t._v("Email address")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.user.email,expression:"user.email"}],staticClass:"form-control",attrs:{id:"inputEmail",type:"email",placeholder:"請輸入email",required:"",autofocus:""},domProps:{value:t.user.email},on:{input:function(e){e.target.composing||t.$set(t.user,"email",e.target.value)}}})]),a("div",{staticClass:"form-group"},[a("label",{staticClass:"sr-only",attrs:{for:"inputPassword"}},[t._v("密碼")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.user.password,expression:"user.password"}],staticClass:"form-control",attrs:{id:"inputPassword",type:"password",placeholder:"請輸入密碼",required:""},domProps:{value:t.user.password},on:{input:function(e){e.target.composing||t.$set(t.user,"password",e.target.value)}}})]),a("button",{staticClass:"btn btn-lg btn-primary btn-block",attrs:{type:"submit"}},[t._v(" 登入 ")])])])])},_t=[],yt={name:"Login",data:function(){return{user:{email:"",password:""},token:""}},methods:{signin:function(){var t=this,e="".concat("https://course-ec-api.hexschool.io/","api/auth/login");this.axios.post(e,this.user).then((function(e){var a=e.data.token,s=e.data.expired;document.cookie="hexToken=".concat(a,";expires=").concat(new Date(1e3*s),";"),t.$router.push("/admin/productManagement")})).catch((function(t){console.log(t)}))},signout:function(){document.cookie="hexToken=;expires=; "}}},kt=yt,xt=(a("ebc6"),Object(c["a"])(kt,bt,_t,!1,null,null,null)),$t=xt.exports,Mt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"productManagement"},[t._v(" 產品列表管理 ")])},Pt=[],wt={name:"ProductManagement"},Ot=wt,Tt=Object(c["a"])(Ot,Mt,Pt,!1,null,null,null),jt=Tt.exports,Et=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"coupon"},[t._v(" 優惠券 ")])},St=[],qt={name:"Coupon"},Lt=qt,Dt=Object(c["a"])(Lt,Et,St,!1,null,null,null),It=Dt.exports,At=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"order"},[t._v(" 訂單列表 ")])},Nt=[],Ft={name:"Order"},Gt=Ft,Ut=Object(c["a"])(Gt,At,Nt,!1,null,null,null),Bt=Ut.exports,zt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"images"},[t._v(" 圖片儲存列表 ")])},Vt=[],Jt={name:"Images"},Ht=Jt,Wt=Object(c["a"])(Ht,zt,Vt,!1,null,null,null),Kt=Wt.exports;o["default"].use(p["a"]);var Qt=[{path:"/",name:"Home",component:j,children:[{path:"",component:I},{path:"/products",component:K},{path:"/cart",component:tt},{path:"/about",component:nt},{path:"/checkout",component:pt}]},{path:"/login",component:$t},{path:"/admin",component:Ct,children:[{path:"productManagement",component:jt},{path:"coupon",component:It},{path:"order",component:Bt},{path:"images",component:Kt}]}],Rt=new p["a"]({routes:Qt}),Xt=Rt,Yt=a("2f62"),Zt={cartDetail:{},upCartTotalVal:0},te=Zt;o["default"].use(Yt["a"]);var ee={reCartDetail:function(t,e){t.cartDetail=e},upCartTotal:function(t,e){t.upCartTotalVal=e}},ae=ee,se={get_reCartDetail:function(t){return t.cartDetail}},re=se,oe=a("63e0"),ne=a.n(oe);o["default"].use(Yt["a"]);var ie=new Yt["a"].Store({state:te,mutations:ae,getters:re,actions:ne.a}),ce=(a("8049"),a("bc3a")),le=a.n(ce),ue=a("a7fe"),de=a.n(ue),pe=(a("a15b"),a("1276"),function(t){var e=t.toString().split(".");return e[0]=e[0].replace(/\B(?=(\d{3})+(?!\d))/g,","),"NT$"+e.join(".")}),me=a("5f5b"),fe=a("b1e0"),ve=(a("f9e3"),a("2dd8"),a("ecee")),he=a("c074"),ge=a("f2d1"),Ce=a("b702"),be=a("ad3d"),_e=a("7bb1"),ye=a("4c93"),ke=a("60d4"),xe=a("9062"),$e=a.n(xe);a("e40d");o["default"].component("Loading",$e.a),o["default"].use(me["a"]),o["default"].use(fe["a"]),o["default"].use(de.a,le.a),ve["c"].add(ge["a"],Ce["a"],he["a"]),o["default"].component("font-awesome-icon",be["a"]),Object.keys(ye).forEach((function(t){Object(_e["d"])(t,ye[t])})),o["default"].component("ValidationObserver",_e["a"]),o["default"].component("ValidationProvider",_e["b"]),Object(_e["e"])("zh_TW",ke),Object(_e["c"])({classes:{valid:"is-valid",invalid:"is-invalid"}}),Object(_e["d"])("required",Object(r["a"])(Object(r["a"])({},ye["required"]),{},{message:"此欄位為必填欄位"})),o["default"].config.productionTip=!1,Object.keys(s).forEach((function(t){o["default"].filter(t,s[t])})),new o["default"]({router:Xt,store:ie,render:function(t){return t(d)}}).$mount("#app")},"5c0b":function(t,e,a){"use strict";var s=a("9c0c"),r=a.n(s);r.a},"63e0":function(t,e){},8049:function(t,e,a){},"9c0c":function(t,e,a){},e6ae:function(t,e,a){},ebc6:function(t,e,a){"use strict";var s=a("e6ae"),r=a.n(s);r.a}});
//# sourceMappingURL=app.53045036.js.map
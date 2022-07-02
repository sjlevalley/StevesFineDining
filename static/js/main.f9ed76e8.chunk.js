(this["webpackJsonpreact-complete-guide"]=this["webpackJsonpreact-complete-guide"]||[]).push([[0],[,,,function(e,t,n){e.exports={form:"Checkout_form__3YUzK",control:"Checkout_control__2E5mE",actions:"Checkout_actions__1Rcig",submit:"Checkout_submit__RoFS5",invalid:"Checkout_invalid__2CRY0"}},function(e,t,n){e.exports={"cart-items":"Cart_cart-items__sEF_7",total:"Cart_total__36wXg",actions:"Cart_actions__1Spx1","button--alt":"Cart_button--alt__vHGr6",button:"Cart_button__t7TDB",bump:"Cart_bump__1GHmL"}},function(e,t,n){e.exports={"cart-item":"CartItem_cart-item__1X5mW",summary:"CartItem_summary__1EYsw",price:"CartItem_price__1ui5U",amount:"CartItem_amount__yurzs",actions:"CartItem_actions__1S8pm",bump:"CartItem_bump__1KlDu"}},,,,,function(e,t,n){e.exports={button:"HeaderCartButton_button__3Gq9s",icon:"HeaderCartButton_icon__X4Xzg",badge:"HeaderCartButton_badge__1ogmb",bump:"HeaderCartButton_bump__13ok-"}},,,function(e,t,n){e.exports={meal:"MealItem_meal__31qa8",description:"MealItem_description__2PT9T",price:"MealItem_price__2-s5V"}},function(e,t,n){e.exports={meals:"AvailableMeals_meals__1jTkX","meals-appear":"AvailableMeals_meals-appear__1-mhm",MealsLoading:"AvailableMeals_MealsLoading__t3tpn",MealsError:"AvailableMeals_MealsError__1uCT0"}},function(e,t,n){e.exports={backdrop:"Modal_backdrop__1Nkdl",modal:"Modal_modal__1RHsD","slide-down":"Modal_slide-down__3PEmK"}},,function(e,t,n){e.exports={header:"Header_header__2fgaf","main-image":"Header_main-image__Vjl2J"}},,function(e,t,n){e.exports={summary:"MealsSummary_summary__1wGPf"}},function(e,t,n){e.exports={card:"Card_card__2jWv4"}},function(e,t,n){e.exports={input:"Input_input__3CzPd"}},function(e,t,n){e.exports={form:"MealItemForm_form__rzjz_"}},,,,,function(e,t,n){},,,function(e,t,n){"use strict";n.r(t);var a=n(8),c=n.n(a),r=(n(27),n(2)),s=n(1),i=n.n(s),o=n(0),l=function(){return Object(o.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",children:Object(o.jsx)("path",{d:"M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"})})},u=i.a.createContext({items:[],totalAmount:0,addItem:function(e){},removeItem:function(e){},clearCart:function(){}}),d=n(10),j=n.n(d),m=function(e){var t=Object(s.useState)(!1),n=Object(r.a)(t,2),a=n[0],c=n[1],i=Object(s.useContext)(u).items,d=i.reduce((function(e,t){return e+t.amount}),0),m="".concat(j.a.button," ").concat(a?j.a.bump:"");return Object(s.useEffect)((function(){if(0!==i.length){c(!0);var e=setTimeout((function(){c(!1)}),300);return function(){clearTimeout(e)}}}),[i]),Object(o.jsxs)("button",{className:m,onClick:e.onClick,children:[Object(o.jsx)("span",{className:j.a.icon,children:Object(o.jsx)(l,{})}),Object(o.jsx)("span",{children:"Your Cart"}),Object(o.jsx)("span",{className:j.a.badge,children:d})]})},b=n.p+"static/media/mealsImage2.484439d1.jpg",O=n(17),f=n.n(O),p=function(e){return Object(o.jsxs)(s.Fragment,{children:[Object(o.jsxs)("header",{className:f.a.header,children:[Object(o.jsx)("h1",{children:"Steve's Fine Dining"}),Object(o.jsx)(m,{onClick:e.onShowCart})]}),Object(o.jsx)("div",{className:f.a["main-image"],children:Object(o.jsx)("img",{src:b,alt:"A table full of delicious food!"})})]})},h=n(19),x=n.n(h),_=function(){return Object(o.jsxs)("section",{className:x.a.summary,children:[Object(o.jsx)("h2",{children:"Delicious Food, Fresh out of the Oven!"}),Object(o.jsx)("p",{children:"Choose your favorite meal from our selection of tasty meals and enjoy a delicious lunch or dinner with friends."}),Object(o.jsx)("p",{children:"All our meals are cooked with high-quality ingredients, just-in-time and of course by experienced chefs!"})]})},v=n(7),C=n.n(v),y=n(12),g=n(20),N=n.n(g),k=function(e){return Object(o.jsx)("div",{className:N.a.card,children:e.children})},A=n(6),S=n(21),w=n.n(S),E=i.a.forwardRef((function(e,t){return Object(o.jsxs)("div",{className:w.a.input,children:[Object(o.jsx)("label",{htmlFor:e.input.id,children:e.label}),Object(o.jsx)("input",Object(A.a)({ref:t},e.input))]})})),I=n(22),M=n.n(I),F=function(e){var t=Object(s.useState)(!0),n=Object(r.a)(t,2),a=n[0],c=n[1],i=Object(s.useRef)();return Object(o.jsxs)("form",{className:M.a.form,onSubmit:function(t){t.preventDefault();var n=i.current.value,a=+n;0===n.trim().length||a<1||a>5?c(!1):e.onAddToCart(a)},children:[Object(o.jsx)(E,{ref:i,label:"Amount",input:{id:"amount",type:"number",min:"1",max:"5",step:"1",defaultValue:"1"}}),Object(o.jsx)("button",{children:"+ Add"}),!a&&Object(o.jsx)("p",{children:"Please enter a valid amount (1-5)."})]})},R=n(13),T=n.n(R),H=function(e){var t=Object(s.useContext)(u),n="$".concat(e.price.toFixed(2));return Object(o.jsxs)("li",{className:T.a.meal,children:[Object(o.jsxs)("div",{children:[Object(o.jsx)("h3",{children:e.name}),Object(o.jsx)("div",{className:T.a.description,children:e.description}),Object(o.jsx)("div",{className:T.a.price,children:n})]}),Object(o.jsx)("div",{children:Object(o.jsx)(F,{onAddToCart:function(n){t.addItem({id:e.id,name:e.name,amount:n,price:e.price})}})})]})},P=n(14),D=n.n(P),z=function(){var e=Object(s.useState)([]),t=Object(r.a)(e,2),n=t[0],a=t[1],c=Object(s.useState)(!0),i=Object(r.a)(c,2),l=i[0],u=i[1],d=Object(s.useState)(),j=Object(r.a)(d,2),m=j[0],b=j[1];if(Object(s.useEffect)((function(){var e=function(){var e=Object(y.a)(C.a.mark((function e(){var t,n,c,r;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://steves-fine-dining-default-rtdb.firebaseio.com/meals.json");case 2:if((t=e.sent).ok){e.next=5;break}throw new Error("Something went wrong!");case 5:return e.next=7,t.json();case 7:for(r in n=e.sent,c=[],n)c.push({id:r,name:n[r].name,description:n[r].description,price:n[r].price});a(c),u(!1);case 12:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e().catch((function(e){u(!1),b(e.message)}))}),[]),l)return Object(o.jsx)("section",{className:D.a.MealsLoading,children:Object(o.jsx)("p",{children:"Retrieving available meals..."})});if(m)return Object(o.jsx)("section",{className:D.a.MealsError,children:Object(o.jsx)("p",{children:m})});var O=n.map((function(e){return Object(o.jsx)(H,{id:e.id,name:e.name,description:e.description,price:e.price},e.id)}));return Object(o.jsx)("section",{className:D.a.meals,children:Object(o.jsx)(k,{children:Object(o.jsx)("ul",{children:O})})})},B=function(){return Object(o.jsxs)(s.Fragment,{children:[Object(o.jsx)(_,{}),Object(o.jsx)(z,{})]})},Y=n(5),L=n.n(Y),V=function(e){var t=Object(s.useState)(!1),n=Object(r.a)(t,2),a=n[0],c=n[1],i="$".concat(e.price.toFixed(2)),l=Object(s.useContext)(u).items;Object(s.useEffect)((function(){if(0!==l.length){c(!0);var e=setTimeout((function(){c(!1)}),300);return function(){clearTimeout(e)}}}),[l]);var d="".concat(L.a.button," ").concat(a?L.a.bump:"");return Object(o.jsxs)("li",{className:L.a["cart-item"],children:[Object(o.jsxs)("div",{children:[Object(o.jsx)("h2",{children:e.name}),Object(o.jsxs)("div",{className:L.a.summary,children:[Object(o.jsx)("span",{className:L.a.price,children:i}),Object(o.jsxs)("span",{className:L.a.amount,children:["x ",e.amount]})]})]}),Object(o.jsxs)("div",{className:L.a.actions,children:[Object(o.jsx)("button",{className:d,onClick:e.onRemove,children:"\u2212"}),Object(o.jsx)("button",{className:d,onClick:e.onAdd,children:"+"})]})]})},X=n(3),G=n.n(X),J=function(e){return""===e.trim()},q=function(e){var t=Object(s.useState)({name:!0,street:!0,city:!0,postalCode:!0}),n=Object(r.a)(t,2),a=n[0],c=n[1],i=Object(s.useRef)(),l=Object(s.useRef)(),u=Object(s.useRef)(),d=Object(s.useRef)(),j="".concat(G.a.control," ").concat(a.name?"":G.a.invalid),m="".concat(G.a.control," ").concat(a.street?"":G.a.invalid),b="".concat(G.a.control," ").concat(a.postalCode?"":G.a.invalid),O="".concat(G.a.control," ").concat(a.city?"":G.a.invalid);return Object(o.jsxs)("form",{className:G.a.form,onSubmit:function(t){t.preventDefault();var n=i.current.value,a=l.current.value,r=u.current.value,s=d.current.value,o=!J(n),j=!J(a),m=!J(s),b=5===r.trim().length;c({name:o,street:j,city:m,postalCode:b}),o&&j&&m&&b&&e.onConfirm({name:n,street:a,city:s,postalCode:r})},children:[Object(o.jsxs)("div",{className:j,children:[Object(o.jsx)("label",{htmlFor:"name",children:"Your Name"}),Object(o.jsx)("input",{type:"text",id:"name",placeholder:"Enter name here...",ref:i}),!a.name&&Object(o.jsx)("p",{children:"Please enter a valid name!"})]}),Object(o.jsxs)("div",{className:m,children:[Object(o.jsx)("label",{htmlFor:"street",children:"Street"}),Object(o.jsx)("input",{type:"text",id:"street",placeholder:"Enter address...",ref:l}),!a.street&&Object(o.jsx)("p",{children:"Please enter a valid street!"})]}),Object(o.jsxs)("div",{className:b,children:[Object(o.jsx)("label",{htmlFor:"postal",children:"Postal Code"}),Object(o.jsx)("input",{type:"text",id:"postal",placeholder:"Enter zip...",ref:u}),!a.postalCode&&Object(o.jsx)("p",{children:"Postal Code must be 5 numbers long!"})]}),Object(o.jsxs)("div",{className:O,children:[Object(o.jsx)("label",{htmlFor:"city",children:"City"}),Object(o.jsx)("input",{type:"text",id:"city",placeholder:"Enter city...",ref:d}),!a.city&&Object(o.jsx)("p",{children:"Please enter a valid city!"})]}),Object(o.jsxs)("div",{className:G.a.actions,children:[Object(o.jsx)("button",{type:"button",onClick:e.onCancel,children:"Cancel"}),Object(o.jsx)("button",{className:G.a.submit,children:"Confirm"})]})]})},K=n(4),$=n.n(K),U=n(15),W=n.n(U),Q=function(e){return Object(o.jsx)("div",{className:W.a.backdrop,onClick:e.onClose})},Z=function(e){return Object(o.jsx)("div",{className:W.a.modal,children:Object(o.jsx)("div",{className:W.a.content,children:e.children})})},ee=document.getElementById("overlays"),te=function(e){return Object(o.jsxs)(s.Fragment,{children:[c.a.createPortal(Object(o.jsx)(Q,{onClose:e.onClose}),ee),c.a.createPortal(Object(o.jsx)(Z,{children:e.children}),ee)]})},ne=function(e){var t=Object(s.useState)(!1),n=Object(r.a)(t,2),a=n[0],c=n[1],l=Object(s.useState)(!1),d=Object(r.a)(l,2),j=d[0],m=d[1],b=Object(s.useState)(!1),O=Object(r.a)(b,2),f=O[0],p=O[1],h=Object(s.useState)(!1),x=Object(r.a)(h,2),_=x[0],v=x[1],g=Object(s.useContext)(u),N=g.items.length>0,k="$".concat(g.totalAmount.toFixed(2)),A=g.items;Object(s.useEffect)((function(){if(0!==A.length){c(!0);var e=setTimeout((function(){c(!1)}),300);return function(){clearTimeout(e)}}}),[A]);var S=function(e){g.removeItem(e)},w=function(e){g.addItem(e)},E="".concat(a?$.a.bump:""),I=function(){var e=Object(y.a)(C.a.mark((function e(t){return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return v(!0),e.next=3,fetch("https://steves-fine-dining-default-rtdb.firebaseio.com/orders.json",{method:"POST",body:JSON.stringify({user:t,orderedItems:g.items})});case 3:v(!1),m(!0),g.clearCart();case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),M=Object(o.jsx)("ul",{className:$.a["cart-items"],children:g.items.map((function(e){return Object(o.jsx)(V,{name:e.name,amount:e.amount,price:e.price,onRemove:S.bind(null,e.id),onAdd:w.bind(null,e)},e.id)}))}),F=Object(o.jsxs)("div",{className:$.a.actions,children:[Object(o.jsx)("button",{className:$.a["button--alt"],onClick:e.onClose,children:"Close"}),N&&Object(o.jsx)("button",{className:$.a.button,onClick:function(){p(!0)},children:"Order"})]}),R=Object(o.jsxs)(i.a.Fragment,{children:[M,Object(o.jsxs)("div",{className:$.a.total,children:[Object(o.jsx)("span",{children:"Total Amount"}),Object(o.jsx)("span",{className:E,children:k})]}),f&&Object(o.jsx)(q,{onConfirm:I,onCancel:e.onClose}),!f&&F]}),T=Object(o.jsx)("p",{children:"Sending order data..."}),H=Object(o.jsxs)(i.a.Fragment,{children:[Object(o.jsx)("p",{children:"Success! Your order has been sent..."}),Object(o.jsx)("div",{className:$.a.actions,children:Object(o.jsx)("button",{className:$.a.button,onClick:e.onClose,children:"Close"})})]});return Object(o.jsxs)(te,{onClose:e.onClose,children:[!_&&!j&&R,_&&T,!_&&j&&H]})},ae=n(18),ce={items:[],totalAmount:0},re=function(e,t){if("ADD"===t.type){var n,a=e.totalAmount+t.payload.price*t.payload.amount,c=e.items.findIndex((function(e){return e.id===t.payload.id})),r=e.items[c];if(r){var s=Object(A.a)(Object(A.a)({},r),{},{amount:r.amount+t.payload.amount});(n=Object(ae.a)(e.items))[c]=s}else n=e.items.concat(t.payload);return{items:n,totalAmount:a}}if("REMOVE"===t.type){var i,o=e.items.findIndex((function(e){return e.id===t.id})),l=e.items[o],u=e.totalAmount-l.price;if(1===l.amount)i=e.items.filter((function(e){return e.id!==t.id}));else{var d=Object(A.a)(Object(A.a)({},l),{},{amount:l.amount-1});(i=Object(ae.a)(e.items))[o]=d}return{items:i,totalAmount:u}}return t.type,ce},se=function(e){var t=Object(s.useReducer)(re,ce),n=Object(r.a)(t,2),a=n[0],c=n[1],i={items:a.items,totalAmount:a.totalAmount,addItem:function(e){c({type:"ADD",payload:e})},removeItem:function(e){c({type:"REMOVE",id:e})},clearCart:function(){c({type:"CLEAR"})}};return Object(o.jsx)(u.Provider,{value:i,children:e.children})};var ie=function(){var e=Object(s.useState)(!1),t=Object(r.a)(e,2),n=t[0],a=t[1];return Object(o.jsxs)(se,{children:[n&&Object(o.jsx)(ne,{onClose:function(){a(!1)}}),Object(o.jsx)(p,{onShowCart:function(){a(!0)}}),Object(o.jsx)("main",{children:Object(o.jsx)(B,{})})]})};c.a.render(Object(o.jsx)(ie,{}),document.getElementById("root"))}],[[30,1,2]]]);
//# sourceMappingURL=main.f9ed76e8.chunk.js.map
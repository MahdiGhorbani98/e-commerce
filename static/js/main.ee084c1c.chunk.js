(this["webpackJsonpe-commerce"]=this["webpackJsonpe-commerce"]||[]).push([[0],{11:function(e,t,i){"use strict";var s=i(1),c=i.n(s),a=i(18);t.a=function(){return c.a.useContext(a.a)}},18:function(e,t,i){"use strict";i.d(t,"a",(function(){return f}));var s=i(12),c=i(10),a=i(13),n=i(1),r=i.n(n),o=(i(40),i(33)),u=i.n(o),l=i(3),d=i(9),m=i(11),p=i(0);function j(){var e=Object(m.a)(),t=e.cartItem,i=0;return Object(p.jsxs)("div",{children:[Object(p.jsxs)("div",{className:"cartIcon",children:[Object(p.jsx)("span",{className:"totalPrice",children:t.length>0?"$"+t.reduce((function(e,t){return e+t.count*t.price}),0).toFixed(1):"$00"}),Object(p.jsx)("button",{className:"btnAddCart",onClick:function(){return document.querySelector(".basket").classList.toggle("activeBasket")},children:Object(p.jsx)("i",{className:"shadow mainIcon fas fa-shopping-bag"})})]}),Object(p.jsx)("div",{className:"basket",children:Object(p.jsxs)("div",{className:"basketContainer",children:[t.map((function(e){i+=e.count})),Object(p.jsx)("p",{children:t.length>0?"You have ".concat(i," products in the cart"):"Your cart is empty"}),Object(p.jsx)("ul",{className:"itemsCart",children:t.map((function(t,i){return t.count>0?Object(p.jsx)("section",{children:Object(p.jsxs)("li",{className:"liCart",children:[Object(p.jsx)("img",{className:"picture__cart",src:"".concat("/e-commerce","/products/").concat(t.sku,".jpg"),alt:"no"}),Object(p.jsxs)("div",{className:"liCart__info",children:[Object(p.jsx)("div",{className:"title__cart",children:t.title}),Object(p.jsx)("button",{className:"btnRemoveCart ",onClick:function(){return e.handleRemoveCart(t)},children:Object(p.jsx)("i",{className:"far fa-times-circle"})}),Object(p.jsxs)("div",{className:"flexRow",children:["   ",Object(p.jsx)("span",{className:"xxx",children:"\xd7"})," ",Object(p.jsx)("span",{children:t.count}),"    "]}),Object(p.jsxs)("div",{className:"flexRow2",children:["   ",Object(p.jsx)("span",{className:"dolar",children:"$"})," ",Object(p.jsx)("span",{children:(t.count*t.price).toFixed(1)}),"     "]})]})]})},i):null}))}),t.length>0?Object(p.jsx)("button",{className:"checkout",onClick:function(){return alert("not ready")},children:"Checkout"}):null]})})]})}function b(){return Object(n.useEffect)((function(){window.onscroll=function(){document.body.scrollTop>50||document.documentElement.scrollTop>50?document.querySelector("header").classList.add("paddingHeader__scrolling"):document.querySelector("header").classList.remove("paddingHeader__scrolling")}}),[]),Object(p.jsx)("div",{className:"HeaderHolder",children:Object(p.jsxs)("header",{className:"paddingHeader",children:[Object(p.jsx)("div",{className:"Brand",children:Object(p.jsxs)("h2",{children:[Object(p.jsx)("button",{className:"btnAddCart",onClick:null,children:Object(p.jsx)("i",{className:"shadow mainIcon fas fa-bars"})}),Object(p.jsx)("span",{children:"Olibaba"})]})}),Object(p.jsx)("div",{className:"tabsHolder",children:Object(p.jsxs)("ul",{className:"tabs",children:[Object(p.jsx)("li",{children:Object(p.jsx)(d.b,{className:"Link",activeClassName:"activeTab",to:"/",exact:!0,children:"Home"})}),Object(p.jsx)("li",{children:Object(p.jsx)(d.b,{className:"Link",activeClassName:"activeTab",to:"/shop",children:"Shop"})}),Object(p.jsx)("li",{children:Object(p.jsx)(d.b,{className:"Link",activeClassName:"activeTab",to:"/about",children:"About"})}),Object(p.jsx)("li",{children:Object(p.jsx)(d.b,{className:"Link",activeClassName:"activeTab",to:"/contact",children:"Contact"})})]})}),Object(p.jsx)("div",{className:"CartHeader",children:Object(p.jsx)(j,{})})]})})}i(21);function h(){return Object(p.jsxs)("div",{children:[Object(p.jsx)("div",{className:"countainerFilter",children:Object(p.jsxs)("div",{className:"filterHeader",children:[Object(p.jsx)("div",{className:"address__founded",children:Object(p.jsxs)("p",{className:"navAddress",children:["Home ",Object(p.jsx)("span",{children:window.location.pathname})," "]})}),Object(p.jsx)("h1",{className:"aboutTitle",children:"About"}),Object(p.jsx)("div",{className:"selects date",children:"2021/08/30"})]})}),Object(p.jsx)("article",{children:Object(p.jsxs)("p",{children:[Object(p.jsx)("h2",{children:"Olibaba Shop"}),"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius rerum ipsa quod possimus iusto repellendus obcaecati sed cum quaerat, quos eos ea necessitatibus autem excepturi itaque. Sequi consequuntur maiores sint?Lorem ipsum, dolor sit amet consectetur adipisicing elit. Exercitationem voluptatum voluptatibus impedit nisi, optio perspiciatis consequatur ipsum id quidem voluptates reiciendis. Cupiditate ipsam voluptates explicabo. Laborum animi voluptatum quas pariatur?Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia nam dicta distinctio maiores placeat eligendi necessitatibus quam nobis, ea et animi delectus dolorem excepturi mollitia repellendus iste aspernatur laborum illum.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius rerum ipsa quod possimus iusto repellendus obcaecati sed cum quaerat, quos eos ea necessitatibus autem excepturi itaque. Sequi consequuntur maiores sint?Lorem ipsum, dolor sit amet consectetur adipisicing elit. Exercitationem voluptatum voluptatibus impedit nisi, optio perspiciatis consequatur ipsum id quidem voluptates reiciendis. Cupiditate ipsam voluptates explicabo. Laborum animi voluptatum quas pariatur?Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia nam dicta distinctio maiores placeat eligendi necessitatibus quam nobis, ea et animi delectus dolorem excepturi mollitia repellendus iste aspernatur laborum illum.Lorem ipsum, dolor sit amet consectetur adipisicing elit.",Object(p.jsx)("h3",{children:"Best Market in Web"})," Eius rerum ipsa quod possimus iusto repellendus obcaecati sed cum quaerat, quos eos ea necessitatibus autem excepturi itaque. Sequi consequuntur maiores sint?Lorem ipsum, dolor sit amet consectetur adipisicing elit. Exercitationem voluptatum voluptatibus impedit nisi, optio perspiciatis consequatur ipsum id quidem voluptates reiciendis. Cupiditate ipsam voluptates explicabo. Laborum animi voluptatum quas pariatur?Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia nam dicta distinctio maiores placeat eligendi necessitatibus quam nobis, ea et animi delectus dolorem excepturi mollitia repellendus iste aspernatur laborum illum."]})})]})}var x=i.p+"static/media/shoe-shop.8a0310e4.jpg";function O(){return Object(p.jsxs)("div",{children:[Object(p.jsx)("div",{className:"countainerFilter",children:Object(p.jsxs)("div",{className:"filterHeader",children:[Object(p.jsx)("div",{className:"address__founded",children:Object(p.jsxs)("p",{className:"navAddress",children:["Home ",Object(p.jsx)("span",{children:window.location.pathname})," "]})}),Object(p.jsx)("h1",{className:"HomeTitle",children:"Home"}),Object(p.jsx)("div",{className:"selects submit",children:"Since 2021"})]})}),Object(p.jsx)("article",{children:Object(p.jsxs)("p",{children:[Object(p.jsx)("h2",{children:"Shoe shop by Mahdi Ghorbani Design Office"}),"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius rerum ipsa quod possimus iusto repellendus obcaecati sed cum quaerat, quos eos ea necessitatibus autem excepturi itaque. Sequi consequuntur maiores sint?Lorem ipsum, dolor sit amet consectetur adipisicing elit. Exercitationem voluptatum voluptatibus impedit nisi, optio perspiciatis consequatur ipsum id quidem voluptates reiciendis. Cupiditate ipsam voluptates explicabo.",Object(p.jsx)("br",{}),Object(p.jsx)("img",{className:"shoeShop",src:x,alt:"shoeShop"}),Object(p.jsx)("br",{}),"Laborum animi voluptatum quas pariatur?Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia nam dicta distinctio maiores placeat eligendi necessitatibus quam nobis, ea et animi delectus dolorem excepturi mollitia repellendus iste aspernatur laborum illum.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius rerum ipsa quod possimus iusto repellendus obcaecati sed cum quaerat, quos eos ea necessitatibus autem excepturi itaque. Sequi consequuntur maiores sint?Lorem ipsum, dolor sit amet consectetur adipisicing elit. Exercitationem voluptatum voluptatibus impedit nisi, optio perspiciatis consequatur ipsum id quidem voluptates reiciendis. Cupiditate ipsam voluptates explicabo. Laborum animi voluptatum quas pariatur?Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia nam dicta distinctio maiores placeat eligendi necessitatibus quam nobis, ea et animi delectus dolorem excepturi mollitia repellendus iste aspernatur laborum illum.Lorem ipsum, dolor sit amet consectetur adipisicing elit.",Object(p.jsx)("h3",{children:"Best Market in Web"})," Eius rerum ipsa quod possimus iusto repellendus obcaecati sed cum quaerat, quos eos ea necessitatibus autem excepturi itaque. Sequi consequuntur maiores sint?Lorem ipsum, dolor sit amet consectetur adipisicing elit. Exercitationem voluptatum voluptatibus impedit nisi, optio perspiciatis consequatur ipsum id quidem voluptates reiciendis. Cupiditate ipsam voluptates explicabo. Laborum animi voluptatum quas pariatur?Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia nam dicta distinctio maiores placeat eligendi necessitatibus quam nobis, ea et animi delectus dolorem excepturi mollitia repellendus iste aspernatur laborum illum."]})})]})}i(70);var v=i(35),f=r.a.createContext(),g=Object(v.a)((function(){return Promise.resolve().then(i.bind(null,70))}));t.b=function(){var e=Object(n.useState)([]),t=Object(a.a)(e,2),i=t[0],r=t[1],o=Object(n.useState)([]),d=Object(a.a)(o,2),m=d[0],j=d[1],x=Object(n.useState)("default"),v=Object(a.a)(x,2),N=v[0],q=v[1],C=Object(n.useState)("all"),S=Object(a.a)(C,2),L=S[0],E=S[1],k=Object(n.useState)([]),H=Object(a.a)(k,2),_=H[0],w=H[1];return Object(n.useEffect)((function(){"default"!==N?i.sort((function(e,t){return"htl"===N?e.price<t.price?1:-1:e.price>t.price?1:-1})):i.sort((function(e,t){return e.id>t.id?1:-1})),j(Object(s.a)(i)),j(i.filter((function(e){return"all"===L?e:e.availableSizes.includes(L)})))}),[L]),Object(n.useEffect)((function(){return"default"!==N?m.sort((function(e,t){return"htl"===N?e.price<t.price?1:-1:e.price>t.price?1:-1})):m.sort((function(e,t){return e.id>t.id?1:-1})),j(Object(s.a)(m))}),[N]),Object(n.useEffect)((function(){return u.a.get("https://api.npoint.io/1b13efa38db743f3f443").then((function(e){r(e.data.products),j(e.data.products)})),function(){}}),[]),Object(n.useEffect)((function(){var e=JSON.parse(localStorage.getItem("cart")||[]);w(e)}),[]),Object(n.useEffect)((function(){localStorage.setItem("cart",JSON.stringify(_)),localStorage.removeItem("myValueInLocalStorage")}),[_]),Object(p.jsx)(f.Provider,{value:{products:m,cartItem:_,sort:N,size:L,handleAddCart:function(e){var t=!1;_.forEach((function(i){if(i.id===e.id){t=!0;Object(c.a)(Object(c.a)({},i),i.count++);w((function(e){return Object(s.a)(e)}))}})),t||w((function(t){return[].concat(Object(s.a)(t),[Object(c.a)(Object(c.a)({},e),{},{count:t.count?t.count+1:1})])}))},handleRemoveCart:function(e){_.forEach((function(t){if(t.id===e.id){Object(c.a)(Object(c.a)({},t),t.count--);w((function(e){return Object(s.a)(e)}))}})),w(_.filter((function(e){return e.count>0})))},handleSizeChange:function(e){E(e.target.value)},handleSortChange:function(e){q(e.target.value)}},children:Object(p.jsx)("div",{children:Object(p.jsxs)("div",{className:"countainer",children:[Object(p.jsx)(b,{}),Object(p.jsxs)(l.d,{children:[Object(p.jsx)(l.a,{exact:!0,from:"/",to:"/shop"}),Object(p.jsx)(l.b,{path:"/",component:O,exact:!0}),Object(p.jsx)(l.b,{path:"/shop",component:g}),Object(p.jsx)(l.b,{path:"/about",component:h}),Object(p.jsx)(l.b,{path:"/cotact",component:null})]})]})})})}},21:function(e,t,i){"use strict";i.d(t,"a",(function(){return a}));i(1);var s=i(11),c=i(0);function a(){var e=Object(s.a)();return Object(c.jsx)("div",{className:"countainerFilter",children:Object(c.jsxs)("div",{className:"filterHeader",children:[Object(c.jsxs)("div",{className:"address__founded",children:[Object(c.jsxs)("p",{className:"navAddress",children:["Home ",Object(c.jsx)("span",{children:window.location.pathname})," "]}),Object(c.jsxs)("p",{children:[e.products.length," ",1===e.products.length?"Product found":"Products found"]})]}),Object(c.jsx)("h1",{children:"Shop"}),Object(c.jsxs)("div",{className:"selects",children:[Object(c.jsx)("div",{className:"selectPrice",children:Object(c.jsxs)("select",{name:"price",id:"price",value:e.sort,onChange:e.handleSortChange,children:[Object(c.jsx)("option",{value:"default",children:"Price (default)"}),Object(c.jsx)("option",{value:"lth",children:"lowest to highest"}),Object(c.jsx)("option",{value:"htl",children:"highest to lowest"})]})}),Object(c.jsx)("div",{children:Object(c.jsxs)("select",{name:"size",id:"size",value:e.size,onChange:e.handleSizeChange,children:[Object(c.jsx)("option",{value:"all",children:"Size (All)"}),Object(c.jsx)("option",{value:"44",children:"44"}),Object(c.jsx)("option",{value:"43",children:"43"}),Object(c.jsx)("option",{value:"42",children:"42"}),Object(c.jsx)("option",{value:"41",children:"41"}),Object(c.jsx)("option",{value:"40",children:"40"}),Object(c.jsx)("option",{value:"39",children:"39"})]})})]})]})})}},40:function(e,t,i){},69:function(e,t,i){"use strict";i.r(t);i(1);var s=i(32),c=i.n(s),a=i(18),n=function(e){e&&e instanceof Function&&i.e(3).then(i.bind(null,71)).then((function(t){var i=t.getCLS,s=t.getFID,c=t.getFCP,a=t.getLCP,n=t.getTTFB;i(e),s(e),c(e),a(e),n(e)}))},r=i(9),o=i(0);c.a.render(Object(o.jsx)(r.a,{children:Object(o.jsx)(a.b,{})}),document.getElementById("root")),n()},70:function(e,t,i){"use strict";i.r(t),i.d(t,"default",(function(){return r}));i(1);var s=i(11),c=i(0);var a=function(){var e=Object(s.a)(),t=e.products;return Object(c.jsx)("div",{className:"".concat(t.length>2?"productsHolder":2===t.length?"productsHolder2":"productsHolder1"),children:t.map((function(t,i){return Object(c.jsxs)("div",{className:"productItem",children:[Object(c.jsxs)("div",{className:"productButtons",children:[Object(c.jsx)("span",{className:"",children:t.isFreeShipping?Object(c.jsx)("i",{className:"freeShipping fas fa-shipping-fast"}):null}),Object(c.jsx)("button",{className:"btnAddCart",onClick:function(){return e.handleAddCart(t)},children:Object(c.jsx)("i",{className:"icons fas fa-shopping-bag"})})]}),Object(c.jsxs)("div",{className:"productInfo",children:[Object(c.jsx)("img",{className:"picture",src:"".concat("/e-commerce","/products/").concat(t.sku,".jpg"),alt:"no"}),Object(c.jsx)("h3",{className:"title",children:t.title}),Object(c.jsxs)("p",{className:"price",children:[t.price,"$"]})]})]},i)}))})},n=i(21);function r(){return Object(c.jsxs)("div",{children:[Object(c.jsx)(n.a,{}),Object(c.jsx)("div",{className:"products__cart",children:Object(c.jsx)(a,{})})]})}}},[[69,1,2]]]);
//# sourceMappingURL=main.ee084c1c.chunk.js.map
(this.webpackJsonpposts=this.webpackJsonpposts||[]).push([[0],{34:function(e,t,c){},36:function(e,t,c){},37:function(e,t,c){},44:function(e,t,c){},63:function(e,t,c){},64:function(e,t,c){},65:function(e,t,c){},66:function(e,t,c){},67:function(e,t,c){},68:function(e,t,c){},69:function(e,t,c){},70:function(e,t,c){"use strict";c.r(t);var n=c(1),s=c.n(n),a=c(26),r=c.n(a),i=c(8),o=c(13),l=c(2),j=Object(n.createContext)(),u=(c(34),c(0)),d=function(){var e=Object(n.useContext)(j),t=e.initPosts,c=e.setFilteredPosts,s=Object(n.useState)(""),a=Object(i.a)(s,2),r=a[0],o=a[1];return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("div",{className:"search-wrapper",children:Object(u.jsx)("input",{type:"text",onChange:function(e){o(e.target.value)},value:r})}),Object(u.jsx)("button",{onClick:function(){if(r){var e=t.filter((function(e){return e.webTitle.toLowerCase().includes(r.toLowerCase())}));c(e)}else c([])},className:"btn search",children:"SEARCH"}),Object(u.jsx)("button",{onClick:function(){c(t),o("")},className:"btn clear",children:"CLEAR"})]})},b=(c(36),function(){return Object(u.jsxs)("button",{onClick:function(e){e.currentTarget.classList.toggle("open")},className:"burger-menu-button",children:[Object(u.jsx)("div",{className:"bar-top"}),Object(u.jsx)("div",{className:"bar-mid"}),Object(u.jsx)("div",{className:"bar-bottom"})]})}),p=(c(37),function(){var e=Object(l.f)();return Object(u.jsxs)("div",{className:"header-wrapper",children:[Object(u.jsx)("div",{className:"logo",onClick:function(){e.push("/")},children:"News App"}),Object(u.jsx)("div",{className:"search-wrapper",children:Object(u.jsx)(d,{})}),Object(u.jsx)(b,{})]})}),O=c(16),h=c.n(O),f=c(28),x={0:"January",1:"February",2:"March",3:"April",4:"May",5:"June",6:"July",7:"August",8:"September",9:"October",10:"November",11:"December"},m=function(e){var t="";switch(e){case 1:t="st";break;case 2:t="nd";break;case 3:t="rd";break;default:t="th"}return t},v=function(e){var t=new Date(e),c=x[t.getMonth()],n=t.getDate(),s=m(n),a=t.getFullYear();return"".concat(c," ").concat(n).concat(s," ").concat(a)},w=(c(44),function(e){var t=e.post,c=Object(l.f)(),n=function(e,t){c.push({pathname:"/post/".concat(t)})},s=v(t.webPublicationDate);return Object(u.jsx)("div",{className:"post-card",children:Object(u.jsxs)("div",{className:"post-card-inner",children:[Object(u.jsx)("div",{className:"post-image",onClick:function(e){return n(0,t.id)},children:Object(u.jsx)("img",{src:t.fields.thumbnail,alt:"thumbnail-post"})}),Object(u.jsx)("div",{className:"post-title",onClick:function(e){return n(0,t.id)},children:t.webTitle}),Object(u.jsxs)("div",{className:"post-main",children:[t.fields.bodyText.slice(0,200),"..."]}),Object(u.jsxs)("div",{className:"post-card-footer",children:[Object(u.jsx)("div",{className:"date",children:s}),Object(u.jsx)("div",{className:"link",children:"Read more"})]})]})},t.id)}),N=c(29),g=c.n(N),k="trending",C="all",P="all",y="0cc1c5bc-7fe4-47bc-80cc-f17c13be193c",S=20,D=function(){return g.a.get("".concat("https://content.guardianapis.com/search","?show-fields=").concat(P,"&page-size=").concat(S,"&show-tags=").concat(C,"&q=").concat(k,"&api-key=").concat(y))},T=(c(63),function(){return Object(u.jsx)("div",{className:"loader-wrapper",children:Object(u.jsx)("div",{className:"loader",children:"...LOADING..."})})}),A=(c(64),function(e){var t=e.msg,c=e.type,n=void 0===c?"success":c;return Object(u.jsx)("div",{className:"message ".concat(n),children:t})}),F=(c(65),function(){var e=Object(n.useContext)(j),t=e.filteredPosts,c=e.setInitPosts,s=e.setFilteredPosts,a=Object(n.useState)(!1),r=Object(i.a)(a,2),o=r[0],l=r[1],d=Object(n.useState)(!1),b=Object(i.a)(d,2),p=b[0],O=b[1],x=function(e){window.scrollY>200?O(!0):O(!1)};return Object(n.useEffect)((function(){function e(){return(e=Object(f.a)(h.a.mark((function e(){var t,n;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,l(!0),e.next=4,D();case 4:t=e.sent,n=t.data.response.results,n.sort((function(e,t){return e.webPublicationDate>t.webPublicationDate?-1:1})),c(n),s(n),l(!1),e.next=16;break;case 12:e.prev=12,e.t0=e.catch(0),l(!1),console.log(e.t0);case 16:case"end":return e.stop()}}),e,null,[[0,12]])})))).apply(this,arguments)}return function(){e.apply(this,arguments)}(),window.addEventListener("scroll",x),function(){return window.removeEventListener("scroll",x)}}),[s,c]),Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("div",{className:"posts-wrapper",children:0===t.length?Object(u.jsx)(A,{type:"error",msg:"Sorry, we have no posts!"}):t.map((function(e){return Object(u.jsx)(w,{post:e},e.id)}))}),o&&Object(u.jsx)(T,{}),p&&Object(u.jsx)("div",{className:"top-anchor",onClick:function(){O(!1),window.scrollTo({top:0})},children:"TO TOP"})]})}),L=(c(66),function(){return Object(u.jsxs)("div",{className:"footer",children:[Object(u.jsx)("span",{children:"New App"})," 2021 copyrights all rights reserved"]})}),E=(c(67),function(){var e=Object(n.useContext)(j).initPosts,t=Object(l.g)().id,c=e.find((function(e){return e.id===t}));return Object(u.jsxs)("div",{className:"single-post-card",children:[Object(u.jsxs)("div",{className:"post-id",children:["Post ID: ",Object(u.jsx)("span",{children:t})]}),Object(u.jsx)("div",{className:"title",children:c.webTitle})]})});c(68);var I=function(){var e=Object(n.useState)([]),t=Object(i.a)(e,2),c=t[0],s=t[1],a=Object(n.useState)([]),r=Object(i.a)(a,2),d=r[0],b=r[1];return Object(u.jsx)("div",{className:"app",children:Object(u.jsx)(j.Provider,{value:{initPosts:d,setInitPosts:b,filteredPosts:c,setFilteredPosts:s},children:Object(u.jsxs)(o.a,{basename:"/",children:[Object(u.jsx)(p,{}),Object(u.jsxs)(l.c,{children:[Object(u.jsx)(l.a,{exact:!0,path:"/",component:F}),Object(u.jsx)(l.a,{path:"/post/:id*",component:E})]}),Object(u.jsx)(L,{})]})})})};c(69);r.a.render(Object(u.jsx)(s.a.StrictMode,{children:Object(u.jsx)(I,{})}),document.getElementById("root"))}},[[70,1,2]]]);
//# sourceMappingURL=main.f9ecf22c.chunk.js.map
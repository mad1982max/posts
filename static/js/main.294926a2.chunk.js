(this.webpackJsonpposts=this.webpackJsonpposts||[]).push([[0],{35:function(e,t,c){},36:function(e,t,c){},38:function(e,t,c){},57:function(e,t,c){},58:function(e,t,c){},59:function(e,t,c){},65:function(e,t,c){},66:function(e,t,c){"use strict";c.r(t);var s=c(0),n=c.n(s),a=c(24),r=c.n(a),i=c(27),o=c(2),l=c(1),u=function(){return Object(l.jsx)("div",{children:"SEARCH"})},j=(c(35),function(){return Object(l.jsxs)("button",{onClick:function(e){e.currentTarget.classList.toggle("open")},className:"burger-menu-button",children:[Object(l.jsx)("div",{className:"bar-top"}),Object(l.jsx)("div",{className:"bar-mid"}),Object(l.jsx)("div",{className:"bar-bottom"})]})}),b=(c(36),function(){return Object(l.jsxs)("div",{className:"header-wrapper",children:[Object(l.jsx)("div",{className:"logo",children:"News App"}),Object(l.jsx)("div",{className:"search-wrapper",children:Object(l.jsx)(u,{})}),Object(l.jsx)(j,{})]})}),d=c(12),p=c.n(d),h=c(25),m=c(29),f={0:"January",1:"February",2:"March",3:"April",4:"May",5:"June",6:"July",7:"August",8:"September",9:"October",10:"November",11:"December"},x=function(e){var t="";switch(e){case 1:t="st";break;case 2:t="nd";break;case 3:t="rd";break;default:t="th"}return t},O=function(e){var t=new Date(e),c=f[t.getMonth()],s=t.getDate(),n=x(s),a=t.getFullYear();return"".concat(c," ").concat(s).concat(n," ").concat(a)},v=(c(38),function(e){var t=e.post,c=O(t.webPublicationDate);return Object(l.jsx)("div",{className:"post-card",children:Object(l.jsxs)("div",{className:"post-card-inner",children:[Object(l.jsx)("div",{className:"post-image",children:Object(l.jsx)("img",{src:t.fields.thumbnail,alt:"thumbnail-post"})}),Object(l.jsx)("div",{className:"post-title",children:t.webTitle}),Object(l.jsxs)("div",{className:"post-main",children:[t.fields.bodyText.slice(0,200),"..."]}),Object(l.jsxs)("div",{className:"post-card-footer",children:[Object(l.jsx)("div",{className:"date",children:c}),Object(l.jsx)("div",{className:"link",children:"Read more"})]})]})},t.id)}),N=c(26),g=c.n(N),w="trending",k="all",y="all",A="0cc1c5bc-7fe4-47bc-80cc-f17c13be193c",J=function(){return g.a.get("".concat("https://content.guardianapis.com/search","?show-fields=").concat(y,"&show-tags=").concat(k,"&q=").concat(w,"&api-key=").concat(A))},D=(c(57),function(){var e=Object(s.useState)([]),t=Object(m.a)(e,2),c=t[0],n=t[1];return Object(s.useEffect)((function(){function e(){return(e=Object(h.a)(p.a.mark((function e(){var t;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,J();case 3:t=e.sent,n(t.data.response.results),console.log(t.data.response),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}console.log("--in useEffect"),function(){e.apply(this,arguments)}()}),[]),Object(l.jsx)("div",{className:"posts-wrapper",children:c.map((function(e){return Object(l.jsx)(v,{post:e},e.id)}))})}),E=(c(58),function(){return Object(l.jsx)("div",{className:"post-wrapper",children:"Post"})});c(59);var M=function(){return Object(l.jsx)("div",{className:"App",children:Object(l.jsxs)(i.a,{basename:"/",children:[Object(l.jsx)(b,{}),Object(l.jsxs)(o.c,{children:[Object(l.jsx)(o.a,{exact:!0,path:"/",component:D}),Object(l.jsx)(o.a,{exact:!0,path:"/post",component:E})]})]})})};c(65);r.a.render(Object(l.jsx)(n.a.StrictMode,{children:Object(l.jsx)(M,{})}),document.getElementById("root"))}},[[66,1,2]]]);
//# sourceMappingURL=main.294926a2.chunk.js.map
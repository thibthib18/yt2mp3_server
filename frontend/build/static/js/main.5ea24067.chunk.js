(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{62:function(t,e,n){},63:function(t,e,n){},89:function(t,e,n){"use strict";n.r(e);var r=n(0),a=n.n(r),c=n(9),o=n.n(c),s=(n(62),n(63),n(18)),i=n.n(s),u=n(26),l=n(25),d=n(38),p=n.n(d),j=window.location.hostname;function f(t){return v.apply(this,arguments)}function v(){return(v=Object(u.a)(i.a.mark((function t(e){var n;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return"/download/request",t.next=3,p.a.post("http://".concat(j).concat("/download/request"),{url:e});case 3:return n=t.sent,t.abrupt("return",n.data.id);case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function b(){return(b=Object(u.a)(i.a.mark((function t(e){var n,r;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n="/downloads/".concat(e,"/status"),t.next=3,p.a.get("http://".concat(j).concat(n));case 3:return r=t.sent,t.abrupt("return",r.data);case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}var h=n(126),x=n(6);function m(t){var e=t.onClick,n=t.filename;return Object(x.jsxs)("div",{className:"InputView",children:[Object(x.jsxs)("p",{className:"InsertText",children:["\ud83d\udc47 ",Object(x.jsx)("span",{style:{color:"red"},children:n})," ready for download!\ud83d\udc47\ud83d\ude01"]}),Object(x.jsx)(h.a,{id:"download-button",color:"secondary",onClick:e,variant:"contained",children:"Download"})]})}var O=n(51),w=n(124),y=n(34),g=n.p+"static/media/tappedout_banner.0e6793b5.png";var k=function(){return Object(x.jsx)("header",{className:"Header",children:Object(x.jsx)("img",{src:g,className:"logo tappedoutLogo",alt:"tappedout_logo"})})};function C(t){var e=t.onClick,n=t.error;return Object(x.jsx)(h.a,{disabled:n,id:"convert-button",color:"primary",onClick:e,variant:"contained",children:"Convert"})}var N=n(125);function E(t){var e=t.setUrl,n=t.onEnter,r=t.error;return Object(x.jsx)("div",{className:"UrlInput",children:Object(x.jsx)(N.a,{className:"UrlTextField",error:r,onKeyDown:function(t){"Enter"===t.key&&n()},id:"url-input",label:"Video URL",onChange:function(t){e(t.target.value)},variant:"outlined",helperText:"Enter some URL (e.g. https://www.youtube.com/watch?v=dQw4w9WgXcQ) "})})}var I=function(t){var e=t.onConvert,n=a.a.useState(""),r=Object(l.a)(n,2),c=r[0],o=r[1],s=function(){e(c)},i=a.a.useMemo((function(){return!function(t){var e;try{e=new URL(t)}catch(n){return!1}return"http:"===e.protocol||"https:"===e.protocol}(c)&&!(""===c)}),[c]);return Object(x.jsxs)("div",{className:"InputView",children:[Object(x.jsx)("p",{className:"InsertText",children:"Please insert url"}),Object(x.jsx)(E,{error:i,setUrl:o,onEnter:s}),Object(x.jsx)(C,{error:i,onClick:s})]})},U=n(123);var S=function(){return Object(x.jsx)(U.a,{})},L=Object(O.a)({palette:{primary:{main:y.a[500]},secondary:{main:y.a[800]}}});var T=function(){var t=a.a.useState(null),e=Object(l.a)(t,2),n=e[0],r=e[1],c=a.a.useState(!1),o=Object(l.a)(c,2),s=o[0],d=o[1],p=a.a.useState(null),j=Object(l.a)(p,2),v=j[0],h=j[1];function O(){return(O=Object(u.a)(i.a.mark((function t(e){return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:d(!0),f(e).then((function(t){return h(t)}));case 2:case"end":return t.stop()}}),t)})))).apply(this,arguments)}return a.a.useEffect((function(){var t=setInterval((function(){v&&s&&function(t){return b.apply(this,arguments)}(v).then((function(t){return r(t)}))}),1e3);return function(){return clearInterval(t)}}),[s,v]),a.a.useEffect((function(){"finished"===(null===n||void 0===n?void 0:n.status)&&d(!1),"error"===(null===n||void 0===n?void 0:n.status)&&(alert("Something went wrong. Maybe try again?"),d(!1),r(null))}),[null===n||void 0===n?void 0:n.status]),Object(x.jsx)(w.a,{theme:L,children:Object(x.jsxs)("div",{id:"content",className:"App",children:[Object(x.jsx)(k,{}),Object(x.jsx)("div",{className:"Converter",children:null===n?Object(x.jsx)(I,{onConvert:function(t){return O.apply(this,arguments)}}):s?Object(x.jsx)(S,{}):Object(x.jsx)(m,{filename:"test",onClick:function(){var t="http://".concat(window.location.hostname,"/downloads/").concat(v,"/download"),e=document.createElement("a");e.href=t,e.click(),r(null)}})})]})})};var M=function(){return Object(x.jsx)("div",{className:"App",children:Object(x.jsx)(T,{})})};o.a.render(Object(x.jsx)(a.a.StrictMode,{children:Object(x.jsx)(M,{})}),document.getElementById("root"))}},[[89,1,2]]]);
//# sourceMappingURL=main.5ea24067.chunk.js.map
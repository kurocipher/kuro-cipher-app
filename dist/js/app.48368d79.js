(function(e){function n(n){for(var c,u,a=n[0],d=n[1],i=n[2],f=0,s=[];f<a.length;f++)u=a[f],Object.prototype.hasOwnProperty.call(o,u)&&o[u]&&s.push(o[u][0]),o[u]=0;for(c in d)Object.prototype.hasOwnProperty.call(d,c)&&(e[c]=d[c]);l&&l(n);while(s.length)s.shift()();return r.push.apply(r,i||[]),t()}function t(){for(var e,n=0;n<r.length;n++){for(var t=r[n],c=!0,u=1;u<t.length;u++){var d=t[u];0!==o[d]&&(c=!1)}c&&(r.splice(n--,1),e=a(a.s=t[0]))}return e}var c={},o={app:0},r=[];function u(e){return a.p+"js/"+({"polyfills-core-js":"polyfills-core-js","polyfills-dom":"polyfills-dom","stencil-polyfills-css-shim":"stencil-polyfills-css-shim","stencil-polyfills-dom":"stencil-polyfills-dom"}[e]||e)+"."+{"chunk-02c995b5":"6f2bfc86","chunk-09155df3":"3cbfa547","chunk-09162720":"8cbab0b9","chunk-097e0872":"00585e18","chunk-0e93a01c":"f054dec9","chunk-143d7521":"ccf3fc4f","chunk-1dbc15a2":"f3fa6a27","chunk-21a76241":"e5b73d43","chunk-24db123b":"334453d8","chunk-25d83ca8":"81413a70","chunk-2d0a463b":"942b849b","chunk-2d0ac931":"17cfa0f8","chunk-2d0c073f":"118dede8","chunk-2d0c211b":"ba545cf5","chunk-2d0c8a65":"034dafe9","chunk-2d0cf315":"1ef6206f","chunk-2d0d43da":"3eee2296","chunk-2d0d5c33":"ca42f20b","chunk-2d0da04a":"19164c0f","chunk-2d0e5812":"cad17b28","chunk-2d207f86":"6d582c7a","chunk-2d213189":"2426bcb6","chunk-2d217def":"b35cd03e","chunk-2d218068":"4cdb2fe0","chunk-2d21a9aa":"6003d65f","chunk-2d21da73":"29543366","chunk-2d222cca":"2219326e","chunk-2d22895d":"ca2e81cc","chunk-2d23721e":"db20ec86","chunk-30dd9750":"9e5f3e27","chunk-37f2300e":"ca3f6b4f","chunk-3ed29de3":"e8afcee3","chunk-41c0f7a4":"91af75f1","chunk-462c869e":"bbc6be94","chunk-4afb90ee":"b83ebe2d","chunk-541ea42d":"ff8a2e72","chunk-54bbd082":"e3936386","chunk-576f3faa":"75612bd1","chunk-59d4c87c":"0d7c7179","chunk-5a8ac886":"f9c56aeb","chunk-5ff96a24":"abd6e54d","chunk-69eb8776":"bad1a851","chunk-6d375f34":"d0f73e49","chunk-7548ca2d":"d3918a92","chunk-78d15920":"9f98bf35","chunk-79f1dac7":"a0d8b604","chunk-7c82a8c4":"5eccb970","chunk-7c97fb61":"bc39215c","chunk-858cd918":"a048b6c1","chunk-8bb7f81e":"f1e76ca4","chunk-a9395c36":"b3414e22","chunk-d0e8aa0a":"37983bb7","chunk-d8413eac":"52a6265e","chunk-eaa2b130":"676fb1f9","polyfills-core-js":"8da452c8","polyfills-dom":"5c1a31ff","stencil-polyfills-css-shim":"54fc0886","stencil-polyfills-dom":"a351dbf1","chunk-2d0b62ff":"f98ff668","chunk-2d0b33e3":"64be60e2","chunk-2d0c023c":"7c1b1a7c","chunk-2d0c213b":"ef1ff852","chunk-2d0d4082":"5207d401","chunk-2d0f0ffb":"fbbc1dbd","chunk-2d2376e6":"a351546d"}[e]+".js"}function a(n){if(c[n])return c[n].exports;var t=c[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,a),t.l=!0,t.exports}a.e=function(e){var n=[],t=o[e];if(0!==t)if(t)n.push(t[2]);else{var c=new Promise((function(n,c){t=o[e]=[n,c]}));n.push(t[2]=c);var r,d=document.createElement("script");d.charset="utf-8",d.timeout=120,a.nc&&d.setAttribute("nonce",a.nc),d.src=u(e);var i=new Error;r=function(n){d.onerror=d.onload=null,clearTimeout(f);var t=o[e];if(0!==t){if(t){var c=n&&("load"===n.type?"missing":n.type),r=n&&n.target&&n.target.src;i.message="Loading chunk "+e+" failed.\n("+c+": "+r+")",i.name="ChunkLoadError",i.type=c,i.request=r,t[1](i)}o[e]=void 0}};var f=setTimeout((function(){r({type:"timeout",target:d})}),12e4);d.onerror=d.onload=r,document.head.appendChild(d)}return Promise.all(n)},a.m=e,a.c=c,a.d=function(e,n,t){a.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,n){if(1&n&&(e=a(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(a.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var c in e)a.d(t,c,function(n){return e[n]}.bind(null,c));return t},a.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(n,"a",n),n},a.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},a.p="/",a.oe=function(e){throw console.error(e),e};var d=window["webpackJsonp"]=window["webpackJsonp"]||[],i=d.push.bind(d);d.push=n,d=d.slice();for(var f=0;f<d.length;f++)n(d[f]);var l=i;r.push([0,"chunk-vendors"]),t()})({0:function(e,n,t){e.exports=t("cd49")},"5c3f":function(e,n,t){var c={"./pwa-action-sheet.entry.js":["cfc4","chunk-2d222cca"],"./pwa-camera-modal-instance.entry.js":["fa8e","chunk-2d23721e"],"./pwa-camera-modal.entry.js":["4977","chunk-2d0c211b"],"./pwa-camera.entry.js":["da8b","chunk-2d22895d"],"./pwa-toast.entry.js":["6357","chunk-2d0cf315"]};function o(e){if(!t.o(c,e))return Promise.resolve().then((function(){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}));var n=c[e],o=n[0];return t.e(n[1]).then((function(){return t(o)}))}o.keys=function(){return Object.keys(c)},o.id="5c3f",e.exports=o},"8c28":function(e,n,t){},aa55:function(e,n,t){var c={"./ion-action-sheet.entry.js":["6618","chunk-24db123b"],"./ion-alert.entry.js":["f06c","chunk-576f3faa"],"./ion-app_8.entry.js":["c215","chunk-4afb90ee"],"./ion-avatar_3.entry.js":["cf12","chunk-59d4c87c"],"./ion-back-button.entry.js":["4b35","chunk-69eb8776"],"./ion-backdrop.entry.js":["429d","chunk-2d0c073f"],"./ion-button_2.entry.js":["4453","chunk-25d83ca8"],"./ion-card_5.entry.js":["070b","chunk-541ea42d"],"./ion-checkbox.entry.js":["dfd8","chunk-09162720"],"./ion-chip.entry.js":["430d","chunk-09155df3"],"./ion-col_3.entry.js":["6a8a","chunk-2d0da04a"],"./ion-datetime_3.entry.js":["c15b","chunk-21a76241"],"./ion-fab_3.entry.js":["dd47","chunk-3ed29de3"],"./ion-img.entry.js":["9588","chunk-2d0e5812"],"./ion-infinite-scroll_2.entry.js":["d1e5","chunk-2d21da73"],"./ion-input.entry.js":["d111","chunk-37f2300e"],"./ion-item-option_3.entry.js":["1bb3","chunk-5ff96a24"],"./ion-item_8.entry.js":["69da","chunk-5a8ac886"],"./ion-loading.entry.js":["53a5","chunk-6d375f34"],"./ion-menu_3.entry.js":["cb00","chunk-097e0872"],"./ion-modal.entry.js":["1ad0","chunk-78d15920"],"./ion-nav_2.entry.js":["e44f","chunk-7c97fb61"],"./ion-popover.entry.js":["4285","chunk-143d7521"],"./ion-progress-bar.entry.js":["9b72","chunk-1dbc15a2"],"./ion-radio_2.entry.js":["beb3","chunk-0e93a01c"],"./ion-range.entry.js":["719f","chunk-54bbd082"],"./ion-refresher_2.entry.js":["0a47","chunk-d8413eac"],"./ion-reorder_2.entry.js":["6672","chunk-d0e8aa0a"],"./ion-ripple-effect.entry.js":["c8da","chunk-2d218068"],"./ion-route_4.entry.js":["10e8","chunk-858cd918"],"./ion-searchbar.entry.js":["8625","chunk-a9395c36"],"./ion-segment_2.entry.js":["0c02","chunk-462c869e"],"./ion-select_3.entry.js":["d25f","chunk-79f1dac7"],"./ion-slide_2.entry.js":["05dd","chunk-2d0a463b"],"./ion-spinner.entry.js":["e11b","chunk-8bb7f81e"],"./ion-split-pane.entry.js":["aae8","chunk-2d213189"],"./ion-tab-bar_2.entry.js":["a2bb","chunk-02c995b5"],"./ion-tab_2.entry.js":["6725","chunk-7c82a8c4"],"./ion-text.entry.js":["ed3b","chunk-30dd9750"],"./ion-textarea.entry.js":["8798","chunk-eaa2b130"],"./ion-toast.entry.js":["c1a5","chunk-41c0f7a4"],"./ion-toggle.entry.js":["bef2","chunk-7548ca2d"],"./ion-virtual-scroll.entry.js":["5fd7","chunk-2d0d43da"]};function o(e){if(!t.o(c,e))return Promise.resolve().then((function(){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}));var n=c[e],o=n[0];return t.e(n[1]).then((function(){return t(o)}))}o.keys=function(){return Object.keys(c)},o.id="aa55",e.exports=o},ab00:function(e,n,t){var c={"./ion-icon.entry.js":["7059","chunk-2d0d5c33"]};function o(e){if(!t.o(c,e))return Promise.resolve().then((function(){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}));var n=c[e],o=n[0];return t.e(n[1]).then((function(){return t(o)}))}o.keys=function(){return Object.keys(c)},o.id="ab00",e.exports=o},c07d:function(e,n,t){},cd49:function(e,n,t){"use strict";t.r(n);t("e260"),t("e6cf"),t("cca6"),t("a79d");var c=t("7a23");function o(e,n,t,o,r,u){var a=Object(c["u"])("ion-router-outlet"),d=Object(c["u"])("ion-app");return Object(c["o"])(),Object(c["d"])(d,null,{default:Object(c["y"])((function(){return[Object(c["f"])(a)]})),_:1})}var r=t("d867"),u=Object(c["g"])({name:"App",components:{IonApp:r["a"],IonRouterOutlet:r["h"]}});u.render=o;var a=u,d=t("bec5"),i=Object(c["z"])("data-v-a5bd79ae");Object(c["r"])("data-v-a5bd79ae");var f=Object(c["e"])("English"),l=Object(c["e"])("Encoded"),s={id:"container"};Object(c["p"])();var b=i((function(e,n,t,o,r,u){var a=Object(c["u"])("ion-icon"),d=Object(c["u"])("ion-button"),b=Object(c["u"])("ion-buttons"),h=Object(c["u"])("ion-label"),k=Object(c["u"])("ion-segment-button"),j=Object(c["u"])("ion-segment"),p=Object(c["u"])("ion-toolbar"),y=Object(c["u"])("ion-header"),O=Object(c["u"])("ion-textarea"),m=Object(c["u"])("ion-col"),g=Object(c["u"])("ion-row"),v=Object(c["u"])("ion-grid"),_=Object(c["u"])("ion-content"),x=Object(c["u"])("ion-page");return Object(c["o"])(),Object(c["d"])(x,null,{default:i((function(){return[Object(c["f"])(y,{translucent:!0},{default:i((function(){return[Object(c["f"])(p,null,{default:i((function(){return[Object(c["f"])(b,{slot:"start"},{default:i((function(){return[Object(c["f"])(d,{color:"primary",size:"small",onClick:n[1]||(n[1]=function(n){return e.copyText(e.selectedSegment)})},{default:i((function(){return[Object(c["f"])(a,{slot:"icon-only",icon:e.documentsOutline},null,8,["icon"])]})),_:1})]})),_:1}),Object(c["f"])(b,{slot:"end"},{default:i((function(){return[Object(c["f"])(d,{color:"danger",size:"small",onClick:n[2]||(n[2]=function(n){return e.clearInputs()})},{default:i((function(){return[Object(c["f"])(a,{slot:"icon-only",icon:e.trashOutline},null,8,["icon"])]})),_:1})]})),_:1}),Object(c["f"])(j,{onIonChange:n[3]||(n[3]=function(n){return e.segmentChanged(n)}),ref:"cipherSegment",value:e.selectedSegment,color:"primary"},{default:i((function(){return[Object(c["f"])(k,{value:"english"},{default:i((function(){return[Object(c["f"])(h,null,{default:i((function(){return[f]})),_:1})]})),_:1}),Object(c["f"])(k,{value:"encoded"},{default:i((function(){return[Object(c["f"])(h,null,{default:i((function(){return[l]})),_:1})]})),_:1})]})),_:1},8,["value"])]})),_:1})]})),_:1}),Object(c["f"])(_,{fullscreen:!0},{default:i((function(){return[Object(c["f"])("div",s,[Object(c["f"])(v,null,{default:i((function(){return["english"===e.selectedSegment?(Object(c["o"])(),Object(c["d"])(g,{key:0},{default:i((function(){return[Object(c["f"])(m,null,{default:i((function(){return[Object(c["f"])(O,{ref:"engtext",rows:"10",onIonBlur:n[4]||(n[4]=function(n){return e.engTextChange(n)}),value:e.engText,autofocus:"true",placeholder:"Enter english text here..."},null,8,["value"])]})),_:1})]})),_:1})):(Object(c["o"])(),Object(c["d"])(g,{key:1},{default:i((function(){return[Object(c["f"])(m,null,{default:i((function(){return[Object(c["f"])(O,{ref:"encodetext",rows:"10",onIonBlur:n[5]||(n[5]=function(n){return e.encodeTextChange(n)}),value:e.encodeText,placeholder:"Enter encode text here..."},null,8,["value"])]})),_:1})]})),_:1}))]})),_:1})])]})),_:1})]})),_:1})})),h=t("ff79"),k=t("7eac"),j=t("02f1"),p=Object(c["g"])({name:"Home",components:{IonContent:r["d"],IonHeader:r["e"],IonPage:r["g"],IonToolbar:r["k"],IonSegment:r["i"],IonSegmentButton:r["j"],IonButtons:r["c"],IonButton:r["b"],IonIcon:r["f"]},data:function(){return{selectedSegment:"english",engText:"",encodeText:""}},mounted:function(){j["a"].show()},methods:{segmentChanged:function(e){this.selectedSegment=e.detail.value},engTextChange:function(e){this.engText=null!=e.detail.target.value?e.detail.target.value:"";for(var n={a:"⅃",b:"ⵡ",c:"L",d:"コ",e:"ロ",f:"ⵎ",g:"ᒣ",h:"⨅",i:"ᒥ",j:"ᒲ",k:"⨃",l:"ᒷ",m:"ᑔ",n:"⚀",o:"ᑢ",p:"ךּ",q:"⩀",r:"⟔",s:"ⴸ",t:"く",u:"ᨈ",v:"＞",w:"ᨉ",x:"ᑅ",y:"ᨊ",z:"ᐷ"},t=this.engText.toLowerCase(),c="",o=0;o<t.length;o++)t[o]in n?c+=n[t[o]]:c+=t[o];this.encodeText=c},encodeTextChange:function(e){this.encodeText=null!=e.detail.target.value?e.detail.target.value:"";for(var n={"⅃":"a","ⵡ":"b",L:"c","コ":"d","ロ":"e","ⵎ":"f","ᒣ":"g","⨅":"h","ᒥ":"i","ᒲ":"j","⨃":"k","ᒷ":"l","ᑔ":"m","⚀":"n","ᑢ":"o","ךּ":"p","⩀":"q","⟔":"r","ⴸ":"s","く":"t","ᨈ":"u","＞":"v","ᨉ":"w","ᑅ":"x","ᨊ":"y","ᐷ":"z"},t=this.encodeText.toLowerCase(),c="",o=0;o<t.length;o++)t[o]in n?c+=n[t[o]]:c+=t[o];this.engText=c},copyText:function(e){console.log(e),"english"===e&&k["a"].copy(this.engText)},clearInputs:function(){this.engText="",this.encodeText=""}},setup:function(){return{documentsOutline:h["h"],trashOutline:h["o"]}}});t("fd33");p.render=b,p.__scopeId="data-v-a5bd79ae";var y=p,O=[{path:"/",redirect:"/home"},{path:"/home",name:"Home",component:y}],m=Object(d["a"])({history:Object(d["b"])("/"),routes:O}),g=m,v=t("8537"),_=(t("4b63"),t("4041"),t("51ef"),t("a237"),t("e09e"),t("46e5"),t("98b6"),t("2d22"),t("66b0"),t("ce1f"),t("8c28"),Object(c["c"])(a).use(r["l"]).use(g));g.isReady().then((function(){_.mount("#app"),Object(v["a"])(window)}))},fd33:function(e,n,t){"use strict";t("c07d")}});
//# sourceMappingURL=app.48368d79.js.map
function t(t,e,i,o){Object.defineProperty(t,e,{get:i,set:o,enumerable:!0,configurable:!0})}var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{};function i(t){return t&&t.__esModule?t.default:t}var o={},n={},a=e.parcelRequired7c6;null==a&&((a=function(t){if(t in o)return o[t].exports;if(t in n){var e=n[t];delete n[t];var i={id:t,exports:{}};return o[t]=i,e.call(i.exports,i,i.exports),i.exports}var a=new Error("Cannot find module '"+t+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(t,e){n[t]=e},e.parcelRequired7c6=a),a.register("kyEFX",(function(e,i){var o,n;t(e.exports,"register",(function(){return o}),(function(t){return o=t})),t(e.exports,"resolve",(function(){return n}),(function(t){return n=t}));var a={};o=function(t){for(var e=Object.keys(t),i=0;i<e.length;i++)a[e[i]]=t[e[i]]},n=function(t){var e=a[t];if(null==e)throw new Error("Could not resolve bundle with id "+t);return e}})),a("kyEFX").register(JSON.parse('{"1zJhX":"library.419ae7a7.js","9v43y":"black-poster.10ff5377.jpg","lk5QZ":"library.87a32ae6.css","5UbS1":"index.90dac6fd.css","b9auz":"index.c9a01483.js"}')),a("js4LK"),a("dbc0g"),a("7rYDH");var s,r,l={};s=void 0!==e?e:"undefined"!=typeof window?window:l,r=function(t){if(void 0===t&&void 0===t.document)return!1;var e,i="Success",o="Failure",n="Warning",a="Info",s={wrapID:"NotiflixNotifyWrap",overlayID:"NotiflixNotifyOverlay",width:"280px",position:"right-top",distance:"10px",opacity:1,borderRadius:"5px",rtl:!1,timeout:3e3,messageMaxLength:110,backOverlay:!1,backOverlayColor:"rgba(0,0,0,0.5)",plainText:!0,showOnlyTheLastOne:!1,clickToClose:!1,pauseOnHover:!0,ID:"NotiflixNotify",className:"notiflix-notify",zindex:4001,fontFamily:"Quicksand",fontSize:"13px",cssAnimation:!0,cssAnimationDuration:400,cssAnimationStyle:"fade",closeButton:!1,useIcon:!0,useFontAwesome:!1,fontAwesomeIconStyle:"basic",fontAwesomeIconSize:"34px",success:{background:"#32c682",textColor:"#fff",childClassName:"notiflix-notify-success",notiflixIconColor:"rgba(0,0,0,0.2)",fontAwesomeClassName:"fas fa-check-circle",fontAwesomeIconColor:"rgba(0,0,0,0.2)",backOverlayColor:"rgba(50,198,130,0.2)"},failure:{background:"#ff5549",textColor:"#fff",childClassName:"notiflix-notify-failure",notiflixIconColor:"rgba(0,0,0,0.2)",fontAwesomeClassName:"fas fa-times-circle",fontAwesomeIconColor:"rgba(0,0,0,0.2)",backOverlayColor:"rgba(255,85,73,0.2)"},warning:{background:"#eebf31",textColor:"#fff",childClassName:"notiflix-notify-warning",notiflixIconColor:"rgba(0,0,0,0.2)",fontAwesomeClassName:"fas fa-exclamation-circle",fontAwesomeIconColor:"rgba(0,0,0,0.2)",backOverlayColor:"rgba(238,191,49,0.2)"},info:{background:"#26c0d3",textColor:"#fff",childClassName:"notiflix-notify-info",notiflixIconColor:"rgba(0,0,0,0.2)",fontAwesomeClassName:"fas fa-info-circle",fontAwesomeIconColor:"rgba(0,0,0,0.2)",backOverlayColor:"rgba(38,192,211,0.2)"}},r=function(t){return console.error("%c Notiflix Error ","padding:2px;border-radius:20px;color:#fff;background:#ff5549","\n"+t+"\n\nVisit documentation page to learn more: https://notiflix.github.io/documentation")},l=function(e){return e||(e="head"),null!==t.document[e]||(r('\nNotiflix needs to be appended to the "<'+e+'>" element, but you called it before the "<'+e+'>" element has been created.'),!1)},c=function(){var t={},e=!1,i=0;"[object Boolean]"===Object.prototype.toString.call(arguments[0])&&(e=arguments[0],i++);for(var o=function(i){for(var o in i)Object.prototype.hasOwnProperty.call(i,o)&&(e&&"[object Object]"===Object.prototype.toString.call(i[o])?t[o]=c(t[o],i[o]):t[o]=i[o])};i<arguments.length;i++)o(arguments[i]);return t},d=function(){return'[id^=NotiflixNotifyWrap]{pointer-events:none;position:fixed;z-index:4001;opacity:1;right:10px;top:10px;width:280px;max-width:96%;-webkit-box-sizing:border-box;box-sizing:border-box;background:transparent}[id^=NotiflixNotifyWrap].nx-flex-center-center{max-height:calc(100vh - 20px);overflow-x:hidden;overflow-y:auto;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;margin:auto}[id^=NotiflixNotifyWrap]::-webkit-scrollbar{width:0;height:0}[id^=NotiflixNotifyWrap]::-webkit-scrollbar-thumb{background:transparent}[id^=NotiflixNotifyWrap]::-webkit-scrollbar-track{background:transparent}[id^=NotiflixNotifyWrap] *{-webkit-box-sizing:border-box;box-sizing:border-box}[id^=NotiflixNotifyOverlay]{-webkit-transition:background .3s ease-in-out;-o-transition:background .3s ease-in-out;transition:background .3s ease-in-out}[id^=NotiflixNotifyWrap]>div{pointer-events:all;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;font-family:"Quicksand",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;width:100%;display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;position:relative;margin:0 0 10px;border-radius:5px;background:#1e1e1e;color:#fff;padding:10px 12px;font-size:14px;line-height:1.4}[id^=NotiflixNotifyWrap]>div:last-child{margin:0}[id^=NotiflixNotifyWrap]>div.nx-with-callback{cursor:pointer}[id^=NotiflixNotifyWrap]>div.nx-with-icon{padding:8px;min-height:56px}[id^=NotiflixNotifyWrap]>div.nx-paused{cursor:auto}[id^=NotiflixNotifyWrap]>div.nx-notify-click-to-close{cursor:pointer}[id^=NotiflixNotifyWrap]>div.nx-with-close-button{padding:10px 36px 10px 12px}[id^=NotiflixNotifyWrap]>div.nx-with-icon.nx-with-close-button{padding:6px 36px 6px 6px}[id^=NotiflixNotifyWrap]>div>span.nx-message{cursor:inherit;font-weight:normal;font-family:inherit!important;word-break:break-all;word-break:break-word}[id^=NotiflixNotifyWrap]>div>span.nx-close-button{cursor:pointer;-webkit-transition:all .2s ease-in-out;-o-transition:all .2s ease-in-out;transition:all .2s ease-in-out;position:absolute;right:8px;top:0;bottom:0;margin:auto;color:inherit;width:20px;height:20px}[id^=NotiflixNotifyWrap]>div>span.nx-close-button:hover{-webkit-transform:rotate(90deg);transform:rotate(90deg)}[id^=NotiflixNotifyWrap]>div>span.nx-close-button>svg{position:absolute;width:16px;height:16px;right:2px;top:2px}[id^=NotiflixNotifyWrap]>div>.nx-message-icon{position:absolute;width:40px;height:40px;font-size:30px;line-height:40px;text-align:center;left:8px;top:0;bottom:0;margin:auto;border-radius:inherit}[id^=NotiflixNotifyWrap]>div>.nx-message-icon-fa.nx-message-icon-fa-shadow{color:inherit;background:rgba(0,0,0,.15);-webkit-box-shadow:inset 0 0 34px rgba(0,0,0,.2);box-shadow:inset 0 0 34px rgba(0,0,0,.2);text-shadow:0 0 10px rgba(0,0,0,.3)}[id^=NotiflixNotifyWrap]>div>span.nx-with-icon{position:relative;float:left;width:calc(100% - 40px);margin:0 0 0 40px;padding:0 0 0 10px;-webkit-box-sizing:border-box;box-sizing:border-box}[id^=NotiflixNotifyWrap]>div.nx-rtl-on>.nx-message-icon{left:auto;right:8px}[id^=NotiflixNotifyWrap]>div.nx-rtl-on>span.nx-with-icon{padding:0 10px 0 0;margin:0 40px 0 0}[id^=NotiflixNotifyWrap]>div.nx-rtl-on>span.nx-close-button{right:auto;left:8px}[id^=NotiflixNotifyWrap]>div.nx-with-icon.nx-with-close-button.nx-rtl-on{padding:6px 6px 6px 36px}[id^=NotiflixNotifyWrap]>div.nx-with-close-button.nx-rtl-on{padding:10px 12px 10px 36px}[id^=NotiflixNotifyOverlay].nx-with-animation,[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-fade{-webkit-animation:notify-animation-fade .3s ease-in-out 0s normal;animation:notify-animation-fade .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-fade{0%{opacity:0}100%{opacity:1}}@keyframes notify-animation-fade{0%{opacity:0}100%{opacity:1}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-zoom{-webkit-animation:notify-animation-zoom .3s ease-in-out 0s normal;animation:notify-animation-zoom .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-zoom{0%{-webkit-transform:scale(0);transform:scale(0)}50%{-webkit-transform:scale(1.05);transform:scale(1.05)}100%{-webkit-transform:scale(1);transform:scale(1)}}@keyframes notify-animation-zoom{0%{-webkit-transform:scale(0);transform:scale(0)}50%{-webkit-transform:scale(1.05);transform:scale(1.05)}100%{-webkit-transform:scale(1);transform:scale(1)}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-right{-webkit-animation:notify-animation-from-right .3s ease-in-out 0s normal;animation:notify-animation-from-right .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-from-right{0%{right:-300px;opacity:0}50%{right:8px;opacity:1}100%{right:0;opacity:1}}@keyframes notify-animation-from-right{0%{right:-300px;opacity:0}50%{right:8px;opacity:1}100%{right:0;opacity:1}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-left{-webkit-animation:notify-animation-from-left .3s ease-in-out 0s normal;animation:notify-animation-from-left .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-from-left{0%{left:-300px;opacity:0}50%{left:8px;opacity:1}100%{left:0;opacity:1}}@keyframes notify-animation-from-left{0%{left:-300px;opacity:0}50%{left:8px;opacity:1}100%{left:0;opacity:1}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-top{-webkit-animation:notify-animation-from-top .3s ease-in-out 0s normal;animation:notify-animation-from-top .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-from-top{0%{top:-50px;opacity:0}50%{top:8px;opacity:1}100%{top:0;opacity:1}}@keyframes notify-animation-from-top{0%{top:-50px;opacity:0}50%{top:8px;opacity:1}100%{top:0;opacity:1}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-bottom{-webkit-animation:notify-animation-from-bottom .3s ease-in-out 0s normal;animation:notify-animation-from-bottom .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-from-bottom{0%{bottom:-50px;opacity:0}50%{bottom:8px;opacity:1}100%{bottom:0;opacity:1}}@keyframes notify-animation-from-bottom{0%{bottom:-50px;opacity:0}50%{bottom:8px;opacity:1}100%{bottom:0;opacity:1}}[id^=NotiflixNotifyOverlay].nx-with-animation.nx-remove,[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-fade.nx-remove{opacity:0;-webkit-animation:notify-remove-fade .3s ease-in-out 0s normal;animation:notify-remove-fade .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-fade{0%{opacity:1}100%{opacity:0}}@keyframes notify-remove-fade{0%{opacity:1}100%{opacity:0}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-zoom.nx-remove{-webkit-transform:scale(0);transform:scale(0);-webkit-animation:notify-remove-zoom .3s ease-in-out 0s normal;animation:notify-remove-zoom .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-zoom{0%{-webkit-transform:scale(1);transform:scale(1)}50%{-webkit-transform:scale(1.05);transform:scale(1.05)}100%{-webkit-transform:scale(0);transform:scale(0)}}@keyframes notify-remove-zoom{0%{-webkit-transform:scale(1);transform:scale(1)}50%{-webkit-transform:scale(1.05);transform:scale(1.05)}100%{-webkit-transform:scale(0);transform:scale(0)}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-top.nx-remove{opacity:0;-webkit-animation:notify-remove-to-top .3s ease-in-out 0s normal;animation:notify-remove-to-top .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-to-top{0%{top:0;opacity:1}50%{top:8px;opacity:1}100%{top:-50px;opacity:0}}@keyframes notify-remove-to-top{0%{top:0;opacity:1}50%{top:8px;opacity:1}100%{top:-50px;opacity:0}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-right.nx-remove{opacity:0;-webkit-animation:notify-remove-to-right .3s ease-in-out 0s normal;animation:notify-remove-to-right .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-to-right{0%{right:0;opacity:1}50%{right:8px;opacity:1}100%{right:-300px;opacity:0}}@keyframes notify-remove-to-right{0%{right:0;opacity:1}50%{right:8px;opacity:1}100%{right:-300px;opacity:0}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-bottom.nx-remove{opacity:0;-webkit-animation:notify-remove-to-bottom .3s ease-in-out 0s normal;animation:notify-remove-to-bottom .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-to-bottom{0%{bottom:0;opacity:1}50%{bottom:8px;opacity:1}100%{bottom:-50px;opacity:0}}@keyframes notify-remove-to-bottom{0%{bottom:0;opacity:1}50%{bottom:8px;opacity:1}100%{bottom:-50px;opacity:0}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-left.nx-remove{opacity:0;-webkit-animation:notify-remove-to-left .3s ease-in-out 0s normal;animation:notify-remove-to-left .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-to-left{0%{left:0;opacity:1}50%{left:8px;opacity:1}100%{left:-300px;opacity:0}}@keyframes notify-remove-to-left{0%{left:0;opacity:1}50%{left:8px;opacity:1}100%{left:-300px;opacity:0}}'},f=0,m=function(r,d,m,y){if(!l("body"))return!1;e||u.Notify.init({});var p=c(!0,e,{});if("object"==typeof m&&!Array.isArray(m)||"object"==typeof y&&!Array.isArray(y)){var x={};"object"==typeof m?x=m:"object"==typeof y&&(x=y),e=c(!0,e,x)}var g,b,h=e[r.toLocaleLowerCase("en")];f++,"string"!=typeof d&&(d="Notiflix "+r),e.plainText&&(g=d,(b=t.document.createElement("div")).innerHTML=g,d=b.textContent||b.innerText||""),!e.plainText&&d.length>e.messageMaxLength&&(e=c(!0,e,{closeButton:!0,messageMaxLength:150}),d='Possible HTML Tags Error: The "plainText" option is "false" and the notification content length is more than the "messageMaxLength" option.'),d.length>e.messageMaxLength&&(d=d.substring(0,e.messageMaxLength)+"..."),"shadow"===e.fontAwesomeIconStyle&&(h.fontAwesomeIconColor=h.background),e.cssAnimation||(e.cssAnimationDuration=0);var v=t.document.getElementById(s.wrapID)||t.document.createElement("div");if(v.id=s.wrapID,v.style.width=e.width,v.style.zIndex=e.zindex,v.style.opacity=e.opacity,"center-center"===e.position?(v.style.left=e.distance,v.style.top=e.distance,v.style.right=e.distance,v.style.bottom=e.distance,v.style.margin="auto",v.classList.add("nx-flex-center-center"),v.style.maxHeight="calc((100vh - "+e.distance+") - "+e.distance+")",v.style.display="flex",v.style.flexWrap="wrap",v.style.flexDirection="column",v.style.justifyContent="center",v.style.alignItems="center",v.style.pointerEvents="none"):"center-top"===e.position?(v.style.left=e.distance,v.style.right=e.distance,v.style.top=e.distance,v.style.bottom="auto",v.style.margin="auto"):"center-bottom"===e.position?(v.style.left=e.distance,v.style.right=e.distance,v.style.bottom=e.distance,v.style.top="auto",v.style.margin="auto"):"right-bottom"===e.position?(v.style.right=e.distance,v.style.bottom=e.distance,v.style.top="auto",v.style.left="auto"):"left-top"===e.position?(v.style.left=e.distance,v.style.top=e.distance,v.style.right="auto",v.style.bottom="auto"):"left-bottom"===e.position?(v.style.left=e.distance,v.style.bottom=e.distance,v.style.top="auto",v.style.right="auto"):(v.style.right=e.distance,v.style.top=e.distance,v.style.left="auto",v.style.bottom="auto"),e.backOverlay){var w=t.document.getElementById(s.overlayID)||t.document.createElement("div");w.id=s.overlayID,w.style.width="100%",w.style.height="100%",w.style.position="fixed",w.style.zIndex=e.zindex-1,w.style.left=0,w.style.top=0,w.style.right=0,w.style.bottom=0,w.style.background=h.backOverlayColor||e.backOverlayColor,w.className=e.cssAnimation?"nx-with-animation":"",w.style.animationDuration=e.cssAnimation?e.cssAnimationDuration+"ms":"",t.document.getElementById(s.overlayID)||t.document.body.appendChild(w)}t.document.getElementById(s.wrapID)||t.document.body.appendChild(v);var k=t.document.createElement("div");k.id=e.ID+"-"+f,k.className=e.className+" "+h.childClassName+" "+(e.cssAnimation?"nx-with-animation":"")+" "+(e.useIcon?"nx-with-icon":"")+" nx-"+e.cssAnimationStyle+" "+(e.closeButton&&"function"!=typeof m?"nx-with-close-button":"")+" "+("function"==typeof m?"nx-with-callback":"")+" "+(e.clickToClose?"nx-notify-click-to-close":""),k.style.fontSize=e.fontSize,k.style.color=h.textColor,k.style.background=h.background,k.style.borderRadius=e.borderRadius,k.style.pointerEvents="all",e.rtl&&(k.setAttribute("dir","rtl"),k.classList.add("nx-rtl-on")),k.style.fontFamily='"'+e.fontFamily+'", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif',e.cssAnimation&&(k.style.animationDuration=e.cssAnimationDuration+"ms");var N="";if(e.closeButton&&"function"!=typeof m&&(N='<span class="nx-close-button"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><g><path fill="'+h.notiflixIconColor+'" d="M0.38 2.19l7.8 7.81 -7.8 7.81c-0.51,0.5 -0.51,1.31 -0.01,1.81 0.25,0.25 0.57,0.38 0.91,0.38 0.34,0 0.67,-0.14 0.91,-0.38l7.81 -7.81 7.81 7.81c0.24,0.24 0.57,0.38 0.91,0.38 0.34,0 0.66,-0.14 0.9,-0.38 0.51,-0.5 0.51,-1.31 0,-1.81l-7.81 -7.81 7.81 -7.81c0.51,-0.5 0.51,-1.31 0,-1.82 -0.5,-0.5 -1.31,-0.5 -1.81,0l-7.81 7.81 -7.81 -7.81c-0.5,-0.5 -1.31,-0.5 -1.81,0 -0.51,0.51 -0.51,1.32 0,1.82z"/></g></svg></span>'),e.useIcon)if(e.useFontAwesome)k.innerHTML='<i style="color:'+h.fontAwesomeIconColor+"; font-size:"+e.fontAwesomeIconSize+';" class="nx-message-icon nx-message-icon-fa '+h.fontAwesomeClassName+" "+("shadow"===e.fontAwesomeIconStyle?"nx-message-icon-fa-shadow":"nx-message-icon-fa-basic")+'"></i><span class="nx-message nx-with-icon">'+d+"</span>"+(e.closeButton?N:"");else{var _="";r===i?_='<svg class="nx-message-icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g><path fill="'+h.notiflixIconColor+'" d="M20 0c11.03,0 20,8.97 20,20 0,11.03 -8.97,20 -20,20 -11.03,0 -20,-8.97 -20,-20 0,-11.03 8.97,-20 20,-20zm0 37.98c9.92,0 17.98,-8.06 17.98,-17.98 0,-9.92 -8.06,-17.98 -17.98,-17.98 -9.92,0 -17.98,8.06 -17.98,17.98 0,9.92 8.06,17.98 17.98,17.98zm-2.4 -13.29l11.52 -12.96c0.37,-0.41 1.01,-0.45 1.42,-0.08 0.42,0.37 0.46,1 0.09,1.42l-12.16 13.67c-0.19,0.22 -0.46,0.34 -0.75,0.34 -0.23,0 -0.45,-0.07 -0.63,-0.22l-7.6 -6.07c-0.43,-0.35 -0.5,-0.99 -0.16,-1.42 0.35,-0.43 0.99,-0.5 1.42,-0.16l6.85 5.48z"/></g></svg>':r===o?_='<svg class="nx-message-icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g><path fill="'+h.notiflixIconColor+'" d="M20 0c11.03,0 20,8.97 20,20 0,11.03 -8.97,20 -20,20 -11.03,0 -20,-8.97 -20,-20 0,-11.03 8.97,-20 20,-20zm0 37.98c9.92,0 17.98,-8.06 17.98,-17.98 0,-9.92 -8.06,-17.98 -17.98,-17.98 -9.92,0 -17.98,8.06 -17.98,17.98 0,9.92 8.06,17.98 17.98,17.98zm1.42 -17.98l6.13 6.12c0.39,0.4 0.39,1.04 0,1.43 -0.19,0.19 -0.45,0.29 -0.71,0.29 -0.27,0 -0.53,-0.1 -0.72,-0.29l-6.12 -6.13 -6.13 6.13c-0.19,0.19 -0.44,0.29 -0.71,0.29 -0.27,0 -0.52,-0.1 -0.71,-0.29 -0.39,-0.39 -0.39,-1.03 0,-1.43l6.13 -6.12 -6.13 -6.13c-0.39,-0.39 -0.39,-1.03 0,-1.42 0.39,-0.39 1.03,-0.39 1.42,0l6.13 6.12 6.12 -6.12c0.4,-0.39 1.04,-0.39 1.43,0 0.39,0.39 0.39,1.03 0,1.42l-6.13 6.13z"/></g></svg>':r===n?_='<svg class="nx-message-icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g><path fill="'+h.notiflixIconColor+'" d="M21.91 3.48l17.8 30.89c0.84,1.46 -0.23,3.25 -1.91,3.25l-35.6 0c-1.68,0 -2.75,-1.79 -1.91,-3.25l17.8 -30.89c0.85,-1.47 2.97,-1.47 3.82,0zm16.15 31.84l-17.8 -30.89c-0.11,-0.2 -0.41,-0.2 -0.52,0l-17.8 30.89c-0.12,0.2 0.05,0.4 0.26,0.4l35.6 0c0.21,0 0.38,-0.2 0.26,-0.4zm-19.01 -4.12l0 -1.05c0,-0.53 0.42,-0.95 0.95,-0.95 0.53,0 0.95,0.42 0.95,0.95l0 1.05c0,0.53 -0.42,0.95 -0.95,0.95 -0.53,0 -0.95,-0.42 -0.95,-0.95zm0 -4.66l0 -13.39c0,-0.52 0.42,-0.95 0.95,-0.95 0.53,0 0.95,0.43 0.95,0.95l0 13.39c0,0.53 -0.42,0.96 -0.95,0.96 -0.53,0 -0.95,-0.43 -0.95,-0.96z"/></g></svg>':r===a&&(_='<svg class="nx-message-icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g><path fill="'+h.notiflixIconColor+'" d="M20 0c11.03,0 20,8.97 20,20 0,11.03 -8.97,20 -20,20 -11.03,0 -20,-8.97 -20,-20 0,-11.03 8.97,-20 20,-20zm0 37.98c9.92,0 17.98,-8.06 17.98,-17.98 0,-9.92 -8.06,-17.98 -17.98,-17.98 -9.92,0 -17.98,8.06 -17.98,17.98 0,9.92 8.06,17.98 17.98,17.98zm-0.99 -23.3c0,-0.54 0.44,-0.98 0.99,-0.98 0.55,0 0.99,0.44 0.99,0.98l0 15.86c0,0.55 -0.44,0.99 -0.99,0.99 -0.55,0 -0.99,-0.44 -0.99,-0.99l0 -15.86zm0 -5.22c0,-0.55 0.44,-0.99 0.99,-0.99 0.55,0 0.99,0.44 0.99,0.99l0 1.09c0,0.54 -0.44,0.99 -0.99,0.99 -0.55,0 -0.99,-0.45 -0.99,-0.99l0 -1.09z"/></g></svg>'),k.innerHTML=_+'<span class="nx-message nx-with-icon">'+d+"</span>"+(e.closeButton?N:"")}else k.innerHTML='<span class="nx-message">'+d+"</span>"+(e.closeButton?N:"");if("left-bottom"===e.position||"right-bottom"===e.position){var L=t.document.getElementById(s.wrapID);L.insertBefore(k,L.firstChild)}else t.document.getElementById(s.wrapID).appendChild(k);var C=t.document.getElementById(k.id);if(C){var I,S,q=function(){C.classList.add("nx-remove");var e=t.document.getElementById(s.overlayID);e&&v.childElementCount<=0&&e.classList.add("nx-remove"),clearTimeout(I)},E=function(){if(C&&null!==C.parentNode&&C.parentNode.removeChild(C),v.childElementCount<=0&&null!==v.parentNode){v.parentNode.removeChild(v);var e=t.document.getElementById(s.overlayID);e&&null!==e.parentNode&&e.parentNode.removeChild(e)}clearTimeout(S)};if(e.closeButton&&"function"!=typeof m&&t.document.getElementById(k.id).querySelector("span.nx-close-button").addEventListener("click",(function(){q();var t=setTimeout((function(){E(),clearTimeout(t)}),e.cssAnimationDuration)})),("function"==typeof m||e.clickToClose)&&C.addEventListener("click",(function(){"function"==typeof m&&m(),q();var t=setTimeout((function(){E(),clearTimeout(t)}),e.cssAnimationDuration)})),!e.closeButton&&"function"!=typeof m){var A=function(){I=setTimeout((function(){q()}),e.timeout),S=setTimeout((function(){E()}),e.timeout+e.cssAnimationDuration)};A(),e.pauseOnHover&&(C.addEventListener("mouseenter",(function(){C.classList.add("nx-paused"),clearTimeout(I),clearTimeout(S)})),C.addEventListener("mouseleave",(function(){C.classList.remove("nx-paused"),A()})))}}if(e.showOnlyTheLastOne&&f>0)for(var T=t.document.querySelectorAll("[id^="+e.ID+"-]:not([id="+e.ID+"-"+f+"])"),j=0;j<T.length;j++){var z=T[j];null!==z.parentNode&&z.parentNode.removeChild(z)}e=c(!0,e,p)},u={Notify:{init:function(i){e=c(!0,s,i),function(e,i){if(!l("head"))return!1;if(null!==e()&&!t.document.getElementById(i)){var o=t.document.createElement("style");o.id=i,o.innerHTML=e(),t.document.head.appendChild(o)}}(d,"NotiflixNotifyInternalCSS")},merge:function(t){if(!e)return r("You have to initialize the Notify module before call Merge function."),!1;e=c(!0,e,t)},success:function(t,e,o){m(i,t,e,o)},failure:function(t,e,i){m(o,t,e,i)},warning:function(t,e,i){m(n,t,e,i)},info:function(t,e,i){m(a,t,e,i)}}};return"object"==typeof t.Notiflix?c(!0,t.Notiflix,{Notify:u.Notify}):{Notify:u.Notify}},"function"==typeof define&&define.amd?define([],(function(){return r(s)})):"object"==typeof l?l=r(s):s.Notiflix=r(s);var c=a("7rYDH");a("8HDSx");var d,f=a("31u3U");function m(t){const{poster_path:e,title:i,release_date:o,vote_average:n,genreNames:a,id:s}=t;return`\n  <li class="film-card__item" data-id='${s}' ${null===e?'style = "position: relative;"':""}>\n      <img src="${null===e?new URL(d):"https://image.tmdb.org/t/p/original"+e}" alt="${i+" poster"}" class="film-card__poster" data-id='${s}' />\n      ${null===e?`<p style = "position: absolute; top: 47%; left: 50%; transform: translate(-50%, -50%); font-size: 20px; user-select: none;" data-id='${s}'>No poster</p>`:""}\n      <div class="film-card__content">\n          <h2 class="film-card__title" data-id='${s}'>${i}</h2>\n          <p class="film-card__genre" data-id='${s}'>\n            ${a.length>2?a.slice(0,2).join(", ")+`<span data-id="${s}" class="js-other-genres">, Other</span>`:a.join(", ")}\n              <span class="film-card__release-date" data-id='${s}' ${""===o?"style = 'display: none;'":""} \n              ${0===a.length?"style = 'margin-left: 0px;'":""}>\n                ${""===o?"":new Date(o).getFullYear()}\n              </span>\n              <span class="film-card__rating" ${0===a.length&&""===o?"style = 'margin-left: 0px;'":""}\n              ${""===o?"style = 'margin-left: 8px;'":""}\n              >\n                ${n.toFixed(1)}\n              </span>\n          </p>\n      </div>\n  </li>\n`}d=new URL(a("kyEFX").resolve("9v43y"),import.meta.url).toString();var u=a("js4LK"),y=a("fb9GJ");c=a("7rYDH");const p=document.querySelector("#pagination"),x=(new(0,c.ThemoviedbAPI),document.querySelector(".film-card__list"));async function g(t){try{const e={totalItems:t.length,itemsPerPage:6,visiblePages:5},o=new(i(y))(p,e),n=document.querySelector(".tui-page-btn.tui-first");document.querySelector(".tui-page-btn.tui-last").innerHTML=`${Math.ceil(t.length/6)}`,n.innerHTML="1",o.on("afterMove",(async function({page:e}){const i=6*e-6,o=6*e,n=await I(t.slice(i,o));x.innerHTML=n}))}catch(t){console.log(t.message)}}const b=document.querySelector(".library-film-card__list"),h=(document.querySelector(".library__js"),document.querySelector("#pagination")),v=document.querySelector(".footer"),w=(document.querySelector("main"),document.querySelector(".js-watched")),k=document.querySelector(".js-queue"),N=document.querySelector(".info-card"),_=document.querySelector("#q-pagination"),L=new(0,c.ThemoviedbAPI);async function C(){h.classList.remove("visually-hidden"),_.classList.add("visually-hidden"),(0,u.showLoader)(),k.classList.remove("is-active-btn"),w.classList.add("is-active-btn"),b.innerHTML="";const t=f.default.load("watched");if(!t||t.length<1)return l.Notify.failure("Sorry, there are no films matching your search query. Please try again."),h.classList.add("visually-hidden"),(0,u.hideLoader)(),N.classList.remove("visually-hidden"),void(b.style.height="600px");if((0,u.hideLoader)(),v.style.position="fixed",v.style.bottom="0",v.style.left="50%",v.style.transform="translateX(-50%)",N.classList.add("visually-hidden"),b.style.height="fit-content",t.length>6){const e=await I(t.slice(0,6));return b.insertAdjacentHTML("afterbegin",e),void g(t)}const e=await I(t);b.insertAdjacentHTML("afterbegin",e)}async function I(t){return(await Promise.all(t.map(L.fetchFilmInfo.bind(L)))).reduce(((t,e)=>{const i=e.genres.map((t=>t.id));return e.genreNames=i.map((t=>L.genresObject[t]||"Unknown genre")),t+m(e)}),"")}C(),a("7274P");c=a("7rYDH"),u=a("js4LK"),f=a("31u3U"),y=a("fb9GJ");const S=document.querySelector(".library-film-card__list"),q=document.querySelector(".js-watched"),E=document.querySelector(".js-queue"),A=document.querySelector("#pagination"),T=document.querySelector("#q-pagination"),j=(document.querySelector(".footer"),document.querySelector(".info-card"));new(0,c.ThemoviedbAPI);q.addEventListener("click",C),E.addEventListener("click",(async function(){S.innerHTML="",A.classList.add("visually-hidden"),(0,u.showLoader)(),E.classList.add("is-active-btn"),q.classList.remove("is-active-btn");const t=f.default.load("queue");if(!t||t.length<1)return l.Notify.failure("Sorry, there are no films matching your search query. Please try again."),T.classList.add("visually-hidden"),(0,u.hideLoader)(),j.classList.remove("visually-hidden"),void(S.style.height="600px");if((0,u.hideLoader)(),j.classList.add("visually-hidden"),S.style.height="fit-content",t.length>6){T.classList.remove("visually-hidden");const e=await I(t.slice(0,6));return S.insertAdjacentHTML("afterbegin",e),void async function(t){try{const e={totalItems:t.length,itemsPerPage:6,visiblePages:5},o=new(i(y))(T,e),n=document.querySelector(".tui-page-btn.tui-first");document.querySelector(".tui-page-btn.tui-last").innerHTML=`${Math.ceil(t.length/6)}`,n.innerHTML="1",o.on("afterMove",(async function({page:e}){const i=6*e-6,o=6*e,n=await I(t.slice(i,o));S.innerHTML=n}))}catch(t){console.log(t.message)}}(t)}const e=await I(t);S.insertAdjacentHTML("afterbegin",e)})),a("31u3U"),a("4QsFx");c=a("7rYDH");function z(t){const{poster_path:e,title:i,overview:o,popularity:n,original_title:a,genres:s,vote_average:r,vote_count:l,id:c}=t,d=[];s.map((t=>{d.push(t.name)}));const f=d.join(", ");return`<div class="modal-card__poster" data-id='${c}'>\n                <img src="${"https://image.tmdb.org/t/p/original"+e}" alt="${i+"poster"}">\n            </div>\n            <div class="modal-card__text">\n                <h2 class="modal-card__title">${i}</h2>\n                <div class="modal-card__info">\n                    <ul class="modal-card__info-title-list">\n                    <li class="modal-card__info-title-items modal-card__info-title-items__vote">Vote / Votes\n                            <div class="modal-card__info-title-vote">\n                                <div>${r.toFixed(1)}</div>\n                                <p>/ ${l}</p>\n                            </div>\n                        </li>\n                        <li class="modal-card__info-title-items modal-card__info-title-items__popularity">Popularity <p>\n                                ${n.toFixed(1)}</p>\n                        </li>\n                        <li class="modal-card__info-title-items modal-card__info-title-items__original">Original Title\n                            <p>${a}</p>\n                        </li>\n                        <li class="modal-card__info-title-items modal-card__info-title-items__genre">Genre <p>${f}\n                            </p>\n                        </li>\n                    </ul>\n                </div>\n                <h3 class="modal-card__about-title">About</h3>\n                <p class="modal-card__about-descr">${o}</p>\n                <div class="modal-card__buttons">\n                     <button type="button" data-id='${c}' class="modal-card__watch-btn ${$.includes(`${c}`)?"":"js-remove-watched"}">${$.includes(`${c}`)?"remove from watched":"add to watched"}</button>\n                     <button type="button" data-id='${c}' class="modal-card__queue-btn ${W.includes(`${c}`)?"":"js-remove-queue"}">${W.includes(`${c}`)?"remove from queue":"add to queue"}</button>\n                </div>\n                <ul class = "trailer">\n                <li><h3 class="trailer__title">Watch Trailer</h3></li>\n                <li><button type="button" data-id='${c}' class="trailer-btn-js trailer-btn"></button></li>\n                </ul>\n            </div>\n            </div>`}f=a("31u3U");a("js4LK");var H=a("9B8F0");const M=new(0,c.ThemoviedbAPI),$=f.default.load("watched")?[...f.default.load("watched")]:[],W=f.default.load("queue")?[...f.default.load("queue")]:[];async function O(t){t.target.getAttribute("data-id")}(()=>{const t={openCardInfoEl:document.querySelector(".film-card__list.film-card__list"),closeCardInfoEl:document.querySelector("[data-modal-close-card]"),modalCardInfo:document.querySelector("[data-modal-card]"),modalCardContent:document.querySelector(".modal-card__content"),trailerBtn:document.querySelector(".trailer-btn"),body:document.querySelector("body"),galleryEl:document.querySelector(".library-film-card__list"),watchedBtnEl:document.querySelector(".js-watched"),queueBtnEl:document.querySelector(".js-queue"),qPagination:document.querySelector("#q-pagination"),infoCard:document.querySelector(".info-card")};let e,i;const o=()=>{t.modalCardInfo.classList.add("is-hidden"),t.body.classList.remove("no-scroll"),t.modalCardContent.innerHTML="",document.removeEventListener("keydown",n)},n=t=>{"Escape"===t.code&&o()};async function a(t){const e=t.target.getAttribute("data-id");W.includes(e)||M.fetchFilmInfo(e).then((t=>{f.default.save("queue",W)})).catch((t=>{console.log(t)}))}async function s(t){const e=t.target.getAttribute("data-id");$.includes(e)||await M.fetchFilmInfo(e).then((t=>{f.default.save("watched",$)})).catch((t=>{console.log(t)}))}t.openCardInfoEl.addEventListener("click",(async o=>{if("UL"!==o.target.nodeName){t.modalCardInfo.classList.remove("is-hidden"),t.body.classList.add("no-scroll"),document.addEventListener("keydown",n);const r=o.target.getAttribute("data-id");await M.fetchFilmInfo(r).then((o=>{t.modalCardContent.innerHTML=z(o),e=document.querySelector(".modal-card__watch-btn"),e.addEventListener("click",s),i=document.querySelector(".modal-card__queue-btn"),i.addEventListener("click",a)})).catch((t=>{console.log(t)}))}})),t.closeCardInfoEl.addEventListener("click",o),t.modalCardInfo.addEventListener("click",(t=>{const{target:e,currentTarget:i}=t;e.classList.contains("modal-card__watch-btn")&&e.addEventListener("click",s),e.classList.contains("modal-card__queue-btn")&&e.addEventListener("click",(async function(){const t=e.getAttribute("data-id");M.fetchFilmInfo(t).then((t=>{f.default.save("queue",W)})).catch((t=>{console.log(t)}))})),e.classList.contains("trailer-btn")&&e.addEventListener("click",(async function(t){const e=t.target.getAttribute("data-id");M.fetchTrailer(e).then((t=>{console.log(e),console.log(t),function(t){H.create(`<div class="modal-trailer-backdrop">\n          <iframe class="iframe" width="640" height="480" frameborder="0"\n            src="https://www.youtube.com/embed/${t.results[0].key}" >\n          </iframe>\n     </div>`,{onShow:t=>{document.onkeydown=function(e){("key"in(e=e||window.event)?"Escape"===e.key||"Esc"===e.key:27===e.keyCode)&&t.close()}}}).show()}(t)})).catch(console.log)})),e===i&&o()})),t.modalCardContent.addEventListener("click",(async e=>{const i=e.currentTarget.querySelector("[data-id]").getAttribute("data-id"),{target:o}=e;if("BUTTON"===o.nodeName)if(!o.classList.contains("modal-card__watch-btn")||$.includes(i)){if(o.classList.contains("modal-card__watch-btn")&&$.includes(i)){if($.splice($.indexOf(i),1),localStorage.setItem("watched",JSON.stringify($)),o.textContent="add to watched",o.classList.add("js-remove-watched"),t.watchedBtnEl.classList.contains("is-active-btn")){t.galleryEl.innerHTML="";const e=f.default.load("watched");if(!e||e.length<1)return t.qPagination.classList.add("visually-hidden"),t.infoCard.classList.remove("visually-hidden"),void(t.galleryEl.style.height="600px");const i=await I(e);t.galleryEl.insertAdjacentHTML("afterbegin",i)}}else if(!o.classList.contains("modal-card__queue-btn")||W.includes(i))if(o.classList.contains("modal-card__queue-btn")&&W.includes(i)){if(W.splice(W.indexOf(i),1),localStorage.setItem("queue",JSON.stringify(W)),o.textContent="add to queue",o.classList.add("js-remove-queue"),t.queueBtnEl.classList.contains("is-active-btn")){t.galleryEl.innerHTML="";const e=f.default.load("queue");if(!e||e.length<1)return t.qPagination.classList.add("visually-hidden"),t.infoCard.classList.remove("visually-hidden"),void(t.galleryEl.style.height="600px");const i=await I(e);t.galleryEl.insertAdjacentHTML("afterbegin",i)}}else;else if(W.push(i),localStorage.setItem("queue",JSON.stringify(W)),o.textContent="remove from queue",o.classList.remove("js-remove-queue"),t.queueBtnEl.classList.contains("is-active-btn")){t.galleryEl.innerHTML="";const e=f.default.load("queue"),i=await I(e);t.galleryEl.insertAdjacentHTML("afterbegin",i)}}else if($.push(i),localStorage.setItem("watched",JSON.stringify($)),o.addEventListener("click",O),o.textContent="remove from watched",o.classList.remove("js-remove-watched"),t.watchedBtnEl.classList.contains("is-active-btn")){t.galleryEl.innerHTML="";const e=f.default.load("watched"),i=await I(e);t.galleryEl.insertAdjacentHTML("afterbegin",i)}}))})();
//# sourceMappingURL=library.419ae7a7.js.map

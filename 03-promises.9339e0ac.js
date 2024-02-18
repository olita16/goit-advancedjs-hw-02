function t(t){return t&&t.__esModule?t.default:t}var e,o="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},i={};function n(t,e){return new Promise(((o,i)=>{const n=Math.random()>.3;setTimeout((()=>{n?o({position:t,delay:e}):i({position:t,delay:e})}),e)}))}void 0!==o||(window||i.window||i.global),e=function(t){var e={},o="iziToast",i=(document.querySelector("body"),!!/Mobi/.test(navigator.userAgent)),n=/Chrome/.test(navigator.userAgent)&&/Google Inc/.test(navigator.vendor),s="undefined"!=typeof InstallTrigger,a="ontouchstart"in document.documentElement,r=["bottomRight","bottomLeft","bottomCenter","topRight","topLeft","topCenter","center"],l=568,d={};e.children={};var c={id:null,class:"",title:"",titleColor:"",titleSize:"",titleLineHeight:"",message:"",messageColor:"",messageSize:"",messageLineHeight:"",backgroundColor:"",theme:"light",color:"",icon:"",iconText:"",iconColor:"",iconUrl:null,image:"",imageWidth:50,maxWidth:null,zindex:null,layout:1,balloon:!1,close:!0,closeOnEscape:!1,closeOnClick:!1,displayMode:0,position:"bottomRight",target:"",targetFirst:!0,timeout:5e3,rtl:!1,animateInside:!0,drag:!0,pauseOnHover:!0,resetOnHover:!1,progressBar:!0,progressBarColor:"",progressBarEasing:"linear",overlay:!1,overlayClose:!1,overlayColor:"rgba(0, 0, 0, 0.6)",transitionIn:"fadeInUp",transitionOut:"fadeOut",transitionInMobile:"fadeInUp",transitionOutMobile:"fadeOutDown",buttons:{},inputs:{},onOpening:function(){},onOpened:function(){},onClosing:function(){},onClosed:function(){}};if("remove"in Element.prototype||(Element.prototype.remove=function(){this.parentNode&&this.parentNode.removeChild(this)}),"function"!=typeof window.CustomEvent){var u=function(t,e){e=e||{bubbles:!1,cancelable:!1,detail:void 0};var o=document.createEvent("CustomEvent");return o.initCustomEvent(t,e.bubbles,e.cancelable,e.detail),o};u.prototype=window.Event.prototype,window.CustomEvent=u}var p=function(t,e,o){if("[object Object]"===Object.prototype.toString.call(t))for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&e.call(o,t[i],i,t);else if(t)for(var n=0,s=t.length;n<s;n++)e.call(o,t[n],n,t)},m=function(t,e){var o={};return p(t,(function(e,i){o[i]=t[i]})),p(e,(function(t,i){o[i]=e[i]})),o},g=function(t){var e=document.createDocumentFragment(),o=document.createElement("div");for(o.innerHTML=t;o.firstChild;)e.appendChild(o.firstChild);return e},f={move:function(t,e,o,i){var a,r=.3,l=180;0!==i&&(t.classList.add("iziToast-dragged"),t.style.transform="translateX("+i+"px)",i>0?(a=(l-i)/l)<r&&e.hide(m(o,{transitionOut:"fadeOutRight",transitionOutMobile:"fadeOutRight"}),t,"drag"):(a=(l+i)/l)<r&&e.hide(m(o,{transitionOut:"fadeOutLeft",transitionOutMobile:"fadeOutLeft"}),t,"drag"),t.style.opacity=a,a<r&&((n||s)&&(t.style.left=i+"px"),t.parentNode.style.opacity=r,this.stopMoving(t,null)))},startMoving:function(t,e,o,i){i=i||window.event;var n=a?i.touches[0].clientX:i.clientX,s=t.style.transform.replace("px)",""),r=n-(s=s.replace("translateX(",""));o.transitionIn&&t.classList.remove(o.transitionIn),o.transitionInMobile&&t.classList.remove(o.transitionInMobile),t.style.transition="",a?document.ontouchmove=function(i){i.preventDefault();var n=(i=i||window.event).touches[0].clientX-r;f.move(t,e,o,n)}:document.onmousemove=function(i){i.preventDefault();var n=(i=i||window.event).clientX-r;f.move(t,e,o,n)}},stopMoving:function(t,e){a?document.ontouchmove=function(){}:document.onmousemove=function(){},t.style.opacity="",t.style.transform="",t.classList.contains("iziToast-dragged")&&(t.classList.remove("iziToast-dragged"),t.style.transition="transform 0.4s ease, opacity 0.4s ease",setTimeout((function(){t.style.transition=""}),400))}};return e.setSetting=function(t,o,i){e.children[t][o]=i},e.getSetting=function(t,o){return e.children[t][o]},e.destroy=function(){p(document.querySelectorAll(".iziToast-overlay"),(function(t,e){t.remove()})),p(document.querySelectorAll(".iziToast-wrapper"),(function(t,e){t.remove()})),p(document.querySelectorAll(".iziToast"),(function(t,e){t.remove()})),this.children={},document.removeEventListener("iziToast-opened",{},!1),document.removeEventListener("iziToast-opening",{},!1),document.removeEventListener("iziToast-closing",{},!1),document.removeEventListener("iziToast-closed",{},!1),document.removeEventListener("keyup",{},!1),d={}},e.settings=function(t){e.destroy(),d=t,c=m(c,t||{})},p({info:{color:"blue",icon:"ico-info"},success:{color:"green",icon:"ico-success"},warning:{color:"orange",icon:"ico-warning"},error:{color:"red",icon:"ico-error"},question:{color:"yellow",icon:"ico-question"}},(function(t,o){e[o]=function(e){var o=m(d,e||{});o=m(t,o||{}),this.show(o)}})),e.progress=function(t,e,o){var i=this,n=e.getAttribute("data-iziToast-ref"),s=m(this.children[n],t||{}),a=e.querySelector(".iziToast-progressbar div");return{start:function(){void 0===s.time.REMAINING&&(e.classList.remove("iziToast-reseted"),null!==a&&(a.style.transition="width "+s.timeout+"ms "+s.progressBarEasing,a.style.width="0%"),s.time.START=(new Date).getTime(),s.time.END=s.time.START+s.timeout,s.time.TIMER=setTimeout((function(){clearTimeout(s.time.TIMER),e.classList.contains("iziToast-closing")||(i.hide(s,e,"timeout"),"function"==typeof o&&o.apply(i))}),s.timeout),i.setSetting(n,"time",s.time))},pause:function(){if(void 0!==s.time.START&&!e.classList.contains("iziToast-paused")&&!e.classList.contains("iziToast-reseted")){if(e.classList.add("iziToast-paused"),s.time.REMAINING=s.time.END-(new Date).getTime(),clearTimeout(s.time.TIMER),i.setSetting(n,"time",s.time),null!==a){var t=window.getComputedStyle(a).getPropertyValue("width");a.style.transition="none",a.style.width=t}"function"==typeof o&&setTimeout((function(){o.apply(i)}),10)}},resume:function(){void 0!==s.time.REMAINING?(e.classList.remove("iziToast-paused"),null!==a&&(a.style.transition="width "+s.time.REMAINING+"ms "+s.progressBarEasing,a.style.width="0%"),s.time.END=(new Date).getTime()+s.time.REMAINING,s.time.TIMER=setTimeout((function(){clearTimeout(s.time.TIMER),e.classList.contains("iziToast-closing")||(i.hide(s,e,"timeout"),"function"==typeof o&&o.apply(i))}),s.time.REMAINING),i.setSetting(n,"time",s.time)):this.start()},reset:function(){clearTimeout(s.time.TIMER),delete s.time.REMAINING,i.setSetting(n,"time",s.time),e.classList.add("iziToast-reseted"),e.classList.remove("iziToast-paused"),null!==a&&(a.style.transition="none",a.style.width="100%"),"function"==typeof o&&setTimeout((function(){o.apply(i)}),10)}}},e.hide=function(t,e,o){"object"!=typeof e&&(e=document.querySelector(e));var n=this,s=m(this.children[e.getAttribute("data-iziToast-ref")],t||{});s.closedBy=o||null,delete s.time.REMAINING,e.classList.add("iziToast-closing"),function(){var t=document.querySelector(".iziToast-overlay");if(null!==t){var e=t.getAttribute("data-iziToast-ref"),o=(e=e.split(",")).indexOf(String(s.ref));-1!==o&&e.splice(o,1),t.setAttribute("data-iziToast-ref",e.join()),0===e.length&&(t.classList.remove("fadeIn"),t.classList.add("fadeOut"),setTimeout((function(){t.remove()}),700))}}(),s.transitionIn&&e.classList.remove(s.transitionIn),s.transitionInMobile&&e.classList.remove(s.transitionInMobile),i||window.innerWidth<=l?s.transitionOutMobile&&e.classList.add(s.transitionOutMobile):s.transitionOut&&e.classList.add(s.transitionOut);var a=e.parentNode.offsetHeight;e.parentNode.style.height=a+"px",e.style.pointerEvents="none",(!i||window.innerWidth>l)&&(e.parentNode.style.transitionDelay="0.2s");try{var r=new CustomEvent("iziToast-closing",{detail:s,bubbles:!0,cancelable:!0});document.dispatchEvent(r)}catch(t){console.warn(t)}setTimeout((function(){e.parentNode.style.height="0px",e.parentNode.style.overflow="",setTimeout((function(){delete n.children[s.ref],e.parentNode.remove();try{var t=new CustomEvent("iziToast-closed",{detail:s,bubbles:!0,cancelable:!0});document.dispatchEvent(t)}catch(t){console.warn(t)}void 0!==s.onClosed&&s.onClosed.apply(null,[s,e,o])}),1e3)}),200),void 0!==s.onClosing&&s.onClosing.apply(null,[s,e,o])},e.show=function(t){var n,s=this,u=m(d,t||{});if((u=m(c,u)).time={},null===u.id&&(u.id=(n=u.title+u.message+u.color,btoa(encodeURIComponent(n)).replace(/=/g,""))),1===u.displayMode||"once"==u.displayMode)try{if(document.querySelectorAll(".iziToast#"+u.id).length>0)return!1}catch(t){console.warn("[iziToast] Could not find an element with this selector: #"+u.id+". Try to set an valid id.")}if(2===u.displayMode||"replace"==u.displayMode)try{p(document.querySelectorAll(".iziToast#"+u.id),(function(t,e){s.hide(u,t,"replaced")}))}catch(t){console.warn("[iziToast] Could not find an element with this selector: #"+u.id+". Try to set an valid id.")}u.ref=(new Date).getTime()+Math.floor(1e7*Math.random()+1),e.children[u.ref]=u;var v,y={body:document.querySelector("body"),overlay:document.createElement("div"),toast:document.createElement("div"),toastBody:document.createElement("div"),toastTexts:document.createElement("div"),toastCapsule:document.createElement("div"),cover:document.createElement("div"),buttons:document.createElement("div"),inputs:document.createElement("div"),icon:u.iconUrl?document.createElement("img"):document.createElement("i"),wrapper:null};y.toast.setAttribute("data-iziToast-ref",u.ref),y.toast.appendChild(y.toastBody),y.toastCapsule.appendChild(y.toast),function(){if(y.toast.classList.add(o),y.toast.classList.add("iziToast-opening"),y.toastCapsule.classList.add("iziToast-capsule"),y.toastBody.classList.add("iziToast-body"),y.toastTexts.classList.add("iziToast-texts"),i||window.innerWidth<=l?u.transitionInMobile&&y.toast.classList.add(u.transitionInMobile):u.transitionIn&&y.toast.classList.add(u.transitionIn),u.class){var t=u.class.split(" ");p(t,(function(t,e){y.toast.classList.add(t)}))}var e;u.id&&(y.toast.id=u.id),u.rtl&&(y.toast.classList.add("iziToast-rtl"),y.toast.setAttribute("dir","rtl")),u.layout>1&&y.toast.classList.add("iziToast-layout"+u.layout),u.balloon&&y.toast.classList.add("iziToast-balloon"),u.maxWidth&&(isNaN(u.maxWidth)?y.toast.style.maxWidth=u.maxWidth:y.toast.style.maxWidth=u.maxWidth+"px"),""===u.theme&&"light"===u.theme||y.toast.classList.add("iziToast-theme-"+u.theme),u.color&&("#"==(e=u.color).substring(0,1)||"rgb"==e.substring(0,3)||"hsl"==e.substring(0,3)?y.toast.style.background=u.color:y.toast.classList.add("iziToast-color-"+u.color)),u.backgroundColor&&(y.toast.style.background=u.backgroundColor,u.balloon&&(y.toast.style.borderColor=u.backgroundColor))}(),u.image&&(y.cover.classList.add("iziToast-cover"),y.cover.style.width=u.imageWidth+"px",function(t){try{return btoa(atob(t))==t}catch(t){return!1}}(u.image.replace(/ /g,""))?y.cover.style.backgroundImage="url(data:image/png;base64,"+u.image.replace(/ /g,"")+")":y.cover.style.backgroundImage="url("+u.image+")",u.rtl?y.toastBody.style.marginRight=u.imageWidth+10+"px":y.toastBody.style.marginLeft=u.imageWidth+10+"px",y.toast.appendChild(y.cover)),u.close?(y.buttonClose=document.createElement("button"),y.buttonClose.type="button",y.buttonClose.classList.add("iziToast-close"),y.buttonClose.addEventListener("click",(function(t){t.target,s.hide(u,y.toast,"button")})),y.toast.appendChild(y.buttonClose)):u.rtl?y.toast.style.paddingLeft="18px":y.toast.style.paddingRight="18px",u.progressBar&&(y.progressBar=document.createElement("div"),y.progressBarDiv=document.createElement("div"),y.progressBar.classList.add("iziToast-progressbar"),y.progressBarDiv.style.background=u.progressBarColor,y.progressBar.appendChild(y.progressBarDiv),y.toast.appendChild(y.progressBar)),u.timeout&&(u.pauseOnHover&&!u.resetOnHover&&(y.toast.addEventListener("mouseenter",(function(t){s.progress(u,y.toast).pause()})),y.toast.addEventListener("mouseleave",(function(t){s.progress(u,y.toast).resume()}))),u.resetOnHover&&(y.toast.addEventListener("mouseenter",(function(t){s.progress(u,y.toast).reset()})),y.toast.addEventListener("mouseleave",(function(t){s.progress(u,y.toast).start()})))),u.iconUrl?(y.icon.setAttribute("class","iziToast-icon"),y.icon.setAttribute("src",u.iconUrl)):u.icon&&(y.icon.setAttribute("class","iziToast-icon "+u.icon),u.iconText&&y.icon.appendChild(document.createTextNode(u.iconText)),u.iconColor&&(y.icon.style.color=u.iconColor)),(u.icon||u.iconUrl)&&(u.rtl?y.toastBody.style.paddingRight="33px":y.toastBody.style.paddingLeft="33px",y.toastBody.appendChild(y.icon)),u.title.length>0&&(y.strong=document.createElement("strong"),y.strong.classList.add("iziToast-title"),y.strong.appendChild(g(u.title)),y.toastTexts.appendChild(y.strong),u.titleColor&&(y.strong.style.color=u.titleColor),u.titleSize&&(isNaN(u.titleSize)?y.strong.style.fontSize=u.titleSize:y.strong.style.fontSize=u.titleSize+"px"),u.titleLineHeight&&(isNaN(u.titleSize)?y.strong.style.lineHeight=u.titleLineHeight:y.strong.style.lineHeight=u.titleLineHeight+"px")),u.message.length>0&&(y.p=document.createElement("p"),y.p.classList.add("iziToast-message"),y.p.appendChild(g(u.message)),y.toastTexts.appendChild(y.p),u.messageColor&&(y.p.style.color=u.messageColor),u.messageSize&&(isNaN(u.titleSize)?y.p.style.fontSize=u.messageSize:y.p.style.fontSize=u.messageSize+"px"),u.messageLineHeight&&(isNaN(u.titleSize)?y.p.style.lineHeight=u.messageLineHeight:y.p.style.lineHeight=u.messageLineHeight+"px")),u.title.length>0&&u.message.length>0&&(u.rtl?y.strong.style.marginLeft="10px":2===u.layout||u.rtl||(y.strong.style.marginRight="10px")),y.toastBody.appendChild(y.toastTexts),u.inputs.length>0&&(y.inputs.classList.add("iziToast-inputs"),p(u.inputs,(function(t,e){y.inputs.appendChild(g(t[0])),(v=y.inputs.childNodes)[e].classList.add("iziToast-inputs-child"),t[3]&&setTimeout((function(){v[e].focus()}),300),v[e].addEventListener(t[1],(function(e){return(0,t[2])(s,y.toast,this,e)}))})),y.toastBody.appendChild(y.inputs)),u.buttons.length>0&&(y.buttons.classList.add("iziToast-buttons"),p(u.buttons,(function(t,e){y.buttons.appendChild(g(t[0]));var o=y.buttons.childNodes;o[e].classList.add("iziToast-buttons-child"),t[2]&&setTimeout((function(){o[e].focus()}),300),o[e].addEventListener("click",(function(e){return e.preventDefault(),(0,t[1])(s,y.toast,this,e,v)}))}))),y.toastBody.appendChild(y.buttons),u.message.length>0&&(u.inputs.length>0||u.buttons.length>0)&&(y.p.style.marginBottom="0"),(u.inputs.length>0||u.buttons.length>0)&&(u.rtl?y.toastTexts.style.marginLeft="10px":y.toastTexts.style.marginRight="10px",u.inputs.length>0&&u.buttons.length>0&&(u.rtl?y.inputs.style.marginLeft="8px":y.inputs.style.marginRight="8px")),y.toastCapsule.style.visibility="hidden",setTimeout((function(){var t=y.toast.offsetHeight,e=y.toast.currentStyle||window.getComputedStyle(y.toast),o=e.marginTop;o=o.split("px"),o=parseInt(o[0]);var i=e.marginBottom;i=i.split("px"),i=parseInt(i[0]),y.toastCapsule.style.visibility="",y.toastCapsule.style.height=t+i+o+"px",setTimeout((function(){y.toastCapsule.style.height="auto",u.target&&(y.toastCapsule.style.overflow="visible")}),500),u.timeout&&s.progress(u,y.toast).start()}),100),function(){var t=u.position;if(u.target)y.wrapper=document.querySelector(u.target),y.wrapper.classList.add("iziToast-target"),u.targetFirst?y.wrapper.insertBefore(y.toastCapsule,y.wrapper.firstChild):y.wrapper.appendChild(y.toastCapsule);else{if(-1==r.indexOf(u.position))return void console.warn("[iziToast] Incorrect position.\nIt can be › "+r);t=i||window.innerWidth<=l?"bottomLeft"==u.position||"bottomRight"==u.position||"bottomCenter"==u.position?"iziToast-wrapper-bottomCenter":"topLeft"==u.position||"topRight"==u.position||"topCenter"==u.position?"iziToast-wrapper-topCenter":"iziToast-wrapper-center":"iziToast-wrapper-"+t,y.wrapper=document.querySelector(".iziToast-wrapper."+t),y.wrapper||(y.wrapper=document.createElement("div"),y.wrapper.classList.add("iziToast-wrapper"),y.wrapper.classList.add(t),document.body.appendChild(y.wrapper)),"topLeft"==u.position||"topCenter"==u.position||"topRight"==u.position?y.wrapper.insertBefore(y.toastCapsule,y.wrapper.firstChild):y.wrapper.appendChild(y.toastCapsule)}isNaN(u.zindex)?console.warn("[iziToast] Invalid zIndex."):y.wrapper.style.zIndex=u.zindex}(),u.overlay&&(null!==document.querySelector(".iziToast-overlay.fadeIn")?(y.overlay=document.querySelector(".iziToast-overlay"),y.overlay.setAttribute("data-iziToast-ref",y.overlay.getAttribute("data-iziToast-ref")+","+u.ref),isNaN(u.zindex)||null===u.zindex||(y.overlay.style.zIndex=u.zindex-1)):(y.overlay.classList.add("iziToast-overlay"),y.overlay.classList.add("fadeIn"),y.overlay.style.background=u.overlayColor,y.overlay.setAttribute("data-iziToast-ref",u.ref),isNaN(u.zindex)||null===u.zindex||(y.overlay.style.zIndex=u.zindex-1),document.querySelector("body").appendChild(y.overlay)),u.overlayClose?(y.overlay.removeEventListener("click",{}),y.overlay.addEventListener("click",(function(t){s.hide(u,y.toast,"overlay")}))):y.overlay.removeEventListener("click",{})),function(){if(u.animateInside){y.toast.classList.add("iziToast-animateInside");var t=[200,100,300];"bounceInLeft"!=u.transitionIn&&"bounceInRight"!=u.transitionIn||(t=[400,200,400]),u.title.length>0&&setTimeout((function(){y.strong.classList.add("slideIn")}),t[0]),u.message.length>0&&setTimeout((function(){y.p.classList.add("slideIn")}),t[1]),(u.icon||u.iconUrl)&&setTimeout((function(){y.icon.classList.add("revealIn")}),t[2]);var e=150;u.buttons.length>0&&y.buttons&&setTimeout((function(){p(y.buttons.childNodes,(function(t,o){setTimeout((function(){t.classList.add("revealIn")}),e),e+=150}))}),u.inputs.length>0?150:0),u.inputs.length>0&&y.inputs&&(e=150,p(y.inputs.childNodes,(function(t,o){setTimeout((function(){t.classList.add("revealIn")}),e),e+=150})))}}(),u.onOpening.apply(null,[u,y.toast]);try{var h=new CustomEvent("iziToast-opening",{detail:u,bubbles:!0,cancelable:!0});document.dispatchEvent(h)}catch(t){console.warn(t)}setTimeout((function(){y.toast.classList.remove("iziToast-opening"),y.toast.classList.add("iziToast-opened");try{var t=new CustomEvent("iziToast-opened",{detail:u,bubbles:!0,cancelable:!0});document.dispatchEvent(t)}catch(t){console.warn(t)}u.onOpened.apply(null,[u,y.toast])}),1e3),u.drag&&(a?(y.toast.addEventListener("touchstart",(function(t){f.startMoving(this,s,u,t)}),!1),y.toast.addEventListener("touchend",(function(t){f.stopMoving(this,t)}),!1)):(y.toast.addEventListener("mousedown",(function(t){t.preventDefault(),f.startMoving(this,s,u,t)}),!1),y.toast.addEventListener("mouseup",(function(t){t.preventDefault(),f.stopMoving(this,t)}),!1))),u.closeOnEscape&&document.addEventListener("keyup",(function(t){27==(t=t||window.event).keyCode&&s.hide(u,y.toast,"esc")})),u.closeOnClick&&y.toast.addEventListener("click",(function(t){s.hide(u,y.toast,"toast")})),s.toast=y.toast},e},"function"==typeof define&&define.amd?define([],e()):i=e(),document.querySelector(".form").addEventListener("submit",(e=>{e.preventDefault();const o=new FormData(e.target);let s=Number(o.get("delay"));const a=Number(o.get("step")),r=Number(o.get("amount"));for(let e=1;e<=r;e++)n(e,s).then((({position:e,delay:o})=>{t(i).success({title:"Success",message:`Fulfilled promise ${e} in ${o}ms`}),console.log(`Fulfilled promise ${e} in ${o}ms`)})).catch((({position:e,delay:o})=>{t(i).error({title:"Error",message:`Rejected promise ${e} in ${o}ms`}),console.log(`Rejected promise ${e} in ${o}ms`)})),s+=a;e.target.reset()}));
//# sourceMappingURL=03-promises.9339e0ac.js.map
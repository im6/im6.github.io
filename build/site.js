!function(t){var e={};function s(n){if(e[n])return e[n].exports;var o=e[n]={i:n,l:!1,exports:{}};return t[n].call(o.exports,o,o.exports,s),o.l=!0,o.exports}s.m=t,s.c=e,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)s.d(n,o,function(e){return t[e]}.bind(null,o));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/build",s(s.s=8)}([function(t,e,s){"use strict";s(1),s(2),s(3),s(4);var n=[["#7bd0ff","#F38181"],["#e8ec8b","#57cc9d"],["#EAFFD0","#88A6E5"],["#ffb077","#b0cadb"]];document.addEventListener("DOMContentLoaded",function(){!function(){for(var t=document.getElementsByClassName("type")[0],e=document.getElementById("sbttl2"),s=n.length,o=document.getElementsByTagName("select"),i=0;i<o.length;i+=1)o[i].onchange=function(t){window.location.href=t.target.value};window.Typed.new(".type",{stringsElement:document.getElementById("typed-strings"),typeSpeed:70,loop:!0,preStringTyped:function(o){document.getElementsByClassName("typed-cursor")[0].style.color=n[o%s][0],t.style.color=n[o%s][0],e.style.color=n[o%s][1]}})}()})},function(t,e,s){},function(t,e,s){},function(t,e,s){},function(t,e){function s(t){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}!function(t,e,n){"use strict";var o=function(t,e){var s=this;this.el=t,this.options={},Object.keys(i).forEach(function(t){s.options[t]=i[t]}),Object.keys(e).forEach(function(t){s.options[t]=e[t]}),this.isInput="input"===this.el.tagName.toLowerCase(),this.attr=this.options.attr,this.showCursor=!this.isInput&&this.options.showCursor,this.elContent=this.attr?this.el.getAttribute(this.attr):this.el.textContent,this.contentType=this.options.contentType,this.typeSpeed=this.options.typeSpeed,this.startDelay=this.options.startDelay,this.backSpeed=this.options.backSpeed,this.backDelay=this.options.backDelay,this.fadeOut=this.options.fadeOut,this.fadeOutClass=this.options.fadeOutClass,this.fadeOutDelay=this.options.fadeOutDelay,n&&this.options.stringsElement instanceof n?this.stringsElement=this.options.stringsElement[0]:this.stringsElement=this.options.stringsElement,this.strings=this.options.strings,this.strPos=0,this.arrayPos=0,this.stopNum=0,this.loop=this.options.loop,this.loopCount=this.options.loopCount,this.curLoop=0,this.stop=!1,this.cursorChar=this.options.cursorChar,this.shuffle=this.options.shuffle,this.sequence=[],this.build()};o.prototype={constructor:o,init:function(){var t=this;t.timeout=setTimeout(function(){for(var e=0;e<t.strings.length;++e)t.sequence[e]=e;t.shuffle&&(t.sequence=t.shuffleArray(t.sequence)),t.typewrite(t.strings[t.sequence[t.arrayPos]],t.strPos)},t.startDelay)},build:function(){var t=this;(!0===this.showCursor&&(this.cursor=e.createElement("span"),this.cursor.className="typed-cursor",this.cursor.innerHTML=this.cursorChar,this.el.parentNode&&this.el.parentNode.insertBefore(this.cursor,this.el.nextSibling)),this.stringsElement)&&(this.strings=[],this.stringsElement.style.display="none",Array.prototype.slice.apply(this.stringsElement.children).forEach(function(e){t.strings.push(e.innerHTML)}));this.init()},typewrite:function(t,e){if(!0!==this.stop){this.fadeOut&&this.el.classList.contains(this.fadeOutClass)&&(this.el.classList.remove(this.fadeOutClass),this.cursor.classList.remove(this.fadeOutClass));var s=Math.round(70*Math.random())+this.typeSpeed,n=this;n.timeout=setTimeout(function(){var s=0,o=t.substr(e);if("^"===o.charAt(0)){var i=1;/^\^\d+/.test(o)&&(i+=(o=/\d+/.exec(o)[0]).length,s=parseInt(o)),t=t.substring(0,e)+t.substring(e+i)}if("html"===n.contentType){var r=t.substr(e).charAt(0);if("<"===r||"&"===r){var a;for(a="<"===r?">":";";t.substr(e+1).charAt(0)!==a&&(t.substr(e).charAt(0),!(++e+1>t.length)););e++,a}}n.timeout=setTimeout(function(){if(e===t.length){if(n.options.onStringTyped(n.arrayPos),n.arrayPos===n.strings.length-1&&(n.options.callback(),n.curLoop++,!1===n.loop||n.curLoop===n.loopCount))return;n.timeout=setTimeout(function(){n.backspace(t,e)},n.backDelay)}else{0===e&&n.options.preStringTyped(n.arrayPos);var s=t.substr(0,e+1);n.attr?n.el.setAttribute(n.attr,s):n.isInput?n.el.value=s:"html"===n.contentType?n.el.innerHTML=s:n.el.textContent=s,e++,n.typewrite(t,e)}},s)},s)}},backspace:function(t,e){var s=this;if(!0!==this.stop){if(this.fadeOut)return void this.initFadeOut();var n=Math.round(70*Math.random())+this.backSpeed;s.timeout=setTimeout(function(){if("html"===s.contentType&&">"===t.substr(e).charAt(0)){for(;"<"!==t.substr(e-1).charAt(0)&&(t.substr(e).charAt(0),!(--e<0)););e--,"<"}var n=t.substr(0,e);s.replaceText(n),e>s.stopNum?(e--,s.backspace(t,e)):e<=s.stopNum&&(s.arrayPos++,s.arrayPos===s.strings.length?(s.arrayPos=0,s.shuffle&&(s.sequence=s.shuffleArray(s.sequence)),s.init()):s.typewrite(s.strings[s.sequence[s.arrayPos]],e))},n)}},initFadeOut:function(){return self=this,this.el.className+=" "+this.fadeOutClass,this.cursor.className+=" "+this.fadeOutClass,setTimeout(function(){self.arrayPos++,self.replaceText(""),self.typewrite(self.strings[self.sequence[self.arrayPos]],0)},self.fadeOutDelay)},replaceText:function(t){this.attr?this.el.setAttribute(this.attr,t):this.isInput?this.el.value=t:"html"===this.contentType?this.el.innerHTML=t:this.el.textContent=t},shuffleArray:function(t){var e,s,n=t.length;if(n)for(;--n;)e=t[s=Math.floor(Math.random()*(n+1))],t[s]=t[n],t[n]=e;return t},reset:function(){clearInterval(this.timeout),this.el.getAttribute("id"),this.el.textContent="",void 0!==this.cursor&&void 0!==this.cursor.parentNode&&this.cursor.parentNode.removeChild(this.cursor),this.strPos=0,this.arrayPos=0,this.curLoop=0,this.options.resetCallback()}},o.new=function(t,n){Array.prototype.slice.apply(e.querySelectorAll(t)).forEach(function(t){var e=t._typed,i="object"==s(n)&&n;e&&e.reset(),t._typed=e=new o(t,i),"string"==typeof n&&e[n]()})},n&&(n.fn.typed=function(t){return this.each(function(){var e=n(this),i=e.data("typed"),r="object"==s(t)&&t;i&&i.reset(),e.data("typed",i=new o(this,r)),"string"==typeof t&&i[t]()})}),t.Typed=o;var i={strings:[""],stringsElement:null,typeSpeed:0,startDelay:0,backSpeed:0,shuffle:!1,backDelay:500,fadeOut:!1,fadeOutClass:"typed-fade-out",fadeOutDelay:500,loop:!1,loopCount:!1,showCursor:!0,cursorChar:"|",attr:null,contentType:"html",callback:function(){},preStringTyped:function(){},onStringTyped:function(){},resetCallback:function(){}}}(window,document,window.jQuery)},,,,function(t,e,s){"use strict";s.r(e);s(0),s(9)},function(t,e,s){}]);
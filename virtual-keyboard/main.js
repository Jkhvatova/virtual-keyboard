(()=>{"use strict";const e={Backquote:{en:"~",ru:"`",enshift:"~",rushift:"~",encaps:"~",rucaps:"~"},Digit1:{en:"1",ru:"1",enshift:"!",rushift:"!",encaps:"1",rucaps:"1"},Digit2:{en:"2",ru:"2",enshift:"@",rushift:"@",encaps:"2",rucaps:"2"},Digit3:{en:"3",ru:"3",enshift:"#",rushift:"#",encaps:"3",rucaps:"3"},Digit4:{en:"4",ru:"4",enshift:"$",rushift:"$",encaps:"4",rucaps:"4"},Digit5:{en:"5",ru:"5",enshift:"%",rushift:"%",encaps:"5",rucaps:"5"},Digit6:{en:"6",ru:"6",enshift:"^",rushift:"^",encaps:"6",rucaps:"6"},Digit7:{en:"7",ru:"7",enshift:"&",rushift:"&",encaps:"7",rucaps:"7"},Digit8:{en:"8",ru:"8",enshift:"*",rushift:"*",encaps:"8",rucaps:"8"},Digit9:{en:"9",ru:"9",enshift:"(",rushift:"(",encaps:"9",rucaps:"9"},Digit0:{en:"0",ru:"0",enshift:")",rushift:")",encaps:"0",rucaps:"0"},NumPadSubstract:{en:"-",ru:"-",enshift:"_",rushift:"_",encaps:"-",rucaps:"-"},Equal:{en:"=",ru:"_",enshift:"+",rushift:"+",encaps:"=",rucaps:"="},Backspace:{en:"backspace",ru:"backspace",enshift:"backspace",encaps:"backspace",rushift:"backspace",rucaps:"backspace"},Tab:{en:"tab",ru:"tab",enshift:"tab",rushift:"tab",encaps:"tab",rucaps:"tab"},KeyQ:{en:"q",ru:"й",enshift:"Q",rushift:"Й",encaps:"Q",rucaps:"Й"},KeyW:{en:"w",ru:"ц",enshift:"W",rushift:"Ц",encaps:"W",rucaps:"Ц"},KeyE:{en:"e",ru:"у",enshift:"E",rushift:"У",encaps:"E",rucaps:"У"},KeyR:{en:"r",ru:"к",enshift:"R",rucaps:"К",encaps:"R",rushift:"К"},KeyT:{en:"t",ru:"е",enshift:"T",rushift:"Е",encaps:"T",rucaps:"Е"},KeyY:{en:"y",ru:"н",enshift:"Y",rushift:"Н",encaps:"Y",rucaps:"Н"},KeyU:{en:"u",ru:"г",enshift:"U",rushift:"Г",encaps:"U",rucaps:"Г"},KeyI:{en:"i",ru:"ш",enshift:"I",rushift:"Ш",encaps:"I",rucaps:"Ш"},KeyO:{en:"o",ru:"щ",enshift:"O",rushift:"Щ",encaps:"O",rucaps:"Щ"},KeyP:{en:"p",ru:"з",enshift:"P",rushift:"З",encaps:"P",rucaps:"З"},BracketLeft:{en:"[",ru:"х",enshift:"{",rushift:"Х",encaps:"[",rucaps:"Х"},BracketRight:{en:"]",ru:"ъ",enshift:"}",rushift:"S",encaps:"}",rucaps:"Ъ"},Del:{en:"del",ru:"del",enshift:"del",rushift:"del",encaps:"del",rucaps:"del"},CapsLock:{en:"capslock",ru:"capslock",enshift:"capslock",rushift:"capslock",encaps:"capslock",rucaps:"capslock"},KeyA:{en:"a",ru:"ф",enshift:"A",rushift:"Ф",encaps:"A",rucaps:"Ф"},KeyS:{en:"s",ru:"ы",enshift:"S",rushift:"Ы",encaps:"S",rucaps:"Ы"},KeyD:{en:"d",ru:"в",enshift:"D",rushift:"В",encaps:"D",rucaps:"В"},KeyF:{en:"f",ru:"а",enshift:"F",rushift:"А",encaps:"F",rucaps:"А"},KeyG:{en:"g",ru:"п",enshift:"G",rushift:"П",encaps:"G",rucaps:"П"},KeyH:{en:"h",ru:"р",enshift:"H",rushift:"Р",encaps:"H",rucaps:"Р"},KeyJ:{en:"j",ru:"о",enshift:"J",rushift:"О",encaps:"J",rucaps:"О"},KeyK:{en:"k",ru:"л",enshift:"K",rushift:"Л",encaps:"K",rucaps:"Л"},KeyL:{en:"l",ru:"д",enshift:"L",rushift:"Д",encaps:"L",rucaps:"Д"},Semicolon:{en:";",ru:"ж",enshift:":",rushift:"Ж",encaps:";",rucaps:"Ж"},Quote:{en:"'",ru:"э",enshift:'"',rushift:"Э",encaps:"'",rucaps:"Э"},Enter:{en:"enter",ru:"enter",enshift:"enter",rushift:"enter",encaps:"enter",rucaps:"enter"},ShiftLeft:{en:"shift",ru:"shift",enshift:"shift",rushift:"shift",encaps:"shift",rucaps:"shift"},KeyZ:{en:"z",ru:"я",enshift:"Z",rushift:"Я",encaps:"Z",rucaps:"Я"},KeyX:{en:"x",ru:"ч",enshift:"X",rushift:"Ч",encaps:"X",rucaps:"Ч"},KeyC:{en:"c",ru:"с",enshift:"C",rushift:"С",encaps:"C",rucaps:"С"},KeyV:{en:"v",ru:"м",enshift:"V",rushift:"М",encaps:"V",rucaps:"М"},KeyB:{en:"b",ru:"и",enshift:"B",rushift:"И",encaps:"B",rucaps:"И"},KeyN:{en:"n",ru:"т",enshift:"N",rushift:"Т",encaps:"N",rucaps:"Т"},KeyM:{en:"m",ru:"ь",enshift:"M",rushift:"Ь",encaps:"M",rucaps:"Ь"},NumpadDecimal:{en:",",ru:"б",enshift:"<",rushift:"Б",encaps:",",rucaps:"Б"},Period:{en:".",ru:"ю",enshift:">",rushift:"Ю",encaps:".",rucaps:"Ю"},Slash:{en:"/",ru:"?",enshift:"?",rushift:"?",encaps:"/",rucaps:"?"},Backslash:{en:"\\",ru:"ё",enshift:"|",rushift:"Ё",encaps:"\\",rucaps:"Ё"},ArrowUp:{en:"&#x25B4;",ru:"&#x25B4;",enshift:"&#x25B4;",rushift:"&#x25B4;",encaps:"&#x25B4;",rucaps:"&#x25B4;"},ShiftRight:{en:"shift",ru:"shift",enshift:"shift",rushift:"shift",encaps:"shift",rucaps:"shift"},ControlLeft:{en:"ctrl",ru:"ctrl",enshift:"ctrl",rushift:"ctrl",encaps:"ctrl",rucaps:"ctrl"},AltLeft:{en:"alt",ru:"alt",enshift:"alt",rushift:"alt",encaps:"alt",rucaps:"alt"},MetaLeft:{en:"command",ru:"command",enshift:"command",rushift:"command",encaps:"command",rucaps:"command"},Space:{en:" ",ru:" ",enshift:" ",rushift:" ",encaps:" ",rucaps:" "},MetaRight:{en:"command",ru:"command",enshift:"command",rushift:"command",encaps:"command",rucaps:"command"},AltRight:{en:"alt",ru:"alt",enshift:"alt",rushift:"alt",encaps:"alt",rucaps:"alt"},ArrowLeft:{en:"&#x25C2;",ru:"&#x25C2;",enshift:"&#x25C2;",rushift:"&#x25C2;",encaps:"&#x25C2;",rucaps:"&#x25C2;"},ArrowDown:{en:"&#x25BE;",ru:"&#x25BE;",enshift:"&#x25BE;",rushift:"&#x25BE;",encaps:"&#x25BE;",rucaps:"&#x25BE;"},ArrowRight:{en:"&#x25B8;",ru:"&#x25B8;",enshift:"&#x25B8;",rushift:"&#x25B8;",encaps:"&#x25B8;",rucaps:"&#x25B8;"}};function t(e){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},t(e)}function s(e,s){for(var r=0;r<s.length;r++){var a=s[r];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,(void 0,n=function(e,s){if("object"!==t(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var a=r.call(e,"string");if("object"!==t(a))return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(a.key),"symbol"===t(n)?n:String(n)),a)}var n}var r=function(){function e(t,s){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.keycode=t,this.value=s}var t,r;return t=e,(r=[{key:"createKey",value:function(e,t){switch(this.key=document.createElement("div"),this.key.className="key",this.key.dataset.keycode=e,this.key.innerHTML=t,e){case"Backspace":this.key.classList.add("backspace");break;case"Tab":this.key.classList.add("tab");break;case"Del":this.key.classList.add("del");break;case"CapsLock":this.key.classList.add("caps");break;case"Enter":this.key.classList.add("enter");break;case"ShiftRight":case"ShiftLeft":this.key.classList.add("shift");break;case"ControlLeft":case"ControlRight":this.key.classList.add("ctrl");break;case"AltRight":case"AltLeft":this.key.classList.add("alt");break;case"MetaRight":case"MetaLeft":this.key.classList.add("command");break;case"Space":this.key.classList.add("space")}document.querySelector(".keyboard").append(this.key)}}])&&s(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),e}();function a(e,t){(null==t||t>e.length)&&(t=e.length);for(var s=0,r=new Array(t);s<t;s++)r[s]=e[s];return r}document.addEventListener("DOMContentLoaded",(function(){var t=document.querySelector("body"),s="en";!function(){var e=document.createElement("div");e.className="container",t.appendChild(e);var s=document.createElement("div");s.className="title-and-explanation",s.innerHTML='\n      <h1 class="title">Virtual Keyboard</h1>\n      <p class="explanation">Created on MacOS.<br/>\n      To change the language press left ctrl + alt</p>\n    ';var r=document.createElement("div");r.className="monitor-wrapper";var a=document.createElement("div");a.className="monitor";var n=document.createElement("textarea");n.className="keyboard-input",r.appendChild(a),a.appendChild(n);var c=document.createElement("div");c.className="keyboard-wrapper";var i=document.createElement("div");i.className="keyboard",c.appendChild(i),e.append(s,r,c)}();var n=document.querySelector(".keyboard");function c(e,t){n.innerHTML="",Object.entries(e).forEach((function(e){var s,n,c=(n=2,function(e){if(Array.isArray(e))return e}(s=e)||function(e,t){var s=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=s){var r,a,n,c,i=[],u=!0,f=!1;try{if(n=(s=s.call(e)).next,0===t){if(Object(s)!==s)return;u=!1}else for(;!(u=(r=n.call(s)).done)&&(i.push(r.value),i.length!==t);u=!0);}catch(e){f=!0,a=e}finally{try{if(!u&&null!=s.return&&(c=s.return(),Object(c)!==c))return}finally{if(f)throw a}}return i}}(s,n)||function(e,t){if(e){if("string"==typeof e)return a(e,t);var s=Object.prototype.toString.call(e).slice(8,-1);return"Object"===s&&e.constructor&&(s=e.constructor.name),"Map"===s||"Set"===s?Array.from(e):"Arguments"===s||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(s)?a(e,t):void 0}}(s,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),i=c[0],u=c[1];(new r).createKey(i,u[t])}))}c(e,s),n.classList.add(s);var i=function(){n.classList.contains("en")?(c(e,"ru"),n.classList.remove("en"),n.classList.add("ru"),s="ru",localStorage.setItem("siteLang",s)):n.classList.contains("ru")&&(c(e,"en"),n.classList.remove("ru"),n.classList.add("en"),s="en",localStorage.setItem("siteLang",s))},u=document.querySelector(".keyboard-input"),f=document.querySelectorAll(".key");n.addEventListener("mousedown",(function(t){u.focus(),t.preventDefault(),t.target.classList.add("active"),"ShiftLeft"!==t.target.dataset.keycode&&"ShiftRight"!==t.target.dataset.keycode||c(e,"rushift"),"AltLeft"===t.target.dataset.keycode&&i(),"AltRight"===t.target.dataset.keycode&&i(),u.insertAdjacentText("beforeend",t.target.innerHTML)})),n.addEventListener("mouseup",(function(e){e.target.classList.remove("active"),console.log(e)})),window.addEventListener("keydown",(function(e){u.focus(),e.preventDefault(),f.forEach((function(t){e.code===t.dataset.keycode&&(t.classList.add("active"),u.insertAdjacentText("beforeend",t.innerHTML))}))})),window.addEventListener("keyup",(function(e){f.forEach((function(t){e.code===t.dataset.keycode&&t.classList.remove("active"),e.preventDefault()}))}))}))})();
//# sourceMappingURL=main.js.map
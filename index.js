(()=>{"use strict";var e={866:(e,t,n)=>{n.d(t,{Eg:()=>i,I1:()=>u,Rx:()=>d,gm:()=>s,gw:()=>p,oS:()=>a,to:()=>l,wz:()=>c});var o={baseUrl:"https://nomoreparties.co/wff-cohort-13",headers:{authorization:"fd771050-e342-49ab-8ca0-e1af1272aab8","Content-Type":"application/json"}};function r(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))}function c(){return fetch("".concat(o.baseUrl,"/users/me"),{method:"GET",headers:o.headers}).then(r)}function a(e,t){return fetch("".concat(o.baseUrl,"/users/me"),{method:"PATCH",headers:o.headers,body:JSON.stringify({name:e,about:t})}).then(r)}function u(e){return fetch("".concat(o.baseUrl,"/users/me/avatar"),{method:"PATCH",headers:o.headers,body:JSON.stringify({avatar:e})}).then(r)}function i(){return fetch("".concat(o.baseUrl,"/cards"),{method:"GET",headers:o.headers}).then(r)}function s(e,t){return fetch("".concat(o.baseUrl,"/cards"),{method:"POST",headers:o.headers,body:JSON.stringify({name:e,link:t})}).then(r)}function l(e){return fetch("".concat(o.baseUrl,"/cards/").concat(e),{method:"DELETE",headers:o.headers}).then(r)}function d(e){return fetch("".concat(o.baseUrl,"/cards/likes/").concat(e),{method:"PUT",headers:o.headers}).then(r)}function p(e){return fetch("".concat(o.baseUrl,"/cards/likes/").concat(e),{method:"DELETE",headers:o.headers}).then(r)}},694:(e,t,n)=>{n.d(t,{Lq:()=>r,io:()=>a,uu:()=>c});var o=n(866);function r(e){(0,o.to)(e.dataset.id).then((function(t){console.log(e.dataset.id),e.remove()})).catch((function(e){console.log("Ошибка. Запрос не выполнен: ",e)}))}function c(e,t,n,o,r,c,a,s,l){var d=e._id,p=document.querySelector("#card-template").content.querySelector(".card").cloneNode(!0);u(p,t,o),i(p,o.length);var f=p.querySelector(".card__image");return f.src=c,f.alt=r,p.querySelector(".card__title").textContent=r,n!==d?p.querySelector(".card__delete-button").remove():a&&p.querySelector(".card__delete-button").addEventListener("click",(function(){a(p)})),s&&p.querySelector(".card__like-button").addEventListener("click",(function(){s(p,e._id)})),l&&f.addEventListener("click",l),p}function a(e,t){var n=e.querySelector(".card__like-button");if(n){var r=n.closest(".card"),c=r.dataset.id;r.dataset.like.split(";").includes(t)?(0,o.gw)(c).then((function(t){n.classList.remove("card__like-button_is-active"),u(e,t._id,t.likes.map((function(e){return e._id}))),i(e,t.likes.length)})).catch((function(e){console.log("Ошибка. Запрос не выполнен: ",e)})):(0,o.Rx)(c).then((function(t){u(e,t._id,t.likes.map((function(e){return e._id}))),n.classList.add("card__like-button_is-active"),i(e,t.likes.length)})).catch((function(e){console.log("Ошибка. Запрос не выполнен: ",e)}))}}function u(e,t,n){e.dataset.id=t,e.dataset.like=n.join(";")}function i(e,t){e.querySelector(".number-likes").textContent=t}},947:(e,t,n)=>{function o(e){e.classList.add("popup_is-animated"),setTimeout((function(){return e.classList.add("popup_is-opened")}),0),document.addEventListener("keydown",c)}function r(e){e.classList.remove("popup_is-opened"),document.removeEventListener("keydown",c)}function c(e){"Escape"===e.key&&r(document.querySelector(".popup.popup_is-opened"))}function a(e,t){document.querySelectorAll(".popup__close").forEach((function(e){return e.addEventListener("click",t)})),document.querySelectorAll(".popup").forEach((function(t){return t.addEventListener("click",e)}))}function u(e){var t=e.currentTarget.closest(".popup_is-opened");t&&r(t)}function i(e){e.target.classList.contains("popup")&&r(e.target)}n.d(t,{Ah:()=>a,PB:()=>o,Us:()=>i,cN:()=>u,fs:()=>r})},547:(e,t,n)=>{function o(e){document.querySelectorAll(e.formSelector).forEach((function(t){t.querySelectorAll(e.inputSelector).forEach((function(t){t.addEventListener("input",(function(t){return function(e,t){if(e.validity.valid){var n=u(e);n.valid?(a(e,t.inputErrorClass,t),s(e.closest("form"),t)):c(e,n.message,t)}else c(e,e.validationMessage,t)}(t.currentTarget,e)}))}))}))}function r(e,t){e.classList.add(t),e.disabled=!0}function c(e,t,n){e.classList.add(n.inputErrorClass),r(e.closest("form").querySelector(n.submitButtonSelector),n.inactiveButtonClass);var o=e.nextSibling;"SPAN"!==o.tagName?((o=document.createElement("span")).classList.add(n.errorClass),o.textContent=t,e.parentNode.insertBefore(o,e.nextSibling)):o.textContent=t}function a(e,t,n){e.classList.remove(n.inputErrorClass);var o=e.nextSibling;"SPAN"===o.tagName&&o.remove()}function u(e){var t=new RegExp(e.dataset.validationRegex),n=!1;return e.value.match(t)&&(n=!0),{valid:n,message:e.dataset.errorText}}function i(e,t){e.querySelectorAll(t.inputSelector).forEach((function(e){a(e,t.errorClass,t)})),s(e,t)}function s(e,t){var n,o,c=e.querySelectorAll(t.inputSelector),a=!1;c.forEach((function(e){e.validity.valid&&u(e).valid||(a=!0)})),a?r(e.querySelector(t.submitButtonSelector),t.inactiveButtonClass):(n=e.querySelector(t.submitButtonSelector),o=t.inactiveButtonClass,n.classList.remove(o),n.disabled=!1)}n.d(t,{F:()=>o,R:()=>i})}},t={};function n(o){var r=t[o];if(void 0!==r)return r.exports;var c=t[o]={exports:{}};return e[o](c,c.exports,n),c.exports}n.d=(e,t)=>{for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e,t,o,r=n(947),c=n(694),a=n(547),u=n(866),i=document.querySelector(".places__list"),s=document.forms["new-place"],l=document.forms["edit-profile"],d=document.forms["update-avatar"],p=l.elements.name,f=l.elements.description,m=document.querySelector(".profile__title"),v=document.querySelector(".profile__description"),_=null,h={formSelector:".popup__form",inputSelector:".popup__input",submitButtonSelector:".popup__button",inactiveButtonClass:"popup__button_disabled",inputErrorClass:"popup__input_type_error",errorClass:"popup__error_visible"};function y(e){var t=document.querySelector(".popup.popup_type_image");!function(e,t){var n=document.querySelector(".popup.popup_type_image");n.querySelector(".popup__image").src=e,n.querySelector(".popup__image").alt=t,n.querySelector(".popup__caption").textContent=t}(e.currentTarget.getAttribute("src"),e.currentTarget.getAttribute("alt")),(0,r.PB)(t)}(0,u.wz)().then((function(e){m.textContent=e.name,v.textContent=e.about,_=e,document.querySelector(".profile__image").style.backgroundImage='url("'.concat(e.avatar,'")')})).catch((function(e){console.log("Ошибка. Запрос не выполнен: ",e)})),(0,u.Eg)().then((function(e){e.forEach((function(e){var t=(0,c.uu)(_,e._id,e.owner._id,e.likes.map((function(e){return e._id})),e.name,e.link,c.Lq,c.io,y);i.append(t)}))})).catch((function(e){console.log("Ошибка. Запрос не выполнен: ",e)})),l.addEventListener("submit",(function(e){e.preventDefault();var t=e.target.querySelector(".popup__button");t.textContent="Сохранить...",(0,u.oS)(p.value,f.value).then((function(t){void 0!==t.errors&&alert(t.message),m.textContent=p.value,v.textContent=f.value;var n=e.target.closest(".popup");(0,r.fs)(n)})).catch((function(e){console.log("Ошибка. Запрос не выполнен: ",e)})).finally((function(){return t.textContent="Сохранить"}))})),s.addEventListener("submit",(function(e){return function(e,t,n){e.preventDefault();var o=e.target.querySelector(".popup__button");o.textContent="Сохранить...";var a=n.elements["place-name"].value,i=n.elements.link.value;(0,u.gm)(a,i).then((function(n){void 0!==n.errors&&alert(n.message);var o=(0,c.uu)(_,n._id,n.owner._id,n.likes.map((function(e){return e._id})),a,i,c.Lq,c.io,y);t.prepend(o);var u=e.target.closest(".popup");(0,r.fs)(u)})).catch((function(e){console.log("Ошибка. Запрос не выполнен: ",e)})).finally((function(){return o.textContent="Сохранить"}))}(e,i,s)})),d.addEventListener("submit",(function(e){return function(e,t){e.preventDefault();var n=e.target.querySelector(".popup__button");n.textContent="Сохранить...";var o=t.elements.link.value;(0,u.I1)(o).then((function(e){e.errors?alert(e.message):(document.querySelector(".profile__image").style.backgroundImage='url("'.concat(o,'")'),(0,r.fs)(t.closest(".popup")))})).catch((function(e){console.log("Ошибка. Запрос не выполнен: ",e)})).finally((function(){return n.textContent="Сохранить"}))}(e,d)})),e=document.querySelector(".profile__edit-button"),t=document.querySelector(".profile__add-button"),o=document.querySelector(".profile__edit-avatar-button"),e.addEventListener("click",(function(){var e=document.querySelector(".popup.popup_type_edit");(0,r.PB)(e),p.value=m.textContent,f.value=v.textContent,(0,a.R)(l,h)})),o.addEventListener("click",(function(){var e=document.querySelector(".popup.popup_type_avatar-update");d.elements.link.value="",(0,r.PB)(e),(0,a.R)(d,h)})),(0,a.F)(h),t.addEventListener("click",(function(){s.reset();var e=document.querySelector(".popup.popup_type_new-card");(0,r.PB)(e)})),(0,r.Ah)(r.Us,r.cN)})()})();
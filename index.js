(()=>{"use strict";var e={866:(e,t,n)=>{function o(){return fetch("https://nomoreparties.co/v1/wff-cohort-13/users/me",{method:"GET",headers:{authorization:"fd771050-e342-49ab-8ca0-e1af1272aab8"}}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))}))}function r(e,t){return fetch("https://nomoreparties.co/v1/wff-cohort-13/users/me",{method:"PATCH",headers:{authorization:"fd771050-e342-49ab-8ca0-e1af1272aab8","Content-Type":"application/json"},body:JSON.stringify({name:e,about:t})}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))}))}function a(e){return fetch("https://nomoreparties.co/v1/wff-cohort-13/users/me/avatar",{method:"PATCH",headers:{authorization:"fd771050-e342-49ab-8ca0-e1af1272aab8","Content-Type":"application/json"},body:JSON.stringify({avatar:e})}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))}))}function c(){return fetch("https://nomoreparties.co/v1/wff-cohort-13/cards",{method:"GET",headers:{authorization:"fd771050-e342-49ab-8ca0-e1af1272aab8"}}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))}))}function u(e,t){return fetch("https://nomoreparties.co/v1/wff-cohort-13/cards",{method:"POST",headers:{authorization:"fd771050-e342-49ab-8ca0-e1af1272aab8","Content-Type":"application/json"},body:JSON.stringify({name:e,link:t})}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))}))}function i(e){return fetch("https://nomoreparties.co/v1/wff-cohort-13/cards/".concat(e),{method:"DELETE",headers:{authorization:"fd771050-e342-49ab-8ca0-e1af1272aab8"}}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))}))}function s(e){return fetch("https://nomoreparties.co/v1/wff-cohort-13/cards/likes/".concat(e),{method:"PUT",headers:{authorization:"fd771050-e342-49ab-8ca0-e1af1272aab8"}}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))}))}function l(e){return fetch("https://nomoreparties.co/v1/wff-cohort-13/cards/likes/".concat(e),{method:"DELETE",headers:{authorization:"fd771050-e342-49ab-8ca0-e1af1272aab8"}}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))}))}n.d(t,{Eg:()=>c,I1:()=>a,Rx:()=>s,gm:()=>u,gw:()=>l,oS:()=>r,to:()=>i,wz:()=>o})},694:(e,t,n)=>{n.d(t,{Lq:()=>r,io:()=>c,uu:()=>a});var o=n(866);function r(e){(0,o.to)(e.dataset.id).then((function(t){console.log(e.dataset.id),e.remove()})).catch((function(e){console.log("Ошибка. Запрос не выполнен: ",e)}))}function a(e,t,n,o,r,a,c,s,l){var p=e._id,d=document.querySelector("#card-template").content.querySelector(".card").cloneNode(!0);u(d,t,o),i(d,o.length);var f=d.querySelector(".card__image");return f.src=a,f.alt=r,d.querySelector(".card__title").textContent=r,n!==p?d.querySelector(".card__delete-button").remove():c&&d.querySelector(".card__delete-button").addEventListener("click",(function(){c(d)})),s&&d.querySelector(".card__like-button").addEventListener("click",(function(){s(d,e._id)})),l&&f.addEventListener("click",l),d}function c(e,t){var n=e.querySelector(".card__like-button");if(n){var r=n.closest(".card"),a=r.dataset.id;r.dataset.like.split(";").includes(t)?(0,o.gw)(a).then((function(t){n.classList.remove("card__like-button_is-active"),u(e,t._id,t.likes.map((function(e){return e._id}))),i(e,t.likes.length)})).catch((function(e){console.log("Ошибка. Запрос не выполнен: ",e)})):(0,o.Rx)(a).then((function(t){u(e,t._id,t.likes.map((function(e){return e._id}))),n.classList.add("card__like-button_is-active"),i(e,t.likes.length)})).catch((function(e){console.log("Ошибка. Запрос не выполнен: ",e)}))}}function u(e,t,n){e.dataset.id=t,e.dataset.like=n.join(";")}function i(e,t){e.querySelector(".number-likes").textContent=t}},947:(e,t,n)=>{function o(e){e.classList.add("popup_is-animated"),setTimeout((function(){return e.classList.add("popup_is-opened")}),0),document.addEventListener("keydown",a)}function r(e){e.classList.remove("popup_is-opened"),document.removeEventListener("keydown",a)}function a(e){"Escape"===e.key&&r(document.querySelector(".popup.popup_is-opened"))}function c(e,t){document.querySelectorAll(".popup__close").forEach((function(e){return e.addEventListener("click",t)})),document.querySelectorAll(".popup").forEach((function(t){return t.addEventListener("click",e)}))}n.d(t,{Ah:()=>c,PB:()=>o,fs:()=>r})},547:(e,t,n)=>{function o(e){document.querySelectorAll(e.formSelector).forEach((function(t){t.querySelectorAll(e.inputSelector).forEach((function(t){t.addEventListener("input",(function(t){return function(e,t){if(e.validity.valid){var n=u(e);n.valid?(c(e,t.inputErrorClass,t),s(e.closest("form"),t)):a(e,n.message,t)}else a(e,e.validationMessage,t)}(t.currentTarget,e)}))}))}))}function r(e,t){e.classList.add(t),e.disabled=!0}function a(e,t,n){e.classList.add(n.inputErrorClass),r(e.closest("form").querySelector(n.submitButtonSelector),n.inactiveButtonClass);var o=e.nextSibling;"SPAN"!==o.tagName?((o=document.createElement("span")).classList.add(n.errorClass),o.textContent=t,e.parentNode.insertBefore(o,e.nextSibling)):o.textContent=t}function c(e,t,n){e.classList.remove(n.inputErrorClass);var o=e.nextSibling;"SPAN"===o.tagName&&o.remove()}function u(e){var t=new RegExp(e.dataset.validationRegex),n=!1;return e.value.match(t)&&(n=!0),{valid:n,message:e.dataset.errorText}}function i(e,t){e.querySelectorAll(t.inputSelector).forEach((function(e){c(e,t.errorClass,t)})),s(e,t)}function s(e,t){var n,o,a=e.querySelectorAll(t.inputSelector),c=!1;a.forEach((function(e){e.validity.valid&&u(e).valid||(c=!0)})),c?r(e.querySelector(t.submitButtonSelector),t.inactiveButtonClass):(n=e.querySelector(t.submitButtonSelector),o=t.inactiveButtonClass,n.classList.remove(o),n.disabled=!1)}n.d(t,{F:()=>o,R:()=>i})}},t={};function n(o){var r=t[o];if(void 0!==r)return r.exports;var a=t[o]={exports:{}};return e[o](a,a.exports,n),a.exports}n.d=(e,t)=>{for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e,t,o,r=n(947),a=n(694),c=n(547),u=n(866),i=document.querySelector(".places__list"),s=document.forms["new-place"],l=document.forms["edit-profile"],p=document.forms["update-avatar"],d=l.elements.name,f=l.elements.description,m=document.querySelector(".profile__title"),v=document.querySelector(".profile__description"),_=null,h={formSelector:".popup__form",inputSelector:".popup__input",submitButtonSelector:".popup__button",inactiveButtonClass:"popup__button_disabled",inputErrorClass:"popup__input_type_error",errorClass:"popup__error_visible"};function y(e){var t=document.querySelector(".popup.popup_type_image");!function(e,t){var n=document.querySelector(".popup.popup_type_image");n.querySelector(".popup__image").src=e,n.querySelector(".popup__image").alt=t,n.querySelector(".popup__caption").textContent=t}(e.currentTarget.getAttribute("src"),e.currentTarget.getAttribute("alt")),(0,r.PB)(t)}(0,u.wz)().then((function(e){m.textContent=e.name,v.textContent=e.about,_=e,document.querySelector(".profile__image").style.backgroundImage='url("'.concat(e.avatar,'")')})).catch((function(e){console.log("Ошибка. Запрос не выполнен: ",e)})),(0,u.Eg)().then((function(e){e.forEach((function(e){var t=(0,a.uu)(_,e._id,e.owner._id,e.likes.map((function(e){return e._id})),e.name,e.link,a.Lq,a.io,y);i.append(t)}))})).catch((function(e){console.log("Ошибка. Запрос не выполнен: ",e)})),l.addEventListener("submit",(function(e){e.preventDefault();var t=e.target.querySelector(".popup__button");t.textContent="Сохранить...",(0,u.oS)(d.value,f.value).then((function(t){void 0!==t.errors&&alert(t.message),m.textContent=d.value,v.textContent=f.value;var n=e.target.closest(".popup");(0,r.fs)(n)})).catch((function(e){console.log("Ошибка. Запрос не выполнен: ",e)})).finally((function(){return t.textContent="Сохранить"}))})),s.addEventListener("submit",(function(e){return function(e,t,n){e.preventDefault();var o=e.target.querySelector(".popup__button");o.textContent="Сохранить...";var c=n.elements["place-name"].value,i=n.elements.link.value;(0,u.gm)(c,i).then((function(n){void 0!==n.errors&&alert(n.message);var o=(0,a.uu)(_,n._id,n.owner._id,n.likes.map((function(e){return e._id})),c,i,a.Lq,a.io,y);t.prepend(o);var u=e.target.closest(".popup");(0,r.fs)(u)})).catch((function(e){console.log("Ошибка. Запрос не выполнен: ",e)})).finally((function(){return o.textContent="Сохранить"}))}(e,i,s)})),p.addEventListener("submit",(function(e){return function(e,t){e.preventDefault();var n=e.target.querySelector(".popup__button");n.textContent="Сохранить...";var o=t.elements.link.value;(0,u.I1)(o).then((function(e){e.errors?alert(e.message):(document.querySelector(".profile__image").style.backgroundImage='url("'.concat(o,'")'),(0,r.fs)(t.closest(".popup")))})).catch((function(e){console.log("Ошибка. Запрос не выполнен: ",e)})).finally((function(){return n.textContent="Сохранить"}))}(e,p)})),e=document.querySelector(".profile__edit-button"),t=document.querySelector(".profile__add-button"),o=document.querySelector(".profile__edit-avatar-button"),e.addEventListener("click",(function(){var e=document.querySelector(".popup.popup_type_edit");(0,r.PB)(e),d.value=m.textContent,f.value=v.textContent,(0,c.R)(l,h)})),o.addEventListener("click",(function(){var e=document.querySelector(".popup.popup_type_avatar-update");p.elements.link.value="",(0,r.PB)(e),(0,c.R)(p,h)})),(0,c.F)(h),t.addEventListener("click",(function(){s.reset();var e=document.querySelector(".popup.popup_type_new-card");(0,r.PB)(e)})),(0,r.Ah)((function(e){e.target.classList.contains("popup")&&(0,r.fs)(e.target)}),(function(e){var t=e.currentTarget.closest(".popup_is-opened");t&&(0,r.fs)(t)}))})()})();
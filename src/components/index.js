import '../styles/index.css'
import {
    addEventListenersForClose,
    closePopup,
    openPopup
} from "./modal";
import {generateCardNode, likeCard, removeCard} from "./card";
import {initialCards} from "./cards";
import {enableValidation} from "./validation";

const placesList = document.querySelector('.places__list');
const formNewPlace = document.forms['new-place'];
const formEditProfile = document.forms['edit-profile'];
const inputNameUser = formEditProfile.elements.name;
const inputDescriptionUser = formEditProfile.elements.description;
const inputCardName = document.querySelector('.popup__input_type_card-name');
const inputCardUrl = document.querySelector('.popup__input_type_url');
const profileTitle = document.querySelector('.profile__title');
const profileDescription = document.querySelector('.profile__description');
initialCards.forEach(function (cardData) {
    const node = generateCardNode(cardData.link, cardData.name, removeCard, likeCard, clickImg);
    placesList.append(node);
});

formEditProfile.addEventListener('submit', handleEditProfileFormSubmit);
formNewPlace.addEventListener('submit', (evt) => onModalPlacesSubmit(evt, placesList, formNewPlace));

function onModalPlacesSubmit(evt, placesList, form) {
    evt.preventDefault();

    const card = generateCardNode(form.elements.link.value, form.elements['place-name'].value, removeCard, likeCard, clickImg);
    placesList.prepend(card);

    const popup = evt.currentTarget.closest('.popup');
    closePopup(popup);
}

export function fillModalImageWithCaption(imgUrl, caption) {
    const popup = document.querySelector('.popup.popup_type_image');
    popup.querySelector('.popup__image').src = imgUrl;
    popup.querySelector('.popup__image').alt = caption;
    popup.querySelector('.popup__caption').textContent = caption;
}

function addEventListenersForOpen() {
    const profileEditButton = document.querySelector('.profile__edit-button');
    const profileAddButton = document.querySelector('.profile__add-button');
    profileEditButton.addEventListener('click', function () {
        const popup = document.querySelector('.popup.popup_type_edit');
        openPopup(popup);
        inputNameUser.value = profileTitle.textContent;
        inputDescriptionUser.value = profileDescription.textContent;
        validateInput(inputNameUser)
        validateInput(inputDescriptionUser)
    })

    profileAddButton.addEventListener('click', function () {
        formNewPlace.reset();
        const popup = document.querySelector('.popup.popup_type_new-card');
        openPopup(popup);
    })
}

function handleEditProfileFormSubmit(evt) {
    evt.preventDefault();

    profileTitle.textContent = inputNameUser.value;
    profileDescription.textContent = inputDescriptionUser.value;

    const popup = evt.currentTarget.closest('.popup');
    closePopup(popup);
}

export function closePopupHandlerByClick(evt) {
    const popup = evt.currentTarget.closest('.popup_is-opened');
    if (!popup) {
        return;
    }

    closePopup(popup);
}

export function closePopupByOverlay(evt) {
    if (!evt.target.classList.contains('popup')) {
        return;
    }
    closePopup(evt.target);
}

export function clickImg(evt) {
    const popup = document.querySelector('.popup.popup_type_image');
    const srcImg = evt.currentTarget.getAttribute('src');
    const titleImg = evt.currentTarget.getAttribute('alt');
    fillModalImageWithCaption(srcImg, titleImg);
    openPopup(popup)
}

addEventListenersForOpen();
addEventListenersForClose(closePopupByOverlay, closePopupHandlerByClick);


function showError(input, errorMessage) {
    input.classList.add('input_type_error');
    document.querySelector('.popup__button').disabled = true;

    let span = input.nextSibling;
    if (span.tagName === 'SPAN') {
        span.textContent = errorMessage;
        return;
    }

    span = document.createElement("span")
    span.classList.add('input_type_error_text')
    span.textContent = errorMessage;
    input.parentNode.insertBefore(span, input.nextSibling);
}

function clearValidation(input) {
    input.classList.remove('input_type_error');
    document.querySelector('.popup__button').disabled = false;

    let span = input.nextSibling;
    if (span.tagName !== 'SPAN') {
        return;
    }

    span.remove();
}

function isValidByCustomRules(input) {
    const regular = new RegExp(input.dataset.validationRegex); //@todo чекнуть что содержжимое дата атрибута норм

    let isValid = false;
    if (input.value.match(regular)) {
        isValid = true;
    }

    return {
        valid: isValid,
        message: input.data.errorText,
    }
}

function validateInput(input) {
    if (!input.validity.valid) {
        showError(input, input.validationMessage)
        return;
    }

    const validation = isValidByCustomRules(input);
    if (!validation.valid) {
        showError(input, validation.message)
        return;
    }

    clearValidation(input)
}

const validationConfig = {
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__button',
    inactiveButtonClass: 'popup__button_disabled',
    inputErrorClass: 'popup__input_type_error',
    errorClass: 'popup__error_visible'
};
enableValidation(validationConfig)

inputNameUser.addEventListener('input', (evt) => validateInput(evt.currentTarget));
inputDescriptionUser.addEventListener('input', (evt) => validateInput(evt.currentTarget));
inputCardName.addEventListener('input', (evt) => validateInput(evt.currentTarget));
inputCardUrl.addEventListener('input', (evt) => validateInput(evt.currentTarget));
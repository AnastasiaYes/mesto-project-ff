import '../styles/index.css'
import {
    addEventListenersForClose,
    clickImg,
    closePopup,
    openPopup
} from "./modal";
import {generateCardNode, initialCards, likeCard, removeCard} from "./cards";

const placesList = document.querySelector('.places__list');
const formNewPlace = document.forms['new-place'];
const formEditProfile = document.forms['edit-profile'];
const inputNameUser = formEditProfile.elements.name;
const inputDescriptionUser = formEditProfile.elements.description;
const profileTitle = document.querySelector('.profile__title');
const profileDescription = document.querySelector('.profile__description');
const onImgClickCallback = (evt) => clickImg(evt, fillModalImageWithCaption);
initialCards.forEach(function (cardData) {
    const node = generateCardNode(cardData.link, cardData.name, removeCard, likeCard, onImgClickCallback);
    placesList.append(node);
});

formEditProfile.addEventListener('submit', handleEditProfileFormSubmit);
formNewPlace.addEventListener('submit', (evt) => onModalPlacesSubmit(evt, placesList, formNewPlace));

function onModalPlacesSubmit(evt, placesList, form) {
    evt.preventDefault();

    const card = generateCardNode(form.elements.link.value, form.elements['place-name'].value, removeCard, likeCard, onImgClickCallback);
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
    })

    profileAddButton.addEventListener('click', function () {
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

export  function closePopupHandlerByClick(evt) {
    const popup = evt.currentTarget.closest('.popup_is-opened');
    if (!popup) {
        return;
    }

    closePopup(popup);
}

export function closePopupByOverlay (evt) {
    if (!evt.target.classList.contains('popup')) {
        return;
    }
    closePopup(evt.target);
}

addEventListenersForOpen();
addEventListenersForClose(closePopupByOverlay, closePopupHandlerByClick);
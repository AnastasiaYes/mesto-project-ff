import {generateCardNode, likeCard, removeCard} from "./cards";

export const formNewPlace = document.forms['new-place'];
export const formEditProfile = document.forms['edit-profile'];
export const inputNameUser = formEditProfile.elements.name;
export const inputDescriptionUser = formEditProfile.elements.description;
export const profileTitle = document.querySelector('.profile__title');
export const profileDescription = document.querySelector('.profile__description');

export function clickImg(evt) {
    const popup = document.querySelector('.popup.popup_type_image');
    const srcImg = evt.currentTarget.getAttribute('src');
    const titleImg = evt.currentTarget.getAttribute('alt');
    fillModalImageWithCaption(srcImg, titleImg);
    openPopup(popup)
}

export function openPopup(popup) {
    const form = popup.querySelector('form');
    if (form) {
        form.reset();
    }

    popup.classList.add('popup_is-animated');
    setTimeout(() => popup.classList.add('popup_is-opened'), 0);
    document.addEventListener('keydown', keyHandler)
}

export function closePopup(popup) {
    popup.classList.remove('popup_is-opened');
    document.removeEventListener('keydown', keyHandler)
}

export function keyHandler(evt) {
    if (evt.key !== 'Escape') {
        return;
    }

    const popup = document.querySelector('.popup.popup_is-opened');
    closePopup(popup);
}

export function addEventListenersForClose() {
    const popupsClose = document.querySelectorAll('.popup__close');
    popupsClose.forEach((popupClose) => popupClose.addEventListener('click', closePopupHandlerByClick));
    document.querySelectorAll('.popup').forEach((el) => el.addEventListener('click', closePopupByOverlay));
}

export function onModalPlacesSubmit(evt, placesList, form) {
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

export function addEventListenersForOpen() {
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

export function handleEditProfileFormSubmit(evt) {
    evt.preventDefault();

    profileTitle.textContent = inputNameUser.value;
    profileDescription.textContent = inputDescriptionUser.value;

    const popup = evt.currentTarget.closest('.popup');
    closePopup(popup);
}

function closePopupHandlerByClick(evt) {
    const popup = evt.currentTarget.closest('.popup_is-opened');
    if (!popup) {
        return;
    }

    closePopup(popup);
}

function closePopupByOverlay (evt) {
    if (!evt.target.classList.contains('popup')) {
        return;
    }
    closePopup(evt.target);
}

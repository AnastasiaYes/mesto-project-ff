import {clickImg, generateCardNode, likeCard, placesList, removeCard} from "./cards";

export const formNewPlace = document.forms['new-place'];
export const formEditProfile = document.forms['edit-profile'];
const inputNameUser = formEditProfile.elements.name;
const inputDescriptionUser = formEditProfile.elements.description;
const profileTitle = document.querySelector('.profile__title');
const profileDescription = document.querySelector('.profile__description');

export function onModalPlacesSubmit(evt) {
    evt.preventDefault();

    const card = generateCardNode(formNewPlace.elements.link.value, formNewPlace.elements['place-name'].value, removeCard, likeCard, clickImg);
    placesList.prepend(card);

    const popup = evt.currentTarget.closest('.popup');
    closePopup(popup);
}

export function openPopup(popup) {
    popup.classList.add('popup_is-animated');
    setTimeout(() => popup.classList.add('popup_is-opened'), 0);
    document.addEventListener('keydown', keyHandler)
}

export function closePopup(popup, callback) {
    popup.classList.remove('popup_is-opened');
    document.removeEventListener('keydown', keyHandler)

    const form = popup.querySelector('form');
    if (!form) {
        return;
    }
    form.reset();
}

export function keyHandler(evt) {
    if (evt.key !== 'Escape') {
        return;
    }

    closePopup(document.querySelector('.popup.popup_is-opened'));
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

export function addEventListenersForClose() {
    const popupsClose = document.querySelectorAll('.popup__close');

    function closePopupHandlerByClick(evt) {
        const popup = evt.currentTarget.closest('.popup_is-opened');
        if (!popup) {
            return;
        }

        closePopup(popup);
    }

    popupsClose.forEach((popupClose) => popupClose.addEventListener('click', closePopupHandlerByClick));

    document.querySelectorAll('.popup').forEach((el) => el.addEventListener('click', closePopupByOverlay));

    function closePopupByOverlay (evt) {
        if (!evt.target.classList.contains('popup')) {
            return;
        }
        closePopup(evt.target);
    }
}

export function handleEditProfileFormSubmit(evt) {
    evt.preventDefault();

    profileTitle.textContent = inputNameUser.value;
    profileDescription.textContent = inputDescriptionUser.value;

    const popup = evt.currentTarget.closest('.popup');
    closePopup(popup);
}

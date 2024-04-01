import {generateCardNode, placesList} from "./cards";

export const formNewPlace = document.forms['new-place'];
export const formEditProfile = document.forms['edit-profile'];
const inputNameUser = formEditProfile.elements.name;
const inputDescriptionUser = formEditProfile.elements.description;
const profileTitle = document.querySelector('.profile__title');
const profileDescription = document.querySelector('.profile__description');

export function onModalPlacesSubmit(evt) {
    evt.preventDefault();

    const card = generateCardNode(formNewPlace.elements.link.value, formNewPlace.elements['place-name'].value);
    placesList.prepend(card);
}

export function openPopup(popup) {
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

    closePopup(document.querySelector('.popup.popup_is-opened'));
}

export function fillModalImageWithCaption(imgUrl, caption) {
    const popup = document.querySelector('.popup.popup_type_image');
    popup.querySelector('.popup__image').src = imgUrl;
    popup.querySelector('.popup__caption').textContent = caption;
}

export function addEventListenersForOpen() {
    const profileEditButton = document.querySelector('.profile__edit-button');
    const profileAddButton = document.querySelector('.profile__add-button');
    const cardsImg = document.querySelectorAll('.card__image');
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

    cardsImg.forEach((el) => el.addEventListener('click', function (evt) {
        const popup = document.querySelector('.popup.popup_type_image');
        const srcImg = evt.currentTarget.getAttribute('src');
        const titleImg = evt.currentTarget.getAttribute('alt');
        fillModalImageWithCaption(srcImg, titleImg);
        openPopup(popup)
    }));
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

    document.querySelectorAll('.popup').forEach((el) => el.addEventListener('click', function (evt) {
        if (!evt.target.classList.contains('popup')) {
            return;
        }
        closePopup(evt.target);
    }));

    document.querySelectorAll('.popup__button').forEach((el) => el.addEventListener('click', function (evt) {
        let popup = evt.target;
        if (!popup.classList.contains('popup')) {
            popup = evt.currentTarget.closest('.popup_is-opened');
            if (!popup) {
                return;
            }
        }
        closePopup(popup);
    }));
}

export function handleFormSubmit(evt) {
    evt.preventDefault();

    profileTitle.textContent = inputNameUser.value;
    profileDescription.textContent = inputDescriptionUser.value;
}

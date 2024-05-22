import '../styles/index.css'
import {addEventListenersForClose, closePopup, openPopup, closePopupByOverlay, closePopupHandlerByClick} from "./modal";
import {generateCardNode, likeCard, removeCard} from "./card";
import {clearValidation, enableValidation} from "./validation";
import {addCard, editAvatar, editProfile, getCards, getUser} from "./api";

const placesList = document.querySelector('.places__list');
const formNewPlace = document.forms['new-place'];
const formEditProfile = document.forms['edit-profile'];
const formEditAvatarProfile = document.forms['update-avatar'];
const inputNameUser = formEditProfile.elements.name;
const inputDescriptionUser = formEditProfile.elements.description;
const profileTitle = document.querySelector('.profile__title');
const profileDescription = document.querySelector('.profile__description');
let user = null;
const validationConfig = {
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__button',
    inactiveButtonClass: 'popup__button_disabled',
    inputErrorClass: 'popup__input_type_error',
    errorClass: 'popup__error_visible'
};

// getUser().then((result) => {
//     profileTitle.textContent = result.name;
//     profileDescription.textContent = result.about;
//     user = result;
//     document.querySelector('.profile__image').style.backgroundImage = `url("${result.avatar}")`;
// }) .catch((err) => {
//     console.log('Ошибка. Запрос не выполнен: ', err);
// });
//
// getCards().then(result => {
//     result.forEach(function (cardData) {
//         const node = generateCardNode(user, cardData._id, cardData.owner._id, cardData.likes.map(likeObj => likeObj._id), cardData.name, cardData.link, removeCard, likeCard, clickImg);
//         placesList.append(node);
//     })
// }).catch((err) => {
//     console.log('Ошибка. Запрос не выполнен: ', err);
// })

Promise.all([getUser(), getCards()])
    .then(([resultUser, resultCards]) => {
        profileTitle.textContent = resultUser.name;
        profileDescription.textContent = resultUser.about;
        user = resultUser;
        document.querySelector('.profile__image').style.backgroundImage = `url("${user.avatar}")`;

        resultCards.forEach((cardData) => {
            const node = generateCardNode(user, cardData._id, cardData.owner._id, cardData.likes.map(likeObj => likeObj._id), cardData.name, cardData.link, removeCard, likeCard, clickImg);
            placesList.append(node);
        });
    })
    .catch((err) => {
        console.error('Ошибка. Запрос не выполнен: ', err);
    });


formEditProfile.addEventListener('submit', handleEditProfileFormSubmit);
formNewPlace.addEventListener('submit', (evt) => onModalPlacesSubmit(evt, placesList, formNewPlace));

function onModalEditAvatarSubmit(evt, formEditAvatarProfile) {
    evt.preventDefault();
    const buttonPopup = evt.target.querySelector('.popup__button');
    buttonPopup.textContent = 'Сохранить...'
    const link = formEditAvatarProfile.elements.link.value;
    editAvatar(link).then(res => {
        if (res.errors) {
            alert(res.message);
            return
        }
        document.querySelector('.profile__image').style.backgroundImage = `url("${link}")`;
        closePopup(formEditAvatarProfile.closest('.popup'));
    }).catch((err) => {
        console.log('Ошибка. Запрос не выполнен: ', err);
    }).finally(() => buttonPopup.textContent = 'Сохранить');
}

formEditAvatarProfile.addEventListener('submit', (evt) => onModalEditAvatarSubmit(evt, formEditAvatarProfile));

function onModalPlacesSubmit(evt, placesList, form) {
    evt.preventDefault();
    const buttonPopup = evt.target.querySelector('.popup__button');
    buttonPopup.textContent = 'Сохранить...'
    const name = form.elements['place-name'].value;
    const link = form.elements.link.value;
    addCard(name, link).then(res => {
        if (res.errors !== undefined) {
            alert(res.message)
        }

        const card = generateCardNode(user, res._id, res.owner._id, res.likes.map(likeObj => likeObj._id), name, link, removeCard, likeCard, clickImg);
        placesList.prepend(card);
        const popup = evt.target.closest('.popup');
        closePopup(popup);
    }) .catch((err) => {
        console.log('Ошибка. Запрос не выполнен: ', err);
    }) .finally(() => buttonPopup.textContent = 'Сохранить');
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
    const profileEditAvatarButton = document.querySelector('.profile__edit-avatar-button');
    profileEditButton.addEventListener('click', function () {
        const popup = document.querySelector('.popup.popup_type_edit');
        openPopup(popup);
        inputNameUser.value = profileTitle.textContent;
        inputDescriptionUser.value = profileDescription.textContent;
        clearValidation(formEditProfile, validationConfig);

    })

    profileEditAvatarButton.addEventListener('click', function () {
        const popup = document.querySelector('.popup.popup_type_avatar-update');
        formEditAvatarProfile.elements.link.value = '';
        openPopup(popup);
        clearValidation(formEditAvatarProfile, validationConfig);
    })
    enableValidation(validationConfig)

    profileAddButton.addEventListener('click', function () {
        formNewPlace.reset();
        const popup = document.querySelector('.popup.popup_type_new-card');
        openPopup(popup);
        clearValidation(formNewPlace, validationConfig);
    })
}

function handleEditProfileFormSubmit(evt) {
    evt.preventDefault();
    const buttonPopup = evt.target.querySelector('.popup__button');
    buttonPopup.textContent = 'Сохранить...'
    editProfile(inputNameUser.value, inputDescriptionUser.value).then(res => {
        if (res.errors !== undefined) {
            alert(res.message)
        }
        profileTitle.textContent = inputNameUser.value;
        profileDescription.textContent = inputDescriptionUser.value;

        const popup = evt.target.closest('.popup');
        closePopup(popup);
    }) .catch((err) => {
        console.log('Ошибка. Запрос не выполнен: ', err);
    }) .finally(() => buttonPopup.textContent = 'Сохранить');
}

export function clickImg(evt) {
    const popup = document.querySelector('.popup.popup_type_image');
    const srcImg = evt.currentTarget.getAttribute('src');
    const titleImg = evt.currentTarget.getAttribute('alt');
    fillModalImageWithCaption(srcImg, titleImg);
    openPopup(popup)
}

addEventListenersForOpen();
addEventListenersForClose();

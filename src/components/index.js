import '../styles/index.css'
import {
    addEventListenersForClose,
    addEventListenersForOpen, clickImg, formEditProfile, formNewPlace, handleEditProfileFormSubmit,
    onModalPlacesSubmit, openPopup
} from "./modal";
import {generateCardNode, initialCards, likeCard, removeCard} from "./cards";

export const placesList = document.querySelector('.places__list');

initialCards.forEach(function (cardData) {
    const node = generateCardNode(cardData.link, cardData.name, removeCard, likeCard, clickImg);
    placesList.append(node);
});


formEditProfile.addEventListener('submit', handleEditProfileFormSubmit);
formNewPlace.addEventListener('submit', (evt) => onModalPlacesSubmit(evt, placesList, formNewPlace));

addEventListenersForOpen();
addEventListenersForClose();
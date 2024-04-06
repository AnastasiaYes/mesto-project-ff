import '../styles/index.css'
import {
    addEventListenersForClose,
    addEventListenersForOpen, formEditProfile,
    formNewPlace, handleEditProfileFormSubmit,
    onModalPlacesSubmit
} from "./modal";
import {clickImg, generateCardNode, initialCards, likeCard, placesList, removeCard} from "./cards";

initialCards.forEach(function (cardData) {
    const node = generateCardNode(cardData.link, cardData.name, removeCard, likeCard, clickImg);
    placesList.append(node);
});


formEditProfile.addEventListener('submit', handleEditProfileFormSubmit);
formNewPlace.addEventListener('submit', onModalPlacesSubmit);

addEventListenersForOpen();
addEventListenersForClose();
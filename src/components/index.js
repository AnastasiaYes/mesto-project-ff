import '../styles/index.css'
import {
    addEventListenersForClose,
    addEventListenersForOpen, formEditProfile,
    formNewPlace, handleFormSubmit,
    onModalPlacesSubmit
} from "./modal";
import {generateCardNode, initialCards, placesList} from "./cards";

initialCards.forEach(function (cardData) {
    const node = generateCardNode(cardData.link, cardData.name);
    placesList.append(node);
});

placesList.addEventListener('click', function (evt) {
    if (!evt.target.classList.contains('card__like-button')) {
        return;
    }

    evt.target.classList.toggle('card__like-button_is-active');
});

formEditProfile.addEventListener('submit', handleFormSubmit);
formNewPlace.addEventListener('submit', onModalPlacesSubmit);

addEventListenersForOpen();
addEventListenersForClose();
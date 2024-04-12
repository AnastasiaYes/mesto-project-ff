export const initialCards = [
    {
        name: "Архыз",
        link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg",
    },
    {
        name: "Челябинская область",
        link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg",
    },
    {
        name: "Иваново",
        link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg",
    },
    {
        name: "Камчатка",
        link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg",
    },
    {
        name: "Холмогорский район",
        link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg",
    },
    {
        name: "Байкал",
        link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg",
    }
];

export function removeCard(cardContainer) {
    cardContainer.remove();
}

export function generateCardNode(link, name, removeCardFunction, likeCardFunction, clickCardFunction) {
    const cardTemplate = document.querySelector('#card-template').content;
    const cardElement = cardTemplate.querySelector('.card').cloneNode(true);
    const cardImg = cardElement.querySelector('.card__image');

    cardImg.src = link;
    cardImg.alt = name;
    cardElement.querySelector('.card__title').textContent = name;

    if (removeCardFunction) {
        cardElement.querySelector('.card__delete-button').addEventListener('click', () => {
            removeCardFunction(cardElement);
        })
    }
    if (likeCardFunction) {
        cardElement.querySelector('.card__like-button').addEventListener('click', () => {
            likeCardFunction(cardElement);
        })
    }
    if (clickCardFunction) {
        cardImg.addEventListener('click', clickCardFunction);
    }

    return cardElement;
}

export function likeCard(cardEl) {
    const btn = cardEl.querySelector('.card__like-button');
    if (!btn) {
        return;
    }

    btn.classList.toggle('card__like-button_is-active');
}

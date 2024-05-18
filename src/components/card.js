import {removeCardApi, addLike, removeLike} from "./api";

export function removeCard(cardContainer) { //id add ?
    removeCardApi(cardContainer.dataset.id).then(res => {
        console.log(cardContainer.dataset.id)
        cardContainer.remove();
    }) .catch((err) => {
        console.log('Ошибка. Запрос не выполнен: ', err);
    });
}

export function generateCardNode(user, id, ownerId, likedUserIds, name, link, removeCardFunction, likeCardFunction, clickCardFunction) {
    const userId = user._id;
    const cardTemplate = document.querySelector('#card-template').content;
    const cardElement = cardTemplate.querySelector('.card').cloneNode(true);
    updateCardDataset(cardElement, id, likedUserIds)
    updateCardLikes(cardElement, likedUserIds.length)
    const cardImg = cardElement.querySelector('.card__image');

    cardImg.src = link;
    cardImg.alt = name;
    cardElement.querySelector('.card__title').textContent = name;

    if (ownerId !== userId) {
        cardElement.querySelector('.card__delete-button').remove();
    } else if (removeCardFunction) {
        cardElement.querySelector('.card__delete-button').addEventListener('click', () => {
            removeCardFunction(cardElement);
        })
    }
    if (likeCardFunction) {
        cardElement.querySelector('.card__like-button').addEventListener('click', () => {
            likeCardFunction(cardElement, user._id);
        })
    }
    if (clickCardFunction) {
        cardImg.addEventListener('click', clickCardFunction);
    }

    return cardElement;
}

export function likeCard(cardEl, userId) {
    const btn = cardEl.querySelector('.card__like-button');
    if (!btn) {
        return;
    }
    const card = btn.closest('.card');
    const cardId = card.dataset.id;

    if (card.dataset.like.split(';').includes(userId)) {
        removeLike(cardId).then(res => {
             btn.classList.remove('card__like-button_is-active');
            updateCardDataset(cardEl, res._id, res.likes.map(row => row._id))
            updateCardLikes(cardEl, res.likes.length)
        }) .catch((err) => {
            console.log('Ошибка. Запрос не выполнен: ', err);
        });
        return;
    }

     addLike(cardId).then(res => {
         updateCardDataset(cardEl, res._id, res.likes.map(row => row._id))
         btn.classList.add('card__like-button_is-active');
         updateCardLikes(cardEl, res.likes.length)
     }) .catch((err) => {
         console.log('Ошибка. Запрос не выполнен: ', err);
     });
}

function updateCardDataset(cardEl, id, likedUserIds) {
    cardEl.dataset.id = id;
    cardEl.dataset.like = likedUserIds.join(';');
}

function updateCardLikes(cardEl, likesTotal) {
    let numberLikes = cardEl.querySelector('.number-likes');
    numberLikes.textContent = likesTotal;
}
const placesList = document.querySelector('.places__list');
initialCards.forEach(function (cardData) {
    const node = generateCardNode(cardData);
    placesList.append(node);
})

function generateCardNode(cardData) {
    const cardTemplate = document.querySelector('#card-template').content;
    const cardElement = cardTemplate.querySelector('.card').cloneNode(true);

    cardElement.querySelector('.card__image').src = cardData.link;
    cardElement.querySelector('.card__image').alt = cardData.name;
    cardElement.querySelector('.card__title').textContent = cardData.name;
    cardElement.querySelector('.card__delete-button').addEventListener('click', removeCard)

    return cardElement;
}

function removeCard(event) {
    event.currentTarget.closest('.card').remove();
}

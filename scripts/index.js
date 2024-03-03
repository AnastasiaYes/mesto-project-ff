let cardNodes = initialCards.map(function (cardData) {
    return generateCardNode(cardData);
})

addCardsToHtml(cardNodes)
function generateCardNode(cardData) {
    const cardTemplate = document.querySelector('#card-template').content;
    const cardElement = cardTemplate.querySelector('.card').cloneNode(true);

    cardElement.querySelector('.card__image').src = cardData.link;
    cardElement.querySelector('.card__image').alt = cardData.name;
    cardElement.querySelector('.card__title').textContent = cardData.name;
    cardElement.querySelector('.card__delete-button').addEventListener('click', removeCard)

    return cardElement;
}
function addCardsToHtml(nodes) {
    const placesList = document.querySelector('.places__list');
    placesList.append(...nodes);
}

function removeCard(event) {
    event.currentTarget.closest('.card').remove();
}

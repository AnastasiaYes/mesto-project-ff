addCardsToHtml(generateCardNodes())
function generateCardNodes() {
    return initialCards.map(function (cardData) {
        return generateCardNode(cardData);
    })
}
function generateCardNode(cardData) {
    const cardTemplate = document.querySelector('#card-template').content;
    const cardElement = cardTemplate.querySelector('.card').cloneNode(true);

    cardElement.querySelector('.card__image').setAttribute('src', cardData.link);
    cardElement.querySelector('.card__title').textContent = cardData.name;
    cardElement.querySelector('.card__delete-button').addEventListener('click', function (event){
        event.currentTarget.closest('.card').remove();
    })
    return cardElement;
}
function addCardsToHtml(nodes) {
    const placesList = document.querySelector('.places__list');
    placesList.append(...nodes);
}

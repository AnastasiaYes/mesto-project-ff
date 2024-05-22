const config = {
    baseUrl: "https://nomoreparties.co/v1/wff-cohort-13",
    headers: {
        authorization: "fd771050-e342-49ab-8ca0-e1af1272aab8",
        "Content-Type": "application/json",
    },
};

function checkResponse(res) {
    if (res.ok) {
        return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
}

//Загрузка информации о пользователе с сервера
export function getUser() {
    return fetch(`${config.baseUrl}/users/me`, {
        method: 'GET',
        headers: config.headers
    })  .then(checkResponse)
}

//Редактирование профиля
export function editProfile(name, about) {
    return fetch(`${config.baseUrl}/users/me`, {
        method: 'PATCH',
        headers: config.headers,
        body: JSON.stringify({
            name: name,
            about: about
        })
    })  .then(checkResponse)
}

export function editAvatar(link) {
    return fetch(`${config.baseUrl}/users/me/avatar`, {
        method: 'PATCH',
        headers: config.headers,
        body: JSON.stringify({
            avatar: link,
        })
    })  .then(checkResponse)
}

// Загрузка карточек с сервера
export function getCards() {
    return fetch(`${config.baseUrl}/cards`, {
        method: 'GET',
        headers: config.headers
    })  .then(checkResponse)
}

//Добавление новой карточки
export function addCard(name, link) {
    return fetch(`${config.baseUrl}/cards`, {
        method: 'POST',
        headers: config.headers,
        body: JSON.stringify({
            name: name,
            link: link
        })
    })  .then(checkResponse)
}

//Удаление карточки
export function removeCardApi(cardId) {
    return fetch(`${config.baseUrl}/cards/${cardId}`, {
        method: 'DELETE',
        headers: config.headers
    })  .then(checkResponse)

}

//Поставить лайк
export function addLike(cardId) {
    return fetch(`${config.baseUrl}/cards/likes/${cardId}`, {
        method: 'PUT',
        headers: config.headers
    }) .then(checkResponse)
}

//Удалить лайк
export function removeLike(cardId) {
    return fetch(`${config.baseUrl}/cards/likes/${cardId}`, {
        method: 'DELETE',
        headers: config.headers
    })  .then(checkResponse)
}
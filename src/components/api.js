//Загрузка информации о пользователе с сервера
export function getUser() {
    return fetch('https://nomoreparties.co/v1/wff-cohort-13/users/me', {
        method: 'GET',
        headers: {
            authorization: 'fd771050-e342-49ab-8ca0-e1af1272aab8'
        }
    })  .then(res => {
        if (res.ok) {
            return res.json();
        }
        return Promise.reject(`Ошибка: ${res.status}`);
    });
}

//Редактирование профиля
export function editProfile(name, about) {
    return fetch('https://nomoreparties.co/v1/wff-cohort-13/users/me', {
        method: 'PATCH',
        headers: {
            authorization: 'fd771050-e342-49ab-8ca0-e1af1272aab8',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name: name,
            about: about
        })
    })  .then(res => {
        if (res.ok) {
            return res.json();
        }
        return Promise.reject(`Ошибка: ${res.status}`);
    });
}

export function editAvatar(link) {
    return fetch('https://nomoreparties.co/v1/wff-cohort-13/users/me/avatar', {
        method: 'PATCH',
        headers: {
            authorization: 'fd771050-e342-49ab-8ca0-e1af1272aab8',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            avatar: link,
        })
    })  .then(res => {
        if (res.ok) {
            return res.json();
        }
        return Promise.reject(`Ошибка: ${res.status}`);
    });
}

//Обновление аватара пользователя
export function avatarUpdate() {
    return fetch('https://nomoreparties.co/v1/wff-cohort-13/users/me/avatar ', {
        method: 'PATCH',
        headers: {
            authorization: 'fd771050-e342-49ab-8ca0-e1af1272aab8'
        }
    })  .then(res => {
        if (res.ok) {
            return res.json();
        }
        return Promise.reject(`Ошибка: ${res.status}`);
    });
}

// Загрузка карточек с сервера
export function getCards() {
    return fetch('https://nomoreparties.co/v1/wff-cohort-13/cards', {
        method: 'GET',
        headers: {
            authorization: 'fd771050-e342-49ab-8ca0-e1af1272aab8'
        }
    })  .then(res => {
        if (res.ok) {
            return res.json();
        }
        return Promise.reject(`Ошибка: ${res.status}`);
    });
}

//Добавление новой карточки
export function addCard(name, link) {
    return fetch('https://nomoreparties.co/v1/wff-cohort-13/cards', {
        method: 'POST',
        headers: {
            authorization: 'fd771050-e342-49ab-8ca0-e1af1272aab8',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name: name,
            link: link
        })
    })  .then(res => {
        if (res.ok) {
            return res.json();
        }
        return Promise.reject(`Ошибка: ${res.status}`);
    });
}

//Удаление карточки
export function removeCardApi(cardId) {
    return fetch(`https://nomoreparties.co/v1/wff-cohort-13/cards/${cardId}`, {
        method: 'DELETE',
        headers: {
            authorization: 'fd771050-e342-49ab-8ca0-e1af1272aab8'
        }
    })  .then(res => {
        if (res.ok) {
            return res.json();
        }
        return Promise.reject(`Ошибка: ${res.status}`);
    });

}

//Поставить лайк
export function addLike(cardId) {
    return fetch(`https://nomoreparties.co/v1/wff-cohort-13/cards/likes/${cardId}`, {
        method: 'PUT',
        headers: {
            authorization: 'fd771050-e342-49ab-8ca0-e1af1272aab8'
        }
    })  .then(res => {
        if (res.ok) {
            return res.json();
        }
        return Promise.reject(`Ошибка: ${res.status}`);
    });
}

//Удалить лайк
export function removeLike(cardId) {
    return fetch(`https://nomoreparties.co/v1/wff-cohort-13/cards/likes/${cardId}`, {
        method: 'DELETE',
        headers: {
            authorization: 'fd771050-e342-49ab-8ca0-e1af1272aab8',
        }
    })  .then(res => {
        if (res.ok) {
            return res.json();
        }
        return Promise.reject(`Ошибка: ${res.status}`);
    });
}
export function openPopup(popup) {
    popup.classList.add('popup_is-animated');
    setTimeout(() => popup.classList.add('popup_is-opened'), 0);
    document.addEventListener('keydown', keyHandler);
}

export function closePopup(popup) {
    popup.classList.remove('popup_is-opened');
    document.removeEventListener('keydown', keyHandler);
}

export function keyHandler(evt) {
    if (evt.key !== 'Escape') {
        return;
    }

    const popup = document.querySelector('.popup.popup_is-opened');
    closePopup(popup);
}

export function addEventListenersForClose(onOverlayClickHandler, onCloseBtnClickHandler) {
    const popupsClose = document.querySelectorAll('.popup__close');
    popupsClose.forEach((popupClose) => popupClose.addEventListener('click', onCloseBtnClickHandler));
    document.querySelectorAll('.popup').forEach((el) => el.addEventListener('click', onOverlayClickHandler));
}




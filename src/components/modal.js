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

export function closePopupHandlerByClick(evt) {
    const popup = evt.currentTarget.closest('.popup_is-opened');
    if (!popup) {
        return;
    }

    closePopup(popup);
}

export function closePopupByOverlay(evt) {
    if (!evt.target.classList.contains('popup')) {
        return;
    }
    closePopup(evt.target);
}

export function addEventListenersForClose() {
    const popupsClose = document.querySelectorAll('.popup__close');
    popupsClose.forEach((popupClose) => popupClose.addEventListener('click', closePopupHandlerByClick));
    document.querySelectorAll('.popup').forEach((el) => el.addEventListener('click', closePopupByOverlay));
}
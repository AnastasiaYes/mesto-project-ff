/**
 * {
 *     formSelector: '.popup__form',
 *     inputSelector: '.popup__input',
 *     submitButtonSelector: '.popup__button',
 *     inactiveButtonClass: 'popup__button_disabled',
 *     inputErrorClass: 'popup__input_type_error',
 *     errorClass: 'popup__error_visible'
 * }
 * @param config
 */
export function enableValidation(config) {
    const form = document.querySelector(config.formSelector);
    const inputs = form.querySelectorAll(config.inputSelector);
    inputs.forEach(el => {
       el.addEventListener('input', (evt) => validateInput(evt.currentTarget, config));
    });

    /**
     * 1й этап
     * получаем форму
     * получаем в форме инпуты.
     * проходимся по массиву
     * для каждого элемента массива(инпута) добавляем addEventListener по аналогии с idnex.js
     *
     * 2й этап: настройка
     * когда высвечивается ошибка, то надо span-у добавлять класс, который передан под ключом "errorClass"
     * когда высвечивается ошибка, то надо инпуту добавлять класс, который передан под ключом "inputErrorClass"
     * когда высвечивается ошибка, то это значит, что форма не может быть принята. А это значит, что надо отключить кнопку. Кнопку можно найти в форме по классу под ключом "submitButtonSelector".  Класс отключения надо взять из ключа "inactiveButtonClass" и добавить в кнопке
     */
}

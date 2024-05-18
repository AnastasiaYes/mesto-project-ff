export function enableValidation(config) {
    const forms = document.querySelectorAll(config.formSelector);
    forms.forEach(form => {
        const inputs = form.querySelectorAll(config.inputSelector);
        inputs.forEach(el => {
            el.addEventListener('input', (evt) => validateInput(evt.currentTarget, config));
        });
    })
}

function disableFormBtn(submitBtn, inactiveButtonClass) {
    submitBtn.classList.add(inactiveButtonClass);
    submitBtn.disabled = true;
}
function enableFormBtn(submitBtn, inactiveButtonClass) {
    submitBtn.classList.remove(inactiveButtonClass);
    submitBtn.disabled = false;
}

function showError(input, errorMessage, config) {
    input.classList.add(config.inputErrorClass);

    disableFormBtn(input.closest('form').querySelector(config.submitButtonSelector), config.inactiveButtonClass);
    let span = input.nextSibling;
    if (span.tagName === 'SPAN') {
        span.textContent = errorMessage;
        return;
    }

    span = document.createElement("span")
    span.classList.add(config.errorClass)
    span.textContent = errorMessage;
    input.parentNode.insertBefore(span, input.nextSibling);
}

function clearError(input, inputErrorClass, config) {
    input.classList.remove(config.inputErrorClass);

    let span = input.nextSibling;
    if (span.tagName !== 'SPAN') {
        return;
    }

    span.remove();
}

function isValidByCustomRules(input) {
    const regular = new RegExp(input.dataset.validationRegex);

    let isValid = false;
    if (input.value.match(regular)) {
        isValid = true;
    }

    return {
        valid: isValid,
        message: input.dataset.errorText,
    }
}

function validateInput(input, config) {
    if (!input.validity.valid) {
        showError(input, input.validationMessage, config)
        return;
    }

    const validation = isValidByCustomRules(input);
    if (!validation.valid) {
        showError(input, validation.message, config)
        return;
    }

    clearError(input, config.inputErrorClass, config);
    evaluateSubmitButton(input.closest('form'), config);
}

export function clearValidation(form, config) {
    const inputs = form.querySelectorAll(config.inputSelector);

    inputs.forEach(input => {
        clearError(input, config.errorClass, config);
    })

    evaluateSubmitButton(form, config);
}

function evaluateSubmitButton(form, config) {
    const inputs = form.querySelectorAll(config.inputSelector);
    let isAnyInvalid = false;

    inputs.forEach(input => {
        if (!input.validity.valid || !isValidByCustomRules(input).valid) {
            isAnyInvalid = true;
        }
    })

    if (isAnyInvalid) {
        disableFormBtn(form.querySelector(config.submitButtonSelector), config.inactiveButtonClass);
        return
    }
    enableFormBtn(form.querySelector(config.submitButtonSelector), config.inactiveButtonClass)
}
const btnValidar = document.getElementById('btn-validar');
const formulario = document.querySelector('.formulario');
const inputs = document.querySelectorAll('.formulario input');
const verificacao = document.querySelector('.container .verificacao');
const formularioValidado = document.querySelector('.formulario-validado');
const motoqueiro = document.querySelector('.motoqueiro');

btnValidar.addEventListener('click', () => {
    event.preventDefault();

    let todosValidos = true;

    inputs.forEach(input => {
        const inputValue = input.value.trim();

        if (input.id === 'nome') {
            validateNonEmpty(input, inputValue);
        } else if (input.id === 'numero-cartao') {
            validateCardNumber(input, inputValue);
        } else if (input.id === 'mes' || input.id === 'ano') {
            validateTwoDigit(input, inputValue);
        } else if (input.id === 'cvv') {
            validateThreeDigit(input, inputValue);
        }

        if (input.classList.contains('invalid')) {
            todosValidos = false;
        }
    });

    if (todosValidos) {
        formulario.classList.add('formulario-validado');
        verificacao.style.display = 'none'; 
        formularioValidado.style.display = 'block';  
        motoqueiro.style.display = 'block';  
    }
});

function validateNonEmpty(input, value) {
    if (value !== '') {
        setValidationClasses(input, 'valid');
    } else {
        setValidationClasses(input, 'invalid');
    }
}

function validateCardNumber(input, value) {
    const regexNumeros = /^[0-9]{16}$/;
    if (regexNumeros.test(value)) {
        setValidationClasses(input, 'valid');
    } else {
        setValidationClasses(input, 'invalid');
    }
}

function validateTwoDigit(input, value) {
    const regexTwoDigits = /^[0-9]{2}$/;
    if (regexTwoDigits.test(value)) {
        setValidationClasses(input, 'valid');
    } else {
        setValidationClasses(input, 'invalid');
    }
}

function validateThreeDigit(input, value) {
    const regexThreeDigits = /^[0-9]{3}$/;
    if (regexThreeDigits.test(value)) {
        setValidationClasses(input, 'valid');
    } else {
        setValidationClasses(input, 'invalid');
    }
}

function setValidationClasses(element, className) {
    element.classList.remove('valid', 'invalid');
    element.classList.add(className);
}
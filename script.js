const btnNode = document.querySelector('.js-close-btn');
const grayAlert = document.querySelector('.js-gray-block');
const bigCloseBtn = document.querySelector('.js-big-close-btn');
const select = document.querySelector('.js-select');
const btnToSendForm = document.querySelector('.js-btn-sendForm');
const inputNode = document.querySelector('.js-input');

for (let i = 1; i <= 100; i++) {
    const option = document.createElement('option');
    option.textContent = `+${option.value = i}`;
    select.append(option);
};

bigCloseBtn.addEventListener('click', function () {
    alert('Я, конечно, могу закрыться, но мне некуда тебя перенаправить!');
});

btnNode.addEventListener('click', function () {
    grayAlert.innerHTML = ``;
    grayAlert.classList.remove('gray-block');
});

btnToSendForm.addEventListener('click', function () {
    alert('Спасибо!');
})
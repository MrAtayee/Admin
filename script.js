let visible = document.querySelector('.visible');
let inputValue = document.querySelector('#pass');


inputValue.addEventListener('keyup', function () {
    let inputLenght = inputValue.value.length;
    if (inputLenght == 0) {
        visible.style.display = 'none';
    } else {
        visible.style.display = 'inline-block';
    }
})
visible.addEventListener('click', function () {
    let inputType = inputValue.getAttribute('type');
    if (inputType == "password") {
        inputValue.setAttribute('type', 'text');
        visible.setAttribute('src', 'image/invisibile-eye (2).jpg');
    } else {
        inputValue.setAttribute('type', 'password');
        visible.setAttribute('src', 'image/visibile-eye.png')
    }
})
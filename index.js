const input = document.querySelector('.email');
const btn = document.getElementById('btn');


btn.addEventListener('click', e => {
    e.preventDefault();

    checkInput();
})

function checkInput() {
    const inputValue = input.value;
    // 6 or more words @ any num w/o whitespace . any num w/o whitespace
    const re = /\w{6,}@\S+\.\S+/gi;

    const errIcon = document.getElementById('err');
    const errText = document.getElementById('errText');

    if (!re.test(inputValue)) {
        errIcon.classList.add('warning');
        errText.classList.add('warning');
    } else {
        errIcon.classList.remove('warning');
        errText.classList.remove('warning');
    }
}
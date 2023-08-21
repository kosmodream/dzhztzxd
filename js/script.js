document.querySelector
let one = document.querySelector('.one');
let two = document.querySelector('.two');
let three = document.querySelector('.three');
let four = document.querySelector('.four');
let five = document.querySelector('.five');
let six = document.querySelector('.six');
let seven = document.querySelector('.seven');
let eight = document.querySelector('.eight');
let nine = document.querySelector('.nine');
let zero = document.querySelector('.zero');
let minus = document.querySelector('.minus');
let plus = document.querySelector('.plus');
let del = document.querySelector('.del');
let ymn = document.querySelector('.ymn');
let input = document.querySelector('.vvod');
let ravno = document.querySelector('.ravno');

function ch(e){
    input.value = input.value + e.textContent
}

ravno.addEventListener('click', () => {
    try {
        input.value = eval(input.value);
    } catch (error) {
        input.value = 'Ошибка';
    }
})

let popup = document.querySelector('.popup');
let btns = document.querySelectorAll('.btn');

let numberToAdd = ""; 

function otkr(e) {
    const buttonText = e.target.textContent;
    numberToAdd = buttonText;
    const popupText = `Вы уверены, что хотите нажать цифру?`;
    const popupContent = popup.querySelector('a');
    popupContent.textContent = popupText;

    if (!popup.classList.contains('active')) {
        popup.classList.add('active');
    }

    yesBtn.addEventListener('click', addNumberAndClose);
    noBtn.addEventListener('click', zakr);
}

function zakr() {
    popup.classList.remove('active');
    numberToAdd = ""; 
}

function addNumberAndClose() {
    if (numberToAdd !== "") {
        input.value += numberToAdd;
        numberToAdd = ""; 
        popup.classList.remove('active');
    }
    yesBtn.removeEventListener('click', addNumberAndClose);
}

btns.forEach(btn => {
    btn.addEventListener('click', otkr);
});

let yesBtn = document.querySelector('.da');
let noBtn = document.querySelector('.net');

let clearBtn = document.querySelector('.clear');

clearBtn.addEventListener('click', () => {
    input.value = "";
});
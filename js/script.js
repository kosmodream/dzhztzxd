//Проще было начать с сааааааааааааааааамого начала, мы js проходили так, что даже проходили не назвать, а пользовались только для курсовой и то, всё с инета брали
let minus = document.querySelector('.minus');
let plus = document.querySelector('.plus');
let del = document.querySelector('.del');
let ymn = document.querySelector('.ymn');
let input = document.querySelector('.vvod');
let ravno = document.querySelector('.ravno');
let popup = document.querySelector('.popup');
let btns = document.querySelectorAll('.btn');
let yesBtn = document.querySelector('.da');
let noBtn = document.querySelector('.net');
let clearBtn = document.querySelector('.clear');

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
//получилось только изменил грубо говоря так 
function otkr(e) {
    const buttonText = e.target.textContent;
    numberToAdd = buttonText;
    
    const popupText = popup.textContent + `${buttonText}?`;
    const popupContent = popup.querySelector('a');
    popupContent.textContent = (popupText);
   
    if (!popup.classList.contains('active')) {
        popup.classList.add('active');
    }
    
    yesBtn.addEventListener('click', addNumberAndClose);
    noBtn.addEventListener('click', zakr);
}

//слишком нагружено проще передавать само название кнопки numberToAdd убери и подумай как
function addNumberAndClose() {
    if (numberToAdd !== "") {
        input.value += numberToAdd;
        numberToAdd = ""; 
        popup.classList.remove('active');
    }
    yesBtn.removeEventListener('click', addNumberAndClose);
}
//передавай название кнопки
btns.forEach(btn => {
    btn.addEventListener('click', otkr);
});

clearBtn.addEventListener('click', () => {
    input.value = "";
});

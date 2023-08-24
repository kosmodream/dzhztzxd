document.addEventListener("DOMContentLoaded", function () {
    // Получаем ссылки на элементы
    const input = document.querySelector(".vvod");
    const buttons = document.querySelectorAll(".btn");
    const clearButton = document.querySelector(".clear");
    const equalsButton = document.querySelector(".ravno");
    const popup = document.querySelector(".popup");
    const popupText = popup.querySelector('a');
    let yesBtn = document.querySelector('.da');
    let noBtn = document.querySelector('.net');
    let btnCH ;
    // Добавляем обработчик клика для всех кнопок
    buttons.forEach((button) => {
      button.addEventListener("click", function () {
        popupText.textContent = `Хотите ли вы добавить цифру ${button.textContent}?`
        popup.classList.add('active')
        btnCH = button.textContent
      });
    });
  
    // Обработчик клика для кнопки "Очистить строку"
    clearButton.addEventListener("click", function () {
      input.value = "";
    });
  
    // Обработчик клика для кнопки "="
    equalsButton.addEventListener("click", function () {
      try {
        // Вычисляем результат и выводим его в поле ввода
        input.value = eval(input.value);
      } catch (error) {
        input.value = "Ошибка";
      }
    });
    yesBtn.addEventListener('click', () => {
        input.value += btnCH;
        popup.classList.remove('active')
    })
    noBtn.addEventListener('click', () => {
        popup.classList.remove('active')
    })
  });
  

  
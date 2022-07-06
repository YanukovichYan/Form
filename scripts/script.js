// 1.
window.onload = function () {

    // 2. Запретил вводить цифры
    let input1 = document.getElementById('input-name');

    input1.onkeydown = (e) => {
        let letters = parseInt(e.key);
        if (!isNaN(letters)) {
            return false;
        }
        console.log(e.key);
    }
    // 3. Запретил вводить точки и запятые
    let input2 = document.getElementById('input-username');

    input2.onkeydown = (e) => {
        if ((e.key === ".") || (e.key === ",")) {
            return false;
        }
    }

    // 4.
    let checkbox = document.getElementsByName('agreed')[0];


    checkbox.onchange = function () {
        if (checkbox.checked) {
            console.log('Согласен');
        } else {
            console.log('Не согласен');
        }
    }

    // 5.

    let input3 = document.getElementById('input-email'),
        input4 = document.getElementById('input-password'),
        input5 = document.getElementById('input-repeatPassword'),
        button = document.getElementById('button'),
        modal = document.getElementById('modal');


    button.onclick = function () {
        if (!input1.value) {
            alert('Заполните Full Name');
            return;
        }
        if (!input2.value) {
            alert('Заполните username');
            return;
        }
        if (!input3.value) {
            alert('Заполните email');
            return;
        }
        if (!input4.value) {
            alert('Заполните password');
            return;
        }
        if (input4.value.length < 8) {
            alert('Ошибка: пароль должен содержать не менее 8 символов');
            return;
        }
        if (!input5.value) {
            alert('Заполните repeat password');
            return;
        }
        if (input5.value !== input4.value) {
            alert('Ошибка: пароли не совпадают');
            return;
        }
        if (input5.value !== input4.value) {
            alert('Ошибка: пароли не совпадают');
            return;
        }
        if (!checkbox.checked) {
            alert('Поставьте галочку "согласие с условиями"');
            return;
        }
        modal.style.display = 'block';
    }

    // 6.

    let modalButton = document.getElementById('modal-button'),
        already = document.getElementsByClassName('text-account')[0],
        formTitle = document.getElementsByClassName('form-title')[0],
        fullName = document.getElementById('fullName');


    let signIn = function () {
        input1.value = '';
        input2.value = '';
        input3.value = '';
        input4.value = '';
        input5.value = '';
        formTitle.innerText = 'Log in to the system';
        fullName.remove();
        document.getElementById('e-mail').remove();
        document.getElementById('repeatPassword').remove();
        document.getElementsByClassName('agree')[0].remove();
        already.remove()
        button.value = 'Sign In';
        button.onclick = function () {
            if (!input2.value) {
                alert('Заполните username');
                return;
            }
            if (!input4.value) {
                alert('Заполните password');
                return;
            }
            if (input4.value.length < 8) {
                alert('Ошибка: пароль должен содержать не менее 8 символов');
                return;
            }
            input2.onkeydown = (e) => {
                if ((e.key === ".") || (e.key === ",")) {
                    return false;
                }
            }
            alert('Поздравляем! Вы вошли в аккаунт.')
        }
    }
// Для кнопки на модальном окне
    modalButton.onclick = function () {
        modal.style.display = 'none';
        signIn();
    }

    // Для сслыки Already
    already.onclick = function () {
        signIn();
    }
}

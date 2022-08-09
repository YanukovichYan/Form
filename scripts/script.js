// 1.
window.onload = function () {

    // 2. Запретил вводить цифры
    let input1 = document.getElementById('input-name');

    input1.onkeydown = (e) => {
        let letters = parseInt(e.key);
        if (!isNaN(letters)) {
            return false;
        }
        // console.log(e.key);
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
        modal = document.getElementById('modal'),
        errorText = document.getElementsByClassName('error-text'),
        input = document.getElementsByClassName('input');


    button.onclick = function () {

        input1.style.borderBottom = "1px solid #C6C6C4";
        input2.style.borderBottom = "1px solid #C6C6C4";
        input3.style.borderBottom = "1px solid #C6C6C4";
        input4.style.borderBottom = "1px solid #C6C6C4";
        input5.style.borderBottom = "1px solid #C6C6C4";

        input1.nextElementSibling.style.display = 'none';
        input2.nextElementSibling.style.display = 'none';
        input3.nextElementSibling.style.display = 'none';
        input4.nextElementSibling.style.display = 'none';
        input5.nextElementSibling.style.display = 'none';

        if (!input1.value.match(/^[А-ЯA-Zа-яa-z]+\s[А-ЯA-Zа-яa-z]+\s*$/)) {
            // Только русские и английские буквы + бесконечно пробелов

            input1.nextElementSibling.style.display = 'block';
            input1.style.borderBottom = "1px solid red";
            return;
        }
        if (!input2.value.match(/^[A-Za-z0-9-_]+$/)) {
            // Только буквы латинского алфавита, цифры, символ подчеркивания и тире

            input2.nextElementSibling.style.display = 'block';
            input2.style.borderBottom = "1px solid red";
            return;
        }
        if (!input3.value.match(/^.+@[a-z0-9]+\.[a-z0-9]+\s*$/)) {
            input3.nextElementSibling.style.display = 'block';
            input3.style.borderBottom = "1px solid red";
            return;
        }
        if (!input4.value) {
            // if (!input4.value.match(/^[A-Za-z0-9]+(?=.*[A-Z])$/)) {
            input4.nextElementSibling.style.display = 'block';
            input4.style.borderBottom = "1px solid red";
            return;
        }


        if (input4.value.length < 8) {
            input4.style.borderBottom = "1px solid red";
            alert('Ошибка: пароль должен содержать не менее 8 символов');
            return;
        }


        if (!input5.value) {
            input5.nextElementSibling.style.display = 'block';
            input5.style.borderBottom = "1px solid red";
            return;
        }
        if (input5.value !== input4.value) {
            input5.style.borderBottom = "1px solid red";
            alert('Ошибка: пароли не совпадают');
            return;
        }
        if (input5.value !== input4.value) {
            input5.style.borderBottom = "1px solid red";
            alert('Ошибка: пароли не совпадают');
            return;
        }
        if (!checkbox.checked) {
            alert('Поставьте галочку "согласие с условиями"');
            return;
        }
        modal.style.display = 'block';

        // let clients = [];
        // console.log(client);
        // console.log(clients);

        let client = {
            fullName: '',
            username: '',
            email: '',
            password: '',
        };

        client.fullName = input1.value;
        client.username = input2.value;
        client.email = input3.value;
        client.password = input4.value;

        let clients = localStorage.getItem('clients');

        if (clients) {
            let clientsArray = JSON.parse(clients);
            clientsArray.push(client);
            localStorage.setItem('clients', JSON.stringify(clientsArray));
        } else {
            let clientsArray = [];
            clientsArray.push(client);
            localStorage.setItem('clients', JSON.stringify(clientsArray));
        }

        // console.log(localStorage);
        // console.log(clients);
        // JSON.parse(localStorage.getItem('clients'))[0];
    }


    let modalButton = document.getElementById('modal-button'),
        already = document.getElementsByClassName('text-account')[0],
        alreadyR = document.getElementsByClassName('text-account-registration')[0],
        formTitle = document.getElementsByClassName('form-title')[0],
        fullName = document.getElementById('fullName');

    let signIn = function () {
        input1.value = '';
        input2.value = '';
        input3.value = '';
        input4.value = '';
        input5.value = '';

        button.id = 'btn';

        formTitle.innerText = 'Log in to the system';
        fullName.remove();
        document.getElementById('e-mail').remove();
        document.getElementById('repeatPassword').remove();
        document.getElementsByClassName('agree')[0].remove();
        already.remove();
        alreadyR.style.display = 'block';
        button.value = 'Sign In';

        input2.style.borderBottom = "1px solid #C6C6C4";
        input4.style.borderBottom = "1px solid #C6C6C4";

        input2.nextElementSibling.style.display = 'none';
        input4.nextElementSibling.style.display = 'none';

        let btn = document.getElementById('btn');

        btn.onclick = function () {
            signIn2();
        }
    }


    let hasError = false;

    let idx = null;


    let signIn2 = function () {

        input2.style.borderBottom = "1px solid #C6C6C4";
        input4.style.borderBottom = "1px solid #C6C6C4";

        input2.nextElementSibling.style.display = 'none';
        input4.nextElementSibling.style.display = 'none';

        if (!input2.value) {
            input2.nextElementSibling.style.display = 'block';
            input2.style.borderBottom = "1px solid red";
            return;
        }
        if (!input4.value) {
            input4.nextElementSibling.style.display = 'block';
            input4.style.borderBottom = "1px solid red";
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

        let user = JSON.parse(localStorage.getItem('clients'));

        for (let i = 0; i < user.length; i++) {
            // console.log(user[i].username);
            // console.log(user[i].password);
            // console.log(input2.value);
            // console.log(input4.value);
            // console.log(idx);

            if (input2.value === user[i].username) {
                input2.nextElementSibling.nextElementSibling.style.display = 'none';
                input2.style.borderBottom = "1px solid #C6C6C4";
                idx = i;
                if (input4.value === user[idx].password) {
                    input4.nextElementSibling.nextElementSibling.style.display = 'none';
                    input4.style.borderBottom = "1px solid #C6C6C4";
                    hasError = false;
                    console.log(hasError);
                } else {
                    input4.nextElementSibling.nextElementSibling.style.display = 'block';
                    input4.style.borderBottom = "1px solid red";
                    hasError = true;
                }
                break;

            } else {
                input2.nextElementSibling.nextElementSibling.style.display = 'block';
                input2.style.borderBottom = "1px solid red";
                hasError = true;
            }
        }

        // console.log(hasError);

        if (!hasError) {
            formTitle.innerText = 'Welcome, ' + JSON.parse(localStorage.getItem('clients'))[idx].fullName + '!';
            formTitle.style.textAlign = 'center';
            button.value = 'Exit';
            document.getElementsByClassName('form-description')[0].remove();
            document.getElementById('username').remove();
            document.getElementById('password').remove();

            // Выход в регистрацию
            if (button.value === 'Exit') {
                button.onclick = function () {
                    location.reload();
                }
            }
        }
    }





// Для кнопки на модальном окне
    modalButton.onclick = function () {
        modal.style.display = 'none';
        signIn();
    }

// Для ссылки Already
    already.onclick = function () {
        signIn();
    }

// Обновление страницы
    alreadyR.onclick = function () {
        location.reload();
    }

}

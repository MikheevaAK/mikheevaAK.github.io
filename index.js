// Отправка формы
document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('form');
    form.addEventListener('submit', formSend);

    async function formSend(e) {
        e.preventDefault();

        let error = formValidate(form);

        let formData = new FormData(form);

        if (error === 0) {
            form.classList.add('_sending');

            let response = await fetch('sendmail.php', {
                method: 'POST',
                body:formData
            });
            if (response.ok) {
                let result = await response.json();
                alert(result.message);
                fornPreview.inneerHTML = '';
                form.reset();
                form.classList.remove('_sending');
            } else {
                alert("Ошибка");
                form.classList.remove('_sending');
            }

        } else {
            alert('Заполните обязательные поля');
        }
    }

    function formValidate(form) {
        let error = 0;
        let formReq = document.querySelectorAll('._req');

        for (let i = 0; i < formReq.length; i++) {
            const input = formReq[i];
            formRemoveError(input);
            // if (input.classList.contains('joinus__form-input--tel')) {
            //     if (phoneTest(input)) {
            //         formAddError(input);
            //         error++;
            //     }
            // } else
            if (input.getAttribute("type") === "checkbox" && input.cheched === false) {
                formAddError(input);
                error++;
            } else {
                if (input.value === '') {
                    formAddError(input);
                    error++;
                }
            }
        }
        return error;
    }

    function formAddError(input) {
        input.parentElement.classList.add('_error');
        input.classList.add('_error');
    }

    function formRemoveError(input) {
        input.parentElement.classList.remove('_error');
        input.classList.remove('_error');
    }

    // Проверка телефона
    function phoneTest(input) {
        let regex = /^(\+7|7|8)?[\s\-]?\(?[489][0-9]{2}\)?[\s\-]?[0-9]{3}[\s\-]?[0-9]{2}[\s\-]?[0-9]{2}$/;
        return regex.test(input);
    }

    // burger

    const openBurgerMenuHandler = () => {
        document.querySelector('#mobile-menu').classList.add('is-active-burger');
        document.querySelector('body').style.overflow = 'hidden';
        document.querySelector('.header__menu-mobile').style.overflow = 'auto';
    }

    const closeBurgerHandler = () => {
        document.querySelector('#mobile-menu').classList.remove('is-active-burger');
        document.querySelector('body').style.overflow = 'unset';
    };

    document.querySelector('#burger').addEventListener('click', (e) => {
        openBurgerMenuHandler();
    });

    document.querySelector('#burger--close').addEventListener('click', () => {
        closeBurgerHandler();
    });

    document.querySelectorAll('.header__link-mobile').forEach((link) => {
        link.addEventListener('click', () => {
            closeBurgerHandler();
        });
    });

    document.querySelectorAll('.header__link-mobile').forEach((link) => {
        link.addEventListener('click', () => {
            document.querySelector('#mobile-menu').classList.remove('is-active-burger')
        });
    });
});
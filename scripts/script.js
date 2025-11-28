const loginForm = document.querySelector('form');

loginForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const loginInput = document.getElementById('login');
    const emailInput = document.getElementById('email');
    const phoneInput = document.getElementById('phone');
    const passwordInput = document.getElementById('password');
    
    const login = loginInput.value;
    const email = emailInput.value.trim();
    const phone = phoneInput.value.trim();
    const password = passwordInput.value;

    const errors = [];

    if (login && !login.match(/^[a-zA-Z0-9_]{3,}$/)) {
        errors.push('Логін має містити мінімум 3 символи (латиниця, цифри, _)');
    }

    if (!email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
        errors.push('Невірний формат електронної пошти');
    }

    if (phone.search(/^\+380\d{9}$/) === -1) {
        errors.push('Телефон має бути у форматі +380XXXXXXXXX');
    }

    if (!password || password.search(/\s/) !== -1 || password.length < 8) {
        errors.push('Пароль має містити щонайменше 8 символів та не повинен містити пробілів.');
    }

    if (errors.length > 0) {
        alert(errors.join('\n'));
        return;
    }
});


document.getElementById('reg-form').addEventListener('submit', function(event) {
    var password1 = document.getElementById('pass').value;
    var password2 = document.getElementById('pass2').value;

    if (password1.length < 7 || !(/[0-9]/.test(password1)) || !(/[!*\$]/.test(password1))) {
        alert('Пароль 1 не соответствует требованиям! Введите другой пароль.');
        event.preventDefault();
    } else if (password1 !== password2) {
        alert('Пароли не совпадают! Введите одинаковые пароли.');
        event.preventDefault();
    } else {

        window.location.href = "profile.html";
    }
});
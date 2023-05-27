const $ = document;
let InputNameOrEmail = $.querySelector('#nameInput');
let InputPassword = $.querySelector('#passwordInput');
let HidePasswordIcon = $.querySelector('.fa-eye');
let ShowPasswordIcon = $.querySelector('.fa-eye-slash');
let ButtonLogin = $.querySelector('.formbox_button');
let InputNameBox = $.querySelector('.formbox_name');
let InputPasswordBox = $.querySelector('#passwordbox');
let errorName = $.querySelector('.errorTextName');
let errorPassword = $.querySelector('.errorTextPassword');

InputNameOrEmail.addEventListener('change', chekNameAndMail)

function chekNameAndMail() {
    let InputValue = InputNameOrEmail.value;
    let RegexName = /^[a-zA-Z]{3,15}$/;
    let RegexMail = /^([A-Za-z\d]*)?([._])?([a-zA_Z\d]+)(@)([a-z]+)\.(com|ir|me|co|net|org|shop|xyz)$/;
    if (RegexName.test(InputValue)) {
        errorName.style.display = "none";
        InputNameOrEmail.style.border = '2px solid lightgreen'
    } else if (RegexMail.test(InputValue)) {
        errorName.style.display = "none";
        InputNameOrEmail.style.border = '2px solid green'
    } else {
        errorName.style.display = "unset";
        InputNameOrEmail.style.border = '1px solid red'
    }
}

ShowPasswordIcon.addEventListener('click', showHidePassword)

function showHidePassword() {
    if(ShowPasswordIcon.className == 'fa fa-eye-slash'){
        InputPassword.type = 'text';
        ShowPasswordIcon.className = 'fa fa-eye';
    } else {
        InputPassword.type = 'password';
        ShowPasswordIcon.className = 'fa fa-eye-slash';
    }

}

InputPassword.addEventListener('change', checkPassword);
function checkPassword() {
    let InputValue = InputPassword.value;
    let RegexPassword = /^(?=.*[\d])(?=.*[a-z])(?=.*[A_Z])[a-zA-Z\d]{8}$/;
    if (!RegexPassword.test(InputValue)) {
        errorPassword.style.display = "unset";
        InputPassword.style.border = '1px solid red'
    } else {
        InputPassword.style.border = '2px solid lightgreen'
        errorPassword.style.display = "none";
    }
}

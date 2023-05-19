const $ = document;
let InputNameOrEmail = $.querySelector('#nameInput');
let InputPassword = $.querySelector('#passwordInput');
let HidePasswordIcon = $.querySelector('.fa-eye');
let ShowPasswordIcon = $.querySelector('.fa-eye-slash');
let ButtonLogin = $.querySelector('.formbox_button');
let InputNameBox = $.querySelector('.formbox_name');
let InputPasswordBox = $.querySelector('#passwordbox');

InputNameOrEmail.addEventListener('change', chekNameAndMail)

function chekNameAndMail() {
    let InputValue = InputNameOrEmail.value;
    let RegexName = /^[a-zA-Z]{3,15}$/;
    let RegexMail = /^([A-Za-z\d]*)?([._])?([a-zA_Z\d]+)(@)([a-z]+)\.(com|ir|me|co|net|org|shop|xyz)$/;
    if (RegexName.test(InputValue)) {
        if($.querySelector('#errorNameMail')){
            $.querySelector('#errorNameMail').remove(); 
        }
        InputNameOrEmail.style.border = '2px solid lightgreen'
    } else if (RegexMail.test(InputValue)) {
        if($.querySelector('#errorNameMail')){
            $.querySelector('#errorNameMail').remove(); 
        }
        InputNameOrEmail.style.border = '2px solid green'
    } else {
        let errorElement = $.createElement('span');
        errorElement.innerText += 'مقدار وارد شده صحیح نیست';
        errorElement.className = 'errorText';
        errorElement.id = 'errorNameMail';
        console.log(errorElement);
        InputNameBox.append(errorElement);
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
}
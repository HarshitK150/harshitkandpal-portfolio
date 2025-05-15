createAccount = function () {
    // package data in a JSON object
    var data_d = {'email': email.value, 'password': password.value};

    if (password.value !== re_password.value) {
        failure.textContent = "Passwords don't match";
        return;
    }

    // SEND DATA TO SERVER VIA jQuery.ajax({})
    jQuery.ajax({
        url: "/processregister",
        data: data_d,
        type: "POST",
        success:function(returned_data) {
            returned_data = JSON.parse(returned_data);

            if ('success' in returned_data) {
                failure.textContent = "Account Created Successfully!";
            } else {
                failure.textContent = "User already exists";
            }
        }
    });
};

redirectLogin = function () {
    window.location.href = "/login";
}

const email = document.querySelector('#email');
const password = document.querySelector('#password');
const re_password = document.querySelector('#re-password');
const failure = document.querySelector('#failure');
const button = document.querySelector('#create-button');
const back_button = document.querySelector('#back-button');

button.addEventListener('click', createAccount);
back_button.addEventListener('click', redirectLogin);
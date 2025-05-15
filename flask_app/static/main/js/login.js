let count = 0;

checkCredentials = function () {
    // package data in a JSON object
    var data_d = {'email': email.value, 'password': password.value};
    console.log('data_d', data_d);

    // SEND DATA TO SERVER VIA jQuery.ajax({})
    jQuery.ajax({
        url: "/processlogin",
        data: data_d,
        type: "POST",
        success:function(returned_data) {
            returned_data = JSON.parse(returned_data);

            if ('success' in returned_data) {
                window.location.href = "/home";
            } else {
                count += 1;
                failure.textContent = "Authentication failure: " + count;
            }
        }
    });
};

redirectRegister = function () {
    window.location.href = "/register";
}

const email = document.querySelector('#email');
const password = document.querySelector('#password');
const failure = document.querySelector('#failure');
const button = document.querySelector('#submit-button');
const register_button = document.querySelector('#register-button');

button.addEventListener('click', checkCredentials);
register_button.addEventListener('click', redirectRegister);
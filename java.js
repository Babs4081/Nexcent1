const myForm = document.querySelector('#my-form');
const firstnameInput = document.querySelector('#firstname');
const lastInput = document.querySelector('#lastname');
const passwordInput = document.querySelector('#password');
const password1Input = document.querySelector('#password1');
const emailinput = document.querySelector('#email');
const msg = document.querySelector('.msg');

myForm.addEventListener('submit', onSubmit);

function onSubmit(e) {
    e.preventDefault();
    if(firstInput.value === ''|| lastinput.value === ''){
        msg.classList.add('error')
        msg.innerHTML = 'Please Enter All Fields'
        setTimeout(() => msg.remove(), 3000)
        message.push("Name is required");

    }{
        alert("Input required field")
    }
}
alert("")
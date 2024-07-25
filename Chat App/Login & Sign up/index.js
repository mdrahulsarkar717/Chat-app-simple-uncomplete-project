const passInput = document.querySelector('#pass');
const openEye = document.querySelector('.open-eye');
const closeEye = document.querySelector('.close-eye');

function CloseEyef() {
    if (passInput.type = "password") {
        passInput.type = "text";
        openEye.classList.remove('pp');
        closeEye.classList.add('pp');
    }
};
function openEyef() {
    if (passInput.type = "text") {
        passInput.type = "password";
        closeEye.classList.remove('pp');
        openEye.classList.add('pp');
    }
};
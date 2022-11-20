//FAQ
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
        } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
        }
    });
}

//form

const form = document.querySelector('.form'),
    firstName = document.getElementById('fname'),
    lastName = document.getElementById('lname'),
    email = document.getElementById('email'),
    comments = document.getElementById('comments');

function showError(input, message) {
    const formControl = input.parentElement;
    formControl.className = 'form-contrl error';
    const small = formControl.querySelector('small');
    small.innerText = message;
}

function showSuccess(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-contrl success';
}

form.addEventListener('submit', function (e) {
    e.preventDefault();

    if (firstName.value === "") {
        showError(firstName, "*Please Enter First Name")
    } else {
        showSuccess(firstName);
    }
    if (lastName.value === "") {
        showError(lastName, "*Please Enter Last Name")
    } else {
        showSuccess(lastName);
    }
    if (email.value === "") {
        showError(email, "*Please Enter Your Email")
    } else {
        showSuccess(email);
    }
    if (comments.value === "") {
        showError(comments, "*Please Enter Your Comment")
    } else {
        showSuccess(comments);
    }
})

window.scrollTo(0, 0);
window.scroll({
    top: 0,
    left: 0,
    behavior: 'smooth'
});
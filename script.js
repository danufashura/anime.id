const form = document.querySelector('form');
const fullName = document.getElementById("nama");
const email = document.getElementById("email");
const comm = document.getElementById("comment");

function sendEmail() {
        const bodyMessage = `Name: ${fullName.value}<br> Email: ${email.value}<br> Comment : ${comm.value}`;
    
Email.send({
    Host : "smtp.elasticemail.com",
    Username : "dfashura@gmail.com",
    Password : "F40E48CB30872D2F12A481368D996F4E2B44",
    To : 'dfashura@gmail.com',
    From : "dfashura@gmail.com",
    Subject : "Feedback",
    Body : "And this is the body"
}).then(
  message => {
if (message == "OK") {
Swal.fire({
title: "Berhasil!",
text: "Komentar dikirim dengan sukses!",
icon: "success"
}
}
});
);
}

function checkInputs() {
const items = document.querySelectorAll(".item");
for (const item of items) {
if (item.value == "") {
item.classList.add("error");
item.parentElement.classList.add("error");
} if (items[1].value != "") {
checkEmail();
}

items[1].addEventListener("keyup", () => {
checkEmail();
});
    
item.addEventListener("keyup", () => {
if (item.value != "") {
item.classList.remove("error");
item.parentElement.classList.remove("error");
}
});
}
}

function checkEmail() {
const emailRegex = /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,3})(\.[a-z]{2, 3})?$/;
const errorTxtEmail = document.querySelector(".et.email");
if (!email.value.match(emailRegex)) {
email.classList.add("error");
email.parentElement.classList.add("error");
if (email.value != "") {
errorTxtEmail.innerText = "Enter a valid email address";
}
else {
errorTxtEmail.innerText = "Email Address can't be blank";
}
}
else {
email.classList.remove("error");
email.parentElement.classList.remove("error");
}
}

form.addEventListener("submit", (e) => {
e.preventDefault();
sendEmail();
});
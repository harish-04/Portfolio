/*================== Menu icon navbar ==========================*/ 
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () =>{
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

/*================== extra content ==========================*/ 


function toggleContent() {
    var extraContent = document.getElementById('extra-content');
    var buttonText = document.getElementById('toggleBtn');

    if (extraContent.style.display === 'none') {
        extraContent.style.display = 'block';
        buttonText.textContent = 'Read Less';
    } else {
        extraContent.style.display = 'none';
        buttonText.textContent = 'Read More';
    }
}

/*================== service extra content ==========================*/ 

function servicestoggleContent(button) {
    var serviceDetails = button.previousElementSibling;

    if (serviceDetails.style.display === 'none') {
        serviceDetails.style.display = 'block';
        button.textContent = 'Read Less';
    } else {
        serviceDetails.style.display = 'none';
        button.textContent = 'Read More';
    }
}



/*================== Success prompt ==========================*/ 

const form = document.querySelector('form');
const fullName = document.getElementById("name");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const subject = document.getElementById("subject");
const message = document.getElementById("message");

function sendEmail(){
const bodyMessage =`Full Name: ${fullName.value}<br>
                    Email: ${email.value}<br>
                    Phone Number: ${phone.value}<br>
                    Message: ${message.value}`;

    Email.send({
        SecureToken :"5718c176-1663-4af7-9812-4103a3e085e7",
        To : 'harishvithanala04@gmail.com',
        From : "harishvithanala04@gmail.com",
        Subject : subject.value,
        Body : bodyMessage
    }).then(
      message =>{
        if(message=="OK"){
            Swal.fire({
                title: "Success!",
                text: "Message sent successfully!",
                icon: "success",
                customClass: {
                    popup: 'my-popup-class',
                }
            }).then((result) => {
                // Check if the user clicked "OK"
                if (result.isConfirmed) {
                    // Refresh the page
                    location.reload();
                }
            });
        }else {
            Swal.fire({
                title: "Error!",
                text: "Failed to send message.",
                icon: "error",
                customClass: {
                    popup: 'my-popup-class',
                }
            });
        }
      }
    );
}

function checkInputs(){
    const items = document.querySelectorAll(".item");

    for(const item of items){
    
        if(item.value == ""){
            item.classList.add("error");
            item.parentElement.classList.add("error");
        }

        item.addEventListener("keyup",()=>{
            if(item.value != ""){
                item.classList.remove("error");
                item.parentElement.classList.remove("error");
            }else{
                item.classList.add("error");
                item.parentElement.classList.add("error");
            }
        });
    }
}

function validateName(){
    const nameRegex =/^[A-Za-z]+(?:\s[A-Za-z]+)+$/;
    // /^[A-za-z]*\s[A-za-z]*$/;
    const errorTxtName = document.querySelector(".error-txt.name");

    if(!fullName.value.match(nameRegex)){
        fullName.classList.add("error");
        fullName.parentElement.classList.add("error");

        if(fullName.value.length == 0){
            errorTxtName.innerText = "Name is required";
        }else{
            errorTxtName.innerText ="Write full name";
        }
    }else{
        fullName.classList.remove("error");
        fullName.parentElement.classList.remove("error");
    }
}

function checkEmail(){
    const emailRegex = /^([a-z\d\.-]+)@([a-z]{2,}[a-z\d-]*)\.([a-z]{2,3})(\.[a-z]{2,3})?$/;

    const errorTxtEmail = document.querySelector(".error-txt.email")

    if(!email.value.match(emailRegex)){
        email.classList.add("error");
        email.parentElement.classList.add("error");

        if(email.value != ""){
            errorTxtEmail.innerText = "Enter a valid email address";
        }
        else{
            errorTxtEmail.innerText = "Email Address can't be blank";
        }
    }else{
        email.classList.remove("error");
        email.parentElement.classList.remove("error");
    }
}

function validatePhone(){
    const phoneRegex = /^[0-9]{10}$/;
    const errorTxtPhone = document.querySelector(".error-txt.phone");
    

    if(!phone.value.match(phoneRegex)){
        phone.classList.add("error");
        phone.parentElement.classList.add("error");

        if(phone.value.length === 0){
            errorTxtPhone.innerText = "Phone Number is required";
        }else if(!phone.value.match(/^\d+$/)){
            errorTxtPhone.innerText = "Phone Number should contain only digits 0-9";
        }else if (!/^\d/.test(phone.value)) {
            errorTxtPhone.innerText = "Phone Number should start with a digit";
        }else if(phone.value.length !== 10){
            errorTxtPhone.innerText ="Phone Number should be 10 digits";
        }
        else{
            errorTxtPhone.innerText = "Invalid Phone Number";
        }
    }else{
        phone.classList.remove("error");
        phone.parentElement.classList.remove("error");
    }
}

function validateSubject(){
    const subjectRegex = /^(?:\S+\s*){1,}$/;
    const errorTxtSubject = document.querySelector(".error-txt.name");

    if(!subject.value.match(subjectRegex)){
        subject.classList.add("error");
        subject.parentElement.classList.add("error");

        if(subject.value != ""){
            errorTxtSubject.innerText = "Subject can't be blank";
        }

    }else{
        subject.classList.remove("error");
        subject.parentElement.classList.remove("error");
    }
}


form.addEventListener("submit", (e) => {
    e.preventDefault();
    checkInputs();

    if(!fullName.classList.contains("error") && !email.classList.contains("error") && !phone.classList.contains("error") && !subject.classList.contains("error") && !message.classList.contains("error")){
        sendEmail();

        form.reset();
        return false;
    }
});



/*================== scroll section active link ==========================*/ 

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {

    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top>= offset && top < offset + height) {
            navLinks.forEach(links =>{
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });

/*================== sticky navbar ==========================*/ 

let header = document.querySelector('.header');
header.classList.toggle('sticky', window.scrollY > 100);

/*==================Remove Menu icon navbar when click navbar link(scroll) ==========================*/ 
menuIcon.classList.remove('bx-x');
navbar.classList.remove('active');

};

/*================== Dark light mode ==========================*/ 

let darkModeIcon = document.querySelector('#darkMoon-icon');
darkModeIcon.onclick = () =>{
    darkModeIcon.classList.toggle('bx-sun');
    document.body.classList.toggle('dark-mode');
}

/*================== Scroll reveal ==========================*/ 

ScrollReveal({ 
    reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });

ScrollReveal().reveal('.home-img img, .skills-box ,.services-container, .portfolio-box, .contact form', { origin: 'bottom' });

ScrollReveal().reveal('.home-content h1, .about-img img', { origin: 'left' });

ScrollReveal().reveal('.home-content h3, .home-content p ,.about-content', { origin: 'right' });
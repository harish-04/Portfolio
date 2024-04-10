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
        Host : "smtp.elasticemail.com",
        Username : "harishvithanala04@gmail.com",
        Password : "75385BF0B8402FA51982BEB81F6B2F6F5F1F",
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
                    // window.scrollTo({ top: 0, behavior: 'smooth' });
                }
            });
        }
      }
    );
}


form.addEventListener("submit", (e) => {
    e.preventDefault();

    sendEmail();
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
    reset: true ,
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });

ScrollReveal().reveal('.home-img img, .services-container, .portfolio-box, .contact form', { origin: 'bottom' });

ScrollReveal().reveal('.home-content h1, .about-img img', { origin: 'left' });

ScrollReveal().reveal('.home-content h3, .home-content p ,.about-content', { origin: 'right' });
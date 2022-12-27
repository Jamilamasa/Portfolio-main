const work = new Work();
// About me script
const skillsTab = document.querySelector('.skills-tab');
const experienceTab = document.querySelector('.experience-tab');
const educationTab = document.querySelector('.education-tab');

const skillsContent = document.getElementById('skills')
const experienceContent = document.getElementById('experience')
const educationContent = document.getElementById('education')

// add eventListeners
skillsTab.addEventListener('click', showSkills);
experienceTab.addEventListener('click', showExperience);
educationTab.addEventListener('click', showEducation);

function showSkills(){
    skillsTab.classList.add('active-link');
    experienceTab.classList.remove('active-link');
    educationTab.classList.remove('active-link');

    skillsContent.classList.add('show');
    experienceContent.classList.remove('show');
    educationContent.classList.remove('show');
}
function showExperience(){
    skillsTab.classList.remove('active-link');
    experienceTab.classList.add('active-link');
    educationTab.classList.remove('active-link');

    skillsContent.classList.remove('show');
    experienceContent.classList.add('show');
    educationContent.classList.remove('show');
}
function showEducation(){
    skillsTab.classList.remove('active-link');
    experienceTab.classList.remove('active-link');
    educationTab.classList.add('active-link');

    skillsContent.classList.remove('show');
    experienceContent.classList.remove('show');
    educationContent.classList.add('show');
}

// My work (show more)
const showMoreBtn = document.querySelector('.show-more');
const showLessBtn = document.querySelector('.show-less');
const workList = document.querySelector('.work-list')



showMoreBtn.addEventListener('click', (e)=>{
    work.getWork().then((works)=>{
        output = ''
        works.forEach((work)=>{
            output += `
            <div class="work more-work">
            <img src=${work.img} alt=${work.title}>
            <div class="layer">
                <h3>${work.title}</h3>
                <p>${work.about}</p>
                <a href="${work.url}" target="_blank"><i class="fa-solid fa-arrow-up-right-from-square"></i></a>
            </div>
        </div>
            `
        })
        workList.innerHTML += output;
    })
    showMoreBtn.style.display = "none"
    showLessBtn.classList.remove('hide')
    e.preventDefault()
})
showLessBtn.addEventListener('click', (e)=>{
    const works = document.querySelectorAll('.work');
    works.forEach((work)=>{
        if(work.classList.contains('more-work')){
            work.style.display = "none";
        }
    })

    showLessBtn.classList.add('hide')
    showMoreBtn.style.display = "block"
    e.preventDefault()
})
// Hamurger menu 
const hamBurger = document.querySelector('.fa-bars');
const menu = document.querySelector('.menu');
const closeIcon = document.querySelector('.fa-times');
// show menu
hamBurger.addEventListener('click', ()=>{
    menu.style.right = 0;
})
// hide menu
closeIcon.addEventListener('click', ()=>{
    menu.style.right = "-50vw";
})

// form validation with regular expressions
const nameInput = document.querySelector('[name="name"]');
const emailInput = document.querySelector('[name="email"]');
const messageInput = document.querySelector('[name="message"]');

nameInput.addEventListener('blur', validateName);
emailInput.addEventListener('blur', validateEmail);
messageInput.addEventListener('blur', validateMessage);

function validateName(e) {
    const nameDiv = document.querySelector('.nameInput')
    const name =  e.target.value;
    const re = /^[a-zA-Z\s]{2,20}$/i

    if(re.test(name)){
        nameDiv.classList.remove('nameErr');
    } else {
        nameDiv.classList.add('nameErr');
    }

}
function validateEmail(e) {
    const emailDiv = document.querySelector('.emailInput')
    const name =  e.target.value;
    const re = /^([a-zA-Z0-9\.\_\-]+)@([a-zA-Z0-9\.\_\-]+)\.([a-zA-Z]{2,5})$/

    if(re.test(name)){
        emailDiv.classList.remove('emailErr');
    } else {
        emailDiv.classList.add('emailErr');
    }
    
}
function validateMessage(e) {
    const messageDiv = document.querySelector('.messageInput')
    const name =  e.target.value;
    const re = /\b\S+\b/g
          ///^[\w\W\d\D\s\S]{10,200}$/

    if(name.match(re)){
        messageDiv.classList.remove('messageErr');}
    else {
        messageDiv.classList.add('messageErr')
    }
    //if(re.test(name)){
      //  messageDiv.classList.remove('messageErr');
    //} else {
      //  messageDiv.classList.add('messageErr');
    //}
}

// Sticky navbar background
window.addEventListener('scroll', function() {
    if (window.scrollY > 150) {
        this.document.querySelector('.nav-bar').style.opacity = 0.9;
    } else {
        this.document.querySelector('.nav-bar').style.opacity = 1;
    }
});

// Smooth scrolling
$('.nav-bar a').on('click', function(event) {
    if (this.hash !== '') {
        event.preventDefault();

        const hash = this.hash;

        $('html, body').animate(
            {
                scrollTop: $(hash).offset().top - 80
            },
            800
        );
    }
});

// LightMode/DarkMode
const sun = document.querySelector('.sun');
const moon = document.querySelector('.moon');
const body = document.getElementById('home');

sun.addEventListener('click', lightTheme);
moon.addEventListener('click', darkTheme);

function darkTheme() {
    body.classList.remove('light-mode');
    sun.classList.remove('hide');
    moon.classList.add('hide');
}

function lightTheme() {
    body.classList.add('light-mode');
    sun.classList.add('hide');
    moon.classList.remove('hide');
}

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
const workList = document.querySelector('.work-list')
const works = document.querySelectorAll('.work');


showMoreBtn.addEventListener('click', (e)=>{
    work.getWork().then((works)=>{
        output = ''
        works.forEach((work)=>{
            output += `
            <div class="work">
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
    e.preventDefault()
})


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


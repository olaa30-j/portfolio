// ================================ project data ========================================== //
const projects = [
    {
        "name": "Gamez",
        "github": "https://github.com/olaa30-j/Gamez",
        "demo": "https://yourproject1demo.com",
        "video": "https://www.youtube.com/embed/E0vjqq66yC0?si=XbtDDrHsxiHtuJkJ",
        "type" :'react',
    },
    {
        "name": "Budget Master",
        "github": "https://github.com/olaa30-j/Budget-Master",
        "demo": "https://yourproject1demo.com",
        "video": "https://www.youtube.com/embed/qRTQmY5AtkQ?si=VJr0psSauxlPCHCR",
        "type" :'react',
    },
    {
        "name": "Classy",
        "github": "https://github.com/olaa30-j/Classy",
        "demo": "https://yourproject1demo.com",
        "video": "https://www.youtube.com/embed/C4X8kh3TWtM?si=c6ZG97jR1rUTNjA3",
        "type" :'react',
    },
    {
        "name": "Kids E-book",
        "github": "https://github.com/olaa30-j/kids-e-book",
        "demo": "https://elegant-nougat-9f26a0.netlify.app/",
        "video": "https://www.youtube.com/embed/xYBKFdxzmJs?si=rorJrI4QtRc4jPHw",
        "type" :'website',
    },
];

const projectsContainer = document.getElementById('projects');
const filterButtons = document.querySelectorAll('.filter_item');

function renderProjects(filteredProjects) {
    projectsContainer.innerHTML = ''; 

    filteredProjects.forEach(project => {
        const projectHTML = `
        <article class="portfolio_item" data-filter="${project.type}">
            <iframe 
                width="100%" 
                height="100%" 
                src="${project.video}"
                title="YouTube video player" 
                frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                allowfullscreen
            ></iframe>
            <div class="card__content">
                <h2 class="card__title">${project.name}</h2>

                <div class="btns">
                <a href='${project.github}' class="github-button">
                    Github
                </a>
                <a formaction class="card__button" href='${project.demo}'>Live Demo</a>
                </div>
            </div>
        </article>
        `;
        projectsContainer.innerHTML += projectHTML;
    });
}

filterButtons.forEach(button => {
    const filterValue = button.getAttribute('data-filter');
    button.addEventListener('click', () => {
        if (!button.classList.contains('active')) {
            filterButtons.forEach(b => b.classList.remove('active'));
            button.classList.add('active');
        }
        const filteredProjects = filterValue === 'all' ? projects : projects.filter(project => project.type === filterValue);
        renderProjects(filteredProjects);
    });
});

renderProjects(projects);


// ================================ type animation ========================================== //
let typed = new Typed(".job", {
    strings:["Web Developer.", "Frontend Developer.", "React Developer."],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
})  
// ===================================== dark and light mode =================================//
const modeButton = document.getElementById('mode_button');
const themePreferenceKey = "themePreference";

const setThemePreferenceKey = (theme) =>{
    localStorage.setItem(themePreferenceKey, theme);
}

const getThemePreferenceKey = () =>{
    localStorage.getItem(themePreferenceKey);
}

const toggleMode = ()=>{
    modeButton.querySelector(".mode").classList.toggle("fa-sun");
    modeButton.querySelector(".mode").classList.toggle("fa-moon");
    document.body.classList.toggle("dark");

    const currentMode = document.body.classList.contains(darkModeClass) ? 'dark' : 'light';
    localStorage.setItem(modePreferenceKey, currentMode);
})

modeButton.addEventListener("click",toggleMode);

document.addEventListener('DOMContentLoaded', () => {
    const savedMode = localStorage.getItem(modePreferenceKey);
    if (savedMode === 'dark') {
        toggleMode();
    }
});
// ===================================== theme color =========================================//
const themeBtn = document.querySelector(".theme");
const themes = document.querySelector(".themes");
const colorSwitcher = document.querySelector(".color_switcher");
const themeBtns = document.querySelectorAll(".theme_btns");
const colorWord = document.querySelector(".color_word");

themeBtn.addEventListener("click", ()=>{
    colorSwitcher.classList.toggle('color_switcher_show');
    colorSwitcher.classList.remove('color_switcher_show');
    colorWord.classList.add("hidden_items");
    themes.style.display = "flex";
})

themeBtns.forEach(color =>{
    color.addEventListener("click", ()=>{
        let dataColor = color.getAttribute("data-color");
        document.querySelector(":root").style.setProperty("--main-color", dataColor);
        colorSwitcher.classList.remove('color_switcher_show');
        colorWord.classList.remove("hidden_items");
        themes.style.display = "none";
    })
})

// ================================= toggle button ========================================== //
const toggleBtn = document.querySelector(".toggle");
const aside = document.getElementById("aside");
const mainContent = document.querySelector(".main_content");
const navLinks = document.querySelectorAll(".nav_link");
const sections = document.querySelectorAll(".section");

toggleBtn.addEventListener("click", ()=>{
    aside.classList.add("hidden");
    aside.style.width = "100%";
    mainContent.style.display= "none";
})

navLinks.forEach(navLink => {
    navLink.addEventListener("click", function() {
        aside.classList.remove("hidden");
        mainContent.style.display = "block";

        for (let i = 0; i < navLinks.length; i++) {        
            if (navLinks[i].classList.contains("active")) {
                sections[i].classList.add("back-section");
            }
        
            navLinks[i].classList.remove("active");
        }
        

        this.classList.add("active");
        showSection(this);
    });
});


const showSection = (element) => {
    sections.forEach(sec => {
        sec.classList.remove("active");
    });

    let target = element.getAttribute("href").split("#")[1];
    document.querySelector("#" + target).classList.add("active");
};

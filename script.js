// Responsive Menu Bar
let toggleButton = document.getElementById('bars');
let toggleIcon = document.getElementById('bars-icon');
let navbar = document.getElementsByClassName('navbar')[0];

toggleButton.addEventListener('click', ()=> {
    navbar.classList.toggle('active');
    toggleIcon.classList.toggle('fa-times')
})

// Back to Top Button
let calcScrollValue = () => {
    let scrollProgress = document.getElementById("progress");
    let progressValue = document.getElementById("progress-value");

    let pos = document.documentElement.scrollTop;
    let calcHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;

    let scrollValue = Math.round((pos*100)/calcHeight)

    if(pos > 100) {
        scrollProgress.style.display = 'grid';
    } else {
        scrollProgress.style.display = 'none';
    }

    scrollProgress.addEventListener('click', ()=> {
        document.documentElement.scrollTop = 0;
    })
    scrollProgress.style.background = `conic-gradient(#FE0F53 ${scrollValue}%, #d7d7d7 ${scrollValue}%)`
}

window.onscroll = calcScrollValue;
window.onload = calcScrollValue;

// Dark Mode
let mode = document.querySelector('.mode');
let sectionHeader = document.querySelector('section.header');

mode.addEventListener('click', ()=> {
    document.body.classList.toggle('change-color');
    sectionHeader.classList.toggle('dark');
})
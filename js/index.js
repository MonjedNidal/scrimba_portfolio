const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelectorAll('.nav__link');


navToggle.addEventListener('click', () => {
    document.body.classList.toggle('nav-open');
    // test = true;
})

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        document.body.classList.remove('nav-open');
    })
})
// if(test == true)
// const navToggle = document.querySelector('.nav-toggle');

// const navClose = document.querySelector('.nav-toggle');
// navToggle.addEventListener('click', ()=> {
//     document.body.classList.remove('nav-open');
// })


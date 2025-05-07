let nav = document.querySelector('.nav-respo')
let navbar = document.querySelector('.navbar-nav')
let mybody = document.querySelector('body')
let closenav = document.querySelector('.close-nav')
nav.addEventListener('click' , () => {
    navbar.style.left = '5vw' ;
    mybody.classList.add('overflow')
    closenav.classList.add('displayclose-nav')
})
closenav.addEventListener('click' , ()=>{
    navbar.style.left = '-200%' ;
    mybody.classList.remove('overflow')
    closenav.classList.remove('displayclose-nav')
})
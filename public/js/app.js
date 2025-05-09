let nav = document.querySelector('.nav-respo')
let navbar = document.querySelector('.navlist')
let mybody = document.querySelector('body')
let closenav = document.querySelector('.close-nav')
nav.addEventListener('click', () => {
    navbar.style.left = '5vw';
    mybody.classList.add('overflow')
    closenav.classList.add('displayclose-nav')
})
closenav.addEventListener('click', () => {
    navbar.style.left = '-200%';
    mybody.classList.remove('overflow')
    closenav.classList.remove('displayclose-nav')
})


//! modal book a table
let buttons = document.querySelectorAll(".modal-btn")



buttons.forEach(btn => {

    btn.addEventListener("click", () => {

        let myAttribute = btn.getAttribute("my-attribute")
        let modal = document.getElementById(myAttribute)

        document.body.style.overflow = "hidden"
        modal.style.display = "initial"
        modal.parentElement.style.display = "initial"

        const closeModal = () => {
            modal.style.display = "none"
            modal.parentElement.style.display = "none"
            document.body.style.overflow = "auto"
        }

        let closes = document.querySelectorAll(".close-btn")
        let sends = document.querySelectorAll(".send-btn")

        closes.forEach(close => {
            close.addEventListener("click", closeModal)
        });
        sends.forEach(send => {
            send.addEventListener("click", closeModal)
        });

        

    })

});


//~ Menu Filter
let filterButtons = document.querySelectorAll(".menu-filters a");
let filterableItems = document.querySelectorAll(".menu-items .menu-item");

function setActive(elements, className, activeElement) {
    elements.forEach(el => el.classList.remove(className));
    activeElement.classList.add(className);
}

function filterItems() {
    const filter = this.dataset.name;

    setActive(filterButtons, "filter-active", this);

    filterableItems.forEach(item => {
        item.classList.add("menu-hide");

        if (filter === "all" || item.dataset.name === filter) {
            item.classList.remove("menu-hide");
        }
    });
}

filterButtons.forEach(btn => btn.addEventListener("click", filterItems));
//! nav responsive
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


//! Menu Filter
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


//! Carousel 
let nextBtns = document.querySelectorAll(".next-btn")
let previousBtns = document.querySelectorAll(".previous-btn")
let containers = document.querySelectorAll(".carousel-container")

let carouselIndexes = {}

for (let i = 0; i < nextBtns.length; i++) {
    nextBtns[i].addEventListener("click", function (e) {
        let target = this.getAttribute("carousel-target")
        let targetID = 0
        if (carouselIndexes[target] !== undefined) {
            targetID = carouselIndexes[target]
        }
        slider(targetID + 1, target)
    })
}

for (let i = 0; i < previousBtns.length; i++) {
    previousBtns[i].addEventListener("click", function (e) {
        let target = this.getAttribute("carousel-target")
        let targetID = 0
        if (carouselIndexes[target] !== undefined) {
            targetID = carouselIndexes[target]
        }
        slider(targetID - 1, target)
    })
}

function slider(index, target) {
    for (let i = 0; i < containers.length; i++) {
        let container = containers[i]
        if (container.id == target) {
            let camera = container.querySelector(".carousel")
            let slides = container.querySelectorAll(".slide")
            if (slides.length === 0) {
                return
            }
            let slideWidth = slides[0].offsetWidth
            if (!slideWidth) {
                slideWidth = slides[0].clientWidth
            }
            if (index < 0) {
                index = slides.length - 1
            } else if (index >= slides.length) {
                index = 0
            }
            camera.style.transform = "translateX(-" + (slideWidth * index) + "px)"
            carouselIndexes[target] = index
        }
    }
}

let showCarouselBtn = document.getElementById("show-carousel")
showCarouselBtn.addEventListener("click", function (e) {
    e.preventDefault()
    let carousel1 = document.getElementById("carousel1")
    carousel1.style.display = "block"
    showCarouselBtn.style.display = "none"
})

let closeCarouselBtn = document.getElementById("close-carousel2")
closeCarouselBtn.addEventListener("click", function () {
    let carousel1 = document.getElementById("carousel1")
    carousel1.style.display = "none"
    let showCarouselBtn = document.getElementById("show-carousel")
    showCarouselBtn.style.display = "inline"
})


//! Specials Filter 
let specialsFilterBtns = document.querySelectorAll(".s-left-filter .filter-btn a");
let specialsDishes = document.querySelectorAll(".s-right-dishes .tab-pane");

specialsFilterBtns.forEach(btn => {
    btn.addEventListener("click", function (e) {
        e.preventDefault();

        specialsFilterBtns.forEach(b => b.classList.remove("active", "show"));
        this.classList.add("active", "show");

        let name = this.getAttribute("data-name");
        specialsDishes.forEach(dish => {
            if (dish.getAttribute("data-name") === name) {
                dish.classList.add("active", "show");
            } else {
                dish.classList.remove("active", "show");
            }
        });
    });
});

// ! Event Carousel
let track = document.querySelector('.event-track')
let slides = Array.from(track.children)
let indicators = document.querySelectorAll('.event-indicator')
indicators.forEach(indicator => {
    indicator.addEventListener('click', () => {
    let index = parseInt(indicator.getAttribute('data-index'))
    let slideWidth = slides[0].getBoundingClientRect().width
      track.style.transform = `translateX(-${slideWidth * index}px)`
        indicators.forEach(ind => ind.classList.remove('active'))
        indicator.classList.add('active')
    });
});
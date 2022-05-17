"use strict";

// smooth scrolling

const scrollLinks = document.querySelectorAll('.link-menu')
const checkButton = document.querySelector('.toggler');

scrollLinks.forEach(link => {
    link.addEventListener('click', (event) => {
        event.preventDefault()
        const href = link.getAttribute('href')
        document.querySelector(href).scrollIntoView({
            behavior: 'smooth'
        })
        checkButton.click()
    })
})

// nav background on scroll event

const navText = document.querySelectorAll('.scroll')
const navBackground = document.querySelector('.large-menu')
let lastKnownScrollPosition = 0;
let ticking = false;

const addBackground = e => {
    let scrollY = this.scrollY;

    if (scrollY > 400) {
        navBackground.style.animationName = "nav-back";
        navText.forEach((e) => { e.style.animationName = "nav-text" })
    } else {
        navBackground.style.animationName = "no-nav-back";
        navText.forEach((e) => { e.style.animationName = "no-nav-text" })
    }
}

document.addEventListener('scroll', (e) => {
    lastKnownScrollPosition = window.scrollY;
    addBackground(lastKnownScrollPosition);
})

// info and attraction toggle event

const infoPop = document.querySelector('.about_info_click')
const attractionsPop = document.querySelector('.attractions_info_click')
const infoContainer = document.querySelector('.about_info_small')
const attractionsContainer = document.querySelector('.attractions_info_small')
const clickText1 = document.querySelector('.click-text-1')
const clickText2 = document.querySelector('.click-text-2')

// open info about
const openInfo = e => {
    clickText1.style.display = "none"
    infoPop.style.animationName = "popInfo"
    setTimeout(() => { infoContainer.style.display = "block" }, 800)
}

// open info attractions
const openAtt = e => {
    clickText2.style.display = "none"
    attractionsPop.style.animationName = "popInfo2"
    setTimeout(() => { attractionsContainer.style.display = "block" }, 800)
}

// close info about
const closeInfo = e => {
    infoContainer.style.display = "none"
    clickText1.style.display = "block"
    infoPop.style.animationName = "closeInfo"
}

// close info attractions
const closeAtt = e => {
    attractionsContainer.style.display = "none"
    clickText2.style.display = "block"
    attractionsPop.style.animationName = "closeInfo2"
}

// arrow toggle
const arrowToggle1 = document.querySelector('#arrow-toggle')
const arrowToggle2 = document.querySelector('#arrow-toggle2')

// arrow toggle about
arrowToggle1.addEventListener('click', e => {
    if (arrowToggle1.className == "closed") {
        arrowToggle1.style.animationName = "toggle-rotate"
        openInfo()
        arrowToggle1.classList.remove("closed")
    } else {
        arrowToggle1.style.animationName = "untoggle-rotate"
        closeInfo()
        arrowToggle1.classList.add("closed")
    }
})

// arrow toggle attractions
arrowToggle2.addEventListener('click', e => {
    if (arrowToggle2.className == "closed") {
        arrowToggle2.style.animationName = "toggle-rotate2"
        openAtt()
        arrowToggle2.classList.remove("closed")
    } else {
        arrowToggle2.style.animationName = "untoggle-rotate2"
        closeAtt()
        arrowToggle2.classList.add("closed")
    }
})

clickText2.addEventListener('click', openAtt)

// closing info with escape
document.addEventListener('keyup', event => {
    if (event.key === 'Escape') {
        closeInfo()
        closeAtt()
    }
})

// placeholder text on press

const inputName = document.getElementById('name')
const inputEmail = document.getElementById('email')

const formPlaceholder = (el, place) => {
    document.addEventListener('click', (event) => {
        let clickedEvent = event.target
        do {
            if (clickedEvent === el) {
                return el.placeholder = ''
            }
            clickedEvent = clickedEvent.parentNode;
        } while (clickedEvent);
        el.placeholder = place
    })
}

formPlaceholder(inputName, 'Name')
formPlaceholder(inputEmail, 'Email')


// textarea text on press

document.addEventListener('click', (event) => {
    const textarea = document.querySelector('textarea')
    let clickedEvent = event.target

    do {
        if (clickedEvent === textarea) {
            return textarea.innerHTML = ''
        }
        clickedEvent = clickedEvent.parentNode;
    } while (clickedEvent);
    textarea.innerHTML = 'Message'
})
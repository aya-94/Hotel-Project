"use strict";

// smooth scrolling
const scrollLinks = document.querySelectorAll('.js-scroll')

scrollLinks.forEach(link => {
  link.addEventListener('click', (event) => { 
    event.preventDefault()
    const href = link.getAttribute('href')   
    document.querySelector(href).scrollIntoView({ 
      behavior: 'smooth' 
    })
  })
})



// textarea text on press

document.addEventListener('click', (event) => {
    const textarea = document.querySelector('.form_txt')
    let clickedEvent = event.target

    do {
    if(clickedEvent === textarea){
        return textarea.innerHTML = ''
    }
    clickedEvent = clickedEvent.parentNode;
    } while (clickedEvent);

     textarea.innerHTML = 'Message'
})

const inputName = document.getElementById('name')
const inputEmail = document.getElementById('email')


// placeholder text on press
function formPlaceholder (el, place) {
    document.addEventListener('click', (event) => {
  
        let clickedEvent = event.target
        do {
        if(clickedEvent === el){
            return el.placeholder = ''
        }
        clickedEvent = clickedEvent.parentNode;
        } while (clickedEvent);
    
         el.placeholder = place
    })
}
formPlaceholder(inputName, 'Name')
formPlaceholder(inputEmail, 'Email')



// pop info

const infoPop = document.querySelector('.about_info_click')
const attractionsPop = document.querySelector('.attractions_info_click')
const infoContainer = document.querySelector('.about_info_small')
const attractionsContainer = document.querySelector('.attractions_info_small')
const clickText = document.querySelector('.click-text')
const clickTextA = document.querySelector('.click-textA')

// open info about
const openInfo = e => {
  clickText.style.display = "none"
  infoPop.style.animationName = "popInfo"
  setTimeout(() => {infoContainer.style.display = "block"}, 800)
}

// open info attractions
const openAtt = e => {
  clickTextA.style.display = "none"
  attractionsPop.style.animationName = "popInfo2"
  setTimeout(() => {attractionsContainer.style.display = "block"}, 800)
}

// close info about
const closeInfo = e => {
  infoContainer.style.display = "none"
  clickText.style.display = "block"
  infoPop.style.animationName = "closeInfo"
}

// close info attractions
const closeAtt = e => {
  attractionsContainer.style.display = "none"
  clickTextA.style.display = "block"
  attractionsPop.style.animationName = "closeInfo2"
}

// arrow toggle

const arrowToggle = document.querySelector('#arrow-toggle')
const arrowToggle2 = document.querySelector('#arrow-toggle2')

//arrow toggle about
arrowToggle.addEventListener('click', e => {
  if (arrowToggle.className == "closed") {
    arrowToggle.style.animationName = "toggle-rotate"
    openInfo()
    arrowToggle.classList.remove("closed")
  } else {
    arrowToggle.style.animationName = "untoggle-rotate"
    closeInfo()
    arrowToggle.classList.add("closed")
  }
  })

  //arrow toggle attractions
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




clickTextA.addEventListener('click', openAtt)

// closing info with escape
document.addEventListener('keyup', event => {
  if (event.key === 'Escape') {
    closeInfo()
    closeAtt()
  }
})




// nav scroll event
const navText = document.querySelectorAll('.nav-color')
const navBackground = document.querySelector('.nav_lap')



let lastKnownScrollPosition = 0;
let ticking = false;


const doSomething = e => {

  let scrollY = this.scrollY;
  if(scrollY > 400) {
      navBackground.style.animationName = "nav-back";
  navText.forEach(function(e) {e.style.animationName = "nav-text"})
  } else {
      navBackground.style.animationName = "no-nav-back";
  navText.forEach(function(e) {e.style.animationName = "no-nav-text"})
  }
}


document.addEventListener('scroll', function(e) {
  lastKnownScrollPosition = window.scrollY;
      doSomething(lastKnownScrollPosition);

})

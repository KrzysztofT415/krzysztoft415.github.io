window.onload = () => {
    particlesJS.load('particles-js', 'particles/particles.json')
}

let languages = ['en', 'pl']
let language = 'en'

languages.map(language => {
    if (language !== 'en') {
        let elements = document.getElementsByClassName(language)
        for (let i = 0; i < elements.length; i++) {
            elements[i].classList.add('hidden')
        }
    }
})

let changeLanguage = () => {

    let elements = document.getElementsByClassName(language)
    for (let i = 0; i < elements.length; i++) {
        elements[i].classList.add('hidden')
    }

    language = languages[(languages.indexOf(language) + 1) % languages.length]

    elements = document.getElementsByClassName(language)
    for (let i = 0; i < elements.length; i++) {
        elements[i].classList.remove('hidden')
    }

}

let openMenu = (evt, menuName) => {

    let links = document.getElementsByClassName('nav-link')
    for (let i = 0; i < links.length; i++) {
        if (links[i].classList.contains('active')) {
            links[i].classList.toggle('active')
        }
    }

    let sections = document.querySelectorAll("section")
    for (let i = 0; i < sections.length; i++) {
        if (sections[i].classList.contains('active')) {
            sections[i].classList.toggle('active')
        }

        if (sections[i].classList.contains(menuName)) {
            sections[i].classList.toggle('active')
        }
    }

    evt.currentTarget.classList.toggle('active')
}
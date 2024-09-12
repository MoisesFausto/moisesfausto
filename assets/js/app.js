require('./nav');

const date = new Date;
const currentYear = date.getFullYear()

// Bloco Home
const exp = document.getElementById('exp')
const expTot =  currentYear - 2018;
if(exp) exp.innerText = `${expTot} anos`

// Bloco Footer
if (currentYear === 2024)
    document.getElementById('current-year').innerText = currentYear
else
    document.getElementById('current-year').innerText = `2024 - ${currentYear}`


// Menu
const menuBtn = document.getElementById('menu-collapse')
const navbar = document.getElementById('navbar-default')
menuBtn.addEventListener('click', () => {
    navbar.classList.toggle('hidden')
})

// Limite de texto
const descriptions = document.querySelectorAll('#description')
if (descriptions.length) {
    descriptions.forEach(description => {
        if (description.innerText.length >= 94) description.innerText = `${description.innerText.slice(0, 94)}...`
    })
}

// Easter Egg
window.addEventListener('load', () => {
    console.clear();

    console.log('%cMoisés Fausto', 'color: #f97316; font-size: 3rem; font-weight: 700')
    console.log('%cFull Stack Developer | PHP | Laravel | Vue Js', 'color: #f97316; font-size: 1.25rem; font-weight: 400')
    console.log('%cOuuu, o que cê ta fazendo aqui??? 🫣', 'font-size: 1.25rem; font-weight: 400')
})

// @todo Restore HighlightJS
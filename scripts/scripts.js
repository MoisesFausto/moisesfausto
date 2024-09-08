const date = new Date;
const currentYear = date.getFullYear()

// Bloco Home
const exp =  currentYear - 2018;
document.getElementById('exp').innerText = `${exp} anos`

// Bloco Footer
if (currentYear == 2024)
  document.getElementById('current-year').innerText = currentYear
else
document.getElementById('current-year').innerText = `2024 - ${currentYear}`


// Menu
const menuBtn = document.getElementById('menu-collapse')
const navbar = document.getElementById('navbar-default')
menuBtn.addEventListener('click', () => {
  navbar.classList.toggle('hidden')
})

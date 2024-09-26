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

// Incrementa Jobs
const jobs = document.getElementById('jobs');
window.addEventListener('scroll', () => {
    if (jobs && jobs.getBoundingClientRect().y >= 970) {
        let count = 0;
        const interval = setInterval(() => {
            count = count + 1;
            jobs.innerText = `${count}+`;

            if (count === 10) clearInterval(interval);
        }, 150);
    }
})

const tagsPreCode = () => {
    tagCodes = document.querySelectorAll('code')

    if (tagCodes) {
        tagCodes.forEach(code => {
            code.innerHTML = `<div class="flex items-center gap-1.5 mb-4"> 
                                <div class="w-3 h-3 rounded-full bg-[#F77963]"></div> 
                                <div class="w-3 h-3 rounded-full bg-[#F89B4A]"></div> 
                                <div class="w-3 h-3 rounded-full bg-[#41C662]"></div> 
                              </div>` + code.innerHTML;
        })
    }
}

// Easter Egg
const loading = () => {
    let pipe = []
    let count = 0

    const interval = setInterval(() => {
        count++;
        pipe.push('|');
        console.clear();
        console.log(`%cBaixando... ${pipe.join('|')}`, 'font-size: .675rem; font-weight: 700')

        if (count === 10) clearInterval(interval)
    }, 300)
}

const openTabs = () => {
    const brandings = document.querySelectorAll('.branding');
    const tabs = document.getElementById('tabs-companies');
    const companies = document.getElementById('companies');

    // Pega a altura padrão da Section
    let heightCompaniesSections = 0;
    if (companies)
        heightCompaniesSections = companies.getBoundingClientRect().height;

    // Pré-cacheia os elementos de tab
    let tabElements;
    if (tabs)
        tabElements = Array.from(tabs.children);

    // Adiciona o evento de click em cada branding
    brandings.forEach(branding => {
        branding.addEventListener('click', (e) => {
            // Reseta a altura da Section
            companies.style.height = 'auto';

            // Esconde todas as tabs abertas
            tabElements.forEach(tab => tab.classList.replace('opacity-100', 'opacity-0'));

            // Pega o nome da tab a ser exibida
            const targetTab = tabs.children.namedItem(branding.dataset.name);

            // Remove a classe de seleção de todos os elementos
            document.querySelectorAll('#companies .cursor-pointer').forEach(item => item.classList.remove('border-orange-500'));

            if (targetTab && !targetTab.classList.contains('opacity-100')) {
                // Pega a altura da Tab selecionada
                const heightTabCompanies = targetTab.getBoundingClientRect().height;

                // Ajusta dinamicamente a altura da section
                companies.style.height = `${heightCompaniesSections + heightTabCompanies}px`;

                // Marca o branding como selecionado
                branding.classList.add('border-orange-500');

                // Exibe a tab correspondente
                targetTab.classList.replace('opacity-0', 'opacity-100');
            } else {
                // Se já estiver visível, oculta a tab
                targetTab.classList.replace('opacity-100', 'opacity-0');
            }
        });
    });
}

// Init Functions
window.addEventListener('load', () => {
    tagsPreCode();
    openTabs();

    console.clear();
    console.log('%cMoisés Fausto', 'color: #f97316; font-size: 3rem; font-weight: 700')
    console.log('%cFull Stack Developer | PHP | Laravel | Vue Js', 'color: #f97316; font-size: 1.25rem; font-weight: 400')
    console.log('%cOuuu, o que cê ta fazendo aqui??? 🫣', 'font-size: 1.25rem; font-weight: 400')
})
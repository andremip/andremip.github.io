function toggleMenu() {
    const menu = document.querySelector(".menu-links")
    const icon = document.querySelector(".hamburger-icon")
    menu.classList.toggle("open")
    icon.classList.toggle("open")
}

document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').slice(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            const targetPosition = targetElement.offsetTop;
            var desplacamiento = 0.15
            if (targetId == "contact") desplacamiento = 0.08
            const adjustedPosition = targetPosition - (window.innerHeight * desplacamiento)

            // Desplázate suavemente hacia la posición ajustada
            window.scrollTo({
                top: adjustedPosition,
                behavior: 'smooth'
            })
        }
    })
})

function scrollToSection(selector) {
    const targetElement = document.querySelector(selector)

    if (targetElement) {
        const targetPosition = targetElement.offsetTop;
        var desplacamiento = 0.15
        if (selector == "#contact") desplacamiento = 0.08
        const adjustedPosition = targetPosition - (window.innerHeight * desplacamiento)

        window.scrollTo({
            top: adjustedPosition,
            behavior: 'smooth'
        });
    } else {
        console.error(`No se encontró el elemento con el selector "${selector}"`)
    }
}
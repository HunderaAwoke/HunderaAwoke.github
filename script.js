const navbarEl = document.querySelector(".navbar");
window.addEventListener('scroll', () => {
    if (window.scrollY > 50 - navbarEl.offsetTop) {
       navbarEl.classList.add('active')
    }
})
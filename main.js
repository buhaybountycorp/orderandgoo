document.addEventListener('DOMContentLoaded', function () {
    let menu = document.querySelector('#menu-bar');
    let navbar = document.querySelector('.navbar');

    menu.addEventListener('click', function () {
        navbar.classList.toggle('active');
    });

    document.addEventListener('click', function (event) {
        if (!navbar.contains(event.target) && !menu.contains(event.target)) {
            navbar.classList.remove('active');
        }
    });
    menu.addEventListener('click', function (event) {
        event.preventDefault();
    });
});
document.addEventListener('DOMContentLoaded', function () {
    const elements = document.querySelectorAll('.fade-in');

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.2 });

    elements.forEach(element => {
        observer.observe(element);
    });
});



const navbar = document.getElementById('navbar');
const logoText = document.getElementById('logoText');
const navLinks = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add(
            'bg-[#F5EBE0]/90',
            'backdrop-blur-md',
            'shadow-md'
        );

        logoText.classList.remove('text-white');
        logoText.classList.add('text-[#3B241A]');

        navLinks.forEach(link => {
            link.classList.remove('text-white');
            link.classList.add('text-[#3B241A]');
        });

    } else {
        navbar.classList.remove(
            'bg-[#F5EBE0]/90',
            'backdrop-blur-md',
            'shadow-md'
        );

        logoText.classList.remove('text-[#3B241A]');
        logoText.classList.add('text-white');

        navLinks.forEach(link => {
            link.classList.remove('text-[#3B241A]');
            link.classList.add('text-white');
        });
    }
});
const themeToggler = document.querySelector(".theme-toggler");
const lightIcon = document.querySelector(".light-icon");
const darkIcon = document.querySelector(".dark-icon");

themeToggler.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme-variables');
    lightIcon.classList.toggle('active');
    darkIcon.classList.toggle('active');
});

// Assuming menuBtn and closeBtn are defined elsewhere in your script
menuBtn.addEventListener('click', () => {
    sideMenu.style.display = 'block';
});

closeBtn.addEventListener('click', () => {
    sideMenu.style.display = 'none';
});

// check

document.querySelectorAll('.sidebar-link').forEach(link => {
    link.addEventListener('click', function() {
        if (this.classList.contains('active')) {
            this.classList.remove('active');
        } else {
            document.querySelectorAll('.sidebar-link').forEach(item => {
                item.classList.remove('active');
            });
            this.classList.add('active');
        }
    });
});





document.addEventListener('DOMContentLoaded', () => {
    const sidebar = document.querySelector('.aside');
    const menuButton = document.querySelector('.menu-button');
    const closeButton = document.querySelector('.aside .close');

    menuButton.addEventListener('click', () => {
        sidebar.style.left = '0';
    });

    closeButton.addEventListener('click', () => {
        sidebar.style.left = '-100%';
    });
});

document.addEventListener('DOMContentLoaded', (event) => {
    const dateInput = document.getElementById('date-input');
    const today = new Date();
    const formattedDate = today.toISOString().split('T')[0];
    dateInput.value = formattedDate;
});
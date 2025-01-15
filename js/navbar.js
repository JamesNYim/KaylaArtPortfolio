// Wait for the DOM to fully load
document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.querySelector('.menu-toggle'); // Button to toggle the menu
    const menu = document.querySelector('.menu'); // The menu to be toggled

    // If both elements are present, set up event listeners
    if (menuToggle && menu) {
        menuToggle.addEventListener('click', () => {
            menu.classList.toggle('active'); // Toggle 'active' class to show/hide menu
        });

        // Optional: Close the menu when a link is clicked
        menu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                // If menu is open, close it
                if (menu.classList.contains('active')) {
                    menu.classList.remove('active');
                }
            });
        });
    }
});


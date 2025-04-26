const menu = document.querySelector(".menu");
    const hamburger = document.querySelector(".hamburger");
    const menuItems = document.querySelectorAll('.menuItem'); // Ensure you're selecting all menu items

    // Toggle the menu visibility when hamburger icon is clicked
    function toggleMenu() {
      menu.classList.toggle("showMenu");
      hamburger.classList.toggle("menuOpen");
    }

    hamburger.addEventListener("click", toggleMenu);

    // Close the menu after clicking any menu item
    menuItems.forEach(item => {
      item.addEventListener('click', () => {
        menu.classList.remove('showMenu');
      });
    });

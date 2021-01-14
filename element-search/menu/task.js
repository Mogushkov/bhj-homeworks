let menuLink = document.querySelectorAll('.menu__link');

[...menuLink].forEach((item) => {

    item.onclick = () => {
      const menuSub = item.closest('.menu__item').querySelector('.menu_sub');
        if (menuSub) {
            if (!menuSub.classList.contains('menu_active')) {
                const activeMenu = item.closest('.menu_main').querySelectorAll('.menu_active');
                if (activeMenu.length > 0) {
                    [...activeMenu].forEach((item) => item.classList.remove('menu_active'));
                }

                menuSub.classList.add('menu_active');
            } else {
                menuSub.classList.remove('menu_active');
            }

            return false;
        }

    }

});
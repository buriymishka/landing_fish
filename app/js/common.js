document.addEventListener("DOMContentLoaded", () => {

  let setupMobileMenu = () => {
    let menuBtn = document.querySelector('.menu-btn');
    let mobileMenu =document.querySelector('.menu-mobile');
    let mobileMenuList = document.querySelector('.mobile-menu__navigation');
    let menuList = document.querySelector('.main-menu');
    mobileMenuList.append(menuList.cloneNode(true));
    mobileMenuList.querySelector('.menu__wheel').remove();
    mobileMenuList.querySelector('.main-menu').classList.remove('main-menu');
    menuBtn.addEventListener('click', function(e){
      e.preventDefault();
      menuBtn.classList.toggle('active');
      menuBtn.classList.toggle('on');
      mobileMenu.classList.toggle('active');
    });
  }

  setupMobileMenu();

});

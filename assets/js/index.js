/**
* Template Name: Constructo
* Template URL: https://bootstrapmade.com/constructo-bootstrap-construction-template/
* Updated: Aug 30 2025 with Bootstrap v5.3.8
* Author: BootstrapMade.com
* License: https://bootstrapmade.com/license/
*/

(function () {
  "use strict";

  /**
   * Apply .scrolled class to the body as the page is scrolled down
   */
  function toggleScrolled() {
    const selectBody = document.querySelector('body');
    const selectHeader = document.querySelector('#header');
    if (!selectHeader.classList.contains('scroll-up-sticky') && !selectHeader.classList.contains('sticky-top') && !selectHeader.classList.contains('fixed-top')) return;
    window.scrollY > 100 ? selectBody.classList.add('scrolled') : selectBody.classList.remove('scrolled');
  }

  document.addEventListener('scroll', toggleScrolled);
  window.addEventListener('load', toggleScrolled);

  /**
   * Mobile nav toggle
   */
  const mobileNavToggleBtn = document.querySelector('.mobile-nav-toggle');

  function mobileNavToogle() {
    document.querySelector('body').classList.toggle('mobile-nav-active');
    mobileNavToggleBtn.classList.toggle('bi-list');
    mobileNavToggleBtn.classList.toggle('bi-x');
  }
  if (mobileNavToggleBtn) {
    mobileNavToggleBtn.addEventListener('click', mobileNavToogle);
  }

  /**
   * Hide mobile nav on same-page/hash links
   */
  document.querySelectorAll('#navmenu a').forEach(navmenu => {
    navmenu.addEventListener('click', () => {
      if (document.querySelector('.mobile-nav-active')) {
        mobileNavToogle();
      }
    });

  });

  /**
   * Toggle mobile nav dropdowns
   */
  document.querySelectorAll('.navmenu .toggle-dropdown').forEach(navmenu => {
    navmenu.addEventListener('click', function (e) {
      e.preventDefault();
      this.parentNode.classList.toggle('active');
      this.parentNode.nextElementSibling.classList.toggle('dropdown-active');
      e.stopImmediatePropagation();
    });
  });

  /**
   * Preloader
   */
  const preloader = document.querySelector('#preloader');
  if (preloader) {
    window.addEventListener('load', () => {
      preloader.remove();
    });
  }

  /**
   * Scroll top button
   */
  let scrollTop = document.querySelector('.scroll-top');

  function toggleScrollTop() {
    if (scrollTop) {
      window.scrollY > 100 ? scrollTop.classList.add('active') : scrollTop.classList.remove('active');
    }
  }
  scrollTop.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });

  window.addEventListener('load', toggleScrollTop);
  document.addEventListener('scroll', toggleScrollTop);

  /**
   * Animation on scroll function and init
   */
  function aosInit() {
    AOS.init({
      duration: 600,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    });
  }
  window.addEventListener('load', aosInit);

  /**
   * Init swiper sliders
   */
  function initSwiper() {
    document.querySelectorAll(".init-swiper").forEach(function (swiperElement) {
      let config = JSON.parse(
        swiperElement.querySelector(".swiper-config").innerHTML.trim()
      );

      if (swiperElement.classList.contains("swiper-tab")) {
        initSwiperWithCustomPagination(swiperElement, config);
      } else {
        new Swiper(swiperElement, config);
      }
    });
  }

  window.addEventListener("load", initSwiper);

  /**
   * Initiate glightbox
   */
  const glightbox = GLightbox({
    selector: '.glightbox'
  });

})();






let lastScroll = 0;
const header = document.getElementById("header");

window.addEventListener("scroll", () => {
  const currentScroll = window.pageYOffset;

  if (currentScroll > lastScroll) {
    // Scrolling DOWN → HIDE header
    header.classList.add("hide-header");
    header.classList.remove("show-header");
  } else {
    // Scrolling UP → SHOW header
    header.classList.remove("hide-header");
    header.classList.add("show-header");
  }

  lastScroll = currentScroll <= 0 ? 0 : currentScroll;
});





const tabs = document.querySelectorAll(".city-tab");
const projects = document.querySelectorAll(".uni-project-card");

tabs.forEach(tab => {
  tab.addEventListener("click", () => {

    // Change active tab
    tabs.forEach(t => t.classList.remove("active"));
    tab.classList.add("active");

    const selected = tab.getAttribute("data-city");

    projects.forEach(project => {
      const location = project.getAttribute("data-location");
      if (selected === "all" || selected === location) {
        project.style.display = "block";
      } else {
        project.style.display = "none";
      }
    });
  });
});




document.querySelector('.open-overlay').addEventListener('click', function () {
  const overlayNavigation = document.querySelector('.overlay-navigation');
  const navItems = document.querySelectorAll('nav li');
  const topBar = document.querySelector('.bar-top');
  const middleBar = document.querySelector('.bar-middle');
  const bottomBar = document.querySelector('.bar-bottom');

  overlayNavigation.classList.toggle('overlay-active');

  if (overlayNavigation.classList.contains('overlay-active')) {
    // Opening
    overlayNavigation.classList.remove('overlay-slide-up');
    overlayNavigation.classList.add('overlay-slide-down');

    topBar.classList.remove('animate-out-top-bar');
    topBar.classList.add('animate-top-bar');
    middleBar.classList.remove('animate-out-middle-bar');
    middleBar.classList.add('animate-middle-bar');
    bottomBar.classList.remove('animate-out-bottom-bar');
    bottomBar.classList.add('animate-bottom-bar');

    // ITEM 1
    navItems[0].classList.remove('slide-in-nav-item-reverse');
    navItems[0].classList.add('slide-in-nav-item');

    // ITEM 2
    navItems[1].classList.remove('slide-in-nav-item-delay-1-reverse');
    navItems[1].classList.add('slide-in-nav-item-delay-1');

    // ITEM 3
    navItems[2].classList.remove('slide-in-nav-item-delay-2-reverse');
    navItems[2].classList.add('slide-in-nav-item-delay-2');

    // ITEM 4
    navItems[3].classList.remove('slide-in-nav-item-delay-3-reverse');
    navItems[3].classList.add('slide-in-nav-item-delay-3');

    // ITEM 5
    navItems[4].classList.remove('slide-in-nav-item-delay-4-reverse');
    navItems[4].classList.add('slide-in-nav-item-delay-4');

    // 👉 NEW ITEM 6
    navItems[5].classList.remove('slide-in-nav-item-delay-5-reverse');
    navItems[5].classList.add('slide-in-nav-item-delay-5');

  } else {
    // Closing
    overlayNavigation.classList.remove('overlay-slide-down');
    overlayNavigation.classList.add('overlay-slide-up');

    topBar.classList.remove('animate-top-bar');
    topBar.classList.add('animate-out-top-bar');
    middleBar.classList.remove('animate-middle-bar');
    middleBar.classList.add('animate-out-middle-bar');
    bottomBar.classList.remove('animate-bottom-bar');
    bottomBar.classList.add('animate-out-bottom-bar');

    // ITEM 1
    navItems[0].classList.remove('slide-in-nav-item');
    navItems[0].classList.add('slide-in-nav-item-reverse');

    // ITEM 2
    navItems[1].classList.remove('slide-in-nav-item-delay-1');
    navItems[1].classList.add('slide-in-nav-item-delay-1-reverse');

    // ITEM 3
    navItems[2].classList.remove('slide-in-nav-item-delay-2');
    navItems[2].classList.add('slide-in-nav-item-delay-2-reverse');

    // ITEM 4
    navItems[3].classList.remove('slide-in-nav-item-delay-3');
    navItems[3].classList.add('slide-in-nav-item-delay-3-reverse');

    // ITEM 5
    navItems[4].classList.remove('slide-in-nav-item-delay-4');
    navItems[4].classList.add('slide-in-nav-item-delay-4-reverse');

    // 👉 NEW ITEM 6
    navItems[5].classList.remove('slide-in-nav-item-delay-5');
    navItems[5].classList.add('slide-in-nav-item-delay-5-reverse');
  }
});




const mainNavbar = document.getElementById("mainNavbar");
const navbarLogo = document.getElementById("navbarLogo");
const burgerBars = document.querySelectorAll(".open-overlay span");
const navbarlist = document.querySelectorAll(".nav-links a")

window.addEventListener("scroll", () => {

  if (window.scrollY > 70) {

    mainNavbar.classList.add("scrolled");
    navbarLogo.src = "/assets/img/logo.png";  

    burgerBars.forEach(bar => bar.classList.add("bar-dark"));

  } else {

    mainNavbar.classList.remove("scrolled");
    navbarLogo.src = "/assets/img/logo_home.png";

    burgerBars.forEach(bar => bar.classList.remove("bar-dark"));

  }
});


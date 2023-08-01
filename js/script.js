window.addEventListener("DOMContentLoaded", () => {
   const menu = document.querySelector(".menu"),
      menuItem = document.querySelectorAll(".menu__item"),
      burger = document.querySelector(".burger");

   burger.addEventListener("click", () => {
      burger.classList.toggle("burger_active");
      menu.classList.toggle("menu_active");
   });

   menuItem.forEach((item) => {
      item.addEventListener("click", () => {
         burger.classList.toggle("burger_active");
         menu.classList.toggle("menu_active");
      });
   });
});

let btns = document.querySelectorAll(".content__btn"),
   modal_1 = document.querySelector(".modal_first"),
   modal_2 = document.querySelector(".modal_second"),
   btns_modal = document.querySelectorAll(".modal__btn");

btns[0].addEventListener("click", () => {
   modal_1.classList.toggle("modal_active");
});

btns[1].addEventListener("click", () => {
   modal_2.classList.toggle("modal_active");
});

btns_modal[0].addEventListener("click", () => {
   modal_1.classList.toggle("modal_active");
});

btns_modal[1].addEventListener("click", () => {
   modal_2.classList.toggle("modal_active");
});

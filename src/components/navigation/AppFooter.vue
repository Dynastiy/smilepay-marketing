<template>
    <div class="app-footer py-4 text-center container">
      <div>
        <ul
          class="mb-0 d-lg-flex align-items-center justify-content-center"
          style="gap: 20px"
        >
          <!-- <li class="menu-item">
            {{ $t("nav.faqs") }}
          </li> -->
          <li class="menu-item" style="list-style: none;" v-for="item in nav_menu" :key="item.id">
            <router-link to="/">{{ item.title }}</router-link>
            <!-- <router-link to="/privacy-policy">{{
              $t("nav.privacy")
            }}</router-link> -->
          </li>
          <!-- <li class="menu-item">
            <router-link to="terms-of-use">{{
              $t("nav.terms-and-conditions")
            }}</router-link>
          </li>
          <li class="menu-item">
            <router-link to="/contact-us">
              {{ $t("nav.contact-us") }}</router-link
            >
          </li>
          <li class="menu-item">
            <router-link to="/press-kit"> {{ $t("nav.press-kit") }}</router-link>
          </li> -->
        </ul>
  
        <div class="social-links d-flex justify-content-center text-dark" style="gap:10px">
          <a target="_blank" class="text-dark" href="#"
            ><i class="fa fa-facebook" aria-hidden="true"></i
          ></a>
          <a target="_blank" class="text-dark" href="#">
            <i class="fa fa-instagram" aria-hidden="true"></i>
          </a>
          <a target="_blank" class="text-dark" href="#">
            <i class="fa fa-twitter" aria-hidden="true"></i>
          </a>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data: () => {
      return {
        nav_menu: [
          {
            id: 1,
            title: "faqs",
          },
          {
            id: 2,
            title: "privacy",
          },
          {
            id: 3,
            title: "terms and conditions",
          },
          {
            id: 4,
            title: "contact us",
          },
        //   {
        //     id: 5,
        //     title: "press-kit",
        //   },
        ],
      };
    },
  };
  </script>
  
  <style></style>
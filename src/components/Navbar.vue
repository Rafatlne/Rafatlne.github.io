<template>
  <div class="container">
    <header class="header">
      <nav>
        <ul class="nav__links">
          <li>
            <a
              href="#"
              :class="[
                currentPage.includes('about') ? activeClass : '',
                'notActive'
              ]"
            >
              <router-link to="/" exact>About</router-link>
            </a>
          </li>
          <li>
            <a
              href="#"
              :class="[
                currentPage.includes('resume') ? activeClass : '',
                'notActive'
              ]"
            >
              <router-link to="/resume" exact>Resume</router-link>
            </a>
          </li>
        </ul>
      </nav>
    </header>
  </div>
</template>
<script>
export default {
  name: "Navbar",
  data() {
    return {
      activeClass: "active"
    };
  },
  computed: {
    currentPage() {
      // console.log($route.name);
      return this.$route.name;
    }
  }
};
</script>

<script setup>
const mobile = useIsMobile();
const router = useRouter();
const currentRoute = router.currentRoute;
</script>

<template>
  <header>
    <!-- Desktop nav -->
    <menu>
      <div v-show="!mobile && currentRoute.fullPath !== '/'">
        <nav class="flex justify-between pt-1">
          <NuxtLink to="/"><li>Home</li></NuxtLink>
          <NuxtLink to="resume"><li>Qualifications</li></NuxtLink>
          <NuxtLink to="about"><li>About</li></NuxtLink>
          <NuxtLink to="contact"><li>Contact</li></NuxtLink>
        </nav>
      </div>
    </menu>
    <!-- Mobile nav -->
    <HeaderBurgerMenu />
  </header>
</template>
<style scoped>
ul {
  position: relative;
  display: block;
}

li {
  display: inline;
  text-align: center;
  padding-right: 0vw;
  text-decoration: none;
  font-family: 'TitilliumWeb', sans-serif;
  font-weight: 900;
  letter-spacing: 4px;
  color: #00d9ff;
  font-size: 20px;
  -moz-transition: all 0.2s ease-in;
  -o-transition: all 0.2s ease-in;
  -webkit-transition: all 0.2s ease-in;
  transition: all 0.2s ease-in;
}
@media only screen and (max-width: 768px) {
  li {
    font-size: 15px;
  }
}

li:hover,
#active-page {
  cursor: pointer;
  color: #35a7ff;
  text-shadow: 0px 0px 30px #35a7ff;
  -moz-transition: all 0.2s ease-in;
  -o-transition: all 0.2s ease-in;
  -webkit-transition: all 0.2s ease-in;
  transition: all 0.2s ease-in;
}
.router-link-exact-active > li {
  opacity: 1;
  text-decoration: none;
  color: #91cfff;
  text-shadow: 0px 0px 30px #b6df5d;
  /* OG shadow and text colour: #35A7FF  */
}
</style>

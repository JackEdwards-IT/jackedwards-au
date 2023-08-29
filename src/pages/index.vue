<script setup lang="ts"></script>

<template>
  <div>
    <h1 class="mt-10 text-3xl">Jack Edwards,</h1>
    <h1 class="mt-10 text-3xl">
      <p class="text-red inline">Software developer</p>
      currently working on frontend tech using Vue/Nuxt 3.
    </h1>

    <div class="pt-5">
      <ul id="navigation">
        <NuxtLink to="resume"
          ><li class="text-md md:text-2xl">Qualifications</li></NuxtLink
        >
        <NuxtLink to="about"
          ><li class="text-md md:text-2xl">About</li></NuxtLink
        >
        <NuxtLink to="contact"
          ><li class="text-md md:text-2xl">Contact</li></NuxtLink
        >
      </ul>
    </div>
  </div>
</template>

<style scoped>
li {
  display: inline;
  text-align: center;
  padding-right: 2vw;
  text-decoration: none;
  font-family: 'Titillium Web', sans-serif;
  font-weight: 900;
  letter-spacing: 4px;
  color: #da4167;
  -moz-transition: all 0.2s ease-in;
  -o-transition: all 0.2s ease-in;
  -webkit-transition: all 0.2s ease-in;
  transition: all 0.2s ease-in;
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
</style>

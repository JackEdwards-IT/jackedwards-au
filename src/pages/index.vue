<script setup lang="ts">
useSeoMeta({
  title: 'Jack Edwards - Software Developer',
  ogTitle: 'Jack Edwards - Software Developer',
  description: 'Software Developer based in NSW Australia.',
  ogDescription: 'Software Developer based in NSW Australia.',
});
</script>

<template>
  <div>
    <h1 class="mt-10 text-3xl">Jack Edwards,</h1>
    <h1 class="mt-10 text-3xl">
      <p class="text-red inline">Software developer</p>
      currently working in the Microsoft Dynamics Ecosystem.
    </h1>

    <div class="pt-5">
      <div id="navigation">
        <NuxtLink to="resume"
          ><p id="menu" class="text-md md:text-2xl">Qualifications</p></NuxtLink
        >
        <NuxtLink to="about"
          ><p id="menu" class="text-md md:text-2xl">About</p></NuxtLink
        >
        <NuxtLink to="contact"
          ><p id="menu" class="text-md md:text-2xl">Contact</p></NuxtLink
        >
      </div>
    </div>
  </div>
</template>

<style scoped>
p#menu {
  display: inline;
  text-align: center;
  padding-right: 2vw;
  text-decoration: none;
  font-family: 'TitilliumWeb', sans-serif;
  font-weight: 900;
  letter-spacing: 4px;
  color: #00d9ff;
  -moz-transition: all 0.2s ease-in;
  -o-transition: all 0.2s ease-in;
  -webkit-transition: all 0.2s ease-in;
  transition: all 0.2s ease-in;
}

p#menu:hover,
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

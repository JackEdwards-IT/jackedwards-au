<script setup lang="ts">
useSeoMeta({
  description: 'Work history and education',
  ogDescription: 'Work history and education',
});
</script>

<template>
  <div>
    <h1 class="mt-3 text-3xl">Jack Edwards</h1>

    <div class="p-6 flex justify-beetween">
      <div class="w-full">
        <p class="text-2xl text-blue">
          Bachelor of Information Technology with Distinction
        </p>
        <p class="text-xl pt-1">2018 - 2021</p>
        <p class="text-xl">Royal Melbourne Institute of Technology</p>
        <p class="text-lg">Minoring in Web Design</p>
      </div>
      <NuxtImg
        class="hidden md:block"
        src="/dp-70-cropped.png"
        width="215"
        height="170"
        alt="Profile picture of Jack."
        :placeholder="[215, 170]"
      />
    </div>
    <hr class="" />
    <div class="pt-10">
      <p class="text-xl">
        I have been working as a software developer since 2021, starting
        off as a full stack developer working on a Angular/Java stack.
      </p>
      <p class="text-xl pt-5">
        I am currently working as a JavaScript/C# developer customising the
        Microsoft Dynamics CRM platform for a business in the private health
        insurance sector.
      </p>
      <p class="text-xl pt-5">
        In my previous role I was predominantly a Typescript developer working
        on large single page ecommerce sites utilising Vue/Nuxt 3.
      </p>
      <p class="text-xl pt-5">
        I am eager and motivated to take on new challenges and refine and apply
        the technical skills I have learned as a developer and branch out into
        new areas in the field.
      </p>
      <p class="pt-5 text-xl">
        To view my full work history see my
        <NuxtLink
          target="_blank"
          href="https://au.linkedin.com/in/je-it"
          class="text-blue-light underline"
          >LinkedIn Profile.</NuxtLink
        >
      </p>
    </div>
  </div>
</template>

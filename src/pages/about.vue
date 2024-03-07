<script setup lang="ts">
useSeoMeta({
  description: 'About Jack',
  ogDescription: 'About Jack',
});
</script>

<template>
  <div>
    <h1 class="mt-3 text-3xl">About me</h1>
    <p class="text-lg mt-5">
      I grew up on a small hobby farm near Bega on the Far South Coast of NSW.
      Eager to explore bigger cities, I moved to Wollongong and worked in the
      retail sector after highschool.
    </p>
    <p class="mt-3 text-lg">
      I have always had a passion for IT, and after some encouragement, I
      enrolled in an online Bachelor of Information Technology with the Royal
      Melbourne Institute of Technology as a mature aged student.
    </p>
    <p class="mt-3 text-lg">
      I have recently moved to Narrandera NSW, and am enjoying the ease of
      finding a parking space when I go grocery shopping. In my spare time I
      enjoy gardening, fitness, photography, reading, and working on mechanical
      and IT projects.
    </p>
    <LazyNuxtImg
      class="mx-auto pt-2 rounded-md"
      src="/banner.jpg"
      alt="Picture of hills in the country"
    />
  </div>
</template>

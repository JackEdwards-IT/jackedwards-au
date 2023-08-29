<script setup>
const mobile = useIsMobile();
const router = useRouter();
const currentRoute = router.currentRoute;

const menuOpen = ref(false);
</script>

<template>
  <div
    v-show="mobile && currentRoute.fullPath !== '/'"
    class="absolute right-2"
  >
    <div class="">
      <div />
      <div class="space-y-2" @click="menuOpen = !menuOpen" v-show="!menuOpen">
        <svg viewBox="0 0 100 80" width="40" height="40" fill="grey">
          <rect width="100" height="10"></rect>
          <rect y="30" width="100" height="10"></rect>
          <rect y="60" width="100" height="10"></rect>
        </svg>
      </div>

      <div class="bg-gray-600 -mt-3 -mr-2">
        <button
          @click="menuOpen = !menuOpen"
          v-show="menuOpen"
          class="pt-2 absolute right-0"
        >
          <svg
            class="h-8 w-8 close"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            stroke="white"
            aria-hidden="true"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        <div v-show="menuOpen">
          <Transition>
            <nav class="flex pt-6 flex-col">
              <NuxtLink to="/" @click="menuOpen = false"
                ><li>Home</li></NuxtLink
              >
              <NuxtLink to="resume" @click="menuOpen = false"
                ><li>Qualifications</li></NuxtLink
              >
              <NuxtLink to="about" @click="menuOpen = false"
                ><li>About</li></NuxtLink
              >
              <NuxtLink to="contact" @click="menuOpen = false"
                ><li>Contact</li></NuxtLink
              >
            </nav>
          </Transition>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Transition for menu */
.v-enter-active,
.v-leave-active {
  transition: opacity 1s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}

/* Menu links */
li {
  @apply list-none text-2xl pb-5 mx-8;
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

svg:hover {
  fill: #91cfff;
}

.close:hover {
  stroke: black;
}
</style>

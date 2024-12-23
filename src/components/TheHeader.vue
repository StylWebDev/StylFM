<script setup>

import FlexMinified from "./FlexMinified.vue";
import HeaderSection from "./Header/HeaderSection.vue";
import Navbar from "./Header/Navbar.vue";
import AudioPlayer from "./AudioPlayer.vue";
</script>

<template>
  <header class="top-0 w-full bg-neutral-800/75 h-fit rounded-b-lg shadow-neutral-800/80 shadow-lg  text-white">
    <FlexMinified :column="true" items="center" class="py-5 overflow-visible overscroll-none">
      <Navbar/>
      <HeaderSection/>
      <AudioPlayer/>
    </FlexMinified>
  </header>
</template>

<style scoped>

</style>
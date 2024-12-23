<script setup>

import Links from "../Links.vue";
import FlexMinified from "../FlexMinified.vue";
</script>

<template>
  <FlexMinified sm-justify="evenly" justify="center" items="center" class=" w-full mb-4">
    <FlexMinified justify="center" gap-x="4">
      <img draggable="false" src="/logo.webp" class="size-16 max-sm:size-24 rounded-lg" alt="Logo_Img">
    </FlexMinified>
    <FlexMinified items="center" gap-x="4" class="max-sm:hidden">
      <hgroup class="text-sm font-light text-pink-500 brightness-110">
        <h2 class="text-right">Powered By</h2>
        <p>StylWebDev ©2025</p>
      </hgroup>
      <Links class="rainbow"/>
    </FlexMinified>
  </FlexMinified>
</template>

<style scoped>

</style>
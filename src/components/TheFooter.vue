<script setup>
import Links from "./Links.vue";
import GridMinified from "./GridMinified.vue";
import FlexMinified from "./FlexMinified.vue";
</script>

<template>
  <GridMinified columns="2"  class="py-4 bg-gray-800 px-1 items-center">
    <FlexMinified items="center" gap-x="1" justify="center">
      <img src="../assets/StylWebDevLogo.svg" alt="StylWebDevLogo" class="size-8">
      <FlexMinified :column="true" class="text-sm font-light text-pink-500 brightness-110 w-fit">
        <h2 class="start">StylWebDev</h2>
        <p>©2025</p>
      </FlexMinified>
    </FlexMinified>

    <Links class="rainbow"/>
  </GridMinified>
</template>

<style scoped>

</style>
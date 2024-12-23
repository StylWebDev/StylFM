<script setup>
import Links from "./Links.vue";
import GridMinified from "./GridMinified.vue";
import FlexMinified from "./FlexMinified.vue";
</script>

<template>
  <GridMinified columns="2"  class="bg-gray-800">
    <FlexMinified :column="true" class="text-sm font-light text-pink-500 brightness-110 w-fit">
      <h2 class="start">Powered By</h2>
      <p>StylWebDev ©2025</p>
    </FlexMinified>
    <Links class="rainbow"/>
  </GridMinified>
</template>

<style scoped>

</style>
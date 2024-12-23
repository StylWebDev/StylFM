<script setup>
import FlexMinified from "./components/FlexMinified.vue";
import Artists from "./components/Artists.vue";
import TheHeader from "./components/TheHeader.vue";
import TheFooter from "./components/TheFooter.vue";
</script>

<template>
  <FlexMinified :column="true" gap-y="8" xl-gap-y="4" >
   <TheHeader/>
    <Artists/>
    <TheFooter class="hidden max-sm:block" />
  </FlexMinified>

</template>

<style scoped>

</style>

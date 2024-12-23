<script setup>
import FlexMinified from "./components/FlexMinified.vue";
import Artists from "./components/Artists.vue";
import TheHeader from "./components/TheHeader.vue";
import TheFooter from "./components/TheFooter.vue";
</script>

<template>
  <FlexMinified :column="true" xl-gap-y="12">
   <TheHeader/>
    <Artists/>
    <TheFooter class="hidden max-sm:block" />
  </FlexMinified>

</template>

<style scoped>

</style>

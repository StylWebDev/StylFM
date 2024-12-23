<script setup>
import FlexMinified from "./components/FlexMinified.vue";
import Artists from "./components/Artists.vue";
import TheHeader from "./components/TheHeader.vue";
import TheFooter from "./components/TheFooter.vue";
</script>

<template>
  <FlexMinified :column="true"  xl-gap-y="4" >
   <TheHeader/>
    <Artists class="mt-8"/>
    <TheFooter class="sm:hidden" />
  </FlexMinified>
</template>
<script setup lang="ts">
import Grid from "./GridMinified.vue";
import {ref} from "vue";
import {Icon} from "@iconify/vue";

const linkList = ref<any[]>([{href:`https://www.linkedin.com/in/konstantinos-stylianou-a4a95625b/` ,icon:`line-md:linkedin` },{href:`https://github.com/StylWebDev` ,icon:`line-md:github-loop` },{href:`https://styls.pages.dev` ,icon:`solar:global-bold` }])
</script>

<template>
    <Grid columns="5" class="justify-items-center grid-flow-row gap-x-1 max-sm:gap-x-8">
      <a v-for="(link,index) in linkList" :key="index" class="block p-1 bg-neutral-100 bg-opacity-10 rounded-xl hover:scale-110 hover:bg-white hover:text-black transition duration-500 ease-linear" :href="link.href" target="_blank" aria-label="Social_Links">
        <Icon width="24px"  :icon="link.icon"/><span class="hidden">‎</span>
      </a>
      <a href="mailto:stylsbot@gmail.com" class="block p-1 bg-neutral-100 bg-opacity-10 rounded-xl hover:scale-110 hover:bg-white hover:text-black transition duration-500 ease-linear"  target="_blank">
        <Icon width="24px"  icon="material-symbols:alternate-email"/><span class="hidden">‎</span>
      </a>
    </Grid>
</template>
<script setup>
import FlexMinified from "../FlexMinified.vue";
import imageComp from "../../composables/images.js"
import {ref} from "vue";
const i = ref(Math.floor(Math.random() * 3));
</script>

<template>
  <FlexMinified :column="true" :md-row="true" sm-justify="center" justify="center" items="center" class=" w-full mb-4 max-md:text-center" gap-x="14" gap-y="4">
    <hgroup>
      <h1 class="text-6xl font-bold rainbow">
        StylFM
      </h1>
      <p class="text-2xl font-semibold">Your LOFI Radio, Your Relief</p>
    </hgroup>
    <div class="p-14  rounded-full catBg w-fit">
      <Transition  appear enter-from-class="opacity-0" enter-active-class="transition-all duration-500 ease-in">
        <img draggable="false" :src="imageComp().images.value[i]" alt="LoFiCatImage" class="w-72 max-md:w-44 max-lg:w-56">
      </Transition>
    </div>
  </FlexMinified>
</template>
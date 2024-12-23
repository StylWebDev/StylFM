<script setup>
import FlexMinified from "../FlexMinified.vue";
import {onMounted, ref} from "vue";

const i = ref(1);
onMounted(() => {
  setInterval(() => {
    (i.value<4) ? i.value++ : i.value=1
  }, 10000)
})
</script>

<template>
  <FlexMinified :column="true" :md-row="true" sm-justify="center" justify="center" items="center" class=" w-full mb-4 max-sm:text-center" gap-x="14">
    <hgroup>
      <h1 class="text-6xl font-bold rainbow">
        StylFM
      </h1>
      <p class="text-2xl font-semibold">Your LOFI Radio, Your Relief</p>
    </hgroup>
    <div class="w-fit p-14  rounded-full catBg">
      <Transition enter-from-class="opacity-0" enter-active-class="transition-all duration-500 ease-in"
                  leave-to-class="opacity-0" leave-active-class="transition-all duration-500 ease-out absolute">
        <img draggable="false" v-if="i===1" src="../../assets/cat1.webp" alt="" class="w-80 max-md:w-44">
        <img draggable="false" v-else-if="i===2" src="../../assets/cat3.webp" alt="" class="w-80 max-md:w-44">
        <img draggable="false" v-else src="../../assets/cat2.webp" alt="" class="w-80 max-md:w-44">
      </Transition>
    </div>
  </FlexMinified>
</template>

<style scoped>

</style>
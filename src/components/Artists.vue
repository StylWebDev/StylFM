<script setup>
import {useAudioPlayerStore} from "../store/audioPlayer.js";
import GridMinified from "./GridMinified.vue";
import FlexMinified from "./FlexMinified.vue";
const {artists} = useAudioPlayerStore();
</script>

<template>
  <div>
    <p class="capitalize text-xl font-extrabold text-lime-300  text-center">
      shout out to Our Artists For Their beautiful content
    </p>
    <GridMinified columns="1" sm-columns="2"  md-columns="2" lg-columns="4" items="center" justify="around" class="mt-3" gap-y="5">
      <TransitionGroup
          appear appear-active-class="transition-all duration-500 ease-in"
          enter-from-class="opacity-0 scale-0" enter-active-class="transition-all duration-500 ease-in"
          leave-to-class="opacity-0 scale-0" leave-active-class="transition-all duration-500 ease-out"
      >
        <FlexMinified
            :column="true"
            items="center"
            v-for="(artist,index) in artists"
            :key="index+1"
        >
          <h4 class="text-center text-white text-lg font-bold">{{artist.name}}</h4>
          <a :href="artist.href" :aria-label="artist.name" target="_blank">
            <img aria-hidden="false"
                 draggable="false"
                 loading="lazy"
                 class="size-44 rounded-full "
                 :src="artist.src" data-testid="card-image"  :alt="artist.name + '_Logo'">
          </a>
        </FlexMinified>
      </TransitionGroup>
    </GridMinified>
  </div>
</template>

<style scoped>

</style>
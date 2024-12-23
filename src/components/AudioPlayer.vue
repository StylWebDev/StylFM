<script setup>
import FlexMinified from "./FlexMinified.vue";
import {Icon} from "@iconify/vue";
import {useAudioPlayerStore} from "../store/audioPlayer.js";

const audioPlayerStore = useAudioPlayerStore();
</script>

<template>
  <FlexMinified items="center"
                class=" bg-gradient-to-r from-amber-800 text-white to-indigo-950 px-4 rounded-lg py-1 gap-x-36 max-sm:gap-x-2"
                justify="between"
  >
    <FlexMinified
        items="center"
        gap-x="3"
    >
      <Transition enter-from-class="opacity-0" enter-active-class="transition-all duration-500 ease-out"
                  leave-to-class="opacity-0" leave-active-class="transition-all duration-500 ease-out absolute"
      >
        <button @click="audioPlayerStore.play()"
                v-if="audioPlayerStore.isPaused"
        >
          <Icon icon="iconamoon:play-circle-duotone"
                class="size-20 hover:text-lime-400 transition-all duration-300 ease-in"
          />
        </button>
        <button
            @click="audioPlayerStore.pause()"
            v-else
        >
          <Icon icon="iconamoon:player-pause-duotone"
                class="size-20 rainbow hover:text-fuchsia-400 transition-all duration-500 ease-in"
          />
        </button>
      </Transition>
      <hgroup>
        <h3 class="text-xl font-bold rainbow">
          Live Now!
        </h3>
        <p>
          LOFI Music - StylFM
        </p>
      </hgroup>
    </FlexMinified>
    <Icon icon="tabler:building-broadcast-tower"
          class="size-16 text-red-500 animate-pulse"
    />
  </FlexMinified>
</template>
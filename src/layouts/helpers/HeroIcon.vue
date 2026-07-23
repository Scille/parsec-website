<script setup lang="ts">
import { computed } from "vue";
import * as SolidIcons from "@heroicons/vue/24/solid";
import type { HeroIconName } from "./heroIconNames";

const props = defineProps<{
  icon: HeroIconName;
  class?: string;
}>();

const IconComponent = computed(() => SolidIcons[props.icon]);
</script>

<template>
  <component
    v-if="IconComponent"
    :is="IconComponent"
    class="hero-icon"
    :class="props.class"
  />
</template>

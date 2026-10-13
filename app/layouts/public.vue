<template>
  <Header :items="routes" :connected="store.isLoggedIn"/>
  <div>
    <slot/>
  </div>
</template>

<script lang="ts" setup>
import type { NavigationMenuItem } from '@nuxt/ui';

const store = useMyAuthStore()

const routes = computed<NavigationMenuItem[]>(() => [
  {
    label: "Dashboard",
    icon: "i-lucide-layout-dashboard",
    to: "/features/",
    replace: true,
    exact: true
  },
  {
    label: "Section 1",
    icon: "i-lucide-hash",
    to: "/features/section1",
    replace: true,
  },
  {
    label: "Section 2",
    icon: "i-lucide-hash",
    to: "/features/section2",
    replace: true,
  },
  {
    label: "Section 3",
    icon: "i-lucide-hash",
    to: "/features/section3",
    replace: true,
  }
])
</script>

<style>

</style>
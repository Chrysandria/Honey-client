<template>
  <div class="min-h-screen flex flex-col">
    <Header :items="items" :connected="false"/>

    <main class="flex-1 flex flex-col">
      <slot />
    </main>

    <UFooter class="border-t border-slate-500">
      <template #left>
        <p class="text-muted text-sm">
          Copyright © {{ new Date().getFullYear() }}
        </p>
      </template>
      <template #right>
        <UButton
          v-for="contact in contacts"
          :icon="contact.icon"
          color="neutral"
          variant="ghost"
          :aria-label="contact.address"
        />
      </template>
    </UFooter>
  </div>
</template>

<script lang="ts" setup>
import type { NavigationMenuItem } from "@nuxt/ui";

const items = computed<NavigationMenuItem[]>(() => [
  {
    label: "Accueil",
    icon: "i-lucide-house",
    to: "/",
    replace: true,
  },
  {
    label: "Se connecter",
    icon: "i-lucide-user-key",
    to: "/login",
    replace: true,
  },
  {
    label: "S'inscrire",
    icon: "i-lucide-user-plus",
    to: "/register",
    replace: true,
  },
]);

const contacts = [
  {
    icon: "i-simple-icons-whatsapp",
    address: "+261 3X XX XXX XX",
  },
  {
    icon: "i-simple-icons-facebook",
    address: "Honey Group",
  },
  {
    icon: "i-simple-icons-linkedin",
    address: "Honey Group",
  },
];
</script>

<style></style>

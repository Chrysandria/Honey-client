<template>
  <div>
    <UHeader
    mode="slideover"
      class="bg-white dark:bg-slate-900"
      :toggle="{
        color: 'secondary',
        variant: 'subtle',
        class: 'rounded-full',
      }"
    >
      <template #title>
        <h2>
          <Logo />
        </h2>
      </template>

      <UNavigationMenu
        :items="items"
        color="secondary"
        :ui="{
          list: 'gap-10',
        }"
      />

      <template #right>
        <UColorModeSwitch color="secondary" />
        <UTooltip text="Se déconnecter">
          <UButton
            v-if="connected"
            color="error"
            icon="i-lucide-log-out"
            aria-label="Se déconnecter"
            @click="logoutConfirmationOpen = true"
          />
        </UTooltip>
      </template>

      <template #body>
        <UNavigationMenu
          :items="items"
          color="secondary"
          orientation="vertical"
        />
      </template>
    </UHeader>

    <UModal
      v-model:open="logoutConfirmationOpen"
      title="Confirmer la déconnexion"
      description="Voulez-vous vraiment vous déconnecter ?"
    >
      <template #footer>
        <UButton
          label="Annuler"
          color="neutral"
          variant="outline"
          :disabled="isLoggingOut"
          @click="logoutConfirmationOpen = false"
        />
        <UButton
          label="Se déconnecter"
          color="error"
          :loading="isLoggingOut"
          :disabled="isLoggingOut"
          @click="logout"
        />
      </template>
    </UModal>
  </div>
</template>

<script lang="ts" setup>
import { getApiErrorMessage } from '~/utils/api-error';


const props = defineProps<{
  items: Object[],
  connected: boolean
}>()

const store = useMyAuthStore();
const router = useRouter();
const toast = useToast()
const logoutConfirmationOpen = ref(false)
const isLoggingOut = ref(false)

async function logout() {
  if (isLoggingOut.value) {
    return
  }

  isLoggingOut.value = true
  try {
    await store.logout()
    logoutConfirmationOpen.value = false
    await router.replace('/')
  } catch (error) {
    toast.add({
      title: 'Déconnexion impossible.',
      description: getApiErrorMessage(error),
      color: 'error',
    })
  } finally {
    isLoggingOut.value = false
  }
}
</script>

<style></style>

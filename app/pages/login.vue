<template>
  <div class="flex flex-1 flex-col gap-10 items-center justify-center p-4">
    <UPageCard class="w-full max-w-md">
      <UAuthForm
      :schema="schema"
      :fields="fields"
      title="Connexion"
      description="Connectez-vous pour acceder a votre compte"
      icon="i-lucide-user"
      :submit="{label: 'Se connecter', color: 'secondary'}"
      @submit="onSubmit"
      >
      <template #password-hint>
        <ULink to="" class="text-secondary font-medium" tabindex="-1">Mot de passe oublié ?</ULink>
      </template>

      <template #footer>
        Pas encore de compte ? <ULink to="/register" class="text-secondary font-medium">S'inscrire</ULink>
      </template>
    </UAuthForm>
    </UPageCard>

    <ULink to="/" class="text-sm">
      <UIcon name="i-lucide-arrow-left" class="me-3"/>
      Retourner à l'accueil.
    </ULink>
  </div>
</template>

<script lang="ts" setup>
import * as z from 'zod'
import type { FormSubmitEvent, AuthFormField } from '@nuxt/ui';
import { getApiErrorMessage } from '~/utils/api-error'

const toast = useToast()
const store = useMyAuthStore()

const fields: AuthFormField[] = [
  {name: 'email', type: 'email', label: 'Votre e-mail:', placeholder:'vous@example.com', color: 'secondary', required: true},
  {name: 'password', type: 'password', label: 'Votre mot de passe', placeholder:'********', color:'secondary', required: true},
  {name: 'rememberMe', type: 'checkbox', label: 'Se souvenir de moi', color: 'secondary'}
]

const schema = z.object({
  email: z.email('E-mail invalide'),
  password: z.string('Mot de passe requis').min(8, 'Mot de passe invalide'),
  rememberMe: z.boolean().optional(),
})

type Schema = z.output<typeof schema>

async function onSubmit(payload: FormSubmitEvent<Schema>) {
  try {
    await store.login(
      payload.data.email,
      payload.data.password,
      payload.data.rememberMe ?? false,
    )
    toast.add({ title: 'Connexion effectuée.', color: 'success' })
    await navigateTo('/features')
  } catch (error) {
    toast.add({
      title: 'Connexion impossible.',
      description: getApiErrorMessage(error),
      color: 'error',
    })
  }
}
</script>

<style></style>

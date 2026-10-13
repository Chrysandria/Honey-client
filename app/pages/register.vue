<template>
  <div class="flex flex-1 flex-col gap-10 items-center justify-center p-4">
    <UPageCard class="w-full max-w-md">
      <UAuthForm
      :schema="schema"
      :fields="fields"
      title="Inscription"
      description="Créez un compte gratuitement"
      icon="i-lucide-user-plus"
      :submit="{label: 'S\' inscrire', color: 'secondary'}"
      @submit="onSubmit"
      >
      <template #footer>
        Vous avez deja un compte ? <ULink to="/login" class="text-secondary font-medium">Se connecter</ULink>
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
  {name: 'name', type: 'text', label: 'Votre Nom:', placeholder:'John Doe', color: 'secondary', required: true},
  {name: 'email', type: 'email', label: 'Votre e-mail:', placeholder:'vous@example.com', color: 'secondary', required: true},
  {name: 'password', type: 'password', label: 'Votre mot de passe', placeholder:'********', color:'secondary', required: true},
  {name: 'confirmPassword', type: 'password', label: 'Confirmez-votre mot de passe', placeholder:'********', color: 'secondary', required: true}
]

const schema = z.object({
  name: z.string("Veuillez saisir un nom d'utilisateur").trim().min(1).max(100),
  email: z.email('E-mail invalide'),
  password: z.string('Mot de passe requis').min(8, 'Mot de passe invalide'),
  confirmPassword: z.string('Veuillez remplir ce champ')
}).refine(
  data => data.password === data.confirmPassword,
  {
    message: 'Les mots de passes ne correspondent pas',
    path: ['confirmPassword']
  }
)

type Schema = z.output<typeof schema>

async function onSubmit(payload: FormSubmitEvent<Schema>) {
  try {
    await store.register(
      payload.data.name,
      payload.data.email,
      payload.data.password,
    )
    toast.add({ title: 'Votre compte a été créé avec succès.', color: 'success' })
    await navigateTo('/features')
  } catch (error) {
    toast.add({
      title: 'Inscription impossible.',
      description: getApiErrorMessage(error),
      color: 'error',
    })
  }
}
</script>

<style></style>

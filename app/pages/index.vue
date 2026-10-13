<template>
  <UMain class="flex p-4">
    <UContainer class="flex flex-col gap-4">
      <article>
        <h1 class="text-4xl font-bold">Bienvenue.</h1>
        <p>
          <!-- Servez-vous de cette espace pour décrire votre application en detail
          et inciter vos nombreux visiteur. -->

          <!-- Éditez une ou deux phrase d'introduction dans ce paragraphe -->
        </p>
      </article>
      <UCard class="my-5">
        <h3 class="font-bold text-2xl">Qui sommes nous ?</h3>
        <section class="flex items-center">
          <p>
            <!-- Éditez quelques paragraphe afin d'affirmer votre
            <span class="text-blue-500 text-3xl"> Identité.</span><br />
            Incitez le publique à vous choisir -->
          </p>
        </section>
      </UCard>

      <article class="flex p-4 items-center flex-col gap-4 justify-center">
        <UBadge color="neutral" variant="outline">
          Nos produits/services
        </UBadge>

        <h3 class="text-center">
          Une brève liste de ce que nous proposons à nos clients.
        </h3>
      </article>

      <section class="grid grid-cols-1 lg:grid-cols-3 gap-6 text-white mb-10">
        <!-- répliquez les UCard pour afficher plus, personnalisez les class pour un rendu different -->
        <UCard
          class="bg-blue-500 p-5 h-50 flex items-center justify-center gap-2"
        >
          <h3 class="text-2xl font-semibold">Service/Produit 1</h3>
          <p class="text-sm">Description</p>
        </UCard>

        <UCard
          class="bg-amber-500 p-5 h-50 flex items-center justify-center gap-2"
        >
          <h3 class="text-2xl font-semibold">Service/Produit 2</h3>
          <p class="text-sm">Description</p>
        </UCard>

        <UCard
          class="bg-slate-500 p-5 h-50 flex items-center justify-center gap-2"
        >
          <h3 class="text-2xl font-semibold">Service/Produit 3</h3>
          <p class="text-sm">Description</p>
        </UCard>
      </section>

      <article class="flex p-4 items-center flex-col gap-4 justify-center">
        <UBadge color="neutral" variant="outline"> Nos statistiques </UBadge>
        <h3 class="text-center">Quelques chiffres clés:</h3>
      </article>

      <section class="grid grid-cols-2 lg:grid-cols-4 gap-3 text-white mb-10">
        <!-- répliquez les UCard pour afficher plus, personnalisez les class pour un rendu different -->
        <UCard class="bg-blue-500 h-50 gap-2">
          <UBadge
            class="h-16 w-16 flex items-center justify-center text-2xl bg-transparent ring-white text-white mb-3"
            variant="outline"
          >
            <UIcon name="i-lucide-user-group" />
          </UBadge>
          <p class="text-sm">
            <span class="text-3xl font-semibold">100+</span> <br />
            clients satisfaits.
          </p>
        </UCard>

        <UCard class="bg-amber-500 h-50 gap-2">
          <UBadge
            class="h-16 w-16 flex items-center justify-center text-2xl bg-transparent ring-white text-white mb-3"
            variant="outline"
          >
            <UIcon name="i-lucide-hand-platter" />
          </UBadge>
          <p class="text-sm">
            <span class="text-3xl font-semibold">60+</span><br />
            services rendus/jour
          </p>
        </UCard>

        <UCard class="bg-purple-500 h-50 gap-2">
          <UBadge
            class="h-16 w-16 flex items-center justify-center text-2xl bg-transparent ring-white text-white mb-3"
            variant="outline"
          >
            <UIcon name="i-lucide-star-check" />
          </UBadge>
          <p class="text-sm">
            Une note globale de <br />
            <span class="text-3xl font-semibold">4,7</span>/5
          </p>
        </UCard>

        <UCard class="bg-slate-500 h-50 gap-2">
          <UBadge
            class="size-16 flex items-center justify-center text-2xl bg-transparent ring-white text-white mb-3"
            variant="outline"
          >
            <UIcon name="i-lucide-user-check" />
          </UBadge>
          <p class="text-sm">
            <span class="text-3xl font-semibold">30 +</span><br />
            experts à votre service
          </p>
        </UCard>
      </section>

      <article class="flex p-4 items-center flex-col gap-4 justify-center">
        <UBadge color="neutral" variant="outline"> Pourquoi nous ?? </UBadge>

        <h3 class="text-center">
          Choisir <Logo class="font-semibold text-3xl" />, c'est opter pour:
        </h3>
      </article>

      <section class="grid grid-cols-1 mb-10 gap-6">
        <article class="pb-4 border-b border-slate-500">
          <h3 class="text-2xl text-muted">Attribut 1</h3>
          <p>Dites' en plus</p>
        </article>
        <article class="pb-4 border-b border-slate-500">
          <h3 class="text-2xl text-muted">Attribut 2</h3>
          <p>Dites' en plus</p>
        </article>
        <article class="pb-4 border-b border-slate-500">
          <h3 class="text-2xl text-muted">Attribut 3</h3>
          <p>Dites' en plus</p>
        </article>
      </section>

      <UCard class="text-white p-4 bg-gray-500">
        <article>
          <h2 class="text-3xl">Commencez votre journée.</h2>
          <p>Connectez-vous pour nous rejoindre.</p>
        </article>
        <UButton
          color="secondary"
          class="mt-5 text-white"
          label="Commencer maintenant"
          trailing
          icon="i-lucide-arrow-right"
          @click="goToLogin"
        />
      </UCard>

      <section class="my-10 flex justify-end">
        <div>
          <h3>Souhaitez-vous nous écrire ??</h3>
          <UButton
            color="neutral"
            variant="soft"
            class="light mt-2"
            label="Cliquez-ici"
            @click="open = true"
          />
        </div>
      </section>
    </UContainer>
  </UMain>
  <UModal
    title="Nous contacter"
    description="Envoyez nous une remarque, transmettez-nous vos requêtes ou posez-nous vos questions."
    v-model:open="open"
  >
    <template #body>
      <UForm
        id="contact-form"
        :schema="schema"
        :state="state"
        class="space-y-4"
        @submit="onSubmit"
      >
        <UFormField label="Votre nom:" name="name">
          <UInput
            v-model="state.name"
            class="w-full"
            placeholder="Votre nom"
            color="secondary"
          />
        </UFormField>
        <UFormField label="Votre adresse E-mail:" name="email">
          <UInput
            v-model="state.email"
            class="w-full"
            placeholder="vous@exemple.com"
            color="secondary"
          />
        </UFormField>
        <UFormField label="Votre message:" name="message">
          <UTextarea
            v-model="state.message"
            class="w-full"
            placeholder="Commencez à rédiger"
            color="secondary"
          />
        </UFormField>
      </UForm>
    </template>
    <template #footer>
      <UButton
        label="Annuler"
        type="reset"
        form="contact-form"
        color="neutral"
        variant="soft"
        @click="open = false"
      />
      <UButton
        label="Envoyer"
        trailing
        icon="i-lucide-send"
        type="submit"
        color="secondary"
        form="contact-form"
      />
    </template>
  </UModal>

  <!-- Insérez des icônes, des images et des animations afin d'enrichir l'interface -->
</template>

<script lang="ts" setup>
import * as z from "zod";
import type { FormSubmitEvent } from "@nuxt/ui";

const router = useRouter();
const toast = useToast();

const open = ref(false);

const schema = z.object({
  name: z.string("Veuillez entrer votre nom"),
  email: z
    .string("Veuillez entrer votre adresse e-mail")
    .email("E-mail invalide"),
  message: z.string("Saisissez votre message"),
});

type Schema = z.output<typeof schema>;

const initialeState = {
  name: undefined,
  email: undefined,
  message: undefined,
}

const state = reactive<Partial<Schema>>({...initialeState});

function goToLogin() {
  router.replace("/login");
}

async function onSubmit(event: FormSubmitEvent<Schema>) {
  toast.add({ title: "Votre message a été envoyer.", color: "success" });
  console.log(event.data);
  Object.assign(state, initialeState);
  open.value = false;
}
</script>

<style></style>

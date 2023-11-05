<script setup lang="ts">

import {navigateTo} from "nuxt/app";

const config = useRuntimeConfig();
const route = useRoute()

const { data, pending, error, refresh } = await useFetch('/login/check');
console.log('user', data.value);
console.log('error', error.value);
if(! data?.value?.sub) {
  navigateTo('/');
}

onMounted(async () => {


})

</script>

<template>
  <v-layout class="rounded rounded-md">
    <v-app-bar title="Sheety API">
      <v-btn>
        Item 1
      </v-btn>
      <v-btn href="/logout?redirect=/">
        Logout
      </v-btn>

    </v-app-bar>

    <v-navigation-drawer>
      <v-list>
        <v-list-item>
          <NuxtLink to="/app">Sheets</NuxtLink>
        </v-list-item>
        <v-list-item>
          <NuxtLink to="/app/settings">Settings</NuxtLink>
        </v-list-item>
        <v-list-item>
          <NuxtLink to="/app/billing">Billing</NuxtLink>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-main classX="d-flex align-center justify-center" style="min-height: 300px;">
      <NuxtPage />
    </v-main>
  </v-layout>
</template>

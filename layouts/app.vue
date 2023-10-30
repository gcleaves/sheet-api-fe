<script setup lang="ts">
import Keycloak from 'keycloak-js';

const KC = useKC();
let keycloak;

onMounted(async () => {
  keycloak = new Keycloak({
    url: 'https://previacita.online/auth',
    realm: 'cita',
    clientId: 'sheet-public'
  });
  try {
    const authenticated = await keycloak.init({
      onLoad: 'login-required',
      checkLoginIframe: false
    });
    console.log(`User is ${authenticated ? 'authenticated' : 'not authenticated'}`);
    console.log(keycloak.tokenParsed);
    KC.value.email = keycloak.tokenParsed.email;
    KC.value.name = keycloak.tokenParsed.name;
    KC.value.authenticated = authenticated;

    //const logoutEndpoint = keycloak.logout()

  } catch (error) {
    console.error('Failed to initialize adapter:', error);
  }
})

</script>

<template>
  <v-layout class="rounded rounded-md">
    <v-app-bar title="Sheety API">
      <v-list class="d-flex">
        <v-list-item>Item 1</v-list-item>
        <v-list-item @click="keycloak.logout({redirectUri:'http://localhost:3333'})">Logout</v-list-item>
      </v-list>
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

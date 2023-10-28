<script setup lang="ts">
//import { onMounted } from 'vue'
import Keycloak from 'keycloak-js';

onMounted(async () => {
  const keycloak = new Keycloak({
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

  } catch (error) {
    console.error('Failed to initialize adapter:', error);
  }
})

</script>

<template>
  <v-container>
    <TopBarWeb></TopBarWeb>
    <div>
      <slot />
    </div>
  </v-container>
</template>

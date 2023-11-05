<script setup lang="ts">
const runtimeConfig = useRuntimeConfig();

onMounted(() => {})

</script>

<template>
  <div class="text-right">
    <span class="me-10">
      <NuxtLink to="/">Home</NuxtLink>
    </span>
    <span class="me-10">
      <NuxtLink to="/docs">Documentation</NuxtLink>
    </span>
    <span class="me-10">
      <NuxtLink to="/about">About</NuxtLink>
    </span>
    <span class="me-10">
      <NuxtLink to="/pricing">Pricing</NuxtLink>
    </span>
    <v-btn color="blue-darken-2" :href="runtimeConfig.public.apiBase+'/login'">
      Log in with Google
    </v-btn>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'app',
})
const { data, pending, error, refresh } = await useFetch('/api/sheets')
</script>

<template>
  <h1>Sheets X</h1>
  <v-list>
    <v-list-item>1</v-list-item>
    <v-list-item>2</v-list-item>
    <v-list-item>3</v-list-item>
  </v-list>
</template>

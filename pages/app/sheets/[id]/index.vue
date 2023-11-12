<script setup lang="ts">

definePageMeta({
  layout: 'app',
})
const route = useRoute();
const updateSheets = useUpdateSheets();
const { data, pending, error, refresh } = await useFetch('/api/sheets/'+route.params.id);
const sheet = data.value;
updateSheets.value = false;
</script>

<template>
  <SheetForm title="Sheet settings" :sheet="sheet"></SheetForm>
</template>

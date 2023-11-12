<script setup lang="ts">
definePageMeta({
  layout: 'app',
})

const sheetItems = ref([]);
const updateSheets = useUpdateSheets();
const sheets = useSheets();

onMounted(async () => {
  if(1) {
    sheets.value = await $fetch('/api/sheets');
  } else {
    updateSheets.value = true;
  }

  for(let k = sheets.value.length-1; k>=0; k-- ) {
    sheetItems.value.push({
      title: sheets.value[k].name,
      subtitle: sheets.value[k].sheet_id,
      value: sheets.value[k].id,
      class: 'ma-3',
      //href: '/app/sheets/'+data.value[k].id,
      onclick: ()=>{
        navigateTo('/app/sheets/'+sheets.value[k].id)
      }
    });
    if(k) sheetItems.value.push({type:'divider'});
  }
})

</script>

<template>
  <v-sheet width="800">
  <h1>Sheets</h1>
  <v-btn block to="/app/sheets/new" class="mb-3 bg-primary">New</v-btn>
  <v-card>
    <v-list lines="'two'" :items="sheetItems" item-props></v-list>
  </v-card>
  </v-sheet>

</template>

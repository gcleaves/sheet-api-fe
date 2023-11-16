<script setup lang="ts">
definePageMeta({
  layout: 'app',
})
const timeout = ref(4000);
const snackbar = ref(false);
let snackbarText;
const sheetItems = ref([]);
const updateSheets = useUpdateSheets();
const sheets = useSheets();

onMounted(async () => {
  if(1) {
    try {
      sheets.value = await $fetch('/api/sheets');
    } catch (e) {
      snackbarText = e.data;
      timeout.value = 10000;
      snackbar.value = true;
    }
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
  <v-card :text="sheetItems.length ? null : 'Click New to add Sheets'">
    <v-list v-if="sheetItems.length"  :items="sheetItems" item-props></v-list>
  </v-card>
  </v-sheet>


  <v-snackbar
      v-model="snackbar"
      :timeout="timeout"
  >
    {{ snackbarText }}

    <template v-slot:actions>
      <v-btn
          color="blue"
          variant="text"
          @click="snackbar = false"
      >
        Close
      </v-btn>
    </template>
  </v-snackbar>
</template>

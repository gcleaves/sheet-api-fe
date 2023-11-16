<script setup lang="ts">
let sheetOriginal = {};

onMounted(() => {
  sheetOriginal = JSON.parse(JSON.stringify(props.sheet));
  console.log(sheetOriginal)
})

const router = useRouter();
const props = defineProps({
  sheet: Object,
  title: String
});
let snackbarTimeout = 4000;
const updateSheets = useUpdateSheets();
const snackbar = ref(false);
const method = ref('');
let snackbarText;

async function deleteSheet() {
  try {
    method.value = 'delete'
    await $fetch('/api/sheets/'+props.sheet.id, {
      method: method.value,
      body: {}
    });
    updateSheets.value = true;
    snackbarText = 'Deleted'
    snackbar.value = true;
    snackbarTimeout = 1000;
  } catch (e) {
    snackbarText = 'Error'
    snackbar.value = true;
    snackbarTimeout = 5000;
  }
}

async function createSheet() {
  try {
    let sheetId = '';
    method.value = 'post';

    if(props.sheet.id) {
      sheetId = '/'+props.sheet.id;
      method.value = 'patch';
    }
    const response = await $fetch('/api/sheets'+sheetId, {
      method: method.value,
      body: props.sheet
    });
    props.sheet.value = response;

    updateSheets.value = true;
    snackbarText = 'Saved!'
    snackbar.value = true;
    snackbarTimeout = 2000;
  } catch (e) {
    console.error(e)
    snackbarText = 'Error!'
    snackbar.value = true;
    snackbarTimeout = 5000;
  }
}

function snackbarGone(val: any) {
  if(method.value==='delete') {
    router.push('/app/sheets');
  }
  if(method.value==='post') {
    //console.log(props.sheet.name)
      router.push('/app/sheets/'+props.sheet.value.id);
  }
}

function reset() {
  props.sheet.name = sheetOriginal.name;
  props.sheet.sheet_id = sheetOriginal.sheet_id;
  props.sheet.api_keys.read = sheetOriginal.api_keys.read;
  props.sheet.api_keys.write = sheetOriginal.api_keys.write;
  //console.log(sheetOriginal.api_keys.write);
}

function ondel() {
  console.log('ondel')
}

</script>

<template>
  <h1> {{ title }}</h1>
  <v-sheet width="600" >
    <v-form @submit.prevent>
      <v-text-field
          v-model="sheet.name"
          label="Sheet name"
      ></v-text-field>
      <v-text-field
          v-model="sheet.sheet_id"
          label="Sheet Id"
          placeholder="Find it in Google Sheets URL"
      ></v-text-field>
      <v-text-field
          v-model="sheet.api_keys.read"
          label="API Key to Read"
      ></v-text-field>
      <v-text-field
          v-model="sheet.api_keys.write"
          label="API Key to Write"
      ></v-text-field>
      <v-btn @click="createSheet()" type="submit" block class="mt-2 bg-primary">Submit</v-btn>
      <v-btn @click="reset" block class="mt-2">Reset</v-btn>
      <!--v-btn v-if="sheet.id" @click="deleteSheet()" type="submit" block class="mt-6 bg-red">Delete</v-btn-->
      <ConfirmedDeleteButton
          v-if="sheet.id"
          @timerExpired="deleteSheet()"
          btClass="mt-2 bg-amber block"
          text="Delete"
          :timer="3"
      ></ConfirmedDeleteButton>
    </v-form>
  </v-sheet>

  <v-snackbar
      @update:modelValue="snackbarGone"
      v-model="snackbar"
      :timeout="snackbarTimeout"
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

<script setup lang="ts">
definePageMeta({
  layout: 'app',

})
const snackbar = ref(false);
let snackbarText;
const items = ['service_account', 'oauth'];
let { data, pending, error, refresh } = await useFetch('/api/settings')
let temp = "{}";
try {
  temp = JSON.stringify(data.value.service_account);
} catch (e) {}
const saJSON = ref(temp);
const alertTitle = ref('');
const errorContents = ref('');

async function updateSettings() {
  try {
    await $fetch('/api/settings', {
      method: 'PATCH',
      body: { access_method: data.value.access_method, service_account: saJSON.value, user_id: data.value.id}
    })
    snackbarText = 'Saved!'
    snackbar.value = true;
  } catch (e) {
    snackbarText = 'Error!'
    snackbar.value = true;
  }
}

async function elevateAccess() {
  await $fetch('/getAccessLink')
      .then((link) => window.location.href = link);
}

</script>

<template>
  <v-sheet width="800">
  <h1>Settings</h1>
  <div v-if="data">
    <v-text-field
        v-model="data.name"
        variant="outlined"
        label="Name"
        disabled
    ></v-text-field>
    <v-text-field
        :model-value="data.email"
        variant="outlined"
        label="Email"
        disabled
    ></v-text-field>

    <v-select
        label="Access method"
        v-model="data.access_method"
        :items="items"
    ></v-select>

    <div v-if="data.access_method==='service_account'">
      <v-textarea
          label="Service account"
          v-model="saJSON"
      ></v-textarea>
    </div>
    <div class="mb-4" v-else>

      <v-btn @click="elevateAccess" class="mr-6" color="green-darken-2">
        Grant Oauth Permissions
      </v-btn>

      <v-btn color="red-darken-2">
        Revoke Oauth Permissions
      </v-btn>

    </div>
  </div>

  <v-btn
      class="mr-6 bg-primary"
      @click="updateSettings()"
  >
    Submit
  </v-btn>

  <v-snackbar
      v-model="snackbar"
      :timeout="4000"
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
  </v-sheet>
</template>

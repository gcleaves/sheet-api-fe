<script setup lang="ts">

</script>

<template>
  <v-container>
  <h1 id="documentation">Documentation</h1>

  <h2 id="getting-started">Getting started</h2>
  <h3 id="recommended">Recommended</h3>

  <ol>
    <li><a href="https://theoephraim.github.io/node-google-spreadsheet/#/guides/authentication?id=service-account">Create a service account</a></li>
    <li>Share a Google Sheet with the Service Account email address.</li>
    <li>Log in here with Google.</li>
    <li>Go to Settings and add your Google Service Account JSON.</li>
    <li>Go to this app’s Sheets section and click New. Add the Google Sheet ID and save.</li>
    <li>Visit the newly created API endpoint. You should see your Google Sheet in JSON format.</li>
  </ol>

  <h3 id="alternate1">Alternate 1</h3>
  <ol>
    <li>Share your Google Sheet with <a href="mailto:sheets-api-service-account@sheets-api-402810.iam.gserviceaccount.com">sheets-api-service-account@sheets-api-402810.iam.gserviceaccount.com</a> .</li>
    <li>Go to this app’s Sheets section and click New. Add the Google Sheet ID and save.</li>
    <li>Visit the newly created API endpoint. You should see your Google Sheet in JSON format.</li>
  </ol>

    <h3 id="alternate2">Alternate 2</h3>
    <ol>
      <li>Share your Google Sheet with anybody with the link.</li>
      <li>Go to this app’s Sheets section and click New. Add the Google Sheet ID and save.</li>
      <li>Visit the newly created API endpoint. You should see your Google Sheet in JSON format.</li>
    </ol>


    <h2 id="advanced">Advanced</h2>

  <h3 id="search">Search</h3>
    <p><code>/api/sheet/{sheetuid}/search?search1=param1&etc</code></p>
    <h4>Examples</h4>
    <p>Find rows with id > 5 and c = 9: /api/sheet/{sheetuid}/search?id=>5&c=9</p>

  <h3 id="update">Update</h3>
  </v-container>
</template>

<script setup lang="ts"></script>

<template>
  <v-sheet>
    <h1>Documentation</h1>
    <h2>Recommended</h2>
    <v-container>
      <ol>
        <li>
          <a
              href="https://theoephraim.github.io/node-google-spreadsheet/#/guides/authentication?id=service-account"
          >Create a Google Service Account</a> with the <em>https://www.googleapis.com/auth/spreadsheets</em> scope.
          Download the JSON file.
        </li>
        <li>Share a Google Sheet with the Service Account email address.</li>
        <li>Log in here with Google.</li>
        <li>Go to Settings and add your Google Service Account JSON.</li>
        <li>Go to this app's Sheets section and click New. Add the Google Sheet ID and save.</li>
        <li>Visit the newly created API endpoint. You should see your Google Sheet in JSON format.</li>
      </ol>
    </v-container>
    <h2>Alternate</h2>
    <v-container>
      <ol>
        <li>Share your Google Sheet with sheets-api-service-account@sheets-api-402810.iam.gserviceaccount.com .</li>
        <li>Go to this app's Sheets section and click New. Add the Google Sheet ID and save.</li>
        <li>Visit the newly created API endpoint. You should see your Google Sheet in JSON format.</li>
      </ol>
    </v-container>
  </v-sheet>
</template>

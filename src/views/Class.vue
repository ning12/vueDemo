<template>
  <div class="app-page">
  <v-file-input
    label="File input"
    filled
    prepend-icon="mdi-camera"
  ></v-file-input>
  </div>
</template>

<script>
  import HelloWorld from '../components/HelloWorld'

  export default {
    name: 'Index',

    components: {
      HelloWorld,
    },
  }
</script>

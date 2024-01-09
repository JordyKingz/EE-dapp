<template>
  <div id="app">
    <Header />
    <router-view/>
    <Footer />
  </div>
</template>

<script>
import Header from "@/components/layout/header"
import Footer from "@/components/layout/Footer";

export default {
  name: "header.vue",
  components: {
    Header,
    Footer
  }
}
</script>
<style>

</style>

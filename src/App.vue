<template>
  <div id="app" class="page-wrapper">
    <HeaderBar />

    <main class="column">
      <router-view></router-view>
    </main>

    <Footer />
  </div>
</template>

<script>
import HeaderBar from "@/components/header-bar";
import Footer from "@/components/footer";

export default {
  name: "App",
  components: { HeaderBar, Footer },
};
</script>

<style lang="scss">
@import "./design/index.scss";
</style>

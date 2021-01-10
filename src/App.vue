<template>
  <div id="app">
    <HeaderBar />
    <main class="column">
      <router-view></router-view>
    </main>
  </div>
</template>

<script>
import HeaderBar from "@/components/header-bar";

export default {
  name: "App",
  components: { HeaderBar },
};
</script>

<style lang="scss">
@import "./design/index.scss";
</style>

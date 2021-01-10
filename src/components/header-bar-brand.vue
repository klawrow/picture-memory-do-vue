<template>
  <div class="navbar-brand">
    <div class="navbar-item nav-home">
      <router-link class="start-over" to="/">START OVER</router-link>
    </div>
    <div class="navbar-item">
      <div class="buttons">
        <a :href="github" target="_blank" rel="noopener noreferrer">
          <i class="fab fa-github" aria-hidden="true"></i>
        </a>
        <a :href="twitter" target="_blank" rel="noopener noreferrer">
          <i class="fab fa-twitter" aria-hidden="true"></i>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      github: "https://github.com/klawrow/picture-memory-do-vue",
      twitter: "https://twitter.com/klawrow",
    };
  },
};
</script>

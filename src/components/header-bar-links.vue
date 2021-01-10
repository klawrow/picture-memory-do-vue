<template>
  <div class="navbar-menu">
    <div class="navbar-end">
      <div class="navbar-item">
        <div class="buttons">
          <a :href="github" target="_blank" rel="noopener noreferrer">
            <i class="fab fa-github fa-2x" aria-hidden="true"></i>
          </a>
          <a :href="twitter" target="_blank" rel="noopener noreferrer">
            <i class="fab fa-twitter fa-2x" aria-hidden="true"></i>
          </a>
          <a :href="vuejs" target="_blank" rel="noopener noreferrer">
            <i class="fab js-logo fa-vuejs fa-2x" aria-hidden="true"></i>
          </a>
        </div>
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
      vuejs: "https://vuejs.org/",
    };
  },
};
</script>

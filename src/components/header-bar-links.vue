<template>
  <div class="navbar-menu">
    <div class="navbar-end">
      <div class="navbar-item">
        <div class="buttons">
          <a :href="vuejs" target="_blank" rel="noopener noreferrer">
            <i class="fab js-logo fa-vuejs" aria-hidden="true"></i>
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
      vuejs: "https://vuejs.org/",
    };
  },
};
</script>

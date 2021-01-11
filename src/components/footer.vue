<template>
  <div>
    <footer class="footer">
      <div class="content has-text-centered">
        <p>
          The source code is licensed
          <a href="http://opensource.org/licenses/mit-license.php">MIT</a>.
        </p>
      </div>
      <div class="is-flex is-justify-content-center">
        <a :href="deployToDO">
          <img
            src="https://www.deploytodo.com/do-btn-blue.svg"
            alt="Deploy to DO"
          />
        </a>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      deployToDO:
        "https://cloud.digitalocean.com/apps/new?repo=https://github.com/klawrow/picture-memory-do-vue/tree/main",
    };
  },
};
</script>

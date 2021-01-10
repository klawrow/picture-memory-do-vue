<template>
  <div>
    <div class="main">
      <section class="hero is-success">
        <div class="hero-body">
          <div class="container">
            <h1 class="title">
              Welcome to the Picture Memory App!
            </h1>
            <h2 class="subtitle">
              Click a button below to display a random picture for you describe
            </h2>
          </div>
        </div>
      </section>
      <section class="is-flex m-3 is-justify-content-center">
        <div>
          <div class="mt-5">
            <router-link
              tag="button"
              class="button is-success is-large"
              :to="{ name: 'Input', params: { s: 3 } }"
            >
              <i class="fas fa-hourglass-half mr-3"></i>
              <span>Show For 3 Seconds</span>
            </router-link>
          </div>

          <div class="mt-5">
            <router-link
              tag="button"
              class="button is-success is-large"
              :to="{ name: 'Input', params: { s: 5 } }"
            >
              <i class="fas fa-hourglass-half mr-3"></i>
              <span>Show For 5 Seconds</span>
            </router-link>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
};
</script>

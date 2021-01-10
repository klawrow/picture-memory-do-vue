<template>
  <div>
    <section class="hero is-success">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">
            How did you do?
          </h1>
          <h2 class="subtitle">
            Compare your description and the image.
          </h2>
        </div>
      </div>
    </section>
    <section class="is-flex m-3 is-justify-content-center">
      <div class="container">
        <div class="field">
          <div class="control">
            <textarea
              class="textarea is-primary"
              v-model="imageDetail.description"
              readonly
            ></textarea>
          </div>
        </div>
      </div>
    </section>
    <section class="is-flex m-3 is-justify-content-center">
      <img :src="imageDetail.url" title="random image" />
    </section>
    <section class="is-flex m-3 is-justify-content-center">
      <div>
        <div class="mt-5">
          <router-link tag="button" class="button is-success is-medium" to="/">
            <span>Start Over</span>
          </router-link>
        </div>
      </div>
    </section>
    <section class="hero is-info">
      <div class="hero-body">
        <div class="container">
          <h2 class="subtitle">
            Let me know what you think via Twitter.
          </h2>

          <a :href="buyMeCoffee" target="_blank"
            ><img
              src="https://cdn.buymeacoffee.com/buttons/v2/default-green.png"
              alt="Buy Me A Coffee"
              style="height: 60px !important;width: 217px !important;"
          /></a>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "Result",
  data() {
    return {
      buyMeCoffee: "https://www.buymeacoffee.com/klawrow",
    };
  },
  props: {
    imageDetail: {
      type: Object,
      default: () => {},
    },
  },
};
</script>

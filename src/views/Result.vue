<template>
  <div>
    <section class="hero is-success">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">
            How did you do?
          </h1>
          <h2 class="subtitle">
            Compare the image and your description.
          </h2>
        </div>
      </div>
    </section>
    <section class="is-flex m-3 is-justify-content-center">
      <img :src="imageDetail.url" title="random image" />
    </section>
    <div class="container">
      <div class="field">
        <div class="control">
          <textarea
            class="textarea is-primary"
            v-model="imageDetail.description"
            disabled
          ></textarea>
        </div>
      </div>
    </div>
    <section class="is-flex m-3 is-justify-content-center">
      <a :href="buyMeCoffee" target="_blank"
        ><img
          src="https://cdn.buymeacoffee.com/buttons/v2/default-green.png"
          alt="Buy Me A Coffee"
          style="height: 60px !important;width: 217px !important;"
      /></a>
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

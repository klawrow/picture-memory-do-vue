<template>
  <div>
    <div id="RandomImage" v-if="randomImage">
      <section class="is-flex m-3 is-justify-content-center">
        <img :src="randomImage" title="random image" />
      </section>
    </div>
    <div id="InputCapture" v-if="imageDetail.url">
      <div class="container">
        <div class="notification is-success">
          <span>
            Please describe the image you saw in under
            {{ inputLimit }} characters.
          </span>
        </div>
        <div class="field">
          <div class="control">
            <textarea
              class="textarea is-primary"
              placeholder="200 character max"
              :maxlength="inputLimit"
              v-model="imageDetail.description"
            ></textarea>
            <span>You have {{ charsRemaining }} characters remaining.</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import * as axios from "axios";

export default {
  name: "Input",
  props: {
    s: {
      type: Number,
      default: 0,
    },
  },
  data() {
    return {
      randomImage: undefined,
      inputLimit: 200,
      imageDetail: {
        url: undefined,
        description: undefined,
      },
    };
  },
  async created() {
    await this.showImage(this.s);
  },
  computed: {
    charsRemaining: function() {
      if (this.imageDetail.description) {
        return this.inputLimit - this.imageDetail.description.length;
      }

      return this.inputLimit;
    },
  },
  methods: {
    async showImage(seconds) {
      const timeout = seconds * 1000; // milliseconds
      this.randomImage = await this.getImage();

      setTimeout(() => {
        this.imageDetail.url = this.randomImage;
        this.randomImage = undefined;
      }, timeout);
    },
    async getImage() {
      const response = await axios.get("https://picsum.photos/300");
      return response.request.responseURL;
    },
  },
};
</script>

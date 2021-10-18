<template>
  <div></div>
</template>

<script>
export default {
  head() {
    return {
      meta: [
        {
          hid: "og-image",
          property: "og:image",
          content:
            "https://d365h3igfpfyap.cloudfront.net/og-image/" +
            this.$route.params.variation +
            ".png",
        },
        {
          hid: "twitter:image",
          name: "twitter:image:src",
          content:
            "https://d365h3igfpfyap.cloudfront.net/og-image/" +
            this.$route.params.variation +
            ".png",
        },
      ],
    };
  },
  mounted() {
    window.location.href = "https://studio-book-project.netlify.app/";
  },
};
</script>
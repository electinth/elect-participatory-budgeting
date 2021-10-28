<template>
  <div>
    <img src="/og_image.png" id="google" />
    <img src="/og_image.png" id="smile" />
  </div>
</template>

<script src="https://cdnjs.cloudflare.com/ajax/libs/FileSaver.js/1.3.8/FileSaver.js"></script>
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
    this.test();
  },
  methods: {
    getBase64Image(img) {
      var canvas = document.createElement("canvas");
      canvas.width = img.width;
      canvas.height = img.height;
      var ctx = canvas.getContext("2d");
      ctx.drawImage(img, 0, 0);
   
      var dataURL = canvas.toDataURL("image/png");
      return dataURL.replace(/^data:image\/(png|jpg);base64,/, "");
    },
    test() {
      var img1 = this.getBase64Image(document.getElementById("google"));
      var img2 = this.getBase64Image(document.getElementById("smile"));

         console.log(img1);
         console.log(img2);

var JSZip = require("jszip");
      var zip = new JSZip();
      zip.file("Hello.html", "Hello World\n");
      zip.folder("images");
      var img = zip.folder("images");
      img.file("google.png", img1, { base64: true });
      img.file("smile.gif", img2, { base64: true });
      zip.generateAsync({ type: "blob" }).then(function (content) {
        saveAs(content, "edm8.zip");
      });
    },
  },
};
</script>
<template>
  <div class="about">
    <!-- <ul>
      <li v-for="(item, key, index) in aboutData" :key="item.id">
        {{ item }} - {{ key }} - {{ index }}
      </li>
      <li>{{ avatar }}</li>
    </ul> -->
    <div>
      <section>
        <div>
          <img v-bind:src="getImgSrc(avatar_name)" alt="" />
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import About from "../mixins/About.js";
const about = new About();

export default {
  name: "AboutSection",
  props: {
    avatar_name: String,
    aboutJsonName: String
  },
  data() {
    return {
      avatar: "",
      fullName: "",
      designation: "",
      organization: [],
      address: "",
      phone: "",
      email: "",
      socials: "",
      aboutMe: "",
      hobby: "",
      techInterested: "",
      techNotInerested: ""
    };
  },
  methods: {
    getImgSrc(imgName) {
      const images = require.context(
        "../assets/images/",
        false,
        /\.png$|\.jpg$/
      );
      return images("./" + imgName);
    }
  },
  created() {
    const l = about.getAlldata(this.aboutJsonName);
    console.log(l.fullName);
  }
};
</script>

<style></style>

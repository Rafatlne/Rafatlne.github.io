<template>
  <div class="about">
    <div>
      <section class="resume__section">
        <div class="avatar-wrapper">
          <img
            v-bind:src="getImgSrc(avatar_name)"
            alt="avatar"
            class="avatar"
          />
        </div>
        <h1 v-text="fullName" class="header-about"></h1>
        <div>
          <span class="designation">{{ designation }} at</span>
          <span class="span__underline">
            <a
              v-bind:href="organization.website"
              v-text="organization.name"
            ></a>
          </span>
        </div>
        <div class="personal">
          <div>
            <img
              class="icon__img"
              src="../assets/icons/icons8-address-30.png"
            />
            <span v-text="address"></span>
          </div>
          <div class="span__underline">
            <img
              class="icon__img"
              src="../assets/icons/icons8-telephone-30.png"
            />
            <span>
              <a v-bind:href="`tel:+${phone}`">{{ phone }}</a>
            </span>
          </div>
          <div class="span__underline">
            <img class="icon__img" src="../assets/icons/icons8-email-30.png" />
            <a v-bind:href="`mailto:+${email}`">{{ email }}</a>
          </div>
        </div>
        <div class="personal">
          <a
            v-bind:href="value.link"
            v-for="value in socials"
            :key="value.id"
            v-bind:title="value.name"
          >
            <img
              class="icon__socials"
              v-bind:src="getIconSrc(value.icon)"
              alt
            />
          </a>
        </div>
      </section>
    </div>
    <div>
      <section class="resume__section">
        <p
          class="para__style"
          v-text="item.para"
          v-for="item in aboutMe"
          :key="item.id"
        ></p>
        <div class="border__line">
          <div class="preference-label">
            <span>My hobbies</span>
          </div>
          <div>
            <span
              class="post-tag hobby-tag"
              v-for="hobby in hobbies"
              :key="hobby.id"
              v-text="hobby"
            ></span>
          </div>
        </div>
        <div class="border__line">
          <div class="preference-label">
            <span>I want to work with</span>
          </div>
          <div>
            <span
              class="post-tag interest-tag"
              v-for="tech in techInterested"
              :key="tech.id"
              v-text="tech"
            ></span>
          </div>
        </div>
        <div class="border__line">
          <div class="preference-label">
            <span>I prefer not to work with</span>
          </div>
          <div>
            <span
              class="post-tag disliked-tag"
              v-for="techNo in techNotInterested"
              :key="techNo.id"
              v-text="techNo"
            ></span>
          </div>
        </div>
      </section>
      <ExperienceSection experienceJsonName="experience.json" />
      <EducationSection educationJsonName="education.json" />
      <ProjectSection projectJsonName="project.json" />
    </div>
    <FooterSection />
  </div>
</template>

<script>
import ExperienceSection from "./ExperienceSection.vue";
import EducationSection from "./EducationSection.vue";
import ProjectSection from "./ProjectSection.vue";
import FooterSection from "./FooterSection.vue";

import GetJson from "../mixins/GetJson";
const getJson = new GetJson();

export default {
  name: "AboutSection",
  components: {
    ExperienceSection,
    EducationSection,
    ProjectSection,
    FooterSection
  },
  props: {
    avatar_name: String,
    aboutJsonName: String
  },
  data() {
    return {
      fullName: "",
      designation: "",
      organization: [],
      address: "",
      phone: "",
      email: "",
      socials: "",
      aboutMe: [],
      hobbies: [],
      techInterested: [],
      techNotInterested: []
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
    },
    getIconSrc(iconName) {
      const images = require.context(
        "../assets/icons/",
        false,
        /\.png$|\.jpg$/
      );
      return images("./" + iconName);
    }
  },
  created() {
    const aboutData = getJson.getAlldata(this.aboutJsonName);
    this.fullName = aboutData.fullName;
    this.designation = aboutData.designation;
    this.organization = aboutData.organization;
    this.address = aboutData.address;
    this.phone = aboutData.phone;
    this.email = aboutData.email;
    this.socials = aboutData.socials;
    this.aboutMe = aboutData.aboutMe;
    this.hobbies = aboutData.hobbies;
    this.techInterested = aboutData.techInterested;
    this.techNotInterested = aboutData.techNotInterested;
  }
};
</script>

<style></style>

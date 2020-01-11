<template>
  <section class="resume__section">
    <h1 class="heading__main">Experience</h1>
    <article v-for="value in experience" :key="value.id">
      <header>
        <h1 class="heading__primary">{{ value.designation }}</h1>
        <span class="company__underline">
          <a :href="value.website">{{ value.name }}</a>
        </span>
        <span class="span">
          <address class="para__style">{{ value.location }}</address>
          <time class="time">{{ value.date.startDate }}</time>
          <time v-if="value.date.endDate !== null">
            to {{ value.date.endDate }}</time
          >
        </span>
      </header>
      <section>
        <p class="company__underline" v-html="value.description.summary"></p>
        <ul>
          <div v-for="point in value.description.bulletPoint" :key="point.id">
            <li>{{ point }}</li>
          </div>
        </ul>
      </section>
      <footer>
        <span
          class="post-tag interest-tag"
          v-for="tech in value.techs"
          :key="tech.id"
          >{{ tech }}</span
        >
      </footer>
    </article>
  </section>
</template>

<script>
import GetJson from "../mixins/GetJson";
const getJson = new GetJson();

export default {
  name: "ExperienceSection",
  props: {
    experienceJsonName: String
  },
  data() {
    return {
      experience: []
    };
  },
  created() {
    this.experience = getJson.getAlldata(this.experienceJsonName);
  }
};
</script>

<style></style>

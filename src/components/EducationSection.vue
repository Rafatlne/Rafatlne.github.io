<template>
  <section class="resume__section">
    <h1 class="heading__main">Education</h1>
    <article v-for="value in education" :key="value.id">
      <header>
        <h1 class="heading__primary">{{ value.degree }}</h1>
        <span class="company__underline">
          <a :href="value.website">{{ value.institution }}</a>
        </span>
        <span class="span">
          <address class="para__style">{{ value.location }}</address>
          <span class="time">Batch {{ value.batch }}</span>
        </span>
      </header>
      <div class="margin__bot">
        <strong class="strongs">CGPA</strong>
        <span>{{ value.cgpa }} / 4.00</span>
      </div>
      <div v-for="paper in value.thesis" :key="paper.id">
        <strong class="strongs">Thesis</strong>
        <span
          >{{ paper.author }}, <a href="paper.link"> {{ paper.name }}</a></span
        >
      </div>
      <section>
        <ul>
          <div v-for="point in value.extra" :key="point.id">
            <li>{{ point }}</li>
          </div>
        </ul>
      </section>
    </article>
  </section>
</template>

<script>
import GetJson from "../mixins/GetJson";
const getJson = new GetJson();

export default {
  name: "EducationSection",
  props: {
    educationJsonName: String
  },
  data() {
    return {
      education: []
    };
  },
  created() {
    this.education = getJson.getAlldata(this.educationJsonName);
  }
};
</script>

<style></style>

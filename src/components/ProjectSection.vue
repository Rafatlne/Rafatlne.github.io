<template>
  <section class="resume__section">
    <h1 class="heading__main">Projects</h1>
    <article
      class="project__article"
      v-for="project in projects"
      :key="project.id"
    >
      <header>
        <h1 class="heading__main-projects .company__underline">
          <a :href="project.link">{{ project.name }}</a>
        </h1>
        <span>
          <address class="para__style">{{ project.company }}</address>
          <time class="time">{{ project.date }}</time>
        </span>
      </header>
      <section>
        <p class="margin__bottom">
          <img
            class="project__img"
            src="../assets/icons/icons8-project-30.png"
          />{{ project.summary }}
        </p>
      </section>
      <footer>
        <span
          class="post-tag interest-tag"
          v-for="tech in project.techs"
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
  name: "ProjectSection",
  props: {
    projectJsonName: String
  },
  data() {
    return {
      projects: []
    };
  },
  created() {
    this.projects = getJson.getAlldata(this.projectJsonName);
  }
};
</script>

<style></style>

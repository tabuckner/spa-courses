<script>
  import { onMount } from "svelte";

  import courses from "../services/courses.service";
import students from "../services/students.service";
  import { currentTermsCourses } from "../state/core.store";
  import CourseListItem from "./CourseListItem.svelte";

  onMount(async () => {
    await students.getStudentsRegistrations();
    await courses.getCurrentTermsCourses();
  });
</script>

<div class="course-list">
  {#if $currentTermsCourses}
    {#each $currentTermsCourses as course (course.id)}
      <CourseListItem {course} />
    {/each}
  {:else}
    <p>No currently offered courses.</p>
  {/if}
</div>

<style lang="scss">
  .course-list {
    padding: 24px 16px;
  }
</style>

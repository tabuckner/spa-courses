<script>
  import { onMount } from "svelte";

  import courses from "../services/courses.service";
  import { currentTermsCourses } from "../state/core.store";
import CourseListItem from "./CourseListItem.svelte";

  onMount(async () => {
    await courses.getCurrentTermsCourses();
  });
</script>

<div class="course-list">
  {#if $currentTermsCourses}
    {#each $currentTermsCourses as course (course.id)}
      <CourseListItem {course}></CourseListItem>
    {/each}
  {:else}
    <p>No currently offered courses.</p>
  {/if}
</div>

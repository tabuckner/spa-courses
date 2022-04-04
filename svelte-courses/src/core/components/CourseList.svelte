<script>
  import { onMount } from "svelte";

  import courses from "../services/courses.service";
  import { currentTermsCourses } from "../state/core.store";

  onMount(async () => {
    await courses.getCurrentTermsCourses();
  });
</script>

<div class="course-list">
  Course List
  {#if $currentTermsCourses}
    {#each $currentTermsCourses as course (course.id)}
      <p>{course.name}</p>
    {/each}
  {:else}
    <p>No currently offered courses.</p>
  {/if}
</div>

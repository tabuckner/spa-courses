<script lang="ts">
  import type { CourseModel } from "../models/course.model";

  export let prerequisites: Array<CourseModel>;
</script>

<div class="prerequisites-row">
  {#each prerequisites as prerequisite (prerequisite.id)}
    <span>{prerequisite.name}</span>
  {/each}
</div>

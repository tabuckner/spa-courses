<script lang="ts">
  import type { CourseModel } from "../models/course.model";
  import students from "../services/students.service";

  export let prerequisites: Array<CourseModel>;
</script>

<div class="prerequisites-row">
  {#each prerequisites as prerequisite, i (prerequisite.id)}
    {#await students.isPrerequisiteSatisfied(prerequisite) then isSatisfied}
      <span class="prerequisites-row__item" class:is-incomplete={!isSatisfied}>
        {prerequisite.name}{i === prerequisites.length - 1 ? "" : ", "}
      </span>
    {/await}
  {/each}
</div>

<style lang="scss">
  .prerequisites-row {
    &__item {
      &.is-incomplete {
        color: red;
      }
    }
  }
</style>

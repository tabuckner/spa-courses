<script lang="ts">
  import type { CourseModel } from "../models/course.model";
  import students from "../services/students.service";

  export let course: CourseModel;
  let registered = false;

  $: hasCompletedAllPrerequisites =
    students.hasCompletedAllPrerequisites(course);

  const handleRegister = () => {
    registered = !registered;
  };
</script>

{#await hasCompletedAllPrerequisites then canRegister}
  <div class="course-list-item">
    <div class="course-list-item__content">
      <div class="course-list-item__name">
        {course.name}
      </div>
      <div class="course-list-item__prerequisites">
        {canRegister}
        Prereqs: {course.prerequisites
          .map((prerequisite) => prerequisite.name)
          .join(", ")}
      </div>
    </div>
    <div class="course-list-item__actions">
      <div class="course-list-item__register">
        {#if registered}
          <label>Registered</label>
          <input type="checkbox" checked disabled />
        {:else}
          <button on:click={handleRegister} disabled={!canRegister}>Register</button>
        {/if}
      </div>
    </div>
  </div>
{/await}

<style lang="scss">
  .course-list-item {
    border-radius: 4px;
    border: 1px solid black;
    margin-bottom: 8px;
    padding: 8px 16px;
    background-color: white;
    display: flex;
    align-items: center;
    transition: all 0.2s ease-in-out;

    &:hover {
      box-shadow: 1px 2px 3px rgba(0, 0, 0, 0.33);
    }

    &__name {
      margin-bottom: 16px;
    }

    &__content {
      flex-grow: 2;
    }

    &__actions {
      button {
        cursor: pointer;
      }
    }

    &__register {
      display: flex;
      align-items: center;

      label {
        margin-right: 4px;
      }
    }
  }
</style>

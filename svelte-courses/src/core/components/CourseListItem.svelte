<script lang="ts">
import type { CourseModel } from "../models/course.model";


  export let course: CourseModel;
</script>

<div class="course-list-item">
  <div class="course-list-item__content">
    <div class="course-list-item__name">
      {course.name}
    </div>
    <div class="course-list-item__prerequisites">
      Prereqs: {course.prerequisites.map(prerequisite => prerequisite.name)}
    </div>
  </div>
  <div class="course-list-item__actions">
    <div class="course-list-item__register">
        <button>Register</button>
    </div>
  </div>
</div>

<style lang="scss">
  .course-list-item {
    border-radius: 4px;
    border: 1px solid black;
    margin-bottom: 8px;
    padding: 8px 16px;
    background-color: white;
    display: flex;
    align-items: center;
    transition: all .2s ease-in-out;


    &:hover {
      box-shadow: 1px 2px 3px rgba(0,0,0,0.33);
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
  }
</style>
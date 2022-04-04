<script lang="ts">
import { onMount } from "svelte";

  import { currentUser } from "../../auth/state/auth.store";
import term from "../services/term.service";
  import { currentTerm } from "../state/core.store";

  onMount(() => {
    term.getCurrentTerm();
  })
</script>

<nav class="navbar">
  <div class="navbar__logo">
    <img src="https://via.placeholder.com/350x150" alt="Brand Logo" />
  </div>
  <div class="navbar__term">
    Current Term:
    {$currentTerm?.startDate}
    -
    {$currentTerm?.endDate}
  </div>
  <div class="navbar__user">
    {$currentUser.username}
  </div>
</nav>

<style lang="scss">
  .navbar {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 8px 16px;
    background: lightgray;

    &__logo {
      max-width: 150px;

      img {
        width: 100%;
      }
    }
  }
</style>

<script lang="ts">
  import LogIn from "./auth/components/LogIn.svelte";
  import { isAuthenticated } from "./auth/state/auth.store";
  import CourseList from "./core/components/CourseList.svelte";
  import Navbar from "./core/components/Navbar.svelte";
</script>

<main class="app">
  {#if $isAuthenticated === true}
    <Navbar />
    <CourseList />
  {:else}
    <LogIn />
  {/if}
</main>

<style>
</style>

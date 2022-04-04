<script lang="ts">
  import type { AuthDTO } from "../models/auth.dto";
  import auth from "../services/auth.service";

  let username = "";
  let password = "";

  const handleFormSubmit = () => {
    console.warn(username, password);
    const authDTO: AuthDTO = {
      username,
      password,
    };

    auth.logIn(authDTO);
  };
</script>

<main class="login">
  <div class="login__logo">
    <img src="https://via.placeholder.com/350x150" alt="Brand Logo" />
  </div>
  <form class="login__form">
    <div class="login__form__form-field login__form__username">
      <input type="text" placeholder="Username" bind:value={username} />
    </div>
    <div class="login__form__form-field login__form__password">
      <input type="password" placeholder="Password" bind:value={password} />
    </div>
    <div class="login__form__actions">
      <button
        class="login__form__submit"
        on:click|preventDefault={handleFormSubmit}>Sign In</button
      >
    </div>
  </form>
</main>

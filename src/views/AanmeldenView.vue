<script >
import {useUserStore} from "@/stores/user.js";

export default {
  setup(){
    const userStore = useUserStore();
    const email = ref('');
    const password = ref('');

    const login = async () => {
      const success = await store.login({ email: email.value, password: password.value });

      if (success) {
        this.$router.push('/cart');
      } else {
        alert('De gegevens zijn onjuist');
      }
    };

    return { email, password, login };
  },
}
</script>

<template>
  <div class="login-container">
    <h1 class="main-heading">Aanmelden</h1>
    <form @submit.prevent="login" class="login-form">
      <label for="email">E-mail:</label>
      <input v-model="email" type="email" id="email" name="Email" required>
      <label for="wachtwoord">Wachtwoord</label>
      <input v-model="password" type="password" id="wachtwoord" name="Wachtwoord" required>
      <button type="submit" class="card-button">Aanmelden</button>
    </form>
    <a href="#" class="wachtwoord-vergeten">Wachtwoord vergeten?</a>
  </div>
</template>

<style scoped>

</style>
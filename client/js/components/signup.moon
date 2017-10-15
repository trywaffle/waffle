<template>
  <div class="container main">
    <h1>Sign Up</h1>
    <input type="text" m-model="name" placeholder="Name"/>
    <input type="email" m-model="email" placeholder="Email"/>
    <input type="password" m-model="password" placeholder="Password"/>
    <button>Create Account</button>
  </div>
</template>

<style scoped>

</style>

<script>
  exports = {
    data() {
      return {
        name: "",
        email: "",
        password: ""
      }
    }
  };
</script>

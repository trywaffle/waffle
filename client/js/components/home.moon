<template>
  <div class="container main">
    <router-link to="/"><h1>Waffle</h1></router-link>
    <p>the simplest way to leverage your community.</p>
    <router-link to="/signup" class="button">create yours</router-link>
  </div>
</template>
<style scoped>
  .main {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    height: 100vh;
    max-width: 500px;
    text-align: left;
  }

  a {
    text-decoration: none;
  }

  a h1 {
    font-size: 75px;
    color: #606060;
  }

  p {
    margin-top: 0;
    font-weight: 300;
    font-size: 40px;
  }
</style>
<script>

</script>

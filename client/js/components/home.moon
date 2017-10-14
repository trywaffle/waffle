<template>
  <div>
    <div class="container main">
      <router-link to="/" class="nav-item"><h1>Waffle</h1></router-link>
      <p>the simplest way to leverage your community.</p>
      <button>create yours</button>
    </div>
  </div>
</template>
<style scoped>
  .main {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    height: 100vh;
    max-width: 600px;
    text-align: left;
  }

  a {
    text-decoration: none;
    padding: 0;
  }

  a h1 {
    font-size: 75px;
    color: #606060;
  }

  p {
    font-family: "Quicksand", monospace;
    font-weight: 400;
    font-size: 40px;
    margin-top: 0;
  }
</style>
<script>

</script>

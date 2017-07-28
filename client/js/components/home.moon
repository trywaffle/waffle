<template>
  <div class="full-screen container center text-center">
    <router-link to="/"><h1>waffle</h1></router-link>
    <p>the simplest way to leverage your community</p>
    <iframe src="https://www.youtube.com/embed/TAtB8fupP3w" frameborder="0" allowfullscreen id="video"></iframe>
    <button href="https://feathrd.typeform.com/to/mGMMXR" class="typeform-share" data-mode="popup">create yours</button>
  </div>
</template>
<style scoped>
  a {
    color: #606060;
    text-decoration: none;
  }

  a h1 {
    font-size: 60px;
  }

  p {
    font-family: "Quicksand", monospace;
    font-weight: 400;
    font-size: 30px;
    max-width: 400px;
    margin-top: 0;
  }

  #video {
    width: 510px;
    height: 265px;
    border-radius: 10px;
  }

  @media screen and (max-width:400px) {
    .container {
      margin-top: 10%;
    }

    a h1 {
      font-size: 40px;
    }

    p {
      font-size: 20px;
      max-width: 300px;
    }

    #video {
      width: 80%;
    }
  }
</style>
<script>

</script>

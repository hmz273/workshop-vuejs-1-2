<template>
  <div id="app">
    <Head></Head>
    <AboutMe></AboutMe>
    <Experience></Experience>
    <Imgs></Imgs>
    <Project></Project>
    <Footer></Footer>
    
  </div>
</template>


<script>

import Head from "./components/Head";
import AboutMe from "./components/AboutMe";
import Experience from "./components/Experience";
import Imgs from "./components/img";
import Project from "./components/project";
import Footer from "./components/footer";
export default {
  name: "App",
  components:{
    Head,
    AboutMe,
    Experience,
    Imgs,
    Project,
    Footer
  }
}
</script>

<style>
#app {
  overflow: hidden;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

</style>

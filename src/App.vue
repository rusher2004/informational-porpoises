<template>
  <div id="app">
    <el-container>
      <el-header height="95px">
        <Header />
      </el-header>
      <el-main>
        <router-view/>
      </el-main>
      <el-footer>
        <Footer />
      </el-footer>
    </el-container>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: 'app',
  components: {
    Header,
    Footer
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.taxon-container {
  display: grid;
  grid-template-rows: 50px auto;
}
.taxon-title {
  text-align: left;
}
.taxon-title-name-big {
  font-size: 2em;
}
.taxon-title-name-big {
  font-size: 1.5em;
  font-style: italic; 
}
.cards-title {
  text-align: left;
  text-transform: capitalize;
  font-size: 1.5em;
  padding-left: 15px;
  margin-top: -25px;
}
</style>

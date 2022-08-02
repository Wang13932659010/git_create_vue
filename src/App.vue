<template>
  <div id="app">
    <!--    第一次提交-->
    <!--    第二次提交-->
    <!--    第三次提交-->
    <!--    第五次提交-->
    <!--    第六次提交-->
    <button @click="event">切换</button>
    <!--    <router-link :to="temp?'/home1':'/home2'">跳转</router-link>-->
    <!--  测试两种方法  -->
    <!--    hot-fix分支修改    -->
    <!--    master分支修改  -->
    <!--    push  -->
    <router-view/>
  </div>
</template>
<script>
export default {
  name:'App',
  data(){
    return {
      temp:true
    }
  },
  created() {
  },
  methods:{
    event(){
      this.temp=!this.temp
      if(this.temp){
        if(this.$route.path!=='/home1'){
          this.$router.push('/home1')
        }
      }else{
        if(this.$route.path!=='/home2'){
          this.$router.push('/home2')
        }
      }
    }
  }
}
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}
</style>

<template>
  <div id="nav">
    <router-link to="/espirulina">Espirulina</router-link> &nbsp;&nbsp;&nbsp;
    <router-link to="/lechuga">Lechuga</router-link>&nbsp;&nbsp;&nbsp;
    <router-link to="/germinados">Germinados</router-link>
  </div>
  <router-view />


</template>

<script>

</script>

<style lang="scss">
#app {
  text-align: center;
 
}

#nav {
  padding: 30px;

  a {
    font-size: 35px;
    color: #00000067;

    &.router-link-exact-active {
      font-size: 45px;
      color: #014e01;
      font-weight: bold;

    }
  }
}
</style>

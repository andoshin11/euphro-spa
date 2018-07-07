<template>
  <div class="Home">
    <div class="Home__Header">
      <HeaderContainer/>
    </div>
    <img src="../assets/logo.png">
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import HeaderContainer from "@/containers/Header/index.vue";
export default Vue.extend({
  name: "home",
  components: {
    HeaderContainer
  }
});
</script>

<style scoped>
.Home {
  display: flex;
  flex-direction: column;
  align-items: stretch;
}

.Home__Header {
  width: 100%;
  height: 48px;
}
</style>

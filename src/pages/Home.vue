<template>
  <div class="Home">
    <div class="Home__Header">
      <HeaderContainer/>
    </div>
    <div class="Home__Location">
      <Location/>
    </div>
    <div class="Home__Neighbors">
      <NeighborContainer/>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import HeaderContainer from "@/containers/Header/index.vue";
import NeighborContainer from "@/containers/Neighbors/index.vue";
import Location from "@/components/Modules/Location.vue";

export default Vue.extend({
  name: "home",
  components: {
    HeaderContainer,
    Location,
    NeighborContainer
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

<template>
  <div class="Museum">
    <HeaderContainer/>
    <MuseumDetailContainer :id="$route.params.id"/>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import HeaderContainer from "@/containers/Header/index.vue";
import MuseumDetailContainer from "@/containers/Museum/detail/index.vue";

export default Vue.extend({
  name: "product",
  components: {
    HeaderContainer,
    MuseumDetailContainer
  }
});
</script>

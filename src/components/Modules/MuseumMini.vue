<template>
  <a class="MuseumMini">
    <div class="MuseumMini__Image">
      <img v-if="museum.img.length > 18" :src="museum.img" :alt="museum.name">
    </div>
    <div class="MuseumMini__Title">{{ museum.name }}</div>
    <div class="MuseumMini__Address">{{ museum.address }}</div>
  </a>
</template>

<script lang="ts">
import Vue from "vue";
import { IMuseum } from "@/entities/Museum";

export default Vue.extend({
  props: {
    museum: {
      typs: Object as () => IMuseum,
      required: true
    }
  }
});
</script>

<style scoped>
.MuseumMini {
  display: block;
  position: relative;
  width: 100%;
  border-radius: 8px;
  box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.1);
  transition: all 0.15s ease-in-out;
  overflow: hidden;
}

.MuseumMini__Image {
  min-height: 100px;
  background-image: linear-gradient(
    135deg,
    rgba(24, 188, 197, 0.8),
    rgba(24, 154, 197, 0.8) 50%,
    rgba(24, 137, 197, 0.8)
  );
  background-color: #189ac5;
}

.MuseumMini__Image > img {
  max-width: 100%;
}

.MuseumMini__Title {
  font-size: 12px;
  padding: 0 8px;
  margin: 8px 0 8px;
}

.MuseumMini__Address {
  font-size: 10px;
  text-decoration: underline;
  color: #848488;
  padding: 0 8px;
  margin: 0 0 8px;
}
</style>

<template>
  <div class="About">
    <div class="About__Header">
      <HeaderContainer/>
    </div>
    <div class="About__Body">
      <div class="About__Message">
        POWER OF ART
      </div>
      <div class="About__MessageSub">
        Euphro brings you a whole new experience of discovering the way of interacting with Art.
      </div>
      <div class="About__Message">
        About Project
      </div>
      <div class="About__MessageSub">
        This entire project has been developed through the course of <a href="https://go-beginners.connpass.com/event/86555/" class="About__Link" target="_blank">Go Beginner's develop camp</a>.
      </div>
      <div class="About__Message">
        About Me
      </div>
      <div class="About__MessageSub">
        Go find me <a href="https://github.com/andoshin11" class="About__Link" target="_blank">here</a> and <a href="https://andoshin11.github.io/" class="About__Link" target="_blank">there</a>.
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import HeaderContainer from "@/containers/Header/index.vue";

export default Vue.extend({
  name: "about",
  components: {
    HeaderContainer
  }
});
</script>

<style scoped>
.About {
  display: flex;
  flex-direction: column;
  align-items: stretch;
}

.About__Body {
  padding: 48px 20px 20px;
}

.About__Message {
  color: #189ac5;
  font-weight: bold;
  font-size: 32px;
  line-height: 3;
}

.About__MessageSub {
  line-height: 1.5;
  letter-spacing: 1px;
}

.About__Link {
  text-decoration: underline;
  color: #189ac5;
}
</style>

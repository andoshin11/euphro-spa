<template>
  <div class="Header">
    <div class="Header__Inner">
      <div class="Header__Left">
        <div class="Header__Logo">
          <a href="/#/">
            Euphro
          </a>
        </div>
      </div>
      <div class="Header__Right">
        <div class="Header__Actions">
          <div class="Header__Button">
            <Button text="About" :size="ButtonSize.Small" @click="$router.push({path: '/about'})"/>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Button, {
  Size as ButtonSize,
  Type as ButtonType
} from "@/components/Base/Button.vue";

export default Vue.extend({
  components: {
    Button
  },
  data() {
    return {
      ButtonType,
      ButtonSize
    };
  }
});
</script>

<style scoped>
.Header {
  box-sizing: border-box;
  display: flex;
  position: fixed;
  width: 100%;
  height: 48px;
  padding: 0 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12);
  z-index: 1000;
  background-color: #fff;
}

.Header__Inner {
  display: flex;
  flex: 1;
  justify-content: space-between;
  align-items: center;
}

.Header__Logo {
  font-weight: bold;
  font-size: 20px;
  margin-left: 16px;
}

.Header__Actions {
  display: flex;
}

.Header__Button:first-child {
  margin-right: 8px;
}
</style>

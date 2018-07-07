<template>
  <div class="Location">
    <div class="Location__Top">
      <div class="Location__Left">
        <div class="Location__Area">
          東京都 世田谷区
          <span class="Location__Label">から</span>
        </div>
        <div class="Location__Distance">
          5km
          <span class="Location__Label">圏内のスポット</span>
        </div>
      </div>
      <div class="Location__Right">
        <i class="fas fa-map-marker-alt Location__Icon" />
      </div>
    </div>
    <div class="Location__Bottom">
      <div class="Location__Toggle">
        <i class="fas fa-angle-down Location__ToggleIcon" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({});
</script>

<style scoped>
.Location {
  display: flex;
  flex-direction: column;
  line-height: 30px;
  padding: 32px 20px 0;
  background-image: linear-gradient(
    135deg,
    rgba(24, 188, 197, 0.8),
    rgba(24, 154, 197, 0.8) 50%,
    rgba(24, 137, 197, 0.8)
  );
  background-color: #189ac5;
  color: #fff;
}

.Location__Top {
  display: flex;
  flex-direction: row;
}

.Location__Left {
  display: flex;
  flex: 3;
  flex-direction: column;
  align-items: flex-start;
}

.Location__Right {
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
}

.Location__Toggle {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.Location__Area {
  font-size: 24px;
  font-weight: bold;
}

.Location__Distance {
  font-size: 20px;
  font-weight: bold;
}

.Location__Label {
  font-size: 16px;
  margin-left: 8px;
  font-weight: normal;
}

.Location__Icon {
  font-size: 32px;
}

.Location__Toggle {
  padding: 16px 0 8px;
}

.Location__ToggleIcon {
  font-size: 24px;
}
</style>

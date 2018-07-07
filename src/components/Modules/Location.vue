<template>
  <div class="Location">
    <div class="Location__Top">
      <div class="Location__Left">
        <div class="Location__Area">
          東京都 世田谷区
          <span class="Location__Label">から</span>
        </div>
        <div class="Location__Distance">
          {{ distance }}km
          <span class="Location__Label">圏内のスポット</span>
        </div>
      </div>
      <div class="Location__Right">
        <i class="fas fa-map-marker-alt Location__Icon" />
      </div>
    </div>
    <div class="Location__Bottom" :class="{ active: showControll }">
      <div class="Location__Controll">
        <div class="Location__ControllDistance">
          <div class="Location__ControllTitle">距離を設定</div>
          <div class="Location__ControllContent">
            <input type="number" name="distance" class="Location__ControllInput" :value="distance" @change="onDistanceChange">
            <label for="number" class="Location__ControllLabel">km圏内</label>
          </div>
        </div>
      </div>
      <div class="Location__Toggle" @click="showControll = !showControll">
        <i class="fas fa-angle-down Location__ToggleIcon" :class="{ active: showControll }" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  data() {
    return {
      showControll: false
    };
  },
  props: {
    distance: {
      type: Number,
      required: true
    },
    onDistanceChange: {
      type: Function,
      required: true
    }
  }
});
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

.Location__Controll {
  padding-top: 0;
  height: 0;
  transition: 0.5s;
  overflow: hidden;
}

.Location__Bottom.active > .Location__Controll {
  padding-top: 16px;
  height: auto;
}

.Location__ControllLabel {
  margin-left: 8px;
}

.Location__ToggleIcon {
  transition: 0.5s;
}

.Location__ToggleIcon.active {
  transform: rotateX(180deg);
}
</style>

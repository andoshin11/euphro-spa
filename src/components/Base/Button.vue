<template>
  <button :class="[typeClassName, sizeClassName, { '-autoWidth': autoWidth }]" :type="nativeType" :disabled="disabled" class="Button" @click="handleClick" >
    <div class="Button__Text">{{ text }}</div>
  </button>
</template>

<script lang="ts">
import Vue from "vue";

export enum Type {
  Primary = "primary",
  Secondary = "secondary",
  Destructive = "destructive"
}

export enum Size {
  Small = "small",
  Midium = "midium",
  Large = "large"
}

export default Vue.extend({
  props: {
    nativeType: {
      type: String,
      default: "button"
    },
    disabled: {
      type: Boolean,
      default: false
    },
    type: {
      type: String,
      default: Type.Primary
    },
    size: {
      type: String,
      default: Size.Midium
    },
    autoWidth: {
      type: Boolean,
      default: false
    },
    text: {
      type: String,
      required: true
    }
  },
  computed: {
    typeClassName: function() {
      return `-${this.type}`;
    },
    sizeClassName: function() {
      return `-${this.size}`;
    }
  },
  methods: {
    handleClick(): void {
      this.$emit("click");
    }
  }
});
</script>

<style scoped>
.Button {
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  cursor: pointer;
  border: none;
  border-radius: 16px;
  transition: 0.3s;
}

.Button.-autoWidth {
  width: 100%;
}

.Button.-small {
  height: 28px;
  padding: 0 16px;
  font-size: 12px;
}

.Button.-midium {
  height: calc(8px * 5);
  padding: 0 calc(8px * 2);
  font-size: 16px;
}

.Button.-midium .Button__Icon {
  width: calc(8px * 3);
  height: calc(8px * 3);
  margin-right: calc(8px * 2);
}

.Button.-large {
  height: calc(8px * 6);
  padding: 0 calc(8px * 3);
  font-size: 18px;
}

.Button.-large .Button__Icon {
  width: calc(8px * 3);
  height: calc(8px * 3);
  margin-right: calc(8px * 2);
}

.Button.-primary {
  color: #fff;
  background-image: linear-gradient(
    135deg,
    rgba(24, 188, 197, 0.8),
    rgba(24, 154, 197, 0.8) 50%,
    rgba(24, 137, 197, 0.8)
  );
  background-color: #189ac5;
  font-weight: bold;
  letter-spacing: 1px;
}

.Button.-primary:hover {
  background: #888;
}

.Button.-primary:active {
  background: #00578d;
}

.Button.-primary[disabled] {
  pointer-events: none;
  color: #999;
  background: #dde8ee;
}

.Button.-secondary {
  color: #189ac5;
  border: 1px solid #189ac5;
  background: #fff;
}

.Button.-secondary:hover {
  background: #e6f5fb; /* TODO カラーパレットが修正され次第変更 */
}

.Button.-secondary:active {
  background: #cdecf9; /* TODO カラーパレットが修正され次第変更 */
}

.Button.-secondary[disabled] {
  pointer-events: none;
  color: #999;
  border: none;
  background: #dde8ee;
}

.Button.-destructive {
  color: #fff;
  background: #e70; /* TODO カラーパレットが修正され次第変更 */
}

.Button.-destructive[disabled] {
  pointer-events: none;
  color: #999;
  border: none;
  background: #dde8ee;
}
</style>

<template>
  <div class="MuseumDetail">
    <template v-if="presenter.item">
      <div class="MuseumDetail__Header">
        <img v-if="presenter.item.img.length > 18" class="MuseumDetail__HeaderImage" :src="presenter.item.img" />
      </div>
      <div class="MuseumDetail__Body">
        <div class="MuseumDetail__Name">{{ presenter.item.name }}</div>
        <div class="MuseumDetail__Address">
        <i class="fas fa-map-marker-alt" />
          {{ presenter.item.address }}
        </div>
      </div>
      <div class="MuseumDetail__Info">
        <div class="MuseuDetail__Entry">{{ presenter.item.entry }}</div>
        <a class="MuseumDetail__Link" target="_blank" :href="presenter.item.url">{{ presenter.item.url }}</a>
      </div>
    </template>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import presenter, { IPresenter, IPresenterState } from "./presenter";
import LoadContainerUseCase, {
  ILoadContainerUseCase
} from "./LoadContainerUseCase";
import DestroyContainerUseCase, {
  IDestroyContainerUseCase
} from "./DestroyContainerUseCase";
import { IMuseum } from "@/entities/Museum";
import ErrorService from "@/services/ErrorService";
import MuseumRepository from "@/repositories/MuseumRepository";
import Button from "@/components/Base/Button.vue";

export default Vue.extend({
  components: {
    Button
  },
  props: {
    id: {
      type: String,
      required: true
    }
  },
  computed: {
    presenter(): IPresenterState {
      const params: IPresenter = {
        museumRepository: new MuseumRepository()
      };

      const state = presenter(params);
      return state;
    }
  },
  async mounted() {
    const params: ILoadContainerUseCase = {
      museumRepository: new MuseumRepository(),
      id: this.id,
      errorService: new ErrorService({
        context: "mounting products detail page"
      })
    };

    await new LoadContainerUseCase(params).execute();
  },
  async destroyed() {
    const params: IDestroyContainerUseCase = {
      museumRepository: new MuseumRepository(),
      id: this.id
    };

    await new DestroyContainerUseCase(params).execute();
  }
});
</script>

<style>
.MuseumDetail {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 48px;
  min-height: 100vh;
  background-color: #eef3f8;
}

.MuseumDetail__Header {
  min-height: 100px;
  background-image: linear-gradient(
    135deg,
    rgba(24, 188, 197, 0.8),
    rgba(24, 154, 197, 0.8) 50%,
    rgba(24, 137, 197, 0.8)
  );
  background-color: #189ac5;
}

.MuseumDetail__HeaderImage {
  max-width: 100%;
}

.MuseumDetail__Body {
  padding: 24px 16px;
  width: calc(100% - 40px);
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12);
  box-sizing: border-box;
  border-radius: 8px;
  transform: translateY(-50%);
  margin-bottom: -20px;
}

.MuseumDetail__Name {
  font-weight: bold;
  margin-bottom: 16px;
}

.MuseumDetail__Address {
  font-size: 16px;
  text-decoration: underline;
  color: #848488;
}

.MuseumDetail__Info {
  background-color: #fff;
  padding: 20px;
}

.MuseumDetail__Link {
  line-height: 3;
  font-size: 14px;
  text-decoration: underline;
  font-style: italic;
  color: #189ac5;
  transition: 0.3s;
}
</style>

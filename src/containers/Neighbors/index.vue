<template>
  <div class="Neighbors">
    <div class="Neighbors__Title">
      <span class="Neighbors__TitleText">
        {{ presenter.count }}件のスポットがヒット！
      </span>
    </div>
    <div class="Neighbors__List">
      <div v-for="item in presenter.items" class="Neighbors__ListItem" :key="item.id">
        <MuseumMini :museum="item"/>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

// Interface Adapter
import Presenter, { IPresenter, IPresenterState } from "./presenter";
import LoadContainerUseCase, {
  ILoadContainerUseCase
} from "./LoadContainerUseCase";
import DestroyContainerUseCase, {
  IDestroyContainerUseCase
} from "./DestroyContainerUseCase";

import { INeighborsCriteria } from "@/entities/Museum";
import errorService from "@/services/ErrorService";
import MuseumRepository from "@/repositories/MuseumRepository";

// Components
import MuseumMini from "@/components/Modules/MuseumMini.vue";

export default Vue.extend({
  components: {
    MuseumMini
  },
  data() {
    return {};
  },
  computed: {
    presenter(): IPresenterState {
      const params: IPresenter = {
        museumRepository: new MuseumRepository()
      };
      return Presenter(params);
    }
  },
  async mounted() {
    const params: ILoadContainerUseCase = {
      museumRepository: new MuseumRepository(),
      request: this.presenter.neighborParams,
      errorService: new errorService({ context: "mounting museum list page" })
    };

    await new LoadContainerUseCase(params).execute();
  },
  async destroyed() {
    const params: IDestroyContainerUseCase = {
      museumRepository: new MuseumRepository()
    };

    await new DestroyContainerUseCase(params).execute();
  }
});
</script>

<style>
.Neighbors {
  padding: 40px 32px;
}

.Neighbors__List {
  display: flex;
  flex-wrap: wrap;
}

.Neighbors__ListItem {
  width: 48%;
  margin-right: 2%;
  margin-top: 20px;
}

.Neighbors__Title {
  position: relative;
  color: #189ac5;
  font-weight: bold;
  z-index: 1;
  margin-bottom: 20px;
}

.Neighbors__Title::before {
  content: "";
  display: block;
  position: absolute;
  top: 50%;
  margin-top: -1px;
  width: 100%;
  height: 2px;
  background-color: #eef3f8;
}

.Neighbors__TitleText {
  position: relative;
  display: inline-block;
  max-width: calc(100% - 32px);
  padding-left: 8px;
  padding-right: 8px;
  background-color: #fff;
  box-sizing: border-box;
}
</style>

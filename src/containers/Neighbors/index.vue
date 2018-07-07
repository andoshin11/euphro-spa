<template>
  <div class="Neighbors">
    <div class="Neighbors__List">
      <div class="Neighbors__ListItem" >
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
.Neighbors__List {
  display: flex;
  width: 80%;
}
</style>

<template>
  <div class="Neighbors">
    <div class="Neighbors__Header">
      <Location :name="presenter.locationName" :distance="presenter.neighborParams.distance" :onDistanceChange="onDistanceChange" :onCurrentLocation="onCurrentLocation"/>
    </div>
    <div class="Neighbors__Body">
      <div class="Neighbors__Title">
        <span class="Neighbors__TitleText">
          <template v-if="presenter.count > 0">
            {{ presenter.count }}件のスポットがヒット！
          </template>
          <template v-else>
            スポットが見つからないようです...
          </template>
        </span>
      </div>
      <div class="Neighbors__List">
        <div v-for="item in presenter.items" class="Neighbors__ListItem" :key="item.id">
          <MuseumMini :museum="item"/>
        </div>
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
import LocationEntity from "@/entities/Location";
import LocationRepository from "@/repositories/LocationRepository";
import UpdateDistanceUseCase, {
  IUpdateDistanceUseCase
} from "@/usecases/UpdateDistanceUseCase";
import UpdateLocationUseCase, {
  IUpdateLocationUseCase
} from "@/usecases/UpdateLocationUseCase";
import GetCurrentLocationUseCase, {
  IGetCurrentLocationUseCase
} from "@/usecases/GetCurrentLocationUseCase";

// Components
import MuseumMini from "@/components/Modules/MuseumMini.vue";
import Location from "@/components/Modules/Location.vue";

export default Vue.extend({
  components: {
    MuseumMini,
    Location
  },
  data() {
    return {};
  },
  computed: {
    presenter(): IPresenterState {
      const params: IPresenter = {
        locationRepository: new LocationRepository(),
        museumRepository: new MuseumRepository()
      };
      return Presenter(params);
    }
  },
  methods: {
    async onDistanceChange(e: any) {
      const distance = e.target.value as number;
      const params: IUpdateDistanceUseCase = {
        locationRepository: new LocationRepository(),
        distance,
        errorService: new errorService({ context: "updating distance" })
      };

      await new UpdateDistanceUseCase(params).execute();
      await this.loadContainer();
    },
    async loadContainer() {
      const params: ILoadContainerUseCase = {
        museumRepository: new MuseumRepository(),
        request: this.presenter.neighborParams,
        errorService: new errorService({ context: "loading museum list page" })
      };

      await new LoadContainerUseCase(params).execute();
    },
    async onLocationChange() {
      const params: IUpdateLocationUseCase = {
        lat: 35.6628711,
        lng: 139.7313041,
        locationEntity: new LocationEntity(),
        locationRepository: new LocationRepository(),
        errorService: new errorService({ context: "changing location" })
      };

      await new UpdateLocationUseCase(params).execute();
    },
    async onCurrentLocation() {
      if (!navigator.geolocation) {
        alert("お使いの端末では位置情報を取得できません");
      }
      const params: IGetCurrentLocationUseCase = {
        locationEntity: new LocationEntity(),
        locationRepository: new LocationRepository(),
        errorService: new errorService({ context: "changing location" })
      };

      await new GetCurrentLocationUseCase(params).execute();
    }
  },
  async mounted() {
    await this.loadContainer();
    await this.onLocationChange();
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
.Neighbors__Body {
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

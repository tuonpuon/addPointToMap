<template>
  <div class="col-sm-8 mt-3 h-100 border-left">
    <div class="row align-items-start h-75">
      <div id="map" class="col map h-75"></div>
    </div>
    <ShowData></ShowData>
  </div>
</template>

<script>
import "ol/ol.css";
import Map from "ol/Map";
import View from "ol/View";
import TileLayer from "ol/layer/Tile";
import OSM from "ol/source/OSM.js";
import * as proj from "ol/proj";

import ShowData from "@/components/ShowData.vue";

export default {
  name: "Map",
  components: {
    ShowData
  },
  props: {
    msg: String
  },
  methods: {
    createMap: function() {
      new Map({
        target: "map",
        layers: [
          new TileLayer({
            source: new OSM()
          })
        ],
        view: new View({
          center: proj.fromLonLat([37.41, 8.82]),
          zoom: 4
        })
      });
    }
  },
  mounted() {
    this.createMap();
  }
};
</script>

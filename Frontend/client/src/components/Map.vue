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
import { serverBus } from "../main";

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
      this.map = new Map({
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
    },
    flyToPoint: ticket => {
      console.log("from map", ticket);
    }
  },
  data: () => {
    return {
      selectedTicket: null,
      map: null
    };
  },
  created() {
    let self = this;
    // Using the server bus
    serverBus.$on("dataFromTicket", function(ticket) {
      self.selectedTicket = ticket;
      self.flyToPoint(ticket);
    });
  },
  mounted() {
    this.createMap();
  }
};
</script>

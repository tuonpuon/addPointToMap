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
import {Tile as TileLayer, Vector as VectorLayer} from 'ol/layer.js';
import {OSM, Vector as VectorSource} from "ol/source.js";
import Feature from 'ol/Feature.js';
import {Point} from 'ol/geom.js';
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
      let self = this;
      this.tile = new TileLayer({
        source: new OSM()
      });
      this.vector = new VectorLayer({
        source: new VectorSource()
      });
      this.map = new Map({
        target: "map",
        layers: [this.tile, this.vector],
        view: new View({
          center: [2010167.2450720381, 8251682.951497917],
          zoom: 10
        })
      });
      this.map.on('click', function(event) {
        this.forEachFeatureAtPixel(event.pixel, function(feature,layer) {
          serverBus.$emit('clickedInMap', feature.get('id'))
        });
      });
      this.map.on('pointermove', function(event) {
        let hit = this.hasFeatureAtPixel(event.pixel);
        this.getViewport().style.cursor = hit ? 'pointer' : '';
      });
    },
    zoomMapToFeature: function(location, duration, zoom) {
      this.map.getView().animate({
        center: location,
        duration: duration,
        zoom: zoom
      });
    },
    createPois: function() {
      if(this.ticketData.length > 0) {
        for(let ticket in this.ticketData){
          let pointFeature = new Feature(
            new Point(this.ticketData[ticket].geo_location)
          );
          pointFeature.setProperties({
            'title': this.ticketData[ticket].title,
            'description': this.ticketData[ticket].description,
            'id': this.ticketData[ticket]._id
          });
          this.vector.getSource().addFeature(pointFeature);
        }
      }
    }
  },
  data: () => {
    return {
      selectedTicket: null,
      ticketData: Array,
      map: null,
      tile: null,
      vector: null
    };
  },
  created() {
    let self = this;
    // Using the server bus
    serverBus.$on("dataFromTicket", function(ticket) {
      self.selectedTicket = ticket;
    });
    serverBus.$on("flyToPoint", function(data) {
      self.zoomMapToFeature(data.ticket[0].geo_location, data.duration, data.zoom);
    });
    serverBus.$on("data", data => {
       this.ticketData = data;
       this.createPois();
    });
  },
  mounted() {
    this.createMap();
  }
};
</script>
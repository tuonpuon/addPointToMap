<template>
  <div class="col-sm-8 mt-3 h-100 border-left">
    <div class="row align-items-start h-75">
      <div id="map" class="col map h-75"></div>
    </div>
    <div class="row align-items-end h-auto mt-n5">
      <div class="col h-100 mt-n5">
        <div class="media mt-n5 ">
          <div class="media-body mt-n2">
            <div class="pb-2 pt-3 mb-2 border-bottom">
              <h5>
                Top-aligned media
                <span class="float-right mt-n3">
                  <button
                    type="button"
                    class="btn btn-outline-primary btn-lg"
                    data-toggle="modal"
                    data-target="#createModal"
                  >
                    Lägg Till
                  </button>
                  <button
                    type="button"
                    class="btn btn-outline-success btn-lg"
                    data-toggle="modal"
                    data-target="#createModal"
                  >
                    Redigera
                  </button>
                  <button
                    type="button"
                    class="btn btn-outline-danger btn-lg"
                    data-toggle="modal"
                    data-target="#createModal"
                  >
                    Ta Bort
                  </button>
                </span>
              </h5>
            </div>
            <p>
              Cras sit amet nibh libero, in gravida nulla. Nulla vel metus
              scelerisque ante sollicitudin. Cras purus odio, vestibulum in
              vulputate at, tempus viverra turpis. Fusce condimentum nunc ac
              nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
            </p>
            <p>
              Donec sed odio dui. Nullam quis risus eget urna mollis ornare vel
              eu leo. Cum sociis natoque penatibus et magnis dis parturient
              montes, nascetur ridiculus mus.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import "ol/ol.css";
// import Map from "ol/Map";
// import View from "ol/View";
// import TileLayer from "ol/layer/Tile";
// import XYZ from "ol/source/XYZ";
import * as ol from "ol";

export default {
  name: "Map",
  props: {
    msg: String
  },
  methods: {
    log: function(message) {
      console.log(message);
    },
    createMap: ol => {
      new ol.Map({
        target: "map",
        layers: [
          new ol.layer.Tile({
            source: new ol.source.OSM()
          })
        ],
        view: new ol.View({
          center: ol.proj.fromLonLat([37.41, 8.82]),
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

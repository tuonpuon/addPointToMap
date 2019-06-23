<template>
  <div class="row align-items-end h-auto mt-n5">
    <div class="col h-100 mt-n5">
      <div class="media mt-n5" v-for="item in selectedTicket" :key="item._id">
        <div class="media-body mt-n2">
          <div class="pb-2 pt-3 mb-2 border-bottom">
            <h5>
              {{ item.title }}
              <span class="float-right mt-n2">
                <button
                  type="button"
                  class="btn btn-outline-primary btn-sm ml-1"
                  data-toggle="modal"
                  data-target="#createModal"
                  v-on:click="selectedType({add: true})"
                >
                  Lägg Till
                </button>
                <button
                  type="button"
                  class="btn btn-outline-success btn-sm ml-1"
                  data-toggle="modal"
                  data-target="#createModal"
                  v-on:click="selectedType({update: true})"
                >
                  Redigera
                </button>
                <button
                  type="button"
                  class="btn btn-outline-danger btn-sm ml-1"
                  v-on:click="selectedType"
                >
                  Ta Bort
                </button>
              </span>
            </h5>
          </div>
          <p>
            {{ item.description }}
          </p>
          <p class="float-left">
            Skapad: {{ item.created }}
          </p>
          <p class="float-right">
            Uppdaterad: {{ item.last_edited }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { serverBus } from "../main";

export default {
  name: "ShowData",
  props: {
    msg: String
  },
  data: () => {
    return {
      selectedTicket: Array,
      selectedEvent: Object
    };
  },
  methods: {
    selectedType: function(selected) {
      this.selectedEvent = selected;
      if (typeof this.selectedEvent !== "undefined") {
        this.selectedTicket[0].type = selected;
        let eventModalData;
        if (selected.add) {
          eventModalData = [{type: selected}];
        } else {
          eventModalData = this.selectedTicket;
        }  
        serverBus.$emit("typeOffEventModalData", eventModalData);
      }
    }
  },
  created() {
    // Using the server bus
    serverBus.$on("dataFromTicket", ticket => {
      if (typeof this.selectedTicket !== "undefined") {
        this.selectedTicket = ticket;
      }
    });
  }
};
</script>

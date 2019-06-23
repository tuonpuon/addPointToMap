<template>
  <div class="mt-n1">
    <a
      href="#"
      v-for="item in ticketData"
      :key="item._id"
      v-on:click="setSelected(item._id) + findInData() + flyToPoint()"
      v-bind:class="{ active: item._id == selected }"
      class="list-group-item list-group-item-action mt-1"
    >
      <div class="d-flex w-100 justify-content-between">
        <h5 class="mb-1">{{ item.title }}</h5>
      </div>
      <p class="mb-1">{{ item.description }}</p>
      <small> {{ item.last_edited }}</small>
    </a>
  </div>
</template>

<script>
import { serverBus } from "../main";

export default {
  name: "Ticket",
  props: {
    data: Array
  },
  data: function() {
    return {
      selected: undefined,
      ticketData: Array,
      selectedTicketData: Array,
    };
  },
  created() {
    serverBus.$on("data", data => {
       this.ticketData = data;
    });
    serverBus.$on("clickedInMap", id => {
      this.setSelected(id);
      this.findInData();
    });
  },
  methods: {
    findInData: function() {
      var result = this.ticketData.filter(obj => {
        return obj._id === this.selected;
      });
      if (typeof result !== "undefined") {
        result[0].created = result[0].created.split('T')[0];
        result[0].last_edited = result[0].last_edited.split('T')[0];
        this.selectedTicketData = result;
        serverBus.$emit("dataFromTicket", result);
      }
    },
    setSelected: function(id) {
      this.selected = id;
    },
    flyToPoint: function() {
      serverBus.$emit("flyToPoint", 
        {'ticket': this.selectedTicketData,
        'duration': 1000, 
        'zoom': 12
      });
    }
  }
};
</script>

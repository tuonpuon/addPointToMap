<template>
  <div class="mt-n1">
    <a
      href="#"
      v-for="item in data"
      :key="item._id"
      v-on:click="setSelected(item._id) + findInData()"
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
      selected: undefined
    };
  },
  methods: {
    findInData: function() {
      var result = this.data.filter(obj => {
        return obj._id === this.selected;
      });
      if (typeof result !== "undefined") {
        result[0].created = result[0].created.split('T')[0];
        result[0].last_edited = result[0].last_edited.split('T')[0];
        serverBus.$emit("dataFromTicket", result);
      }
    },
    setSelected: function(id) {
      this.selected = id;
    }
  }
};
</script>

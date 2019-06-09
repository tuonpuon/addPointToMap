<template>
    <div class="mt-n1">
        <a href="#" v-for="item in data" :key="item._id" v-on:click="selected = item._id" v-bind:class="{active:item._id == selected}" class="list-group-item list-group-item-action mt-1" :attr-cords="item.geo_location">
            <div class="d-flex w-100 justify-content-between">
                <h5 class="mb-1">{{ item.title }}</h5>
            </div>
            <p class="mb-1">{{ item.description }}</p>
            <small> {{ item.last_edited }}</small>
        </a>
    </div>
</template>

<script>
export default {
  name: "Ticket",
  props: {
    data: Array
  },
  data: function() {
    return {
        selected: undefined
    }
  },
  methods: {
    log: function() {
        console.log('yat');
    }
  }
};
</script>
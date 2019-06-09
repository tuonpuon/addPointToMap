<template>
  <div class="container-fluid custom-height">
    <div class="row h-100">
      <Tickets msg="test"></Tickets>
      <Map msg="test2"></Map>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";
import Map from "@/components/Map.vue";
import Tickets from "@/components/Tickets.vue";

export default {
  name: "home",
  components: {
    Map,
    Tickets
  }
};
</script>

<style scoped>
  .custom-height {
      height: 90% !important;
  }
</style>


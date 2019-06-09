<template>
<!-- Main: Start -->
<div>
  <div class="container-fluid custom-height">
    <div class="row h-100">
      <Tickets msg="test"></Tickets>
      <Map msg="test2"></Map>
    </div>
  </div>
  <!-- Modal: Start -->
  <Modal msg="test3"></Modal>
  <!-- Modal: End -->
</div>
  <!-- Main: End -->
</template>

<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";
import Map from "@/components/Map.vue";
import Tickets from "@/components/Tickets.vue";
import Modal from "@/components/Modal.vue";


export default {
  name: "home",
  components: {
    Map,
    Tickets,
    Modal
  }
};
</script>

<style scoped>
  .custom-height {
      height: 90% !important;
  }
</style>


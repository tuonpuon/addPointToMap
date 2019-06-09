<template>
  <!-- Main: Start -->
  <div class="custom-height">
    <div class="container-fluid h-100">
      <div class="row h-100">
        <TicketList msg="test"></TicketList>
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
import TicketList from "@/components/TicketList.vue";
import Modal from "@/components/Modal.vue";

export default {
  name: "home",
  components: {
    Map,
    TicketList,
    Modal
  }
};
</script>

<style scoped>
.custom-height {
  height: 90% !important;
}
</style>

<template>
  <!-- Main: Start -->
  <div class="custom-height">
    <div class="container-fluid h-100">
      <div class="row h-100">
        <TicketList></TicketList>
        <Map></Map>
      </div>
    </div>
    <!-- Modal: Start -->
    <Modal></Modal>
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
import { serverBus } from "../main";

export default {
  name: "home",
  components: {
    Map,
    TicketList,
    Modal
  },
  data: function() {
    return {
      tickets: [
        {
          _id: "5ce17afa9686ba1cef66a554",
          title: "test2",
          description: "test2",
          geo_location: [1999286.9118270702, 8257645.039704161],
          created: "2019-05-19T15:49:14.127Z",
          last_edited: "2019-05-19T15:49:14.127Z",
          __v: 0
        },
        {
          _id: "5ce17b129686ba1cef66a555",
          title: "test2s",
          description: "test2s",
          geo_location: [2001326.8250194306, 8260855.394892137],
          created: "2019-05-19T15:49:38.958Z",
          last_edited: "2019-05-19T15:49:38.958Z",
          __v: 0
        },
        {
          _id: "5ce17f573f30e8262b14ac1e",
          title: "test4",
          description: "test4",
          geo_location: [1992918.751908061, 8238688.656689436],
          created: "2019-05-19T16:07:51.455Z",
          last_edited: "2019-05-19T16:07:51.455Z",
          __v: 0
        }
      ]
    };
  },mounted() {
    serverBus.$emit("data", this.tickets);
  }
};
</script>

<style scoped>
.custom-height {
  height: 90% !important;
}
</style>

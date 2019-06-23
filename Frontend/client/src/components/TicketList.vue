<template>
  <div class="col-sm-4 h-100">
    <div class="list-group overflow-auto mt-3 h-100">
      <Ticket></Ticket>
    </div>
  </div>
</template>

<script>
import Ticket from "@/components/Ticket.vue";

export default {
  name: "TicketList",
  components: {
    Ticket
  },
};
</script>

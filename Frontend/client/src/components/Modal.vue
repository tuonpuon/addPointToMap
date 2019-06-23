<template>
    <div class="modal fade" id="createModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
                <h6 class="modal-title" id="createModalLabel">Besiktnings punkt</h6>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
            </div>
            <div class="modal-body" v-for="item in typeOffEventData" :key="item._id"> 
                <form>
                    <div class="row">
                        <div class="col">
                            <input type="text" class="form-control" placeholder="Title" :value="item.title">
                        </div>
                    </div>
                    <div class="row mt-3">
                        <div class="col">
                            <textarea class="form-control" id="exampleFormControlTextarea1" placeholder="Description" rows="3" :value="item.description"></textarea>                                                        
                        </div>
                    </div>
                   <div class="row mt-3" v-if="item.type.update">
                        <div class="col">
                            <p>Skapad: {{ item.last_edited }}</p>
                        </div>
                        <div class="col">
                            <p>Uppdaterad: {{ item.created }}</p>
                        </div>
                    </div>                   
                </form>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-dismiss="modal">Stäng</button>
              <button type="button" class="btn btn-primary">Spara</button>
            </div>
          </div>
        </div>
    </div>
</template>

<script>
import { serverBus } from "../main";

export default {
  name: "Modal",
  data: () => {
    return {
      typeOffEventData: Object
    };
  },
  created() {
    // Using the server bus
    serverBus.$on("typeOffEventModalData", event => {
      if (typeof this.typeOffEventData !== "undefined") {
        this.typeOffEventData = event;
      }
    });
  }
};
</script>

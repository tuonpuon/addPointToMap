<template>
<div class="row align-items-end h-auto mt-n5">
    <div class="col h-100 mt-n5">
    <div class="media mt-n5 ">
        <div class="media-body mt-n2">
        <div class="pb-2 pt-3 mb-2 border-bottom">
            <h5>
            Top-aligned media
            <span class="float-right mt-n2">
                <button
                type="button"
                class="btn btn-outline-primary btn-sm ml-1"
                data-toggle="modal"
                data-target="#createModal"
                >
                  Lägg Till
                </button>
                <button
                type="button"
                class="btn btn-outline-success btn-sm ml-1"
                data-toggle="modal"
                data-target="#createModal"
                >
                  Redigera
                </button>
                <button
                type="button"
                class="btn btn-outline-danger btn-sm ml-1"
                >
                  Ta Bort
                </button>
            </span>
            </h5>
        </div>
        <p>
            Cras sit amet nibh libero, in gravida nulla. Nulla vel metus
            scelerisque ante sollicitudin. Cras purus odio, vestibulum in
            vulputate at, tempus viverra turpis. Fusce condimentum nunc ac
            nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
        </p>
        <p>
            Donec sed odio dui. Nullam quis risus eget urna mollis ornare vel
            eu leo. Cum sociis natoque penatibus et magnis dis parturient
            montes, nascetur ridiculus mus.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ShowData",
  props: {
    msg: String
  },
  methods: {},
  mounted() {}
};
</script>

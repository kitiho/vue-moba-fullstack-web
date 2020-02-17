<template>
  <div class="card p-3 bg-white p-3 mt-3">
    <div class="card-header d-flex ai-cente pb-3">
      <i
        class="sprite"
        :class="`sprite-${icon}`"
      ></i>
      <div class="fs-xl flex-1 px-2">{{title}}</div>
      <i class="sprite sprite-menu"></i>
    </div>
    <div class="card-body pt-3">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: { type: String, required: true },
    icon: { type: String, required: true }
  }
};
</script>

<style lang="scss">
@import "../assets/scss/_variables.scss";
.card {
  border-bottom: 1px solid $border-color;
  .card-header {
    border-bottom: 1px solid $border-color;
  }
}
</style>
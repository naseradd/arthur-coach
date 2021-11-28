<template>
<transition name="fade">
  <div
    class="tab-pane"
    v-show="active"
    :id="id || label"
    :class="{ active: active }"
    :aria-expanded="active"
  >
    <slot></slot>
  </div>
</transition>
</template>
<script>
export default {
  name: 'tab-pane',
  props: {
    label: String,
    id: String,
    disabled: Boolean
  },
  inject: ['addTab', 'removeTab'],
  data() {
    return {
      active: false
    };
  },
  mounted() {
    this.addTab(this);
  },
  destroyed() {
    if (this.$el && this.$el.parentNode) {
      this.$el.parentNode.removeChild(this.$el);
    }
    this.removeTab(this);
  }
};
</script>
<style>
.fade-enter-active,
.fade-leave-active {
  transition: all .5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>

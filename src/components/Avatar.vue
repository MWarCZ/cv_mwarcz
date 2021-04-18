<template>
  <img
    :src="src"
    :alt="alt"
    :class="`avatar ${($props.class)?$props.class:''}`"
    :style="(size)? `--size: ${size};`: ''"
  >
</template>

<script>
export default {
  props: {
    src: { type: String, required: true },
    alt: { type: String, required: true },
    size: { type: String },
  },
}
</script>

<style scoped>
.avatar {
  width: var(--size, 2em);
  height: var(--size, 2em);
  object-fit: cover;
  border-radius: 50%;
}
</style>

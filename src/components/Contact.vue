<template>
  <address class="contact">
    <template v-for="(contact, key) in contacts" >
      <FontAwesomeIcon :key="`a${key}`" :icon="contact.icon" class="contact__icon" />
      <span :key="`b${key}`" v-html="contact.content"></span>
    </template>
  </address>
</template>

<script>
import { FontAwesomeIcon } from '@/FontAwesome'
export default {
  components: {
    FontAwesomeIcon,
  },
  props: {
    contacts: { type: Array, default: () => [] },
  },
  data: () => {
    return {
    }
  },
}
</script>

<style lang="scss" scoped>
.contact {
  & {
    display: grid;
    grid-template: auto / max-content max-content;
    grid-gap: 1em;
    align-items: center;
    justify-items: left;
    text-align: left;
    width: max-content;
  }
  &__icon {
    justify-self: center;
  }
}
</style>
<style>
.contact a {
  color: var(--color, #00f);
}
</style>

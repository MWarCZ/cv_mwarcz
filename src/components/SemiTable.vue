<template>
  <div class="wrapper">
    <h3 v-if="title" class="border border__head">{{title}}</h3>
    <div class="table border border__body">
      <div v-for="item, key in items" :key="`ti${key}`"
        class="table__item border border__item"
      >
        <div v-if="item.head" class="table__item__head">{{item.head}}</div>
        <div v-if="item.body" class="table__item__body">{{item.body}}</div>
      </div>
    </div>
  </div>
</template>

<script>
/**
 * @typedef {{head: string, body: string}} TableItem
 */
export default {
  props: {
    title: String,
    /** @type {()=>TableItem[]} */
    items: { type: Array, default: _ => [] },
  },
}
</script>

<style lang="scss" scoped>
.wrapper {
  --border-size: .16rem;
  --border-color: #000;
  --border-radius: 1em;
  page-break-inside: avoid;
}
.border {
  border-style: solid;
  border-color: var(--border-color, #000);
  &__head {
    border-width: var(--border-size, 0) var(--border-size, 0) 0 var(--border-size, 0);
    margin: 0;
    padding: .5em;
    border-radius: var(--border-radius) 0 0 0;
  }
  &__body {
    border-width:  var(--border-size, 0) 0 0 var(--border-size, 0);
  }
  &__item {
    border-width: 0 var(--border-size, 0) var(--border-size, 0) 0;
    &:last-child {
      border-radius: 0 0 var(--border-radius) 0;
    }
  }
}
.table {
  display: flex;
  flex-flow: wrap;
  text-align: center;
  &__item {
    flex-grow: 1;
    padding: .25rem;
    &__head {
      font-weight: bold;
      color: currentColor;
    }
    &__body {
      color: currentColor;
    }
  }
}
</style>

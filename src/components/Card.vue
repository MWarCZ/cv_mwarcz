<template>
  <div
    :class="{card: true, isFirst, isLast}"
    :style="style"
  >
    <span v-if="msg[0]" class="left">{{msg[0]}}</span>
    <span v-if="msg[1]" class="right">{{msg[1]}}</span>
    <h3 class="title">{{title}}</h3>
    <h4 class="subtitle">{{subtitle}}</h4>
    <div class="content"><slot /></div>
    <span v-if="msg[2]" class="left">{{msg[2]}}</span>
    <span v-if="msg[3]" class="right">{{msg[3]}}</span>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    subtitle: String,
    msg: {
      type: Array,
      default: () => [],
    },
    isFirst: Boolean,
    isLast: Boolean,
    color: { type: String, default: 'darkblue' },
  },
  computed: {
    /** @returns {String} */
    style () {
      return `--color:${this.color};`
    },
  },
}
</script>

<style lang="scss" scoped>

.card {
  --color: green;
  --spike-width: .75em;
  --spike-height: .75em;
  --line-size: .5em;
  --default-padding: 1em;
  & {
    position: relative;
    padding: var(--default-padding);
    padding-left: calc(var(--spike-width, 0) +  var(--default-padding));
    text-align: left;
    border-left: solid var(--color, blue) var(--line-size, 0);
  }
  @mixin spike {
    display: block;
    position: absolute;
    border: transparent var(--spike-height) solid;
    border-left: var(--color, blue) var(--spike-width, 0px) solid;
  }
  // Spike směrem k obsahu karty
  &::before {
    content: '';
    @include spike;
    top: 50%;
    left: -1px;
    transform: translateY(-50%);
  }
  // Spike od karty (Mezi dvěma jinými spiky)
  // &:not(.isFirst)::after {
  //   content: '';
  //   @include spike;
  //   left: calc(var(--spike-width) * -2.5);
  //   top: 0;
  //   transform: translateY(-50%) rotate(180deg);
  // }

  &.isFirst {
    border-top: var(--color) var(--line-size) solid;
    border-radius: 0 3em 0 0;
  }
  &.isLast {
    border-bottom: transparent solid calc(var(--line-size) * 3);
  }

  span {
    font-weight: bold;
    opacity: 0.7;
    font-style: italic;
  }
  .subtitle {
    font-weight: normal;
  }
}
.right {
  float: right;
}

</style>

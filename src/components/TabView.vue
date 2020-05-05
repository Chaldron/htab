<template>
  <div id="container">
    <div class="tab" id="header">
      <p>TID</p>
      <p>URL</p>
    </div>
    <div class="tab" v-for="(tab, key) in tabs" :key="key">
      <p class="tab-id">{{ key }}</p>
      <p class="tab-url">{{ tab.tab.title }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TabEntry',
  components: {},
  props: {
    tabs: [Object],
  },
};
</script>

<style lang="sass" scoped>
#container
  display: grid
  min-width: 500px

  #header
    font-weight: bold

  .tab
    display: grid
    grid-template-columns: 40px auto
    grid-auto-rows: minmax(min-content, max-content)
    height: 25px

    .tab-url
      white-space: nowrap
      overflow: hidden
      text-overflow: ellipsis
</style>

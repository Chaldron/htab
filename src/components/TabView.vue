<template>
  <div id="container">
    <div class="tab" id="header">
      <p>TID</p>
      <p>TITLE</p>
      <p>URL</p>
    </div>
    <div class="tab" v-for="(tab, key) in tabs" :key="key">
      <p class="tab-id">{{ key }}</p>
      <p class="tab-title">{{ tab.tab.title }}</p>
      <p class="tab-title">{{ tab.tab.url }}</p>
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
    grid-template-columns: 40px 30% 30%
    //grid-auto-rows: minmax(min-content, max-content)
    //height: 25px

    .tab-url, .tab-title
      white-space: nowrap
      overflow: hidden
      text-overflow: ellipsis
</style>

<template>
  <div>
    <tab-view :tabs="tabs"></tab-view>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import TabView from '../../../components/TabView';

export default {
  components: { TabView },
  data() {
    return {};
  },
  computed: { ...mapGetters(['tabs']) },
};
</script>

<style lang="sass" scoped>
</style>

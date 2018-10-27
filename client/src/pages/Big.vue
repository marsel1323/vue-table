<template>
    <TheContent v-if="data"
                :data="data"/>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import TheContent from '@/components/TheContent.vue';
import asyncDataStatus from '@/mixins/asyncDataStatus';

export default {
  name: 'Big',
  components: {
    TheContent,
  },
  mixins: [asyncDataStatus],
  async created() {
    await this.LOAD_BIG_DATA()
      .then(() => { this.asyncDataStatus_fetched(); });
  },
  computed: {
    ...mapState(['data']),
  },
  methods: {
    ...mapActions(['LOAD_BIG_DATA']),
  },
};
</script>

<style scoped>

</style>

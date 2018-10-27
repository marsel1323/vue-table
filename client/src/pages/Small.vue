<template>
    <TheContent v-if="data"
                :data="data"/>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import TheContent from '@/components/TheContent.vue';
import asyncDataStatus from '@/mixins/asyncDataStatus';

export default {
  name: 'Small',
  components: {
    TheContent,
  },
  mixins: [asyncDataStatus],
  async created() {
    await this.LOAD_SMALL_DATA()
      .then(() => { this.asyncDataStatus_fetched(); });
  },
  computed: {
    ...mapState(['data']),
  },
  methods: {
    ...mapActions(['LOAD_SMALL_DATA']),
  },
};
</script>

<style lang="scss">
    .content {
        display: grid;
        margin: 2rem;
        grid-template-columns: 20% 70%;
    }
</style>

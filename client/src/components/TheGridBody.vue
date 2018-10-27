<template>
    <tbody>
    <TheGridRow v-for="(data, index) in gridData"
                :data="data"
                :key="index"
                :headers="headers"
                @selectRow="selectRow"/>
    </tbody>
</template>

<script>
import TheGridRow from './TheGridRow.vue';

export default {
  name: 'TheGridBody',
  props: {
    headers: {
      type: Array,
      required: true,
    },
    gridData: {
      type: Array,
      required: true,
    },
    selectRow: {
      type: Function,
      required: true,
    },
  },
  components: {
    TheGridRow,
  },
};
</script>

<style scoped>

</style>

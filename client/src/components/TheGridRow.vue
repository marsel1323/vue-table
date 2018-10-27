<template>
    <tr @click="selectRow(data)">
        <td v-for="(header, index) in headers"
            :key="index">
            {{data[header.key]}}
        </td>
    </tr>
</template>

<script>
export default {
  name: 'TheGridRow',
  props: {
    headers: {
      type: Array,
      required: true,
    },
    data: {
      type: Object,
      required: true,
    },
  },
  methods: {
    selectRow(row) {
      this.$emit('selectRow', row);
    },
  },
};
</script>

<style scoped>

</style>

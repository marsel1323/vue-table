<template>
    <thead>
    <tr>
        <th v-for="(header, index) in headers"
            :key="index"
            @click="sortBy(header.key)">
            {{header.title}}
            <span >
                &darr;
            </span>
            <span>
                &uarr;
            </span>
        </th>
    </tr>
    </thead>
</template>

<script>
export default {
  name: 'TheGridHead',
  props: {
    headers: {
      type: Array,
      required: true,
    },
  },
  methods: {
    sortBy(key) {
      this.$emit('sort', key);
    },
  },
};
</script>

<style scoped>

</style>

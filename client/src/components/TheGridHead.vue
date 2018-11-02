<template>
    <thead>
    <tr>
        <th v-for="(header, index) in headers" style="cursor: pointer; width: 100px;"
            :key="index"
            @click="sortBy(header)">
            {{header.title}}
            <span v-if="header.sorted">
                &darr;
            </span>
            <span v-else-if="header.sorted === false">
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
      sortBy(header) {
        if (header.sorting) {
          this.$emit('sort', header);
        }
      },
    },
  };
</script>

<style scoped>

</style>

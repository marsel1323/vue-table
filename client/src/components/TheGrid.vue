<template>
    <div class="table">
        <table>
            <TheGridHead :headers="headers" @sort="sort"/>
            <TheGridBody :headers="headers"
                         :gridData="gridData"
                         :selectRow="selectRow"/>
        </table>
    </div>
</template>

<script>
  import {mapActions} from 'vuex';

  import TheGridHead from './TheGridHead.vue';
  import TheGridBody from './TheGridBody.vue';


  export default {
    name: 'TheTable',
    props: {
      gridData: {
        type: Array,
        required: true,
      },
      headers: {
        type: Array,
        required: true,
      },
    },
    components: {
      TheGridHead,
      TheGridBody,
    },
    data() {
      return {
        selectedRow: null,
        selectedHead: null,
        selectedItem: null,
        sortDirection: false,
      };
    },
    mounted() {
      // this.sort(this.headers[0].key);
    },
    methods: {
      ...mapActions(['SELECT_ROW', 'SORT_DATA']),
      selectRow(row) {
        this.selectedRow = row;
        this.SELECT_ROW(row);
      },
      sort(header) {
        this.$emit('updateHeaderSort', header.key);
        this.SORT_DATA({
          key: header.key,
          sortDirection: !header.sorted,
        });
      },
    },
  };
</script>

<style lang="scss">
    .table {
        grid-row: 2 / 2;
        grid-column: 2 / 2;
    }

    table {
        border-collapse: collapse;
    }

    tr {

    }

    th, td {
        border: 1px solid #333;
        line-height: 1.5;
        padding: 2px;
        text-align: center;
    }
</style>

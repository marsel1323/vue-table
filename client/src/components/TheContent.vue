<template>
    <div class="content">
        <TheSidebar v-if="sidebarData" :sidebarData="sidebarData"/>
        <TheGrid :gridData="data" :headers="headers" @updateHeaderSort="updateHeaderSort"/>
    </div>
</template>

<script>
  import {mapState} from 'vuex';
  import TheSidebar from './TheSidebar.vue';
  import TheGrid from './TheGrid.vue';

  export default {
    name: 'Content',
    components: {
      TheSidebar,
      TheGrid,
    },
    props: {
      data: {
        type: Array,
        required: true,
      },
    },
    data() {
      return {
        headers: [
          {
            title: 'id',
            key: 'id',
            sorting: true,
            sorted: null,
          },
          {
            title: 'First name',
            key: 'firstName',
            sorting: true,
            sorted: null,
          },
          {
            title: 'Last name',
            key: 'lastName',
            sorting: true,
            sorted: null,
          },
          {
            title: 'Email',
            key: 'email',
            sorting: true,
            sorted: null,
          },
          {
            title: 'Phone',
            key: 'phone',
            sorting: true,
            sorted: null,
          },
        ],
      };
    },
    computed: {
      ...mapState(['selectedRow']),
      sidebarData() {
        if (this.data) {
          return this.selectedRow || this.data[0];
        }
        return null;
      },
    },
    methods: {
      updateHeaderSort(key) {
        this.headers.find(header => {
          if (header.key === key) {
            header.sorted = !header.sorted;
          }else{
            header.sorted = null;
          }
        });
      }
    }
  };
</script>

<style scoped>

</style>

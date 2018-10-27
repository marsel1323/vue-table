<template>
    <div class="content">
        <TheSidebar v-if="sidebarData" :sidebarData="sidebarData"/>
        <TheGrid :gridData="data" :headers="headers"/>
    </div>
</template>

<script>
import { mapState } from 'vuex';
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
          sorted: true,
        },
        {
          title: 'First name',
          key: 'firstName',
          sorted: true,
        },
        {
          title: 'Last name',
          key: 'lastName',
          sorted: true,
        },
        {
          title: 'Email',
          key: 'email',
          sorted: true,
        },
        {
          title: 'Phone',
          key: 'phone',
          sorted: true,
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
};
</script>

<style scoped>

</style>

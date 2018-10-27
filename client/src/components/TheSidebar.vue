<template>
    <div class="sidebar">
        <p>User: {{sidebarData.firstName}} {{sidebarData.lastName}}</p>
        <textarea v-model="sidebarData.description"
                  name=""
                  id=""
                  cols="35"
                  rows="10">
                </textarea>
        <p>Address: {{sidebarData.address.streetAddress}}</p>
        <p>City: {{sidebarData.address.city}}</p>
        <p>State: {{sidebarData.address.state}}</p>
        <p>Zip: {{sidebarData.address.zip}}</p>
    </div>
</template>

<script>
export default {
  name: 'TheSidebar',
  props: {
    sidebarData: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
    .sidebar {
        grid-row: 2 / 2;
        grid-column: 1 / 1;
    }
</style>

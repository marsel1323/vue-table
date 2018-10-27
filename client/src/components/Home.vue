<template>
    <div>
        <div v-if="sidebarData" class="sidebar">
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

        <div v-if="smallData" class="table">
            <table>
                <thead>
                <tr>
                    <th>id</th>
                    <th>firstName</th>
                    <th>lastName</th>
                    <th>email</th>
                    <th>phone</th>
                </tr>
                </thead>
                <tbody>
                <tr v-for="(data, index) in smallData" :key="index" @click="selectRow(data)">
                    <td>{{data.id}}</td>
                    <td>{{data.firstName}}</td>
                    <td>{{data.lastName}}</td>
                    <td>{{data.email}}</td>
                    <td>{{data.phone}}</td>
                </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
export default {
  name: 'Home',
};
</script>

<style scoped>

</style>

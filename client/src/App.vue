<template>
    <div class="container">
        <header class="header">
            <nav class="nav">
                <div class="nav__item">
                    Small Data
                </div>

                <div class="nav__item">
                    Big Data
                </div>
            </nav>
        </header>

        <main class="content">
            <div class="sidebar">
                sidebar
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
                    <tr v-for="(data, index) in smallData" :key="index">
                        <td>{{data.id}}</td>
                        <td>{{data.firstName}}</td>
                        <td>{{data.lastName}}</td>
                        <td>{{data.email}}</td>
                        <td>{{data.phone}}</td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </main>

        <footer class="footer">

        </footer>
    </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
  name: 'App',
  data() {
    return {};
  },
  components: {},
  async created() {
    await this.LOAD_SMALL_DATA();
    console.log(this.smallData);
  },
  computed: {
    ...mapState(['smallData']),
  },
  methods: {
    ...mapActions(['LOAD_SMALL_DATA']),
  },
};
</script>

<style lang="scss">
    $font-primary: 'K2D', sans-serif;
    // RESPONSIVE BREAKPOINTS
    $bp-largest: 75em; // 1200px / 16
    $bp-large: 62.5em; // 1000px
    $bp-medium: 50em; // 800px
    $bp-small: 37.5em; // 600px

    *, *::before, *::after {
        margin: 0;
        padding: 0;
        box-sizing: inherit;
    }

    html {
        box-sizing: border-box;
        /*font-size: 62.5%; // 10px/16px = 62.5% -> 143m = 10px*/

        @media only screen and(max-width: $bp-largest) {
            font-size: 50%;
        }
    }

    body {
        font-family: $font-primary;
        font-weight: 300;
    }

    .container {
        display: grid;
        max-width: 100%;
        grid-template-rows: min-content min-content;
        grid-gap: 20px;
    }

    .content {
        display: grid;
        margin: 2rem;
        grid-template-columns: 20% 70%;
    }

    .header {
        height: 50px;
        width: 100%;
        background-color: #000;
        margin-bottom: 2rem;
        color: #fff;
    }

    .nav {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
    }

    .sidebar {
        grid-row: 2 / 2;
        grid-column: 1 / 1;
    }

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

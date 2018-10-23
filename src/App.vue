<template>
    <div class="component">
        <header class="header">
            Header
        </header>

        <div class="sidebar">
            sidebar
        </div>

        <div class="table">
            <table>
                <thead>
                <tr>
                    <th>
                        Заголовок
                    </th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>
                        Значение
                    </td>
                </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style lang="scss">
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

    .component {
        display: grid;
        grid-template-columns: 20% 70%;
        grid-template-rows: 80vh min-content;
        grid-gap: 20px;
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

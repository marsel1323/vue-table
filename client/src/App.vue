<template>
    <div class="container">
        <TheHeader/>

        <main>
            <router-view/>
        </main>

        <footer class="footer">
            Footer
        </footer>
    </div>
</template>

<script>
import TheHeader from '@/components/TheHeader.vue';

export default {
  name: 'App',
  components: {
    TheHeader,
  },
};
</script>

<style lang="scss">
    $font-primary: "K2D", sans-serif;
    // RESPONSIVE BREAKPOINTS
    $bp-largest: 75em; // 1200px / 16
    $bp-large: 62.5em; // 1000px
    $bp-medium: 50em; // 800px
    $bp-small: 37.5em; // 600px

    *,
    *::before,
    *::after {
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
</style>

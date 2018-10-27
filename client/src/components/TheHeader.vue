<template>
    <header class="header">
        <nav class="header-nav">
            <ul class="header-nav__list">
                <li class="header-nav__item">
                    <router-link class="header-nav__link"
                                 :to="{name: 'SmallData'}">
                        Small Data
                    </router-link>
                </li>
                <li class="header-nav__item">
                    <router-link class="header-nav__link"
                                 :to="{name: 'BigData'}">
                        Big Data
                    </router-link>
                </li>
            </ul>
        </nav>
    </header>
</template>

<script>
export default {
  name: 'TheHeader',
};
</script>

<style lang="scss" scoped>
    .header {
        height: 3rem;
        width: 100%;
        background-color: #000;
        color: #fff;

        &-nav {

            &__list {
                display: grid;
                grid-template-columns: repeat(2, 1fr);
                justify-items: center;

                list-style: none;
                text-align: center;
            }

            &__item {
                width: 20%;
                height: 100%;
                padding: .85rem;
                color: #ccc;;

                &:hover {
                    background-color: #fff;
                    color: #000;
                }
            }

            &__link {

                &:link, &:visited {
                    color: currentColor;
                    text-decoration: none;
                }
            }
        }
    }
</style>

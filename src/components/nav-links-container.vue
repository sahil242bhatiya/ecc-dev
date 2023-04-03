<template>
    <div class="main-menu row align-items-center">
        <div class="links-container">
            <ul>
                <li>
                    <router-link to="/">
                        Home
                    </router-link>
                </li>
                <li>
                    <router-link to="/about">
                        About
                    </router-link>
                </li>
                <li>
                    <router-link to="/production-plant">
                        Production
                    </router-link>
                </li>
                <li>
                    <router-link to="/environment">
                        Environment
                    </router-link>
                </li>
                <li>
                    <router-link to="/technology">
                        Technology
                    </router-link>
                </li>
                <li>
                    <router-link to="/portfolio">
                        Portfolio
                    </router-link>
                </li>
                <li>
                    <router-link to="/news">
                        News
                    </router-link>
                </li>
                <li>
                    <router-link to="/contact">
                        Contact
                    </router-link>
                </li>
            </ul>
        </div>
        <div class="input-container">
            <search-input class="search-input"/>
        </div>
    </div>
</template>

<script>
import SearchInput from "./search-input.vue";

export default {
    name: "nav-links-container",
    components: {SearchInput}
}
</script>

<style scoped>
.links-container {
    width: 65%;
    padding: 0 !important;
}

.input-container {
    width: 30%;
    padding: 0 !important;
    display: flex;
    justify-content: end;
}

.links-container ul {
    display: flex;
    list-style: none;
    gap: 36px;
    padding: 0;
    margin: 0;
}

.main-menu {
    height: 80px;
    justify-content: space-between;
    padding-inline: 10px;
}

.search-input {
    margin-right: 0;
}

@media (max-width: 1024px) {
    .main-menu {
        display: none;
    }
}

li a{
    text-decoration: none;
    color: #111111;
    letter-spacing: .2px;
    transition: all .5s ease-in-out;
}

.router-link-active{
    font-weight: 700;
}
</style>
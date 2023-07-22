<template>
    <div class="container">
        <div>
            <img class="logo" src="../assets/eto-logo.png" alt="eto logo">
        </div>
        <div class="navbar">
            <nav>
                <a href="#">home</a>
                <a href="#">about</a>
                <a href="#">shop</a>
                <a href="#">hire us</a>
            </nav>
        </div>
              
        <div class="nav-collapse" @click="navbarOpen = !navbarOpen">
            <font-awesome-icon class="bars" :icon="['fa', 'bars']" />
            <nav :class="navbarOpen ? 'show-nav' : 'hide-nav'"> 
                <a id="nav-option" href="#">home</a>
                <a id="nav-option" href="#">about</a>
                <a id="nav-option" href="#">shop</a>
                <a id="nav-option" href="#">hire us</a>
            </nav>
        </div>
    </div>
</template>

<script>
export default {
    name: 'App',
    data() {
        return {
        navbarOpen: false,
        };
    },
}
</script>

<style lang="scss">
.container {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
}

.logo {
    width: 15em;
    display: flex;
    justify-content: center;
    padding: 1rem 0rem;
}

.navbar {
    display: flex;
    width: 100%;
    position: sticky;
    background-color: var(--primary-colour);
    justify-content: center;
    text-transform: uppercase;
    font-weight: bold;
    font-size: larger;
    padding: 1rem;
    
}

a {
    padding: 3rem;
    transition: 1000ms ease-in-out;
}

a:hover {
    text-decoration: underline;
}

.nav-collapse {
    display: none;
}

@media only screen and (orientation: portrait) {
    .navbar {
        display: none;
    }

    .nav-collapse {
        display: flex;
    }
}

</style>
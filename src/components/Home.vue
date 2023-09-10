<template >
    <layout>
        <section class="home-container">
            <div class="home-head">
                <img class="logo" src="../assets/crop-logo.png" alt="Earth to Oven logo">
                <h1>Earth to Oven</h1>
                <h2>seasonal street food</h2>
                <p>seasonal menu <br>
                    locally sourced <br>
                    full of flavour
                </p>
            </div>
        </section>
    </layout>
</template>
<script>
import Layout from './Layout.vue';

export default {
    name: 'HomePage',
    components: {
        Layout,
    },
}
</script>
<style lang="scss">
.home-container {
    
    display: flex;
    flex-direction: row-reverse;
    height: 100%;
    width: 100%;
    background-color: var(--action-colour);
    // background-image: url(../assets/eto-sun.png);
    background-size: cover;
    background-repeat: none;
    background-blend-mode: multiply;
    padding-top: 20rem;
    padding-bottom: 10rem;

    .home-head {
        display: flex;
        flex-direction: column;
        justify-content: center;
        height: 10rem;
        width: 100%;
        align-items: center;
        color: var(--nav-colour);
        font-size: x-large;
        text-transform: uppercase;
        text-align: center;
        p {
            padding: 0rem;
        }

        .logo {
            height: 5rem;
            color: --var(--background-colour);
        }
    }

}

</style>
<template >
    <layout>
        <section class="home-container">
            <div class="home-head">
                <h1>Earth to Oven</h1>
                <h2>seasonl street food</h2>
                <p>seasonal menu <br>
                    locally sourced <br>
                    full of flavour
                </p>
                <!-- <img class="logo" src="../assets/crop-logo.png" alt="logo">
                <img class="banner" src="../assets/logo-extra.png" alt="earth to oven, seasonal street food"> -->
            </div>
            
            <div>
                <!-- <img class="bg-image" src="../assets/eto-alfie.png" alt="founder of earth to oven"> -->
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
    background-image: url(../assets/eto-alfie.png);
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
        color: var(--background-colour);
        font-size: x-large;
        text-transform: uppercase;
        text-align: center;
        p {
            padding: 0rem;
        }

            .logo {
                width: 10rem;
                padding: 1rem;
                z-index: 1;
            }
            .banner {
                width: 20rem;
                padding: 1rem;
                z-index: 1;
            }
    }

}

</style>
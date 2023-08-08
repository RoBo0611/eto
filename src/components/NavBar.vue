<template>
    <div class="container">
        <!-- <div class="navbar">
            <nav>
                <a href="/">home</a>
                <a href="/About">about</a>
                <a href="/Shop">shop</a>
                <a href="/HireUs">hire us</a>
            </nav>
        </div> -->

        <div class="nav-collapse" @click="navbarOpen = !navbarOpen">
            <font-awesome-icon class="bars" :icon="['fa', 'bars']" size="2xl" />
            <nav :class="navbarOpen ? 'drop-nav-menu' : 'drop-nav-menu-hide'"> 
                <a id="nav-option" href="/">home</a>
                <a id="nav-option" href="/About">about</a>
                <a id="nav-option" href="/Shop">shop</a>
                <a id="nav-option" href="/HireUs">hire us</a>
            </nav>
        </div>
    </div>
</template>

<script>
export default {
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
    // padding-top: 10rem;
    // padding-bottom: 10rem;

    
    

    // .navbar {
    //     display: flex;
    //     justify-content: right;
    //     align-items: center;
    //     width: 100%;
    //     text-transform: uppercase;
    //     font-weight: bold;
    //     font-size: larger;
    //     padding: 1rem;
    //     a {
    //         padding: 1rem;
    //         transition: 1000ms ease-in-out;
    //     }
    //     a:hover {
    //         text-decoration: underline;
    //     }
    // }

    // .nav-collapse {
    //     display: none;
    // }


    // @media only screen and (orientation: portrait) {
        
        // .navbar {
        //     display: none;
        // }

        .nav-collapse {
            display: flex;
            flex-direction: row;
            justify-content: right;
            width: 100%;
            align-items: center;
            position: absolute;
            padding: 1rem;
            

            .bars {
                color: var(--background-colour);
            }

                .drop-nav-menu {
                    display: flex;
                    flex-direction: column;  
                    position: absolute;
                    top: 4rem;
                    right: 2rem;
                        #nav-option {
                            display: flex;
                            flex-direction: column;
                            justify-content: center;
                            text-align: right;
                            font-weight: bold;
                            font-size: xx-large;
                            color: var(--background-colour);
                            width: 80vw;
                            // height: 10vh;
                            padding: 0.5rem;
                            // border: solid 2px var(--primary-colour);
                            text-transform: uppercase;
                            // background-color: var(--background-colour);
                        }  
                }
                .bars {
                    padding: 1rem;

                }
                .drop-nav-menu-hide {
                    display: none;
                } 
            } 
        }
    // }
    
    @media only screen and (orientation: landscape) {
        .nav-collapse {

        
        .drop-nav-menu {
            display: flex;
            flex-direction: row;
        
        #nav-option {
            display: flex;
            flex-direction: row;
            
        }
    }
    }
}


</style>
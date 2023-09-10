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


        .nav-collapse {
            display: flex;
            flex-direction: row;
            justify-content: right;
            right: 0.5rem;
            width: 100%;
            align-items: center;
            position: absolute;
            padding: 1rem;
            

            .bars {
                color: var(--nav-colour);
            }

                .drop-nav-menu {
                    display: flex;
                    flex-direction: row;  
                    position: absolute;
                    top: 1.5rem;
                    right: 5rem;
                    
                        #nav-option {
                            display: flex;
                            justify-content: center;
                            text-align: center;
                            font-weight: bold;
                            font-size: x-large;
                            color: var(--nav-colour);
                            // background-color: var(--background-colour);
                            border-radius: 10%;
                            margin: 1px;
                            // width: 80vw;
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
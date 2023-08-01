<template>
  <div class="outerContainer">
    
      <NavBar />
    
      <div class="content"><slot /></div>
    
      <FooterItem />
    
  </div>
</template>

<script>
import NavBar from './NavBar.vue';
import FooterItem from './FooterItem.vue';
export default {
  name: 'App',
  components: {
    NavBar,
    FooterItem,
  }
}
</script>

<style lang="scss">
  .outerContainer {
    display: flex;
    flex-direction: column;
    position: fixed;
    height: 100%;
    width: 100%;
    z-index: -1;
    background: var(--background-fade);

      .content {
        height: 100%;
      }

}


</style>

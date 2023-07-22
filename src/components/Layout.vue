<template>
  <div class="outerContainer">
    <div class="head">
      <NavBar />
    </div>
      <div class="content"><slot /></div>
    <div class="footer">
      <FooterItem />
    </div>
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

<style>
.outerContainer {
  display: flex;
  flex-direction: column;
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  z-index: -1;
  background-color: var(--background-colour);
background-image: linear-gradient(146deg, var(--background-fade) 0%, var(--background-colour) 100%);
}

.head {
  display: flex;
  height: 5em;
  width: 100vw;
}

.content {
  height: 75vh;
}
.footer {
  display: flex;
  justify-content: center;
  align-items: flex-end;
  height: 10em;
  width: 100%;
}
</style>

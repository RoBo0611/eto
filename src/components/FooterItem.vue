<template>
  <div class="footer">
    
    <div>
      <a href="https://facebook.com/earthtoovenltd"
        ><font-awesome-icon
          class="socials"
          icon="fa-brands fa-facebook"
          size="xl"
      /></a>

      <a href="https://instagram.com/earth_to_oven/"
        ><font-awesome-icon
          class="socials"
          icon="fa-brands fa-instagram"
          size="xl"
      /></a>
    </div>
    <div class="award">
      <img
        src="../assets/eto-award.png"
        alt="earth to oven british street food award"
        class="eto-award"
      />
    </div>
  </div>
</template>

<script></script>

<style lang="scss">
.footer {
  display: flex;
  flex-direction: column;
  align-items: center;
  color: var(--nav-colour);
    a {
      .socials {
        opacity: 70%;
        color: var(--nav-colour);
        padding: 0.5rem;
      }
    }
  
  .eto-award {
    width: 6rem;
  }
}
</style>

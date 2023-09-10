<template>
  <layout>
    <section class="about-head">
      <h1>our story</h1>
      <h3>Paving your way to the best food on the street</h3>
    </section>
    <div class="content-container">
      <section class="about-content">
        <div class="article" id="first">
          <p>
            Earth to Oven is a culinary venture that blends delectable street
            food with an unwavering commitment to sustainability. With a strong
            emphasis on locally sourced ingredients and seasonal flavors, we
            revolutionized the gastronomic landscape.
          </p>
        </div>
        <div class="article" id="second">
          <p>
            Our dedication to supporting local suppliers shines through in every
            dish they serve. By partnering with nearby farmers and artisans,
            Earth to Oven ensures the freshest, high-quality produce and
            ingredients grace their menus. Not only does this support the local
            economy, but it also guarantees a farm-to-table experience that
            bursts with authentic taste.
          </p>
        </div>
        <div class="article" id="third">
          <p>
            At Earth to Oven, sustainability isn't just a buzzword—it's a way of
            life. Their commitment to eco-friendly practices is evident in every
            aspect of their operation. From utilizing compostable packaging and
            minimizing waste to implementing energy-efficient cooking
            techniques, they continuously strive to minimize their environmental
            footprint.
          </p>
        </div>
        <div class="article" id="fourth">
          <p>
            Moreover, Earth to Oven's passion for sustainable produce drives
            their menu creation. They prioritize ingredients that are ethically
            sourced, organic, and cultivated with environmentally friendly
            practices. By embracing sustainable agriculture, they ensure their
            offerings are not only delicious but also promote a healthier
            planet.
          </p>
        </div>
        <div class="article" id="fifth">
          <p>
            With an impressive 35 years of hospitality experience, Earth to
            Oven's team combines expertise with an unbridled love of food. They
            bring forth a wealth of culinary knowledge and creativity,
            constantly pushing the boundaries of street food to new heights.
            Each bite reflects their commitment to flavor, quality, and the joy
            that food can bring.
          </p>
        </div>
        <div class="article" id="sixth">
          <p>
            With an impressive 35 years of hospitality experience, Earth to
            Oven's team combines expertise with an unbridled love of food. They
            bring forth a wealth of culinary knowledge and creativity,
            constantly pushing the boundaries of street food to new heights.
            Each bite reflects their commitment to flavor, quality, and the joy
            that food can bring.
          </p>
        </div>
      </section>
    </div>
  </layout>
</template>
<script>
import Layout from "./Layout.vue";

export default {
  name: "AboutPage",
  components: {
    Layout,
  },
};
</script>
<style lang="scss">
.about-head {
  display: flex;
  align-items: center;
  flex-direction: column;
  font-size: xx-large;
  text-align: center;
  padding: 1rem;
  margin-top: 2rem;
  h1 {
    text-transform: uppercase;
  }
  h3 {
    margin: 0;
  }
}

.content-container {
  display: flex;
  flex-direction: row;
  justify-content: center;
  

  .article {
    display: flex;
    height: 500px;
    width: 300px;
    padding: 1rem;
    margin: 1rem;
    font-size: x-large;
    text-align: center;
    color: var(--nav-colour);
    font-weight: bolder;
    border-radius: 25px;
    align-items: center;
    background-color: rgb(128, 128, 128);
    background-size: cover;
    background-blend-mode: lighten;
  }
 
  #first {
    background-image: url(../assets/eto-broccoli.png);
  }
  #second {
    background-image: url(../assets/eto-jade.png);
  }
  #third {
    background-image: url(../assets/eto-flatbread.png);
  }
  #fourth {
    background-image: url(../assets/eto-trailer2.png);
  }
  #fifth {
    background-image: url(../assets/eto-que.png);
  }
  #sixth {
    background-image: url(../assets/eto-aback.png);
  }
}
</style>

<template>
  <Layout>
    <div class="hire-us-container">
      <section class="events-head">
        <h1 class="events-title">Events</h1>
        <p>
          At Earth to Oven, we believe in more than just food. We're stewards of
          the environment, supporting local suppliers, embracing seasonal
          ingredients, and nurturing sustainable practices. We serve
          deliciousness with a side of responsibility.
        </p>
        <p>
          From intimate gatherings to grand celebrations, we infuse each event
          with a sense of warmth and togetherness. Your milestones are our
          milestones, and we're honored to be a part of them.
        </p>
        <p>
          Every event is a unique story waiting to be told. We listen to your
          dreams and desires, and then craft a culinary experience that reflects
          your personal touch.
        </p>
        <p>
          We're not just about food; we're about fostering connections,
          celebrating life, and nurturing the soul. When you choose Earth to
          Oven, you're not just hiring caterers; you're inviting a family that
          cares about making your moments special.
        </p>
      </section>
      <section class="image-break">
        <div class="images">
          <img src="../assets/eto-grill.png" alt="earth to oven grill" />
        </div>
        <div class="images">
          <img
            src="../assets/eto-coffee.png"
            alt="earth to oven coffee"
            id="eto-coffee"
          />
        </div>
      </section>
      <section class="events-form">
        <div>
          <h2 class="events-form-title">Contact Us</h2>
        </div>
        <div>
          <form action="" class="contact-form">
            <input
              type="text"
              name="first"
              id="first"
              placeholder="First Name"
            />
            <input
              type="text"
              name="surname"
              id="surname"
              placeholder="Last Name"
            />
            <input type="email" name="email" id="email" placeholder="Email" />
            <input
              type="number"
              name="number"
              id="number"
              placeholder="Mobile number"
            />
            <textarea
              type="text"
              name="message"
              id="message"
              placeholder="Message"
            ></textarea>
            <button class="form-submit">Submit</button>
          </form>
        </div>
      </section>
    </div>
  </Layout>
</template>
<script>
import Layout from "./Layout.vue";

export default {
  name: "HireUs",
  components: {
    Layout,
  },
};
</script>
<style lang="scss">
.hire-us-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 2rem;

  .events-head {
    text-align: center;
    padding: 1rem;
    font-size: larger;
    p {
      padding: 0rem 5rem;
    }
  }
  .image-break {
    display: flex;
    flex-direction: row;
    align-content: center;

    .images {
      padding: 0.5rem;
      img {
        width: 100%;
        border-radius: 10px;
      }
    }
  }
  .events-form {
    display: flex;
    flex-direction: column;
    .contact-form {
      font-size: large;
      display: flex;
      flex-direction: column;
      
      input {
        width: 35rem;
        padding: 1rem;
        margin: 1rem;
        border-radius: 10px;
        font-family: 'Agdasima', sans-serif;
        font-size: larger;
      }
      button {
        width: 5rem;
        text-transform: uppercase;
        border-radius: 5px;
        margin: 1rem;
        font-family: 'Agdasima', sans-serif;
        font-size: larger;
      }
      #message {
        height: 10rem;
        width: 35rem;
        border-radius: 10px;
        border: 2px solid;
        border-right: 2px solid grey;
        border-bottom: 2px solid grey;
        margin: 1rem;
        padding: 1rem;
        font-family: 'Agdasima', sans-serif;
        font-size: larger;
      }
    }
  }
}

@media only screen and (orientation: portrait) {
  .hire-us-container {
    .events-head {
      p {
        padding: 0rem 0rem;
      }
    }
  }
}
</style>

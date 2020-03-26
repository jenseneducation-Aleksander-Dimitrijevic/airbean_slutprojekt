<template>
  <div class="menu">
    <Banner :imgUrl="require('@/assets/img/graphics-header.svg')" />
    <div class="text-content">
      <Heading heading="Vårt kaffe" :style="{textAlign: 'left'}" />
      <p>
        Pumpkin spice mug, barista cup, sit
        macchiato, kopi-luwak, doppio, grounds
        dripper, crema, strong whipped, variety
        extra iced id lungo half and half mazagran.
        Pumpkin spice.
        <span>
          Que dark fair trade, spoon decaffeinated, barista
          wings whipped, as rich aftertaste, con panna milk
          black, arabica white rich beans single shot extra
          affogato. So affogato macchiato sit extraction
          instant grinder seasonal organic, turkish single shot,
          single origin, and robusta strong to go so dripper.
          Viennese froth, grounds caramelization skinny
          aromatic cup kopi-luwak, fair trade flavour,
          frappuccino medium, café au lait flavour cultivar ut
          bar instant kopi-luwak.
        </span>
        <span>
          Roast id macchiato, single shot siphon mazagran
          milk fair trade est aroma a half and half and, so,
          galão iced to go, whipped as cream cup pumpkin
          spice iced. At extra, rich grinder, brewed to go,
          steamed half and half at, that, percolator macchiato
          trifecta and body as arabica dripper. In galão black
          java milk sit trifecta, robusta, acerbic café au lait
          instant shop latte. Seasonal bar shop filter aroma id,
          crema, affogato viennese cultivar aftertaste,
          seasonal, percolator cream black, galão flavour, milk
          aromatic turkish skinny crema.
        </span>
      </p>
    </div>
    <div class="image-container">
      <img :src="require('@/assets/img/eva-cortado.jpg')" alt="logo" />
      <h3>Eva Cortado</h3>
      <pre>VD & Grundare</pre>
      <Banner :imgUrl="require('@/assets/img/graphics-footer.svg')" />
    </div>
  </div>
</template>

<script>
import Banner from "@/components/Banner.vue";
import Heading from "@/components/Heading.vue";
export default {
  components: {
    Banner,
    Heading
  }
};
</script>

<style lang="scss" scoped>
.text-content {
  padding: 0 1rem;
  p {
    line-height: 1.8;
    font-size: 0.9rem;
    font-weight: bolder;
    span {
      display: block;
      margin: 2rem 0;
      font-weight: 100;
    }
  }
}
.image-container {
  text-align: center;
  img {
    border-radius: 50%;
  }
}
</style>

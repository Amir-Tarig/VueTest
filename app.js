let app = new Vue({
  el: "#app",
  data: {
    brand: "Vue Mastery",
    product: "Socks",
    image:
      "https://www.vuemastery.com/images/challenges/vmSocks-green-onWhite.jpg",
    inStock: false,
    inventory: 0,
    details: ["80% cotton", "20% polyester", "Gender-neutral"],
    variants: [
      {
        variantId: 2234,
        variantColor: "green",
        variantImage:
          "https://www.vuemastery.com/images/challenges/vmSocks-green-onWhite.jpg",
      },

      {
        variantId: 2236,
        variantColor: "blue",
        variantImage:
          "https://www.vuemastery.com/images/challenges/vmSocks-blue-onWhite.jpg",
      },
    ],
    sizes: ["S", "M", "L", "XL", "XXL", "XXXL"],
    cart: 0,
  },

  computed: {
    title() {
      this.brand + this.product;
    },
  },

  methods: {
    addToCart() {
      this.cart++;
    },

    updateProduct(variantImage) {
      this.image = variantImage;
    },
  },
});

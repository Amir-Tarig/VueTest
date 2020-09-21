let app = new Vue({
  el: "#app",
  data: {
    brand: "Vue Mastery",
    product: "Socks",
    selectedVariant: 0,

    inventory: 0,
    details: ["80% cotton", "20% polyester", "Gender-neutral"],
    variants: [
      {
        variantId: 2234,
        variantColor: "green",
        variantQuantity: 0,
        variantImage:
          "https://www.vuemastery.com/images/challenges/vmSocks-green-onWhite.jpg",
      },

      {
        variantId: 2236,
        variantColor: "blue",
        variantQuantity: 10,
        variantImage:
          "https://www.vuemastery.com/images/challenges/vmSocks-blue-onWhite.jpg",
      },
    ],
    sizes: ["S", "M", "L", "XL", "XXL", "XXXL"],
    cart: 0,
    onSale: false,
  },

  computed: {
    title() {
      this.brand + this.product;
    },
    image() {
      return this.variants[this.selectedVariant].variantImage;
    },
    inStock() {
      return this.variants[this.selectedVariant].variantQuantity;
    },
    Sale() {
      if (this.variants.onSale) {
        return `${this.brand}  ${this.product}  Currntly On Sale`;
      }
      return `${this.brand}  ${this.product} Currntly Is Not On Sale`;
    },
  },

  methods: {
    addToCart() {
      this.cart++;
    },

    updateProduct(index) {
      this.selectedVariant = index;
    },
  },
});

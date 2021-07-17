<template>
    <!-- Banner Section Begin -->
    <section id="Banner" class="women-banner spad">
        <div class="container-fluid">
            <div class="row">
                <div class="col-lg-12 mt-5" v-if="products.length > 0">
                    <carousel class="product-slider" :items="3" :dots="true" :nav="false">

                        <div class="product-item" v-for="itemProduct in products" v-bind:key="itemProduct.id">
                            <div class="pi-pic">
                                <img v-bind:src="itemProduct.galleries[0].photo" alt="img/default-image.jpg" />
                                <ul>
                                    <li @click="saveKeranjang(itemProduct.id, itemProduct.name, itemProduct.price, itemProduct.galleries[0].photo)" class="w-icon active">
                                        <a href="#">
                                            <i class="icon_bag_alt"></i>
                                        </a>
                                    </li>
                                    <li class="quick-view">
                                        <router-link v-bind:to="'/product/'+itemProduct.id">+ Lihat Produk</router-link>
                                    </li>
                                </ul>
                            </div>
                            <div class="pi-text">
                                <div class="category-name">{{ itemProduct.type }}</div>
                                <router-link to="/product">
                                    <a href="#">
                                        <h5>{{ itemProduct.name }}</h5>
                                    </a>
                                </router-link>
                                <div class="product-price">
                                    Rp {{ itemProduct.price | numFormat }}
                                </div>
                            </div>
                        </div>
                        

                    </carousel>
                </div>

                <div class="col-lg-12" v-else>
                    <p>
                        Maaf, periksa sambungan API untuk melihat produk
                    </p>
                </div>

            </div>
        </div>
    </section>
    <!-- Banner Section End -->
</template>

<script>

import carousel from 'vue-owl-carousel';
import axios from "axios";

export default {
    name: 'BannerMoelaikeun',
    components: {
        carousel
    },
    data() {
        return {
            products: [],
            keranjangUser: []
        };
    },
    mounted() {
        axios
         .get("https://admin-moelaikeun.herokuapp.com/api/products")
         .then(res => (this.products = res.data.data.data))
         // eslint-disable-next-line no-console
         .catch(err => console.log(err));

         if (localStorage.getItem("keranjangUser")) {
             try {
                 this.keranjangUser = JSON.parse(localStorage.getItem("keranjangUser"));
             } catch (e) {
                 localStorage.removeItem("keranjangUser");
             }
         }
    },
    methods: {
        saveKeranjang(idProduct, nameProduct, priceProduct, photoProduct) {

          var productStored = {
              "id": idProduct,
              "name": nameProduct,
              "price": priceProduct,
              "photo": photoProduct
          };

          this.keranjangUser.push(productStored);
          const parsed = JSON.stringify(this.keranjangUser);
          localStorage.setItem('keranjangUser', parsed);

          window.location.reload();

          
        },
        increment () {
            this.quantity++
        },
        decrement () {
            if(this.quantity === 1) {
                alert('Negative quantity not allowed')
            } else {
                this.quantity--
            }
        }
    }
};
</script>

<style scoped>
.product-item {
    margin-right: 25px;
}
.quantity-toggle {
  margin: 0;
}

.quantity-toggle input {
    border: 0;
    border-top: 2px solid #ddd;
    border-bottom: 2px solid #ddd;
    width: 3.5rem;
    text-align: center;
    padding: 0.5rem;
}

.quantity-toggle button {
    border: 2px solid #ddd;
    padding: 0.5rem;
    background: #f5f5f5;
    color: #888;
    font-size: 1rem;
    cursor: pointer;
}
</style>
<template>
  <div class="about">

    <HeaderMoelaikeun />

    <!-- Breadcrumb Section Begin -->
    <div class="breacrumb-section text-left">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="breadcrumb-text product-more">
                        <router-link to="/"><i class="fa fa-home"></i> Home</router-link>
                        <span>about</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- Breadcrumb Section Begin -->
    
    <!-- Product Shop Section Begin -->
    <section class="product-shop spad page-details">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="row">
                        <div class="col-lg-6">
                            <div class="product-pic-zoom">
                                <img class="about-logo" src="img/moelaikeun-logo.png" alt="" />
                            </div>
                        </div>
                        <div class="col-lg-6">
                            <div class="product-details text-left">
                                <div class="pd-title">
                                    <span>Tentang Kami</span>
                                    <h3>Moelaikeun</h3>
                                </div>
                                <div class="pd-desc">
                                    <p>
                                        Moelaikeun mulai dibangun sejak pertengahan bulan Januari 2021 oleh seorang pemuda berusia 20 tahun yang sedang duduk dibangku perkuliahan jurusan Teknik Informatika.
                                        Memiliki dasar IT dan masih amatir dibidang bisnis tidak menghalanginya untuk mencoba belajar dan terjun dalam dunia perbisnisan.
                                    </p>
                                    <p>
                                        Berkolaborasi bersama Dapoer Otsuka, Alisha Bakery, dan Bunda Adah (Food Photographer) Moelaikeun bergerak untuk menyediakan berbagai macam produk makanan.
                                    </p>
                                    <p>
                                        Bermarkas di Bekasi Timur, untuk permulaan kami hanya dapat mengantarkan pesanan sekitaran Kota Bekasi.
                                    </p>
                                    <p>
                                        Kami membuka PO untuk menu kami 1-4x sebulan via Instagram, Whatsapp, dan Line. Silahkan follow akun IG : @moelaikeun.id untuk perkembangan lebih lanjut.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- Product Shop Section End -->

    <RelatedMoelaikeun />
    <FooterMoelaikeun />
  </div>
</template>

<script>

import HeaderMoelaikeun from "@/components/HeaderMoelaikeun.vue";
import RelatedMoelaikeun from "@/components/RelatedMoelaikeun.vue";
import FooterMoelaikeun from "@/components/FooterMoelaikeun.vue";

export default {
  name: 'about',
  components: {
    HeaderMoelaikeun,
    RelatedMoelaikeun,
    FooterMoelaikeun
  }
}
</script>

<style scoped>
.about-logo{
  width: 200px;
  height: 550px;
}
</style>

<template>
    <div>
    <!-- Hero Section Begin -->
    <section class="hero-section">
        <carousel class="hero-items" :items="1" :nav="false" :autoplay="true">

            <div class="single-hero-items set-bg" style="background-image: url('/img/moelaikeun-banner1.png')">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-5">
                            <h1>Selamat Berbelanja!</h1>
                            <p>
                                Selamat datang di website resmi Moelaikeun, anda dapat memesan produk kami secara online melalui situs ini!  
                            </p>
                            <router-link to="/order">
                            <a href="#" class="primary-btn">Cara Order</a>
                            </router-link>
                        </div>
                    </div>
                </div>
            </div>
            <div class="single-hero-items set-bg" style="background-image: url('/img/moelaikeun-banner2.png')">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-5">
                            <h1>Pisang Bolen Coklat Keju</h1>
                            <p>
                                Produk ini sangat cocok dihidangkan saat kumpul keluarga, sehingga anda dapat merasakan kenikmatan bersama keluarga.
                            </p>
                            <a href="#Banner" class="primary-btn">Beli Sekarang</a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="single-hero-items set-bg" style="background-image: url('/img/moelaikeun-banner3.png')">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-5">
                            <h1>Pizza Roll</h1>
                            <p>
                                Ingin mencoba makan Pizza dengan beda? Pizza Roll Moelaikeun jawabannya!
                            </p>
                            <a href="#Banner" class="primary-btn">Beli Sekarang</a>
                        </div>
                    </div>
                </div>
            </div>

        </carousel>
    </section>
    <!-- Hero Section End -->
    </div>
</template>


<script>

import carousel from 'vue-owl-carousel';

export default {
    name: 'HeroMoelaikeun',
    components: {
        carousel
    }
}
</script>
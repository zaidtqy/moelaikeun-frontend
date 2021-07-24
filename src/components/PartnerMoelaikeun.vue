<template>
    <!-- Partner Logo Section Begin -->
    <div class="partner-logo">
        <div class="container">
            <carousel class="logo-carousel" :loop="true" :items="4" :dots="false" :nav="false" autoplay>
                <div class="logo-item">
                    <div class="tablecell-inner">
                        <img src="img/logo-carousel/moelaikeun-1.png" alt="" />
                    </div>
                </div>
                <div class="logo-item">
                    <div class="tablecell-inner">
                        <img src="img/logo-carousel/moelaikeun-2.png" alt="" />
                    </div>
                </div>
                <div class="logo-item">
                    <div class="tablecell-inner">
                        <img src="img/logo-carousel/moelaikeun-3.png" alt="" />
                    </div>
                </div>
                <div class="logo-item">
                    <div class="tablecell-inner">
                        <img src="img/logo-carousel/moelaikeun-4.png" alt="" />
                    </div>
                </div>
            </carousel>
        </div>
    </div>
    <!-- Partner Logo Section End -->
</template>

<script>

import carousel from 'vue-owl-carousel';

export default {
    name: 'PartnerMoelaikeun',
    components: {
        carousel
    }
}
</script>
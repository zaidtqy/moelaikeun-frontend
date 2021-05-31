<template>
    <!-- Footer Section Begin -->
    <footer class="footer-section">
        <div class="container">
            <div class="row">
                <div class="col-lg-5">
                    <div class="footer-left text-left">
                        <div class="footer-logo">
                            <a href="#"><img class="footer-logo" src="img/logo-website-moelaikeun-white.png" alt="" /></a>
                        </div>
                        <ul>
                            <li>Alamat: Perum. Kodim Blok D No.10, Bekasi Timur</li>
                            <li>Telp/WA: +62 857-1106-8225</li>
                            <li>Line: moelaikeun.id</li>
                            <li>Instagram: @moelaikeun.id</li>
                            <li>Email: moelaikeun@gmail.com</li>
                        </ul>
                        <div class="footer-social">
                            <a href="https://www.google.co.id/maps/place/6%C2%B014'19.5%22S+107%C2%B000'56.3%22E/@-6.2388707,107.0154654,18.9z/data=!4m6!3m5!1s0x2e698e9a535cc763:0x56fa1a2ce644a9d3!7e2!8m2!3d-6.2387413!4d107.0156349"><i class="fa fa-map-marker"></i></a>
                            <a href="https://api.whatsapp.com/send?phone=6285711068225&text=Halo%20kak!%20Saya%20ingin%20bertanya%20mengenai%20produk%20Moelaikeun%20ini."><i class="fa fa-whatsapp"></i></a>
                            <a href="http://line.me/ti/p/~moelaikeun.id"><i class="fab fa-line"></i></a>
                            <a href="https://www.instagram.com/moelaikeun.id/"><i class="fa fa-instagram"></i></a>
                            <a href="https://mail.google.com/"><i class="far fa-envelope"></i></a>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3 offset-lg-1">
                    <div class="footer-widget text-left">
                        <h5>Informasi</h5>
                        <ul>
                            <li>
                                <router-link to="/about">
                                <a href="">Tentang Kami</a>
                                </router-link>
                            </li>
                            <li>
                                <router-link to="/order">
                                <a href="">Cara Order</a>
                                </router-link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="col-lg-3">
                    <div class="footer-widget text-left">
                        <h5>Hubungi Kami</h5>
                        <ul>
                            <li>
                                <a href="https://www.google.co.id/maps/place/6%C2%B014'19.5%22S+107%C2%B000'56.3%22E/@-6.2388707,107.0154654,18.9z/data=!4m6!3m5!1s0x2e698e9a535cc763:0x56fa1a2ce644a9d3!7e2!8m2!3d-6.2387413!4d107.0156349">Alamat</a>
                            </li>
                            <li>
                                <a href="https://api.whatsapp.com/send?phone=6285711068225&text=Halo%20kak!%20Saya%20ingin%20bertanya%20mengenai%20produk%20Moelaikeun">WhatsApp</a>
                            </li>
                            <li>
                                <a href="http://line.me/ti/p/~moelaikeun.id">Line</a>
                            </li>
                            <li>
                                <a href="https://www.instagram.com/moelaikeun.id/">Instagram</a>
                            </li>
                            <li>
                                <a href="https://mail.google.com/">Email</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div class="copyright-reserved">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="copyright-text text-left">
                            Copyright &copy;
                            2021
                            All rights reserved | Moelaikeun
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>
    <!-- Footer Section End -->
</template>

<script>
export default {
    name: 'FooterMoelaikeun'
}
</script>

<style scoped>
.footer-logo {
    width: 145px;
    height: 25px;
}
</style>
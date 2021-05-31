<template>
  <div class="order">

    <HeaderMoelaikeun />

    <!-- Breadcrumb Section Begin -->
    <div class="breacrumb-section text-left">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="breadcrumb-text product-more">
                        <router-link to="/"><i class="fa fa-home"></i> Home</router-link>
                        <span>cara order</span>
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
                        <div class="col-lg">
                            <div class="product-details text-left">
                                <div class="pd-title">
                                    <span>Cara Order</span>
                                    <h3>Bagaimana saya bisa order?</h3>
                                </div>
                                <div class="pd-desc">
                                        1. Buka website Moelaikeun. <br>
                                        2. Pada tampilan produk, ada beberapa pilihan untuk anda pesan. Apabila anda mau melihat detail produk nya anda bisa klik <b>+ Lihat Produk</b>. Maka akan ada detail produk nya seperti apa dan anda dapat memesannya sesuai dengan apa yang anda inginkan. <br>
                                        3. Apabila ingin membeli produk, klik <b>logo tas belanja</b> disamping tulisan ‘+ Lihat Produk’. <br>
                                        4. Produk akan masuk kedalam keranjang belanjaan. <br>
                                        5. Pada keranjang belanjaan klik <b>CHECKOUT</b>. <br>
                                        6. List belanjaan anda akan masuk kedalam halaman Checkout, setelah itu masukkan informasi anda (seperti nama, email, telp/WA, Alamat Lengkap, dll). Klik tombol <b>Submit</b>, apabila berhasil maka data akan masuk kedalam database kami. Dan jika data tidak sesuai / informasi ada yang kurang maka data tidak akan terkirim.<br>
                                        7. <b>Lakukan pembayaran</b> dengan menggunakan beberapa metode yang tersedia yaitu <b>Bank BCA, Bank DKI, Gopay, dan OVO</b>. Anda dapat transfer ke bank tertera atau dapat scan dengan menggunakan <b>Gopay</b> / <b>OVO</b> dengan klik <b>scan me</b>. <br>
                                        8. <b>Pastikan transfer sesuai dengan total transfer yang telah ditambahkan kode unik</b>. <br>
                                        9. Ketika anda sudah bayar, klik tombol <b>SAYA SUDAH BAYAR</b>. <br>
                                        10. Kami akan proses pesanan anda apabila pembayaran anda sudah masuk ke rekening kami. Apabila pembayaran belum masuk dalam 1 x 24 jam, maka pesanan akan kami anggap gagal. <br><br>
                                        <b>Perhatian!</b><br>
                                        Pengiriman akan dilakukan di hari yang sama (Same Day) dengan waktu kerja Senin - Jum'at pukul 14:00. Apabila anda melakukan transaksi di atas jam tersebut, maka pengiriman akan dilakukan esok harinya.<br>
                                        Butuh bantuan pemesanan? <a target="blank" href="https://api.whatsapp.com/send?phone=6285711068225&text=Halo%20kak!%20Saya%20butuh%20bantuan%20mengenai%20pemesanan" class="bantuan">klik disini</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- Product Shop Section End -->

    <FooterMoelaikeun />
  </div>
</template>

<script>

import HeaderMoelaikeun from "@/components/HeaderMoelaikeun.vue";
import FooterMoelaikeun from "@/components/FooterMoelaikeun.vue";

export default {
  name: 'order',
  components: {
    HeaderMoelaikeun,
    FooterMoelaikeun
  }
}
</script>

<style scoped>
h1 {
    font-weight: bold;
}

.bantuan:hover{
    color: #383d41;
}
</style>

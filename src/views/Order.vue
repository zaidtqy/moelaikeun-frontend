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
                                        2. Pada tampilan produk, pilih makanan yang anda inginkan. Klik <b>+ Lihat Produk</b> untuk melihat detail dari produk kami. <br>
                                        3. Apabila anda ingin membeli produk, klik <b>logo tas belanja</b> disamping tulisan ‘+ Lihat Produk’. <br>
                                        4. Produk akan masuk kedalam keranjang belanjaan. Klik <b>CHECKOUT</b> untuk melanjutkan proses belanja. <br>
                                        5. Masukkan informasi anda (seperti nama, email, telp/WA, Pilih Kurir, Kota tujuan, Alamat Lengkap, dll). <br>
                                        6. Lakukan pembayaran dengan transfer ke rekening bank yang tertera. <br>
                                        7. <b>Pastikan transfer sesuai dengan total transfer yang telah ditambahkan kode unik</b>. <br>
                                        8. Tekan <b>ORDER</b>, apabila pengisian form informasi pembeli sudah lengkap dan sesuai. <br>
                                        9. Anda akan diarahkan ke halaman Order Berhasil. Dan silahkan lakukan konfirmasi pembayaran dengan mengirim bukti transfer dengan tekan tombol <b>Konfirmasi Pembayaran</b>. Namun, apabila tidak konfirmasi juga tidak akan menjadi masalah, karena kami akan cek secara manual pembayaran anda. <br>
                                        10. Dengan begitu orderan berhasil dibuat, tekan gambar pada halaman Order Berhasil untuk kembali ke Halaman Utama dan kami siap untuk menerima pesanan anda selanjutnya ^_^! <br><br>
                                        <b>Perhatian!</b><br>
                                        <li>
                                            Demi menjaga kualitas produk kami, maka pengiriman hanya dapat dilakukan disekitaran daerah JABODETABEK.<br>
                                        </li>
                                        <li>
                                            Pengiriman akan dilakukan di hari yang sama (Same Day) dengan waktu kerja Senin - Jum'at pukul 12:00. Apabila anda melakukan transaksi di atas jam tersebut, maka pengiriman akan dilakukan esok harinya.<br>
                                        </li>
                                        <li>
                                            Toko kami buka setiap Senin - Minggu pukul 08:00-20:00 WIB. Dengan begitu anda juga dapat membelinya dengan datang langsung ke toko kami. Lihat alamat kami <a class="bantuan" target="_blank" href="https://www.google.co.id/maps/place/6%C2%B014'19.5%22S+107%C2%B000'56.3%22E/@-6.2388707,107.0154654,18.9z/data=!4m6!3m5!1s0x2e698e9a535cc763:0x56fa1a2ce644a9d3!7e2!8m2!3d-6.2387413!4d107.0156349">disini</a>
                                        </li> <br>
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

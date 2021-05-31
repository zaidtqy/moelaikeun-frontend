<template>
    <div class="success">

        <div class="d-flex success-checkout align-items-center justify-content-center">
            <div class="col col-lg-4 text-center">
                <img src="img/success-buy.png" alt="" width="294">
                <h3 class="mt-4">
                    Order Berhasil!
                </h3>
                <p class="mt-2">
                    Terima kasih sudah memesan produk kami secara online, pesanan akan segera kami proses dan siap kami kirim ke alamat anda. Tunggu pesanannya dirumah yaa, semoga memuaskan!
                </p>
                <router-link to="/"><a href="#" class="primary-btn pd-cart mt-3">Kembali ke beranda</a></router-link>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: 'success'
}
</script>
<template>
    <div class="success">

        <div class="d-flex success-checkout align-items-center justify-content-center">
            <div class="col col-lg-4 text-center">
                <router-link to="/"><img src="img/success-buy.png" alt="" width="294"></router-link>
                <h3 class="mt-4">
                    Order Berhasil!
                </h3>
                <p class="mt-2">
                    Terima kasih sudah memesan produk kami secara online, pesanan akan segera kami proses dan siap kami kirim ke alamat anda. Tunggu pesanannya dirumah yaa, semoga memuaskan!
                </p>
                <a target="_blank" href="https://api.whatsapp.com/send?phone=6285711068225&text=Halo%20Moelaikeun!%20Saya%20ingin%20konfirmasi%20pembayaran.%20Berikut%20bukti%20pembayaran%20saya:" class="primary-btn pd-cart mt-3">Konfirmasi Pembayaran</a>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: 'success'
}
</script>
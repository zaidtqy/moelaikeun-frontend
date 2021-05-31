<template>
    <div class="ovo">
        <div class="d-flex success-checkout align-items-center justify-content-center">
            <div class="col col-lg-4 text-center">
                <h4 class="mt-4">
                         SCAN ME!
                </h4>
                <img src="img/scan-ovo.jpg" alt="" width="294">
                <p class="mt-2">
                    Scan barcode diatas dan apabila pembayaran dengan OVO berhasil, klik tombol dibawah ini.
                </p>
                <router-link to="/success">
                    <a href="#" @click="alert()" class="primary-btn pd-cart mt-3">Saya sudah bayar</a>
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>

import Swal from 'sweetalert2'

export default {
    name: 'ovo',
    methods: {
        alert() {
            Swal.fire({
            type: 'success',
            title: 'Order berhasil!'
        })
        }
    }
}
</script>
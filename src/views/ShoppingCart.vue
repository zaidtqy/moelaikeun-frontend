<template>
    <div class="shopping">
    
    <HeaderMoelaikeun />

    <!-- Breadcrumb Section Begin -->
    <div class="breacrumb-section">
        <div class="container">
            <div class="row">
                <div class="col-lg-12 text-left">
                    <div class="breadcrumb-text product-more">
                        <router-link to="/"><i class="fa fa-home"></i> Beranda</router-link>
                        <span>Keranjang Belanja</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- Breadcrumb Section Begin -->

    <!-- Shopping Cart Section Begin -->
    <section class="shopping-cart spad">
        <div class="container">
            <div class="row">
                <div class="col-lg-8">
                    <div class="row">
                        <div class="col-lg-12">
                            <div class="cart-table">
                                <table>
                                    <thead>
                                        <tr>
                                            <th>Foto</th>
                                            <th class="p-name text-center">Nama Produk</th>
                                            <th>Harga</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr v-for="keranjang in keranjangUser" :key="keranjang.id">
                                            <td class="cart-pic first-row">
                                                <img class="img-cart" :src="keranjang.photo" />
                                            </td>
                                            <td class="cart-title first-row text-center">
                                                <h5>{{ keranjang.name }}</h5>
                                            </td>
                                            <td class="p-price first-row">
                                                Rp {{ keranjang.price | numFormat }}
                                            </td>
                                            <td @click="removeItem(keranjangUser.index)" class="delete-item">
                                                <a href="#">
                                                    <i class="material-icons">close</i>
                                                </a>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div class="col-lg-8">
                            <h4 class="mb-4 text-left">
                                Informasi Pembeli :
                            </h4>
                            <div class="user-checkout text-left">
                                <form>
                                    <div class="form-group">
                                        <label for="namaLengkap">Nama lengkap</label>
                                        <input
                                        required 
                                        type="text" 
                                        class="form-control" 
                                        id="namaLengkap" 
                                        aria-describedby="namaHelp" 
                                        placeholder="masukan nama"
                                        v-model="customerInfo.name">
                                    </div>
                                    <div class="form-group">
                                        <label for="namaLengkap">Alamat Email</label>
                                        <input
                                        required 
                                        type="email" 
                                        class="form-control" 
                                        id="emailAddress" 
                                        aria-describedby="emailHelp" 
                                        placeholder="masukan email"
                                        v-model="customerInfo.email">
                                    </div>
                                    <div class="form-group">
                                        <label for="namaLengkap">No. HP/Whatsapp</label>
                                        <input
                                        required
                                        type="number" 
                                        class="form-control" 
                                        id="noHP" 
                                        aria-describedby="noHPHelp" 
                                        placeholder="masukan no. HP/whatsapp"
                                        v-model="customerInfo.number">
                                    </div>
                                    <div class="form-group">
                                        <label>Pengiriman</label> <br>
                                        <select v-model="selectCourier" @change="selectedCourier">
                                            <option disabled value=" ">Pilih Jenis</option>
                                            <option v-for="(courier,index) in couriers" :key="index" :value="index">{{ courier.label }}</option>
                                        </select>
                                        &nbsp;
                                        <select v-model="customerInfo.courier" v-if="selectCourier != -1">
                                            <option disabled value=" ">Pilih Kurir</option>
                                            <option v-for="option in couriers[selectCourier].options" :key="option">{{ option }}</option>
                                        </select>
                                    </div>
                                    <div class="form-group">
                                        <p v-if="customerInfo.courier">
                                            {{couriers[selectCourier].info}}
                                        </p>
                                    </div>
                                    <!-- <div class="form-group">
                                        <label>Kota Tujuan</label> <br>
                                        <select v-model="selectCity" @change="selectedCity">
                                            <option disabled value=" ">Pilih Kota/Kab</option>
                                            <option v-for="(city,index) in cities" :key="index" :value="index">{{ city.label }}</option>
                                        </select>
                                        &nbsp;
                                        <select v-model="customerInfo.district" v-if="selectCity != -1">
                                            <option disabled value=" ">Pilih Kecamatan</option>
                                            <option v-for="option in cities[selectCity].options" :key="option">{{ option }}</option>
                                        </select>
                                    </div> -->
                                    <!-- <div class="form-group">
                                        <p v-if="customerInfo.district">
                                            Pengiriman ke {{ customerInfo.district }}, {{ cities[selectCity].label }}. Ongkir Rp {{ cities[selectCity].ongkir | numFormat}}
                                        </p>
                                    </div> -->
                                    <div class="form-group">
                                        <label>Kota Tujuan</label> <br>
                                        <select v-model.number="customerInfo.fee" @change="selectedCity">
                                            <option disabled value=" ">Pilih Kota/Kab</option>
                                            <option v-for="biaya in cities" :key="biaya" :value="biaya.fee">{{ biaya.label }}</option>
                                        </select>
                                    </div>
                                    <div class="form-group">
                                        <p v-if="customerInfo.fee">
                                            Ongkir Rp {{ customerInfo.fee | numFormat}}
                                        </p>
                                    </div>
                                    <div class="form-group">
                                        <label>Transfer Via</label> <br>
                                        <select v-model="customerInfo.transfer">
                                            <option disabled value=" ">Pilih Transfer</option>
                                            <option v-for="transfer in transfers" :key="transfer">{{ transfer.label }}</option>
                                        </select>
                                    </div>
                                    <p v-if="customerInfo.transfer">
                                            Transfer ke {{ customerInfo.transfer }}
                                        </p>
                                    <div class="form-group">
                                        <label for="alamatLengkap">Alamat Lengkap</label>
                                        <textarea 
                                        required
                                        class="form-control" 
                                        id="alamatLengkap" 
                                        rows="3"
                                        placeholder="nama jalan, nomor rumah, RT/RW, kelurahan, kecamatan, kota, provinsi, kode pos."
                                        v-model="customerInfo.address">
                                        </textarea>
                                    </div>

                                    <a @click="checkout()" class="btn first">order</a>

                                    <div class="form-group">
                                        <h5 class="header-title">
                                            Informasi penting
                                        </h5>
                                        <li>
                                            Isi informasi diatas dengan lengkap, apabila belum lengkap / data tidak sesuai maka orderan tidak akan masuk.
                                        </li>
                                        <li>
                                            Pastikan transfer pembayaran terlebih dahulu sebelum menekan tombol ORDER, lalu simpan bukti pembayaran anda dan lakukan konfirmasi pembayaran ke admin Moelaikeun.
                                        </li>
                                    </div>
                                    <div class="form-group">
                                        <h5 class="header-title">
                                            Butuh bantuan? <a class="bantuan" target="blank" href="https://api.whatsapp.com/send?phone=6285711068225&text=Halo%20kak!%20Saya%20butuh%20bantuan%20mengenai%20pemesanan">hubungi kami</a>
                                        </h5>
                                        <p class="title">
                                            Admin
                                        </p>
                                        <p class="value">
                                            Nafeesha
                                        </p>
                                        <div class="clear"></div>
                                        <p class="title">
                                            No WhatsApp
                                        </p>
                                        <p class="value">
                                            <strong>0857-1106-8225</strong>
                                        </p>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4">
                    <div class="row">
                        <div class="col-lg-12">
                            <div class="proceed-checkout text-left">
                                <ul>
                                    <h5 class="header-title">
                                        Detail pembayaran
                                    </h5>
                                    <div class="item">
                                        <p class="title">
                                            Admin toko
                                        </p>
                                        <p class="value">
                                            Nafeesha
                                        </p>
                                        <div class="clear"></div>
                                    </div>
                                    <div class="item">
                                        <p class="title">
                                            Harga produk
                                        </p>
                                        <p class="value">
                                            Rp {{ totalHarga | numFormat }}
                                        </p>
                                        <div class="clear"></div>
                                    </div>
                                    <div class="item">
                                        <p class="title">
                                            Ongkir
                                        </p>
                                        <p class="value">
                                            Rp {{ ongkir | numFormat }}
                                        </p>
                                        <div class="clear"></div>
                                    </div>
                                    <hr>
                                    <div class="item">
                                        <p class="title">
                                            Total transfer
                                        </p>
                                        <p class="value">
                                           <strong>Rp {{ totalBiaya | numFormat }}</strong>
                                        </p>
                                        <div class="clear"></div>
                                    </div>
                                    <hr>
                                    <h5 class="header-title">
                                        Transfer pembayaran
                                    </h5>
                                    <img src="img/bca-logo.png" class="logo mb-2">
                                    <p class="info">
                                        a.n. Muhammad Zaid Taqy
                                    </p>
                                    <p class="info">
                                        <strong>7391034285</strong>
                                    </p>
                                    <img src="img/dki-logo.png" class="logo mb-2">
                                    <p class="info">
                                        a.n. Muhammad Zaid Taqy
                                    </p>
                                    <p class="info">
                                        <strong>50223999754</strong>
                                    </p>
                                    <img src="img/dana-logo.png" class="logo mb-2">
                                    <p class="info">
                                        a.n. Muhammad Zaid Taqy
                                    </p>
                                    <p class="info">
                                        <strong>085779402511</strong>
                                    </p>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- Shopping Cart Section End -->
    </div>
</template>

<script>

import HeaderMoelaikeun from "@/components/HeaderMoelaikeun.vue";
import axios from "axios";
import Swal from 'sweetalert2'

export default {
    name: 'cart',
    components: {
        HeaderMoelaikeun
    },
    data() {
      return {
          keranjangUser: [],
          customerInfo: {
              name: '',
              email: '',
              number: '',
              address: '',
              courier: '',
              transfer:'',
              fee:'',
          },
          couriers:[
              {
                  label:"Same Day",
                  options:["ANTERAJA","PAXEL"]             
              },
              {
                  label:"Instant",
                  options:["GOJEK","GRAB"],
                  info:"Jenis pengiriman Instant tidak menjangkau wilayah Bogor."       
              }
          ],
          transfers:[{label:"Bank BCA"},{label:"Bank DKI"},{label:"DANA"}],
          cities:[
            {
                label:"Jakarta Utara",
                // options:["Cilincing","Kelapa Gading","Koja","Pademangan","Penjaringan","Tanjung Priok"],
                fee:72000
            },
            {
                label:"Jakarta Timur",
                // options:["Cakung","Cipayung","Ciracas","Duren Sawit","Jatinegara","Kramat Jati","Makasar","Matraman","Pasar Rebo","Pulo Gadung"],
                fee:55800

            },
            {
                label:"Jakarta Selatan",
                //options:["Cilandak","Jagakarsa","Kebayoran Baru","Kebayoran Lama","Mampang Prapatan","Pancoran","Pasar Minggu","Pesanggrahan","Setiabudi","Tebet"],
                fee:75200
            },
            {
                label:"Jakarta Barat",
                //options:["Cengkareng","Grogol Petamburan","Taman Sari","Tambora","Kebon Jeruk","Kalideres","Palmerah","Kembangan"],
                fee:91875
            },
            {
                label:"Kota Bogor",
                //options:["Bogor Barat","Bogor Selatan","Bogor Tengah","Bogor Timur","Bogor Utara","Tanah Sareal"],
                fee:50500
            },
            {
                label:"Kota Depok",
                //options:["Beji","Bojongsari","Cilodong","Cimanggis","Cinere","Cipayung","Limo","Pancoran Mas","Sawangan","Sukmajaya","Tapos"],
                fee:96611
            },
            {
                label:"Kota Tangerang",
                //options:["Batuceper","Benda","Cibodas","Ciledug","Cipondoh","Jatiuwung","Karangtengah","Karawaci","Larangan","Neglasari","Periuk","Pinang","Tangerang"],
                fee:108000
            },
            {
                label:"Kota Bekasi",
                //options:["Bantar Gebang","Bekasi Barat","Bekasi Selatan","Bekasi Timur","Bekasi Utara","Jatiasih","Jatisampurna","Medan Satria","Mustika Jaya","Pondok Gede","Pondok Melati","Rawalumbu"],
                fee:27250
            },
            {
                label:"Kab.Bekasi",
                //options:["Babelan","Bojongmangu","Cabangbungin","Cibarusah","Cibitung","Cikarang Barat","Cikarang Pusat","Cikarang Selatan","Cikarang Timur","Cikarang Utara","Karangbahagia","Kedungwaringin","Muara Gembong","Pebayuran","Serang Baru","Setu","Sukakarya","Sukatani","Sukawangi","Tambelang","Tambun Selatan","Tambun Utara","Tarumajaya"],
                fee:56347
            },
        ],
    selectCity:-1,
    selectCourier:-1,
      };
    },
    
    methods: {
        
    selectedCity() {
    this.customerInfo.district = '';
    },
    selectedCourier() {
    this.customerInfo.courier = '';
    },

    removeItem(index) {
    this.keranjangUser.splice(index, 1);
    const parsed = JSON.stringify(this.keranjangUser);
    localStorage.setItem('keranjangUser', parsed);
    },

    // fungsi mengirim data ke API
    checkout() {

        let productIds = this.keranjangUser.map(function(product){
            return product.id
        });

        let checkoutData = {
            'name': this.customerInfo.name,
            'email': this.customerInfo.email,
            'number': this.customerInfo.number,
            'address': this.customerInfo.address,
            "transaction_total": this.totalBiaya,
            "transaction_status": "TERTUNDA",
            "transaction_details": productIds,
            'courier': this.customerInfo.courier,
            'fee': this.customerInfo.fee,
            'transfer': this.customerInfo.transfer
        };

        axios
        .post("https://admin.moelaikeun.online/api/checkout", checkoutData)
        .then(() => 
            this.$router.push('success', 
                Swal.fire({
                position: 'top-center',
                type: 'success',
                title: 'Order Berhasil!',
                text: 'Pesanan diproses jika anda sudah mengirim bukti pembayaran. Silahkan konfirmasi pembayaran maksimal dalam 1 x 24 jam.',
                showConfirmButton: true,
            })
            )
        ) 
        // eslint-disable-next-line no-console
        .catch(err => {
            this.$route.push('cart',
            Swal.fire({
                position: 'top-center',
                type: 'error',
                title: 'Order Gagal!',
                text: 'Pastikan data informasi pesanan anda sudah benar/lengkap.',
                showConfirmButton: true,
            })
            );
            console.log(err);
        });
      },
    },
    mounted() {
      if (localStorage.getItem('keranjangUser')) {
        try {
            this.keranjangUser = JSON.parse(localStorage.getItem('keranjangUser'));
          } catch(e) {
            localStorage.removeItem('keranjangUser');
        }
      }
    },
    computed: {
      totalHarga() {
        return this.keranjangUser.reduce(function(items, data){
          return items + data.price;
        }, 0);
      },
      ongkir() {
          return this.customerInfo.fee;
      },
      totalBiaya() {
          return this.totalHarga + this.ongkir;
            
      }
    }
};
</script>

<style scoped>
.img-cart {
    weight: 100px;
    height: 100px;
}
.img {
    weight: 200px;
    height: 200px;
}
.btn-remove {
    font-size: 10px;
    border: 1px solid #383d41;;
}
.logo {
    height: 35px;
    margin-bottom: 6px;
}
.info {
    margin: 0;
    font-weight: 400;
    font-size: 16px;
    color: #34364a;
    margin-bottom: 6px;
}
.item {
    margin-bottom: 16px;
}
.header-title{
    margin: 0;
    font-size: 16px;
    font-weight: 700;
    color: #34364a;
    margin-bottom: 16px;
}
.title{
    margin: 0;
    font-weight: 400;
    font-size: 16px;
    color: #34364a;
    float: left;
}
.value{
    margin: 0;
    float: right;
    font-weight: 400;
    font-size: 16px;
    color: #34364a;
}
.valueSpecial{
    margin: 0;
    float: right;
    font-weight: 400;
    font-size: 16px;
    color: #22c58b;
}
.clear {
    clear: both;
}
.scan-me:hover{
    color: #383d41;
}
.bantuan:hover{
    color: #383d41;
}
.btn {
  box-sizing: border-box;
  -webkit-appearance: none;
     -moz-appearance: none;
          appearance: none;
  background-color: transparent;
  border: 2px solid #383d41;;
  border-radius: 0.6em;
  color: #383d41;;
  cursor: pointer;
  align-self: center;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1;
  padding: 10px 212px ;
  margin-top: 10px;
  margin-bottom: 25px;
  text-decoration: none;
  text-align: center;
  text-transform: uppercase;
  font-family: 'Montserrat', sans-serif;
  font-weight: 700;
}
.btn:hover, .btn:focus {
  color: #fff;
  outline: 0;
}

.first {
  transition: box-shadow 300ms ease-in-out, color 300ms ease-in-out;
}
.first:hover {
  box-shadow: 0 0 40px 40px #383d41 inset;
}
</style>

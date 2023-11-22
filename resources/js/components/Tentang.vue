<template>
    <div class="content-header">
        <div class="container">
            <div class="row mb-2 justify-content-md-center">
                <div class="col-sm-5">
                    <h1 class="m-0"> Tentang <strong>E Agenda Pimpinan</strong></h1>
                </div>
                <div class="col-sm-5">
                    <ol class="breadcrumb float-sm-right">
                        <li class="breadcrumb-item"><a href="#">E Agenda Pimpinan</a></li>
                        <li class="breadcrumb-item"><a href="#">Tentang</a></li>
                        <li class="breadcrumb-item active">Index</li>
                    </ol>
                </div>
            </div>
        </div>
    </div>

    <div class="content">
        <div class="container">
            <div class="row justify-content-md-center">

                <div class="col-lg-10">
                    <div class="card">
                        <div class="card-header">
                            <h4 class="card-title m-0">Tentang E-Agenda </h4>
                        </div>

                        <div class="card-body">
                            <div class="row">

                                <h5>
                                    <p>
                                        Di era teknologi informasi saat ini, inovasi-inovasi baru terus dikembangkan untuk
                                        mempermudah suatu sistem. Dari sistem secara manual, dengan memanfaatkan kemajuan
                                        teknologi dikembangkan menjadi suatu aplikasi berbasis elektronik. Salah satunya
                                        dalam menyusun jadwal harian kepala daerah, maka dibuat suatu aplikasi untuk
                                        mempermudah penyusunannya.
                                    </p>

                                    <p>
                                        Dalam rangka pelaksanaan kebijakan Pemerintah yang tertuang
                                        dalam Peraturan Presiden nomor 95 tahun 2018, tentang Sistem
                                        Pemerintahan Berbasis Elektronik (SPBE), Kantor Kementerian Agama Kab. Pesisir
                                        Selatan selaku Unit Kementerian Agama melakukan implementasi/penerapan sistem agenda
                                        digital. Aplikasi yang dikembangkan oleh Tim IT dan Pranata Komputer diberi nama
                                        “e-Agenda”. Aplikasi ini adalah agenda kegiatan Kemenag yang juga
                                        diintegrasikan ke dalam website resmi Kementerian Agama Kab. Pessel.
                                        Penerapan aplikasi e-Agenda ini diharapkan dapat memudahkan
                                        akses infromasi kegiatan yang akan dilakukan Kementerian Agama Kab. Pesisir Selatan
                                        baik untuk pihak internal maupun eksternal (masyarakat maupun perangkat
                                        daerah lain).
                                    </p>

                                    <p>
                                        Penerapan aplikasi e-Agenda ini diharapkan dapat memudahkan
                                        akses infromasi kegiatan yang akan dilakukan Kementerian Agama Kab. Pesisir Selatan
                                        baik untuk pihak internal maupun eksternal (masyarakat maupun perangkat
                                        daerah lain).
                                    </p>

                                    <p>
                                        Buku Tamu Digital merupakan salah satu proses untuk mencatat data pengunjung yang
                                        telah
                                        mengunjungi Kantor Kementerian Agama Kab. Pesisir Selatan (KEMENAGPESSEL)
                                        yang berguna untuk mencatat siapa saja dengan keperluan apa saja sehingga mereka
                                        datang ke KEMENAGPESSEL.
                                    </p>
                                </h5>

                            </div>
                        </div>
                    </div>
                </div>


            </div>

        </div>
    </div>
</template>
  
<script>
import GuestService from '../services/guest.service';
import Form from 'vform';
import Swal from 'sweetalert2';
import {
    HasError,
    AlertError,
} from 'vform/src/components/bootstrap5';

export default {
    name: "Tentang",
    components: {
        'has-error': HasError,
        'alert-error': AlertError
    },
    data() {
        return {
            loading: false,
            disabled: false,
            editModal: false,
            form: new Form({
                id: "",
                name: "",
                gender: "",
                no_hp: "",
                email: "",
                address: "",
                organisasi: "",
                jabatan: "",
                keperluan: "",
                tujuan: "",
            }),
        };
    },
    methods: {
        logOut() {
            this.$store.dispatch('auth/logout');
            this.$router.push('/login');
        },
        submitAnother() {
            return this.$router.push({ name: "Landing" });
            this.$router.push('/landing');
        },
    },
    created() {
        this.$Progress.start();
    },
    mounted() {
        this.$Progress.finish();
    },
};
</script>
  
<style scoped>
.content-wrapper {
    margin-left: 0 !important;
}

.main-footer {
    margin-left: 0 !important;
}

.main-header {
    margin-left: 0 !important;
}

.main-header {
    --bs-navbar-padding-x: 1rem !important;
}
</style>
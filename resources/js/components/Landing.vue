<template>
    <!-- <div class="content-header">
        <div class="container">
            <div class="row mb-2 justify-content-md-center">
                <div class="col-sm-5">
                    <h1 class="m-0"> Silahkan isi <strong>Buku Tamu</strong></h1>
                </div>
                <div class="col-sm-5">
                    <ol class="breadcrumb float-sm-right">
                        <li class="breadcrumb-item"><a href="#">Buku Tamu</a></li>
                        <li class="breadcrumb-item"><a href="#">Formulir</a></li>
                        <li class="breadcrumb-item active">Isi Formulir</li>
                    </ol>
                </div>
            </div>
        </div>
    </div> -->

    <div class="content">



        <div class="container">
            <div class="jumbotron jumbotron-fluid new-font">
                <div class="mx-5">
                    <h1 class="display-4">SI-APDI KEMENAG</h1>
                    <h2>
                        Sistem Informasi Agenda Pimpinan Digital
                        <h3>Kementerian Agama Kabupaten Pesisir Selatan</h3>
                    </h2>
                    <p class="lead">
                        <router-link to="tentang" class="btn btn-primary btn-lg btn-sm" role="button">Pelajari Lebih Lanjut</router-link>
                    </p>
                </div>
            </div>



            <div class="row justify-content-md-center">

                <div class="col-lg-12">

                    <div class="text-center new-font">
                        <h1>{{ timestamp }}</h1>
                        <h2>
                            Agenda Pimpinan KanKemenag Kabupaten Pesisir Selatan
                        </h2>
                        <hr style="width:20%; margin:0 auto; height:5px;" class="my-3" />
                        <h4>
                            Agenda Pimpinan Kepala Kantor Kementerian Agama Kab. Pesisir Selatan
                        </h4>
                    </div>
                </div>

            </div>


            <div class="row justify-content-md-center">
                <div class="col-lg-6">
                    <div class="card bg-light d-flex flex-fill">
                        <div class="card-header text-muted border-bottom-0 header-custom new-font">
                            Pimpinan Kementerian Agama Kab. Pesisir Selatan
                        </div>
                        <div class="card-body pt-0 new-font">
                            <div class="row">
                                <div class="col-8">
                                    <h5 class="lead">
                                        <b v-if="director">{{ director.name }}</b>
                                        <p v-if="director" class="text-muted text-sm mb-2" style="font-size:small">
                                            <b>Jabatan:
                                            </b>
                                            {{ director.jabatan }} </p>
                                    </h5>
                                    <p class="m-0 p-0">
                                        <b>Kantor Kementerian Agama Kabupaten Pesisir Selatan</b>
                                    </p>

                                    <small class="text-muted">Alamat: Jalan Imam Bonjol Nomor 1, IV Jurai, Painan, Sumatera
                                        Barat, 25651 | Kontak : (0756) 21305 - 21405</small>

                                    <p class="mt-2 m-0 p-0">
                                        <b>Jumlah Agenda</b>
                                    </p>
                                    <table class="table table-borderless table-responsive table-sm text-muted"
                                        style="font-size: small;">
                                        <tr>
                                            <td>Hari ini &nbsp;&nbsp;&nbsp;&nbsp;</td>
                                            <td>:&nbsp;&nbsp;&nbsp;&nbsp;</td>
                                            <td v-if="c_agenda">{{ c_agenda.today }}</td>
                                        </tr>
                                        <tr>
                                            <td>Besok</td>
                                            <td>:</td>
                                            <td v-if="c_agenda">{{ c_agenda.tomorrow }}</td>
                                        </tr>
                                    </table>
                                    <!-- <ul class="ml-4 mb-0 fa-ul text-muted">
                                        <li class="small"><span class="fa-li"><i class="fas fa-lg fa-building"></i></span>
                                            Hari ini: 0</li>
                                        <li class="small"><span class="fa-li"><i class="fas fa-lg fa-phone"></i></span>
                                            Besok: 0</li>
                                    </ul> -->
                                </div>
                                <div class="col-4 text-center">
                                    <img v-if="director" :src="director.profile_photo_url" alt="user-avatar"
                                        class="img-circle img-fluid" width="150">
                                </div>
                            </div>
                        </div>
                        <div class="card-footer">
                            <div class="text-right">
                                <!-- <a href="#" class="btn btn-sm btn-primary text-white" style="color:white!important">
                                    <i class="fas fa-calendar-alt"></i> Cek Agenda Disini
                                </a> -->

                                <router-link to="agenda" class="btn btn-sm btn-primary text-white" style="color:white!important" role="button">
                                    <i class="fas fa-calendar-alt"></i> Cek Agenda Disini
                                </router-link>
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
import UserService from '../services/user.service';
import Form from 'vform';
import Swal from 'sweetalert2';
import {
    HasError,
    AlertError,
} from 'vform/src/components/bootstrap5';

export default {
    name: "Landing",
    computed: {
        currentUser() {
            return this.$store.state.auth.user;
        }
    },
    components: {
        'has-error': HasError,
        'alert-error': AlertError
    },
    data() {
        return {
            timestamp: "",
            loading: false,
            disabled: false,
            editModal: false,
            director: null,
            c_agenda: null,
            weekday: ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"],
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
        getNow() {
            const today = new Date();
            const date = today.getFullYear() + '-' + ('0' + (today.getMonth() + 1)).slice(-2) + '-' + ('0' + today.getDate()).slice(-2);
            const time = ('0' + (today.getHours() + 1)).slice(-2) + ":" + ('0' + (today.getMinutes() + 1)).slice(-2) + ":" + ('0' + (today.getSeconds() + 1)).slice(-2);
            const day_name = this.weekday[today.getDay()]
            const dateTime = day_name + ', ' + date + ' ' + time;
            this.timestamp = dateTime;
        },
        logOut() {
            this.$store.dispatch('auth/logout');
            this.$router.push('/login');
        },
        loadDirector() {
            UserService.getDirector().then(
                (response) => {
                    console.log('response director');
                    console.log(response);
                    this.director = response.data.director;
                    this.c_agenda = response.data.c_agenda;
                },
                (error) => {
                    alert(error);
                }
            );
        },
        saveData() {
            this.$Progress.start();
            this.loading = true;
            this.disabled = true;

            console.log('this.form');
            console.log(this.form);

            console.log('this.form.name');
            console.log(this.form.name);



            GuestService.store(this.form).then(
                (response) => {
                    console.log('response');
                    console.log(response);
                    let data = response.data;

                    if (data.code == 200) {

                        Toast.fire({
                            icon: "success",
                            title: "Data saved successfully",
                        });

                        let timerInterval
                        Swal.fire({
                            title: 'Berhasil!',
                            icon: 'success',
                            text: 'Data Anda berhasil tersimpan!',
                            html: 'Data Anda berhasil tersimpan! <br> Modal akan ditutup dalam waktu <b></b> milliseconds.',
                            timer: 2000,
                            timerProgressBar: true,
                            didOpen: () => {
                                Swal.showLoading()
                                const b = Swal.getHtmlContainer().querySelector('b')
                                timerInterval = setInterval(() => {
                                    b.textContent = Swal.getTimerLeft()
                                }, 100)
                            },
                            willClose: () => {
                                clearInterval(timerInterval)
                            }
                        }).then((result) => {
                            /* Read more about handling dismissals below */
                            if (result.dismiss === Swal.DismissReason.timer) {
                                console.log('I was closed by the timer');
                                this.$router.push('/thanks');
                            }
                        })

                        this.loading = false;
                        this.disabled = false;
                        this.$Progress.finish();
                    } else {
                        Swal.fire(
                            "Failed",
                            data.message,
                            "warning"
                        );
                    }
                },
                (error) => {
                    console.log('error local');
                    console.log(error);
                    console.log('error local message');
                    console.log(error.message);
                    this.loading = false;
                    this.disabled = false;
                    this.$Progress.fail();
                    // Swal.fire(
                    //     "Failed",
                    //     'Mohon untuk mengisi kolom yang kosong',
                    //     "warning"
                    // );

                    Swal.fire(
                        "Failed",
                        error.message,
                        "warning"
                    );
                }
            );
        },
    },
    created() {
        this.$Progress.start();
        setInterval(this.getNow, 1000);
        this.loadDirector();
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

.jumbotron {
    background-image: url(/img/landing_long1.png);
    background-size: cover;
    height: 100%;
}

.header-custom {
    background-color: transparent !important;
}

.table-borderless>tbody>tr>td,
.table-borderless>tbody>tr>th,
.table-borderless>tfoot>tr>td,
.table-borderless>tfoot>tr>th,
.table-borderless>thead>tr>td,
.table-borderless>thead>tr>th {
    border: none;
}

.table-sm> :not(caption)>*>* {
    padding: 0 !important;
}

.table-sm th, .table-sm td {
    padding: 0 !important;
}

.new-font {
    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif !important;
}
</style>
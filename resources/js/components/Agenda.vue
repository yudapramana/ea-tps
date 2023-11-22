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
                        <router-link to="kontak" class="btn btn-primary btn-lg btn-sm" role="button">Pelajari Lebih
                            Lanjut</router-link>
                    </p>
                </div>
            </div>



            <div class="row justify-content-md-center">

                <div class="col-lg-12">

                    <div class="text-center new-font">
                        <h2>
                            Agenda Pimpinan KanKemenag Kabupaten Pesisir Selatan
                        </h2>
                    </div>
                </div>

            </div>


            <div class="row justify-content-md-center mt-3">

                <div class="col-lg-6">
                    <h3>AGENDA HARI INI</h3>
                    <div class="card card-primary card-outline">
                        <div class="justify-content-center text-center p-2 m-2" v-if="schedule_today.length == 0">
                            <h3> .:: Belum Ada Agenda ::. </h3>
                        </div>
                        <div class="card-body pad table-responsive" v-for="(item, i) in schedule_today" :key="i">

                            <div class="card-body m-0 p-0">
                                <div class="row">
                                    <div class="col-12 d-flex align-items-stretch flex-column">


                                        <div class="card card-primary">
                                            <div class="card-header">
                                                <h3 class="card-title m-0">{{ item.title }} </h3>
                                            </div>
                                            <div class="card-body">
                                                <div class="row">
                                                    <label for="inputText" class="col-sm-3 col-form-label">Nama
                                                        Agenda </label>
                                                    <div class="col-sm-9">
                                                        <input type="text" class="form-control form-control-sm" id="title"
                                                            name="title" :value="item.title" disabled />
                                                    </div>
                                                </div>

                                                <div class="row">
                                                    <label for="inputText" class="col-sm-3 col-form-label">Deskripsi
                                                        Kegiatan</label>
                                                    <div class="col-sm-9">
                                                        <textarea class="form-control form-control-sm mb-2" rows="2"
                                                            placeholder="Deskripsi" id="description" name="description"
                                                            :value="item.description" disabled>
                                                                            </textarea>
                                                    </div>
                                                </div>

                                                <div class="row">
                                                    <label for="inputText" class="col-sm-3 col-form-label">Tanggal</label>
                                                    <div class="col-sm-9">
                                                        <div class="row m-0 p-0">
                                                            <div class="col-sm-12 m-0 p-0 mb-2">
                                                                <input v-if="item.start_date != item.end_date"
                                                                    class="form-control form-control-sm"
                                                                    placeholder="Deskripsi" id="date" name="date"
                                                                    :value="item.start_date + ' s/d ' + item.end_date"
                                                                    disabled />
                                                                <input v-if="item.start_date == item.end_date"
                                                                    class="form-control form-control-sm"
                                                                    placeholder="Deskripsi" id="date" name="date"
                                                                    :value="item.start_date" disabled />

                                                            </div>

                                                        </div>
                                                    </div>

                                                </div>

                                                <div class="row">
                                                    <label for="inputText" class="col-sm-3 col-form-label">Jam</label>
                                                    <div class="col-sm-9">
                                                        <div class="row m-0 p-0">
                                                            <div class="col-sm-12 m-0 p-0 mb-2">
                                                                <input class="form-control form-control-sm"
                                                                    placeholder="Deskripsi" id="date" name="date"
                                                                    :value="item.start_time + '  -  ' + item.end_time"
                                                                    disabled />

                                                            </div>

                                                        </div>
                                                    </div>

                                                </div>

                                                <div class="row">
                                                    <label for="inputText" class="col-sm-3 col-form-label">Lokasi</label>
                                                    <div class="col-sm-9">
                                                        <div class="row">
                                                            <div class="col-sm-12">
                                                                <textarea class="form-control form-control-sm mb-2" rows="2"
                                                                    placeholder="Deskripsi" id="description" name="location"
                                                                    :value="item.location + ', ' + item.province + ', ' + item.city"
                                                                    disabled>
                                                                            </textarea>

                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div class="row">
                                                    <label for="inputText"
                                                        class="col-sm-3 col-form-label">Pengundang</label>
                                                    <div class="col-sm-9">
                                                        <input type="text" class="form-control form-control-sm" id="inviter"
                                                            name="inviter" :value="item.inviter" placeholder="Pengundang"
                                                            disabled />
                                                        <has-error :form="form" field="inviter"></has-error>
                                                    </div>
                                                </div>

                                                <div class="row">
                                                    <label for="inputText" class="col-sm-3 col-form-label">Dihadiri
                                                        oleh</label>
                                                    <div class="col-sm-9">
                                                        <input type="text" class="form-control form-control-sm"
                                                            id="attended_by" name="attended_by" :value="item.attended_by"
                                                            placeholder="Diharidi oleh" disabled />
                                                        <has-error :form="form" field="attended_by"></has-error>
                                                    </div>
                                                </div>

                                                <div class="row">
                                                    <label for="inputText" class="col-sm-3 col-form-label">Didampingi
                                                        oleh</label>
                                                    <div class="col-sm-9">
                                                        <input type="text" class="form-control form-control-sm"
                                                            id="companion" name="companion" :value="item.companion"
                                                            placeholder="Didampingi oleh" disabled />
                                                        <has-error :form="form" field="companion"></has-error>
                                                    </div>
                                                </div>

                                                <div class="row">
                                                    <label for="inputText" class="col-sm-3 col-form-label">Penanggung
                                                        Jawab</label>
                                                    <div class="col-sm-9">
                                                        <input type="text" class="form-control form-control-sm"
                                                            id="responsibler" name="responsibler" :value="item.responsibler"
                                                            placeholder="Penanggung Jawab" disabled />
                                                        <has-error :form="form" field="responsibler"></has-error>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>


                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>

                </div>

                <div class="col-lg-6">
                    <h3>AGENDA BESOK</h3>
                    <div class="card card-primary card-outline">

                        <div class="justify-content-center text-center p-2 m-2" v-if="schedule_tomorrow.length == 0">
                            <h3> .:: Belum Ada Agenda ::. </h3>
                        </div>

                        <div class="card-body pad table-responsive" v-for="(item, i) in schedule_tomorrow" :key="i">

                            <div class="card-body m-0 p-0">
                                <div class="row">
                                    <div class="col-12 d-flex align-items-stretch flex-column">


                                        <div class="card card-primary">
                                            <div class="card-header">
                                                <h3 class="card-title m-0">{{ item.title }} </h3>
                                            </div>
                                            <div class="card-body">
                                                <div class="row">
                                                    <label for="inputText" class="col-sm-3 col-form-label">Nama
                                                        Agenda </label>
                                                    <div class="col-sm-9">
                                                        <input type="text" class="form-control form-control-sm" id="title"
                                                            name="title" :value="item.title" disabled />
                                                    </div>
                                                </div>

                                                <div class="row">
                                                    <label for="inputText" class="col-sm-3 col-form-label">Deskripsi
                                                        Kegiatan</label>
                                                    <div class="col-sm-9">
                                                        <textarea class="form-control form-control-sm mb-2" rows="2"
                                                            placeholder="Deskripsi" id="description" name="description"
                                                            :value="item.description" disabled>
                                                </textarea>
                                                    </div>
                                                </div>

                                                <div class="row">
                                                    <label for="inputText" class="col-sm-3 col-form-label">Tanggal</label>
                                                    <div class="col-sm-9">
                                                        <div class="row m-0 p-0">
                                                            <div class="col-sm-12 m-0 p-0 mb-2">
                                                                <input v-if="item.start_date != item.end_date"
                                                                    class="form-control form-control-sm"
                                                                    placeholder="Deskripsi" id="date" name="date"
                                                                    :value="item.start_date + ' s/d ' + item.end_date"
                                                                    disabled />
                                                                <input v-if="item.start_date == item.end_date"
                                                                    class="form-control form-control-sm"
                                                                    placeholder="Deskripsi" id="date" name="date"
                                                                    :value="item.start_date" disabled />

                                                            </div>

                                                        </div>
                                                    </div>

                                                </div>

                                                <div class="row">
                                                    <label for="inputText" class="col-sm-3 col-form-label">Jam</label>
                                                    <div class="col-sm-9">
                                                        <div class="row m-0 p-0">
                                                            <div class="col-sm-12 m-0 p-0 mb-2">
                                                                <input class="form-control form-control-sm"
                                                                    placeholder="Deskripsi" id="date" name="date"
                                                                    :value="item.start_time + '  -  ' + item.end_time"
                                                                    disabled />

                                                            </div>

                                                        </div>
                                                    </div>

                                                </div>

                                                <div class="row">
                                                    <label for="inputText" class="col-sm-3 col-form-label">Lokasi</label>
                                                    <div class="col-sm-9">
                                                        <div class="row">
                                                            <div class="col-sm-12">
                                                                <textarea class="form-control form-control-sm mb-2" rows="2"
                                                                    placeholder="Deskripsi" id="description" name="location"
                                                                    :value="item.location + ', ' + item.province + ', ' + item.city"
                                                                    disabled>
                                                </textarea>

                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div class="row">
                                                    <label for="inputText"
                                                        class="col-sm-3 col-form-label">Pengundang</label>
                                                    <div class="col-sm-9">
                                                        <input type="text" class="form-control form-control-sm" id="inviter"
                                                            name="inviter" :value="item.inviter" placeholder="Pengundang"
                                                            disabled />
                                                        <has-error :form="form" field="inviter"></has-error>
                                                    </div>
                                                </div>

                                                <div class="row">
                                                    <label for="inputText" class="col-sm-3 col-form-label">Dihadiri
                                                        oleh</label>
                                                    <div class="col-sm-9">
                                                        <input type="text" class="form-control form-control-sm"
                                                            id="attended_by" name="attended_by" :value="item.attended_by"
                                                            placeholder="Diharidi oleh" disabled />
                                                        <has-error :form="form" field="attended_by"></has-error>
                                                    </div>
                                                </div>

                                                <div class="row">
                                                    <label for="inputText" class="col-sm-3 col-form-label">Didampingi
                                                        oleh</label>
                                                    <div class="col-sm-9">
                                                        <input type="text" class="form-control form-control-sm"
                                                            id="companion" name="companion" :value="item.companion"
                                                            placeholder="Didampingi oleh" disabled />
                                                        <has-error :form="form" field="companion"></has-error>
                                                    </div>
                                                </div>

                                                <div class="row">
                                                    <label for="inputText" class="col-sm-3 col-form-label">Penanggung
                                                        Jawab</label>
                                                    <div class="col-sm-9">
                                                        <input type="text" class="form-control form-control-sm"
                                                            id="responsibler" name="responsibler" :value="item.responsibler"
                                                            placeholder="Penanggung Jawab" disabled />
                                                        <has-error :form="form" field="responsibler"></has-error>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>


                                    </div>
                                </div>
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
import ScheduleService from '../services/schedule.service';
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
            schedule_today: [],
            schedule_tomorrow: [],
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
        loadSchedule() {
            ScheduleService.getTodayTomorrow().then(
                (response) => {
                    console.log('response director');
                    console.log(response);
                    // this.schedules = response.data;
                    this.schedule_today = response.data.today;
                    this.schedule_tomorrow = response.data.tomorrow;
                },
                (error) => {
                    alert(error);
                }
            );
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
        this.loadSchedule();
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

.table-sm th,
.table-sm td {
    padding: 0 !important;
}

.new-font {
    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif !important;
}

.col-form-label {
    font-size: smaller !important;
}
</style>
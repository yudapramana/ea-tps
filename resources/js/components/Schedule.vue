<template>
    <div class="content-wrapper">
        <section class="content-header">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-sm-6">
                        <h1>Data Agenda / Jadwal</h1>
                    </div>
                    <div class="col-sm-6 d-none d-sm-block">
                        <ol class="breadcrumb float-sm-right">
                            <li class="breadcrumb-item"><a href="#">Home</a></li>
                            <li class="breadcrumb-item active">Data Agenda</li>
                        </ol>
                    </div>
                </div>
            </div>
        </section>
        <div class="content">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-md-12">
                        <div class="card">
                            <div class="card-header">
                                <h3 class="card-title">Data Kegiatan / Agenda</h3>
                                <div class="card-tools">
                                    <button type="button" class="btn btn-success" @click="showModal()">
                                        Tambah Kegiatan
                                    </button>
                                </div>
                            </div>

                            <div class="card-body">
                                <div class="form-group">
                                    <div class="table-responsive">
                                        <table class="table">
                                            <thead>
                                                <tr>
                                                    <th class="text-center">No</th>
                                                    <th class="text-center">Agenda</th>
                                                    <th class="text-center">Jadwal</th>
                                                    <th class="text-center">Lokasi</th>
                                                    <th class="text-center">Dihadiri oleh</th>
                                                    <th class="text-center">PenanggungJawab</th>
                                                    <th class="text-center">Pendamping</th>
                                                    <th class="text-center">Pengundang</th>
                                                    <th class="text-center" width="7%">Aksi</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr v-for="(item, i) in schedules" :key="item.id">
                                                    <td>
                                                        <b>{{ i + 1 }}</b>
                                                    </td>
                                                    <td>
                                                        <b>{{ item.title }}</b>
                                                    </td>
                                                    <td class="text-center">
                                                        <span class="badge badge-primary"
                                                            v-if="item.start_date == item.end_date">
                                                            <b> {{ item.start_date }} </b>
                                                        </span>
                                                        <span class="badge badge-primary"
                                                            v-if="item.start_date != item.end_date">
                                                            <b> {{ item.start_date }} s/d {{ item.end_date }} </b>
                                                        </span>
                                                        <br>
                                                        <span class="badge badge-info">
                                                            {{ item.start_time }} - {{ item.end_time ? item.end_time :
                                                                'selesai' }}
                                                        </span>
                                                    </td>
                                                    <td>
                                                        {{ item.location }}, {{ item.province }}, {{ item.city }}
                                                    </td>
                                                    <td>
                                                        {{ item.attended_by }}
                                                    </td>
                                                    <td>
                                                        <small class="text-muted ">{{ item.responsibler
                                                        }}</small>
                                                    </td>
                                                    <td>
                                                        <small class="text-muted ">{{ item.companion
                                                        }}</small>
                                                    </td>
                                                    <td>
                                                        <small class="text-muted ">{{ item.inviter
                                                        }}</small>
                                                    </td>
                                                    <td class="text-center">
                                                        <a href="#" @click="showModalEdit(item)">
                                                            <i class="fas fa-edit blue"></i>
                                                        </a>
                                                        |
                                                        <a href="#" @click="deleteData(item.id_schedule)">
                                                            <i class="fas fa-trash-alt red"></i>
                                                        </a>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    </div>

    <!-- Modal -->
    <div class="modal fade" id="fModal" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
        aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div class="modal-dialog modal-xl modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="staticBackdropLabel" v-show="!editModal">
                        Tambah Data Agenda
                    </h5>

                    <h5 class="modal-title" id="staticBackdropLabel" v-show="editModal">
                        Ubah Data Agenda
                    </h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <form @submit.prevent="editModal ? updateData() : saveData()">
                    <div class="modal-body">
                        <div class="row card-body">
                            <div class="col-12">
                                <input type="hidden" name="id_schedule" id="id_schedule" v-model="form.id_schedule" />


                                <div class="row mb-3">
                                    <label for="inputText" class="col-sm-3 col-form-label">Judul Kegiatan</label>
                                    <div class="col-sm-9">
                                        <input type="text" class="form-control" id="title" name="title" v-model="form.title"
                                            placeholder="Nama Kegiatan" :class="{
                                                'is-invalid':
                                                    form.errors.has('title'),
                                            }" />
                                        <has-error :form="form" field="title"></has-error>
                                    </div>
                                </div>

                                <div class="row mb-3">
                                    <label for="inputText" class="col-sm-3 col-form-label">Deskripsi Kegiatan</label>
                                    <div class="col-sm-9">
                                        <div class="form-group">

                                            <textarea class="form-control" rows="3" placeholder="Deskripsi"
                                                v-model="form.description" id="description" name="description" :class="{
                                                    'is-invalid':
                                                        form.errors.has('description'),
                                                }" ></textarea>
                                            <has-error :form="form" field="description"></has-error>

                                        </div>
                                    </div>
                                </div>

                                <div class="row mb-3">
                                    <label for="inputText" class="col-sm-3 col-form-label">Lokasi</label>
                                    <div class="col-sm-9">
                                        <div class="row">
                                            <div class="col-sm-12 mb-3">
                                                <input type="text" class="form-control" id="location" name="location"
                                                    v-model="form.location" placeholder="Lokasi Kegiatan" :class="{
                                                        'is-invalid':
                                                            form.errors.has(
                                                                'location'
                                                            ),
                                                    }" />
                                                <has-error :form="form" field="location"></has-error>
                                            </div>
                                            <div class="col-sm-5">
                                                <input type="text" class="form-control" id="province" name="province"
                                                    v-model="form.province" placeholder="Provinsi" :class="{
                                                        'is-invalid':
                                                            form.errors.has(
                                                                'province'
                                                            ),
                                                    }" />
                                                <has-error :form="form" field="province"></has-error>
                                            </div>
                                            <div class="col-sm-4">
                                                <input type="text" class="form-control" id="city" name="city"
                                                    v-model="form.city" placeholder="Kota" :class="{
                                                        'is-invalid':
                                                            form.errors.has(
                                                                'city'
                                                            ),
                                                    }" />
                                                <has-error :form="form" field="city"></has-error>
                                            </div>
                                        </div>
                                    </div>

                                </div>


                                <div class="row mb-3">
                                    <label for="inputText" class="col-sm-3 col-form-label">Tanggal</label>
                                    <div class="col-sm-4">
                                        <label>Tanggal Mulai</label>
                                        <date-picker v-model="form.start_date" :enable-time-picker="false" auto-apply
                                            placeholder="Tanggal Mulai" />
                                        <has-error :form="form" field="start_date"></has-error>
                                    </div>
                                    <div class="col-sm-4">
                                        <label>Tanggal Selesai</label>
                                        <date-picker v-model="form.end_date" :enable-time-picker="false" auto-apply
                                            placeholder="Tanggal Selesai" />
                                        <has-error :form="form" field="end_date"></has-error>
                                    </div>
                                </div>

                                <div class="row mb-3">
                                    <label for="inputText" class="col-sm-3 col-form-label">Jam</label>
                                    <div class="col-sm-4">
                                        <label>Tanggal Mulai</label>
                                        <date-picker v-model="form.start_time" time-picker placeholder="Jam Mulai" />
                                        <has-error :form="form" field="start_time"></has-error>
                                    </div>
                                    <div class="col-sm-4">
                                        <label>Tanggal Selesai</label>
                                        <date-picker v-model="form.end_time" time-picker placeholder="Jam Selesai" />
                                        <has-error :form="form" field="end_time"></has-error>
                                    </div>
                                </div>


                                <div class="row mb-3">
                                    <label for="inputText" class="col-sm-3 col-form-label">Pengundang</label>
                                    <div class="col-sm-9">
                                        <input type="text" class="form-control" id="inviter" name="inviter"
                                            v-model="form.inviter" placeholder="Pengundang" :class="{
                                                'is-invalid':
                                                    form.errors.has(
                                                        'inviter'
                                                    ),
                                            }" />
                                        <has-error :form="form" field="inviter"></has-error>
                                    </div>
                                </div>

                                <div class="row mb-3">
                                    <label for="inputText" class="col-sm-3 col-form-label">Dihadiri oleh</label>
                                    <div class="col-sm-9">
                                        <input type="text" class="form-control" id="attended_by" name="attended_by"
                                            v-model="form.attended_by" placeholder="Diharidi oleh" :class="{
                                                'is-invalid':
                                                    form.errors.has(
                                                        'attended_by'
                                                    ),
                                            }" />
                                        <has-error :form="form" field="attended_by"></has-error>
                                    </div>
                                </div>

                                <div class="row mb-3">
                                    <label for="inputText" class="col-sm-3 col-form-label">Didampingi oleh</label>
                                    <div class="col-sm-9">
                                        <input type="text" class="form-control" id="companion" name="companion"
                                            v-model="form.companion" placeholder="Didampingi oleh" :class="{
                                                'is-invalid':
                                                    form.errors.has(
                                                        'companion'
                                                    ),
                                            }" />
                                        <has-error :form="form" field="companion"></has-error>
                                    </div>
                                </div>

                                <div class="row mb-3">
                                    <label for="inputText" class="col-sm-3 col-form-label">Penanggung Jawab</label>
                                    <div class="col-sm-9">
                                        <input type="text" class="form-control" id="responsibler" name="responsibler"
                                            v-model="form.responsibler" placeholder="Penanggung Jawab" :class="{
                                                'is-invalid':
                                                    form.errors.has(
                                                        'responsibler'
                                                    ),
                                            }" />
                                        <has-error :form="form" field="responsibler"></has-error>
                                    </div>
                                </div>


                            </div>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
                            Close
                        </button>
                        <button type="submit" class="btn btn-primary" :disabled="disabled" v-show="!editModal">
                            <i v-show="loading" class="fa fa-spinner fa-spin"></i>
                            Simpan
                        </button>

                        <button type="submit" class="btn btn-warning" :disabled="disabled" v-show="editModal">
                            <i v-show="loading" class="fa fa-spinner fa-spin"></i>
                            Ubah
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>


<script>
import { CldContext, CldImage } from 'cloudinary-vue';
import Form from 'vform';
import Swal from 'sweetalert2';
import {
    HasError,
    AlertError,
} from 'vform/src/components/bootstrap5';
import CloudinaryImage from '@teamnovu/vue-cloudinary-image';
import UserService from "../services/user.service";
import RoleService from "../services/role.service";
import ScheduleService from '../services/schedule.service';
import Datepicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css';
import { ref } from 'vue';



export default {
    name: 'Schedule',
    computed: {
        currentUser() {
            return this.$store.state.auth.user;
        },
    },
    data() {
        return {
            loggedIn: localStorage.getItem("loggedIn"),
            token: localStorage.getItem("token"),
            loading: false,
            disabled: false,
            editModal: false,
            levels: {},
            schedules: {},
            authenticatedUser: null,
            form: new Form({
                id_schedule: "",
                title: "",
                description: "",
                start_date: "",
                end_date: "",
                start_time: {
                    hours: 12,
                    minutes: 10,
                    seconds: 0
                },
                end_time: {
                    hours: 14,
                    minutes: 10,
                    seconds: 0
                },
                inviter: "",
                attended_by: "",
                companion: "",
                responsibler: "",
                location: "",
                province: "",
                city: "",
            }),
            cloudName: "kemenagpessel",
            preset: 'profile_picture_pegawai',
            url: null,
            public_id: '',
            myWidget: null,
            textInputOptions: ref({
                format: 'yyyy-MM-dd'
            })
        };
    },
    components: {
        'has-error': HasError,
        'alert-error': AlertError,
        'date-picker': Datepicker
    },
    methods: {
        reuploadPhoto() {
            this.form.profile_photo_id = '';
            this.form.profile_photo_url = '';
        },
        openUploadModal() {
            this.myWidget.open();
        },
        showModal() {
            this.editModal = false;
            this.form.reset();
            console.log("Show Modal");
            $("#fModal").modal("show");
        },
        showModalEdit(item) {
            this.editModal = true;
            console.log('item');
            console.log(item);
            console.log(item.start_time);
            console.log(item.start_date);
            $("#fModal").modal("show");


            // let resStart = item.start_time.split(':');
            // console.log('resStart');
            // console.log(resStart);
            // console.log('this.form.start_time');
            // console.log(this.form.start_time);


            // let sTime = {
            //     hours: resStart[0],
            //     minutes: resStart[1],
            //     seconds: 0
            // };

            // console.log('sTime');
            // console.log(sTime);

            // this.form.start_time = sTime;

            // console.log('resEnd');
            // console.log(resEnd);
            // let resEnd = item.end_time.split(':');
            // this.form.end_time.hours = parseInt(resEnd[0]);
            // this.form.end_time.minutes = parseInt(resEnd[1]);
            // this.form.end_time.seconds = 0;

            this.form.fill(item);
            let resStart = item.start_time.split(':');
            let nanoStart = {
                hours: parseInt(resStart[0]),
                minutes: parseInt(resStart[1]),
                seconds: 0
            };
            this.form.start_time = nanoStart;

            let resEnd = item.end_time.split(':');
            let nanoEnd = {
                hours: parseInt(resEnd[0]),
                minutes: parseInt(resEnd[1]),
                seconds: 0
            };
            this.form.end_time = nanoEnd;
        },
        loadSchedules() {
            ScheduleService.get().then(
                (response) => {
                    console.log('response')
                    console.log(response)
                    this.schedules = response.data;
                },
                (error) => {
                    alert(error);
                }
            );
        },
        loadRoles() {

            RoleService.getRoles().then(
                (response) => {
                    console.log('response')
                    console.log(response)
                    this.levels = response.data;
                },
                (error) => {
                    alert(error);
                }
            );
        },
        loadData() {
            this.$Progress.start();
            this.loadRoles();
            this.loadSchedules();
            this.$Progress.finish();
        },
        saveData() {
            this.$Progress.start();
            this.loading = true;
            this.disabled = true;

            ScheduleService.store(this.form).then(
                (response) => {
                    $("#fModal").modal("hide");
                    this.loadSchedules();
                    Toast.fire({
                        icon: "success",
                        title: "Data saved successfully",
                    });

                    this.loading = false;
                    this.disabled = false;
                    this.$Progress.finish();

                    console.log('response local');
                    console.log(response);
                },
                (error) => {
                    console.log('error local');
                    console.log(error);
                    console.log('error local message');
                    console.log(error.message);
                    this.loading = false;
                    this.disabled = false;
                    this.$Progress.fail();
                    Swal.fire(
                        "Failed",
                        error.message,
                        "warning"
                    );
                }
            );
        },
        updateData() {
            this.$Progress.start();
            console.log("tes ubah data");

            ScheduleService.update(this.form).then(
                (response) => {
                    $("#fModal").modal("hide");
                    this.loadSchedules();
                    Toast.fire({
                        icon: "success",
                        title: "Data saved successfully",
                    });

                    this.loading = false;
                    this.disabled = false;
                    this.$Progress.finish();
                },
                (error) => {
                    this.loading = false;
                    this.disabled = false;
                    this.$Progress.fail();
                }
            );
        },
        deleteData(id) {
            Swal.fire({
                title: "Anda Yakin ingin menghapus data ini ?",
                text: "Klik Batal untuk membatalkan penghapusan",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Hapus",
            }).then((result) => {
                if (result.value) {

                    ScheduleService.delete(id).then(
                        (response) => {
                            this.loadSchedules();

                            Swal.fire(
                                "Terhapus",
                                "Data Anda sudah terhapus",
                                "success"
                            );
                        },
                        (error) => {
                            Swal.fire(
                                "Gagal",
                                error.message,
                                "warning"
                            );
                        }
                    );


                    // this.form
                    //     .delete("api/user/" + id)
                    //     .then(() => {
                    //         this.loadSchedules();

                    //         Swal.fire(
                    //             "Terhapus",
                    //             "Data Anda sudah terhapus",
                    //             "success"
                    //         );
                    //     })
                    //     .catch(() => {
                    //         Swal.fire(
                    //             "Gagal",
                    //             "Data Gagal terhapus",
                    //             "warning"
                    //         );
                    //     });
                }
            });
        },
        processResults(error, result) {
            if (!error && result && result.event === "success") {
                console.log(result);
                this.url = result.info.url;
                this.public_id = result.info.public_id;
                this.form.profile_photo_url = result.info.url;
                this.form.profile_photo_id = result.info.public_id;
            }
        }
    },
    created() {
        if (!this.currentUser) {
            return this.$router.push({ name: "Login" });
        } else {
            this.loadData();
        }
    },
    mounted() {
        if (!this.currentUser) {
            this.$router.push('/login');
        } else {

            this.myWidget = window.cloudinary.createUploadWidget(
                { cloudName: this.cloudName, uploadPreset: this.preset },
                this.processResults
            );
        }
    },



};
</script>



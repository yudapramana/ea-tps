<template>
    <div class="content-header">
        <div class="container">
            <div class="row mb-2 justify-content-md-center">
                <div class="col-md-10">
                    <div class="row">
                        <div class="col-sm-6">
                            <h1 class="m-0"> Smart <strong> Calendar</strong></h1>
                        </div>
                        <div class="col-sm-6">
                            <ol class="breadcrumb float-sm-right">
                                <li class="breadcrumb-item"><a href="#">E-Agenda</a></li>
                                <li class="breadcrumb-item"><a href="#">Smart Calendar</a></li>
                                <li class="breadcrumb-item active">Index</li>
                            </ol>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="content">
        <div class="container">
            <div class="row justify-content-md-center">

                <div class="col-md-10">


                    <div class="row">

                        <div class="col-lg-3">

                            <div class="card card-primary card-outline">
                                <div class="card-header">
                                    <h4 class="m-0 p-0">Nama Pejabat</h4>
                                </div>
                                <div class="card-body">
                                    <ul>
                                        <li v-for="(item, i) in pejabat" :key="i">
                                            {{ item.name }} <br>
                                        </li>
                                    </ul>
                                </div>
                            </div>


                        </div>
                        <div class="col-lg-9">

                            <div class="card card-primary card-outline">
                                <div class="card-body">
                                    <FullCalendar :options="calendarOptions" :selectable="true" @select="handleSelect"
                                        @clickDate="handleDateClick" @eventClick="showEventDetail" />
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
                        Detail Agenda
                    </h5>

                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <form>
                    <div class="modal-body">
                        <div class="row card-body">
                            <div class="col-12">
                                <div class="card-body">
                                    <div class="row">
                                        <label for="inputText" class="col-sm-3 col-form-label">Nama
                                            Agenda </label>
                                        <div class="col-sm-9">
                                            <input type="text" class="form-control form-control-sm" id="title" name="title"
                                                v-model="form.title_props" disabled />
                                        </div>
                                    </div>

                                    <div class="row">
                                        <label for="inputText" class="col-sm-3 col-form-label">Deskripsi
                                            Kegiatan</label>
                                        <div class="col-sm-9">
                                            <textarea class="form-control form-control-sm mb-2" rows="2"
                                                placeholder="Deskripsi" id="description" name="description"
                                                v-model="form.description" disabled>
                                                        </textarea>
                                        </div>
                                    </div>

                                    <div class="row">
                                        <label for="inputText" class="col-sm-3 col-form-label">Tanggal</label>
                                        <div class="col-sm-9">
                                            <div class="row m-0 p-0">
                                                <div class="col-sm-12 m-0 p-0 mb-2">
                                                    <input
                                                        class="form-control form-control-sm" placeholder="Deskripsi"
                                                        id="date" name="date" :value="form.start_date" disabled />

                                                </div>

                                            </div>
                                        </div>

                                    </div>

                                    <div class="row">
                                        <label for="inputText" class="col-sm-3 col-form-label">Jam</label>
                                        <div class="col-sm-9">
                                            <div class="row m-0 p-0">
                                                <div class="col-sm-12 m-0 p-0 mb-2">
                                                    <input class="form-control form-control-sm" placeholder="Deskripsi"
                                                        id="time" name="time"
                                                        :value="form.start_time + '  -  ' + form.end_time" disabled />

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
                                                        placeholder="Deskripsi" name="location" id="location"
                                                        :value="form.location + ', ' + form.province + ', ' + form.city"
                                                        disabled>
                                                        </textarea>

                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="row">
                                        <label for="inputText" class="col-sm-3 col-form-label">Pengundang</label>
                                        <div class="col-sm-9">
                                            <input type="text" class="form-control form-control-sm" id="inviter"
                                                name="inviter" v-model="form.inviter" placeholder="Pengundang" disabled />
                                            <has-error :form="form" field="inviter"></has-error>
                                        </div>
                                    </div>

                                    <div class="row">
                                        <label for="inputText" class="col-sm-3 col-form-label">Dihadiri
                                            oleh</label>
                                        <div class="col-sm-9">
                                            <input type="text" class="form-control form-control-sm" id="attended_by"
                                                name="attended_by" :value="form.attended_by" placeholder="Diharidi oleh"
                                                disabled />
                                            <has-error :form="form" field="attended_by"></has-error>
                                        </div>
                                    </div>

                                    <div class="row">
                                        <label for="inputText" class="col-sm-3 col-form-label">Didampingi
                                            oleh</label>
                                        <div class="col-sm-9">
                                            <input type="text" class="form-control form-control-sm" id="companion"
                                                name="companion" :value="form.companion" placeholder="Didampingi oleh"
                                                disabled />
                                            <has-error :form="form" field="companion"></has-error>
                                        </div>
                                    </div>

                                    <div class="row">
                                        <label for="inputText" class="col-sm-3 col-form-label">Penanggung
                                            Jawab</label>
                                        <div class="col-sm-9">
                                            <input type="text" class="form-control form-control-sm" id="responsibler"
                                                name="responsibler" :value="form.responsibler"
                                                placeholder="Penanggung Jawab" disabled />
                                            <has-error :form="form" field="responsibler"></has-error>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
                            Close
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>
<script>
import FullCalendar from '@fullcalendar/vue3'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'
import ScheduleService from '../services/schedule.service'
import Form from 'vform';
export default {
    watch: {
    },
    components: {
        FullCalendar // make the <FullCalendar> tag available
    },
    data() {
        return {
            pejabat: [],
            form: new Form({
                id_schedule: "",
                title_props: "",
                description: "",
                start_date: "",
                end_date: "",
                start_time: "",
                end_time: "",
                inviter: "",
                attended_by: "",
                companion: "",
                responsibler: "",
                location: "",
                province: "",
                city: "",
            }),
            calendarOptions: {
                selectable: true,
                plugins: [
                    dayGridPlugin,
                    timeGridPlugin,
                    interactionPlugin // needed for dateClick
                ],
                // headerToolbar: {
                //     left: 'prev,next today',
                //     center: 'title',
                //     right: 'dayGridMonth,timeGridWeek,timeGridDay'
                // },
                initialView: 'dayGridMonth',
                events: [
                    { title: 'event 1', date: '2023-03-01' },
                    { title: 'event 2', date: '2023-03-02' },
                    { title: 'event 3', start: '2023-03-12', end: '2023-03-15' },
                ],
                eventClick: function (info) {
                    console.log(info.event);
                    console.log('info.event.extendedProps');
                    console.log(info.event.extendedProps);
                    console.log(info.event.extendedProps.attended_by);


                    let pesan = `Kegiatan : ${info.event.title} \n`;
                    pesan += `Deskripsi : ${info.event.extendedProps.description} \n`;
                    pesan += `Dihadiri oleh : ${info.event.extendedProps.attended_by} \n`;
                    pesan += `city : ${info.event.extendedProps.city} \n`;
                    pesan += `companion : ${info.event.extendedProps.companion} \n`;
                    pesan += `inviter : ${info.event.extendedProps.inviter} \n`;
                    pesan += `location : ${info.event.extendedProps.location} \n`;
                    pesan += `province : ${info.event.extendedProps.province} \n`;
                    pesan += `responsibler : ${info.event.extendedProps.responsibler} \n`;

                    $('#title').val(info.event.title);
                    $('#description').val(info.event.extendedProps.description);
                    $('#attended_by').val(info.event.extendedProps.attended_by);
                    $('#city').val(info.event.extendedProps.city);
                    $('#companion').val(info.event.extendedProps.companion);
                    $('#inviter').val(info.event.extendedProps.inviter);
                    $('#location').val(info.event.extendedProps.location + ',' + info.event.extendedProps.province + ', ' + info.event.extendedProps.city);
                    $('#responsibler').val(info.event.extendedProps.responsibler);
                    $('#date').val(info.event.extendedProps.start_date + '  s/d  ' + info.event.extendedProps.end_date);
                    $('#time').val(info.event.extendedProps.start_time + '  -  ' + info.event.extendedProps.end_time);

                    $("#fModal").modal("show");

                }
            }
        }
    },
    methods: {
        fillModal(formData) {
            this.form.fill(formData);
            console.log('this.form');
            console.log(this.form);
            $("#fModal").modal("show");
        },
        handleDateClick(e) {
            console.log(e);
        },
        handleSelect(e) {
            console.log(e);
        },
        showEventDetail(info) {
            console.log('showEventDetail');
            console.log(info);
        },
        eventClick(info) {
            console.log(info);
        },
        getSchedule() {
            ScheduleService.getOnMonth().then(
                (response) => {
                    console.log('response director');
                    console.log(response);
                    this.pejabat = response.data.pejabat;
                    this.calendarOptions.events = response.data.schedules;
                    this.$Progress.finish();
                },
                (error) => {
                    alert(error);
                }
            );
        }
    },
    mounted() {
        this.getSchedule();
    },
    created() {
        this.$Progress.start();
    },
}
</script>

<style scoped>
.myCalendar {
    cursor: pointer !important;
}

.fc-event {
    cursor: pointer !important;
}
</style>

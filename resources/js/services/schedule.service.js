import axios from 'axios';
import authHeader from './auth-header';
axios.defaults.withCredentials = true

class ScheduleService {
    get() {
        return axios
            .get('/api/schedule', { headers: authHeader() })
            .then((response) => {
                console.log('response getSchedule');
                console.log(response);
                return response
            });
    }

    store(form) {
        return form
            .post("api/schedule", { headers: authHeader() })
            .then((response) => {
                console.log('response storeSchedule');
                console.log(response);
                return response
            })
    }

    update(form) {
        return form
            .put("api/schedule/" + form.id_schedule, { headers: authHeader() })
            .then((response) => {
                console.log('response updateSchedule');
                console.log(response);
                return response
            })
    }

    delete(id) {
        return axios
            .delete("api/schedule/" + id, { headers: authHeader() })
            .then((response) => {
                console.log('response deleteSchedule');
                console.log(response);
                return response
            })
    }

    getTodayTomorrow() {
        return axios
            .get('/api/get/schedule/today_tomorrow', { headers: authHeader() })
            .then((response) => {
                console.log('response schedule/today_tomorrow');
                console.log(response);
                return response
            });
    }

    getOnMonth() {
        return axios
            .get('/api/get/schedule/currentmonth', { headers: authHeader() })
            .then((response) => {
                console.log('response schedule/today_tomorrow');
                console.log(response);
                return response
            });
    }

    find(id_schedule) {
        return axios
            .get('/api/find/schedule/' + id_schedule, { headers: authHeader() })
            .then((response) => {
                console.log('response schedule/today_tomorrow');
                console.log(response);
                return response
            });
    }
}

export default new ScheduleService();
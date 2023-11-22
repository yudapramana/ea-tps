import axios from 'axios';
import authHeader from './auth-header';
axios.defaults.withCredentials = true;



class UserRoleService {
    
    get() {
        return axios
            .get('/api/user-role', { headers: authHeader() })
            .then((response) => {
                console.log('response');
                console.log(response);
                return response
            });
    }

    store(form) {
        return form
            .post("api/user-role")
            .then((response) => {
                console.log('response storeRole');
                console.log(response);
                return response
            })
    }

    update(form) {
        return form
            .put("api/user-role/" + form.id)
            .then((response) => {
                console.log('response updateRole');
                console.log(response);
                return response
            })
    }

    delete(id) {
        return axios
            .delete("api/user-role/" + id)
            .then((response) => {
                console.log('response deleteRole');
                console.log(response);
                return response
            })
    }

    getPermission() {
        return axios
            .get('/api/get-permission', { headers: authHeader() })
            .then((response) => {
                console.log('response');
                console.log(response);
                return response
            });
    }
}

export default new UserRoleService();
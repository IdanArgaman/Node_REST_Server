import axios from 'axios';

export class User {
    getUsers() {
        return axios.get('http://localhost:5001/users').then(response => response.data);
    }
}
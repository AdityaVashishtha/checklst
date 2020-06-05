let url = 'http://localhost:3000/api/v1';
const axios = require("axios");

module.exports = {
    login: function (user) {
        return axios.post(url + '/auth', user);
    },
    getHeader: function () {
        let user = localStorage.getItem('user');
        if (user) {
            user = JSON.parse(user);
            return {
                Authorization: user.token
            }
        }
        return {};
    },
    logout: function () {
        localStorage.removeItem('theme');
        localStorage.removeItem('user');
    },
    isLoggedIn: function () {
        let user = localStorage.getItem('user');
        if (user) {
            user = JSON.parse(user);
            return user.username ? true : false;
        }
        return false;
    },
    getUsername: function () {
        let user = localStorage.getItem('user');
        if (user) {
            user = JSON.parse(user);
            return user.username;
        }
        return "Guest";
    }
}
let url = 'http://localhost:3000/api/v1';
const axios = require("axios");
let getHeader = require("./auth-service").getHeader;

module.exports = {
    getData: function () {
        let tasks = [{
                _id: 2155,
                name: 'Title of something',
                dueDate: '22 May 2020',
                status: 0,
                label: 'work'
            },
            {
                _id: 211515,
                name: 'Doing something here of something',
                dueDate: '25 May 2020',
                status: 1,
                label: 'personal'
            }, {
                _id: 255,
                name: 'Doing something here of something',
                dueDate: '25 May 2020',
                status: 0,
                label: 'personal'
            },
            {
                _id: 201155,
                name: 'Doing something here of something',
                dueDate: '25 May 2020',
                status: 1,
                label: 'others'
            }
        ];
        return tasks;
    },
    getTasks: function () {
        return axios.get(url + '/task', {
            headers: getHeader()
        });
    },
    addTasks: function (task) {
        return axios.post(url + '/task', task, {
            headers: getHeader()
        });
    },
    deleteTasks: function (_id) {
        return axios.delete(url + '/task/' + _id, {
            headers: getHeader()
        });
    },
    updateTasks: function (task) {
        return axios.put(url + '/task', task, {
            headers: getHeader()
        });
    }
}
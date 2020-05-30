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
        tasks.map(e => {
            // const formattedDate = moment('19 Oct 2017').format('YYYYMMDD');
            // console.log(formattedDate);

            return e;
        });
        return tasks;
    }
}
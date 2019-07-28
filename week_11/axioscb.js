var axios = require('axios');

var getData = function (url, doAfter) {
    axios.get(url)
    .then(function (resp) {
        doAfter(resp)
    })
    .catch(function (err) {
        console.log(err)
    })
}

getData(process.argv[2], function (data) {
    console.log(data.data)
})

// write the below into the terminal
// node axioscb https://jsonplaceholder.typicode.com/todos
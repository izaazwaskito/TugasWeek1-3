const axios = require('axios')
axios.get('https://jsonplaceholder.typicode.com/users')
.then(function (response) {
//   console.log(response)
    response.data.map((item) => {
        console.log(item.name);
    })
}).catch(function (error) {
    console.log(error);
})

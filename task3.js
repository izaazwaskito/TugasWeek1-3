// const axios = require('axios')
// axios.get('http://universities.hipolabs.com/search?country=United+States')
// .then(function (response) {
//     response.data.map((item) => {
//                 console.log(item.name);
//             })
// }).catch(function (error) {
//     console.log(error);
// })


const axios = require('axios')
axios.get('https://randomuser.me/api')
.then(function (response) {
    //    console.log(response.data.results)
       response.data.results.map((item) => {
        console.log(item.name);
    })
}).catch(function (error) {
    console.log(error);
})
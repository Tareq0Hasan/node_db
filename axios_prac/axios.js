const axios= require('axios').default;

const url = 'https://restcountries.com/v3.1/currency/dollar';
axios.get(url).then(function(response){

    let countrylist= response.data
    let status_code = response.status;


    console.log(countrylist);
    console.log(status_code);

}).catch(function(error){
    console.log(error);
})





function getCountry() {
    let endpoint = "http://ip-api.com/json/?fields=country"; //get user location form this api.

    fetch(endpoint).then(
        function (response) {
            let promiseForward = response.json();
            return promiseForward;
        }
    ).then(
        function (data) {
            console.log(data.country);
            let countryName = document.getElementById("countryName");
            countryName.innerHTML = data.country;
        }
    ).catch(
        function (error) {
            console.log(error)
        });
}

getCountry();

function getCurrencyRates() {



    var myHeaders = new Headers();
    myHeaders.append("apikey", "bsiKYRR4WEz3FBrZ377oazsHW140KlSi");

    var requestOptions = {
        method: 'GET',
        redirect: 'follow',
        headers: myHeaders
    };

    fetch("https://api.apilayer.com/fixer/latest?base=USD", requestOptions)
        .then(
            function (response) { return (response.json()) }
        )
        .then(
            function (result) {
                document.getElementById("aed").innerHTML = result.rates.AED;
            }
        )
        .catch(function (error) {
            console.log('error', error)
        })
}
getCurrencyRates();

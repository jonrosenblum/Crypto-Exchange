export default function fetchCryptoData() {
    return fetch("https://api.coincap.io/v2/assets")
        .then(response => response.json())
        .then(cryptoObject => {
            const cryptoArray = cryptoObject.data;

            cryptoArray.forEach(coin => {
                coin.imgSource = `assets/images/${coin.symbol.toLowerCase()}.png`;

            });
            //           console.log(cryptoArray);
            return cryptoArray;
        })
        .catch(error => {
            console.log('Error fetching data:', error);
        });
}

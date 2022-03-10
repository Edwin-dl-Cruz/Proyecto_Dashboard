
var url = "https://api.coinranking.com/v2/coins";
var proxy = "https://cors-anywhere.herokuapp.com/";
var apiKey = "coinranking2061bf8a94ee0200ce766b0d45cf14dec7f329eb0d8e24ba";

var apiUrl = `${proxy}${url}`;

fetch(`${proxy}${url}`, {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json',
    'X-My-Custom-Header': `${apiKey}`,
    'Access-Control-Allow-Origin': "*"
  }
})
  .then((response) => {
    if (response.ok) {
      response.json().then((json) => {
        console.log(json.data.coins);
        let coinsData = json.data.coins;

        if (coinsData.length > 0) {
          var cryptoCoin = "";
        }

        coinsData.forEach((coin) => {
          cryptoCoin += "<tr>";
          cryptoCoin += `<td> ${coin.rank}</td>`;
          cryptoCoin += `<td> <img src=${coin.iconUrl} style= "width:30px; height:30px;">  ${coin.name}</td>`;
          cryptoCoin += `<td>$${coin.marketCap} </td>`;
          cryptoCoin += `<td> $${Math.round(coin.price)} USD</td>`;
          cryptoCoin += `<td> ${coin.symbol}</td>`; "<tr>";
        });

        document.getElementById("data").innerHTML = cryptoCoin;
      });
    }
  })

  .catch((error) => {
    console.log(error);
  });

var ctx = document.getElementById("myChart").getContext('2d');
var myChart = new Chart(ctx, {
  type: 'line',
  data: {
    labels:
      ["Axie Infinity", "Etéreo", "Tether", "Binance", "USDC", "XRP"], //arreglo con nombre de moneda
    datasets: [{
      label: 'Precios USD',
      data: [47, 2576, 1, 383, 1, 1],
      backgroundColor: [
        'rgba(255, 255, 255, 2)'
      ],
      borderColor: [
        'rgba(102, 255, 255, 2)'
      ],
      borderWidth: 2
    }]
  },
  options: {
    maintainAspectRatio: false,
    scales: {
      yAxes: {
        ticks: {
          color: 'White',
          beginAtZero: true,
        }
      },
      xAxes: {
        ticks: {
          color: 'White',
          beginAtZero: true,
        }
      }
    }
  }
});





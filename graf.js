var ctx = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: ["tid"],
      datasets: [{ 
          data: [sygeAntal],
          label: "Syge",
          borderColor: "#3e95cd",
          fill: false
        
        }
      ]
    },
    options: {
      title: {
        display: true,
        text: 'Covid-19'
      }
    }
  });
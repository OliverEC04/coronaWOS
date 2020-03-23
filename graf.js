var ctx = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: ["tid"],
      datasets: [{ 
          data: [smittetAntal],
          label: "Syge",
          borderColor: "#3e95cd",
          fill: false
        
        },{ 
          data: [helbredtAntal],
          label: "Helbredt",
          borderColor: "#3e95cd",
          fill: false
        
        },{ 
            data: [dodAntal],
            label: "Dode",
            borderColor: "#3e95cd",
            fill: false
          
          },{ 
            data: [foolAntal],
            label: "Fools",
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
var ctx = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: ["tid"],
      datasets: [{ 
          data: smittetData,
          label: "Syge",
          borderColor: "#3e95cd",
          fill: false
        
        },{ 
          data: [helbredtData],
          label: "Helbredt",
          borderColor: "#3e95cd",
          fill: false
        
        },{ 
            data: [dodData],
            label: "Dode",
            borderColor: "#3e95cd",
            fill: false
          
          },{ 
            data: [foolData],
            label: "Fools",
            borderColor: "#3e95cd",
            fill: false
          
          }
      ]
    },
    options: { responsive: true,
      title: {
        display: true,
        text: 'Covid-19'
      }
    }
  });
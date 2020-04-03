var ctx = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: [1, 2, 3, 4, 5, 6, 7, 8],
      datasets: [{ 
          data: smittetData,
          label: "Syge",
          borderColor: "#3e95cd",
          fill: false
        
        },{ 
          data: helbredtData,
          label: "Helbredt",
          borderColor: "#3e95cd",
          fill: false
        
        },{ 
            data: dodData,
            label: "Dode",
            borderColor: "#3e95cd",
            fill: false
          
          },{ 
            data: foolData,
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

  myLineChart.data.datasets[0].data[2] = 50; // Would update the first dataset's value of 'March' to be 50
myLineChart.update(); // Calling update now animates the position of March from 90 to 50.
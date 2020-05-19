var obj = localStorage.getItem("totals");
var jsonObj = JSON.parse(obj);

if(jsonObj != null){
  var bft = jsonObj.bftotal;
  var lt = jsonObj.lunchTotal;
  var dt = jsonObj.dinnerTotal;
  var at = jsonObj.activitiesTotal;
  var tk = (bft + lt + dt) + at;
  var prots = jsonObj.protsTotal;
  var fats = jsonObj.fatsTotal;
  var carbs = jsonObj.carbsTotal;
  var fibre = jsonObj.fibreTotal;
}
$(window).on('load',function (){
  Chart.defaults.global.animation.duration = 3000;
  ctx = document.getElementById('chart').getContext('2d');
  chartConfig =  {
    type: 'bar',
    data: {
      labels: ["Súčet" + ' ' + tk + "kcal", "Požadované" + ' ' + globalWantedKcals + "kcal", "BMR" + ' ' + globalBMR + "kcal"],
      datasets: [
        {
          label: "",
          backgroundColor: ["#25B396", "#50944b", "#F1A104"],
          data: [tk, globalWantedKcals, globalBMR,100]
        }
      ]
    },
    options: {
      scales: {
        xAxes: [{
          gridLines: {
            display: false,
          },
          barPercentage: 0.9,
          categoryPercentage: 1.0,
          ticks: {
            fontSize: 19,
            fontColor: 'black'
          }
        }],
        yAxes: [{
          gridLines: {
            display: true
          },

        }]
      }

    },


  };


  Chart.defaults.global.defaultFontSize = 19;
  ctx2 = document.getElementById('chart2').getContext('2d');
  chart2Config =  {
    type: 'doughnut',
    data: {
      labels: ['Bielkoviny' + ' ' + prots + 'g', 'Sacharidy' + ' ' + carbs + 'g', 'Tuky' + ' ' + fats + 'g', 'Vláknina' + ' ' + fibre + 'g'],
      datasets: [{
        label: '# of Tomatoes',
        data: [prots, carbs, fats, fibre],
        backgroundColor: [
          'lightseagreen',
          '#9bd75d',
          '#fbff93',
          '#64BB6A'
      ],
        borderColor: [
          '#1c6e66',
          '#568945',
          '#7f8342',
          '#3A763C'
        ],
        borderWidth: 1
      }]
    },

    options: {
      cutoutPercentage: 70,
      responsive: false,
      legend: {
        labels: {
          fontColor: "black"
        }

      }
    },


  };

  chart = new Chart(ctx,chartConfig);
  chart2 = new Chart(ctx2, chart2Config);


});
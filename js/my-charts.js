const ctx1 = document.getElementById('chart-1');

  new Chart(ctx1, {
    type: 'bar',
    data: {
      labels: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai','Jun','Jul','Ago','Set','Oct','Nov','Dez'],
      datasets: [{
        label: 'Lançamento',
        data: [12, 19, 3, 5, 2, 3,12, 6, 3, 5, 2, 3],
        borderWidth: 1,
        backgroundColor: '#2e6d8cab',
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
});









function show_main_charts(chart_num){
   document.querySelector('.home_charts .c .chart-grid').innerHTML=`
         <div class="_c2"> <canvas id="main-chart-${chart_num}.2"></canvas></div>
         <div class="_c1"> <canvas id="main-chart-${chart_num}.1"></canvas></div>
         
   `


   setTimeout(()=>{
    document.querySelector('.home_charts .c').classList.add('show')
  },100)
   

   
  

   if(chart_num == 1){
    new Chart(document.getElementById('main-chart-1.1'), {
      type: 'bar',
      data: {
        labels:['7:00', '8:00', '9:00', '10:00', '11:00','12:00','13:00','14:00','15:00','16:00','17:00','18:00'],
        datasets: [{
          label: 'Lançamento Diário',
          data: [12, 19, 3, 5, 2, 3,12, 6, 3, 5, 2, 3],
          borderWidth: 1,
          backgroundColor: '#2e6d8cab',
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
  
  
  
  
    new Chart(document.getElementById('main-chart-1.2'), {
      type: 'line',
      data: {
        labels:  ['7:00', '8:00', '9:00', '10:00', '11:00','12:00','13:00','14:00','15:00','16:00','17:00','18:00'],
        datasets: [
          {
            label: 'Crédito',
            data: [1200, 34300, 32545, 90349, 50000, 8600,3004, 43400, 43434, 343434, 434342, 65633],
            backgroundColor: 'green',
          },
          {
            label: 'Débito',
            data: [7000, 45000, 304, 323000, 3000, 2000,232300, 4002, 8232, 23323, 4344, 3234],
            backgroundColor: 'orange',
          }
        ]
      },
      options:  {
        responsive: true,
        plugins: {
          legend: {
            position: 'top',
          },
          title: {
            display: true,
            text: 'Comparação Diária'
          }
        }
      }
    });


   }else if(chart_num == 2){

    
   new Chart(document.getElementById('main-chart-2.1'), {
    type: 'bar',
    data: {
      labels:['Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta','Sabado','Domingo'],
      datasets: [{
        label: 'Lançamento Semanal',
        data: [320, 120, 300, 500, 213, 240,120, 189, 26, 439, 240, 30],
        borderWidth: 1,
        backgroundColor: '#184d68b4',
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });



  new Chart(document.getElementById('main-chart-2.2'), {
    type: 'line',
    data: {
      labels: ['Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta','Sabado','Domingo'],
      datasets: [
        {
          label: 'Crédito',
          data: [901200, 7634300, 32545, 8090349, 8750000, 608600,3004, 6743400, 8643434, 397643434, 57434342, 57665633],
          backgroundColor: 'green',
        },
        {
          label: 'Débito',
          data: [77000, 5845000, 568304, 69323000, 7763000, 792000, 70232300, 7684002, 5788232, 57623323, 574344, 5763234],
          backgroundColor: 'orange',
        }
      ]
    },
    options:  {
      responsive: true,
      plugins: {
        legend: {
          position: 'top',
        },
        title: {
          display: true,
          text: 'Comparação Semanal'
        }
      }
    }
  });
   }else if(chart_num){
    new Chart(document.getElementById('main-chart-3.1'), {
      type: 'bar',
      data: {
        labels:['Jan', 'Fev', 'Mar', 'Abr', 'Mai','Jun','Jul','Ago','Set','Oct','Nov','Dez'],
        datasets: [{
          label: 'Lançamento Mensal',
          data: [1202, 1609, 4303, 2090, 3932, 3000,400, 4040, 8690, 5890, 2098, 6067],
          borderWidth: 1,
          backgroundColor: '#0d2835b4',
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
  
  
    new Chart(document.getElementById('main-chart-3.2'), {
      type: 'line',
      data: {
        labels:  ['Jan', 'Fev', 'Mar', 'Abr', 'Mai','Jun','Jul','Ago','Set','Oct','Nov','Dez'],
        datasets: [
          {
            label: 'Crédito',
            data: [1224300, 34434300, 32545, 90523349, 5250000, 7348600,5353004, 634643400,56543434, 3644343434, 645434342,53465633],
            backgroundColor: 'green',
          },
          {
            label: 'Débito',
            data: [7034200, 4505200, 353204, 25323000, 843000, 375472000,634232300, 6344002, 4538232, 3523523323, 45344344, 3453234],
            backgroundColor: 'orange',
          }
        ]
      },
      options:  {
        responsive: true,
        plugins: {
          legend: {
            position: 'top',
          },
          title: {
            display: true,
            text: 'Comparação Mensal'
          }
        }
      }
    });
   }
}



function analysis_charts(){

  new Chart(document.getElementById('analysis_chart_1'), {
    type: 'bar',
    data: {
      labels:['7:00', '8:00', '9:00', '10:00', '11:00','12:00','13:00','14:00','15:00','16:00','17:00','18:00'],
      datasets: [{
        label: 'Lançamento Diário',
        data: [12, 19, 3, 5, 2, 3,12, 6, 3, 5, 2, 3],
        borderWidth: 1,
        backgroundColor: '#2e6d8cab',
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });




  new Chart(document.getElementById('analysis_chart_2'), {
    type: 'line',
    data: {
      labels:  ['7:00', '8:00', '9:00', '10:00', '11:00','12:00','13:00','14:00','15:00','16:00','17:00','18:00'],
      datasets: [
        {
          label: 'Crédito',
          data: [1200, 34300, 32545, 90349, 50000, 8600,3004, 43400, 43434, 343434, 434342, 65633],
          backgroundColor: 'green',
        },
        {
          label: 'Débito',
          data: [7000, 45000, 304, 323000, 3000, 2000,232300, 4002, 8232, 23323, 4344, 3234],
          backgroundColor: 'orange',
        }
      ]
    },
    options:  {
      responsive: true,
      plugins: {
        legend: {
          position: 'top',
        },
        title: {
          display: true,
          text: 'Comparação Diária'
        }
      }
    }
  });


  new Chart(document.getElementById('analysis_chart_3'), {
    type: 'bar',
    data: {
      labels:['Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta','Sabado','Domingo'],
      datasets: [{
        label: 'Lançamento Semanal',
        data: [320, 120, 300, 500, 213, 240,120, 189, 26, 439, 240, 30],
        borderWidth: 1,
        backgroundColor: '#184d68b4',
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });



  new Chart(document.getElementById('analysis_chart_4'), {
    type: 'line',
    data: {
      labels: ['Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta','Sabado','Domingo'],
      datasets: [
        {
          label: 'Crédito',
          data: [901200, 7634300, 32545, 8090349, 8750000, 608600,3004, 6743400, 8643434, 397643434, 57434342, 57665633],
          backgroundColor: 'green',
        },
        {
          label: 'Débito',
          data: [77000, 5845000, 568304, 69323000, 7763000, 792000, 70232300, 7684002, 5788232, 57623323, 574344, 5763234],
          backgroundColor: 'orange',
        }
      ]
    },
    options:  {
      responsive: true,
      plugins: {
        legend: {
          position: 'top',
        },
        title: {
          display: true,
          text: 'Comparação Semanal'
        }
      }
    }
  });



  new Chart(document.getElementById('analysis_chart_5'), {
    type: 'bar',
    data: {
      labels:['Jan', 'Fev', 'Mar', 'Abr', 'Mai','Jun','Jul','Ago','Set','Oct','Nov','Dez'],
      datasets: [{
        label: 'Lançamento Mensal',
        data: [1202, 1609, 4303, 2090, 3932, 3000,400, 4040, 8690, 5890, 2098, 6067],
        borderWidth: 1,
        backgroundColor: '#0d2835b4',
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });


  new Chart(document.getElementById('analysis_chart_6'), {
    type: 'line',
    data: {
      labels:  ['Jan', 'Fev', 'Mar', 'Abr', 'Mai','Jun','Jul','Ago','Set','Oct','Nov','Dez'],
      datasets: [
        {
          label: 'Crédito',
          data: [1224300, 34434300, 32545, 90523349, 5250000, 7348600,5353004, 634643400,56543434, 3644343434, 645434342,53465633],
          backgroundColor: 'green',
        },
        {
          label: 'Débito',
          data: [7034200, 4505200, 353204, 25323000, 843000, 375472000,634232300, 6344002, 4538232, 3523523323, 45344344, 3453234],
          backgroundColor: 'orange',
        }
      ]
    },
    options:  {
      responsive: true,
      plugins: {
        legend: {
          position: 'top',
        },
        title: {
          display: true,
          text: 'Comparação Mensal'
        }
      }
    }
  });



}

analysis_charts()


let analysis_chart

function set_analysis_chart_a(data,label){

  if(document.querySelector(`.analysis  [p="accounts"] .chart-c .chart`).getAttribute('current_chart')){
    analysis_chart.data.datasets[0].data = [1200, 34300, 32545, 90349, 50000, 8600,3004, 43400, 43434, 343434, 434342, 65633];
    analysis_chart.update();
    return
  }

    analysis_chart=new Chart(document.querySelector(`.analysis  [p="accounts"] .chart canvas`), {
      type: 'bar',
      data: {
        labels:['7:00', '8:00', '9:00', '10:00', '11:00','12:00','13:00','14:00','15:00','16:00','17:00','18:00','outros'],
        datasets: [{
          label,
          data:[1200, 34300, 32545, 90349, 50000, 8600,3004, 43400, 43434, 343434, 434342, 65633],
          borderWidth: 1,
          backgroundColor: '#2e6d8cab',
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });

   

}







const ctx = document.getElementById('chart-1');

  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['Janeiro', 'Fevereiro', 'Março', 'Maio', 'Abril', 'Maio','Junho','Julho','Setembro','Outubro','Novembro','Dezembro'],
      datasets: [{
        label: 'Pagamentos',
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


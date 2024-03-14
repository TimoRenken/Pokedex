function renderChart(pokemon){
const ctx = document.getElementById('myChart');

let stats = [
    pokemon['stats'][0]['base_stat'],
    pokemon['stats'][1]['base_stat'],
    pokemon['stats'][2]['base_stat'],
    pokemon['stats'][3]['base_stat'],
    pokemon['stats'][4]['base_stat'],
    pokemon['stats'][5]['base_stat']
];

const LABEL_NAMES = ['Hp', 'Attack','Defense', 'Sp. Attack', 'Sp. Def','Speed'];
const CHART_BG_COLOR = ['rgb(41 227 96)','rgb(251 22 22)','rgb(11 134 255)','rgb(241 131 0)','rgb(134 64 251)','rgb(243 255 18)'];

new Chart(ctx, {
  type: 'bar',
  data: {
    labels: LABEL_NAMES,
    datasets: [{
      label: 'Stats',
      data: stats,
      backgroundColor: CHART_BG_COLOR,
      borderWidth: 1
    }]
  },
  options: {
    maintainAspectRatio: false,
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
});
}

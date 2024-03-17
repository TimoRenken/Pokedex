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
  options: CONFIG_CHART_OPTIONS,
});
}

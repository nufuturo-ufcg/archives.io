var dom = document.getElementById('chart-container');
var myChart = echarts.init(dom, null, {
  renderer: 'canvas',
  useDirtyRect: false
});
var app = {};

var option;

function getVirtualData(year) {
  const date = +echarts.time.parse(year + '-01-01');
  const end = +echarts.time.parse(+year + 1 + '-04-24');
  const dayTime = 3600 * 24 * 1000;
  const data = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 36, 28,	38, 4, 14, 42, 20, 58,	8, 38, 16, 26, 34, 26,	34, 12,	4, 0, 0, 38, 24, 20, 20, 0, 2, 0, 4];
  var i = 0;
  for (let time = date; time < end; time += dayTime) {
    data.push([
      echarts.time.format(time, '{yyyy}-{MM}-{dd}', false),
      data[i]
    ]);
    i += 1;
  }
  
  return data;
}
option = {
  title: {
    top: 30,
    left: 'center',
    text: 'Quantidade de commits no Github'
  },
  tooltip: {
    position: 'top',
    formatter: function (p) {
      var format = echarts.format.formatTime('yyyy-MM-dd', p.data[0]);
      return format + ': ' + p.data[1];
    }
  },
  visualMap: {
    min: 0,
    max: 100,
        inRange : {   
            color: ['#ce9be1ff', '#8b01bfff' ] //From smaller to bigger value ->
        },
    type: 'piecewise',
    orient: 'horizontal',
    left: 'center',
    top: 65
  },
  calendar: {
    top: 120,
    left: 30,
    right: 30,
    cellSize: ['auto', 13],
    range: '2023',
    itemStyle: {
      borderWidth: 0.5
    },
    yearLabel: { show: false }
  },
  series: {
    type: 'heatmap',
    coordinateSystem: 'calendar',
    data: getVirtualData('2023')
  }
};

if (option && typeof option === 'object') {
  myChart.setOption(option);
}

window.addEventListener('resize', myChart.resize);
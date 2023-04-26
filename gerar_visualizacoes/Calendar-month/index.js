var dom = document.getElementById('chart-container');
var myChart = echarts.init(dom, null, {
  renderer: 'canvas',
  useDirtyRect: false
});
var app = {};

var option;

function getVirtulData(year) {
  var date = +echarts.number.parseDate(year + '-03-28');
  var end = +echarts.number.parseDate(+year + 1 + '-04-24');
  var dayTime = 3600 * 24 * 1000;
  const data = [2, 36, 28,	38, 4, 14, 42, 20, 58,	8, 38, 16, 26, 34, 26,	34, 12,	4, 0, 0,	38, 24, 20, 20, 0, 2, 0, 4];
  var i = 0;
  for (var time = date; time < end; time += dayTime) {
    data.push([
      echarts.format.formatTime('yyyy-MM-dd', time),
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
    text: 'Quantidade de commits no Github',
  },
  tooltip: {
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
    calculable: true,
    orient: 'vertical',
    left: '930',
    top: '140',
    itemWidth: 40,
    itemHeight: 500,
  },
  calendar: 
    {
    top: 150,
    left: 200,
    height: 500,
    width: 700,
    orient: 'vertical',
    monthLabel: {
    formatter: '{MM}/{yyyy}',
    position: 'start',
    },
    range:  ['2023-03-28', '2023-04-24']
    },
  series: [
    {
      type: 'heatmap',
      coordinateSystem: 'calendar',
      calendarIndex: 0,
      data: getVirtulData('2023'),
    }
  ]
};

if (option && typeof option === 'object') {
  myChart.setOption(option);
}

window.addEventListener('resize', myChart.resize);
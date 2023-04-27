var dom = document.getElementById('chart-container');
var myChart = echarts.init(dom, null, {
  renderer: 'canvas',
  useDirtyRect: false
});
var app = {};

var option;

option = {
    title: {
    top: 10,
    left: 'center',
    text: 'Quantidade de commits no Github por semana',
  },
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'cross',
      crossStyle: {
        color: '#ce9be1ff'
      }
    }
  },
  toolbox: {
    feature: {
      dataView: { show: true, readOnly: false },
      magicType: { show: true, type: ['line', 'bar'] },
      restore: { show: true },
      saveAsImage: { show: true }
    }
  },
  xAxis: [
    {
      type: 'category',
      data: ['26-03-2023','02-04-2023', '09-04-2023', '16-04-2023', '23-04-2023'],
      axisPointer: {
        type: 'shadow'
      }
    }
  ],
  yAxis: [
    {
      type: 'value',
      name: 'Commits',
      min: 0,
      max: 300,
      interval: 50,
      axisLabel: {
        formatter: '{value}'
      }
    },
  ],
  series: [
    {
      color: '#8b01bfff',
      name: 'Commits',
      type: 'bar',
      tooltip: {
        valueFormatter: function (value) {
          return value;
        }
      },
      data: [
       108, 196, 136, 104, 4
      ]
    },
  ]
};

if (option && typeof option === 'object') {
  myChart.setOption(option);
}

window.addEventListener('resize', myChart.resize);
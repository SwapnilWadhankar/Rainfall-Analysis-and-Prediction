window.onload = function () {
  var dataPoints = [];

  var chart = new CanvasJS.Chart('chartContainer', {
    animationEnabled: true,
    theme: 'light2',
    title: {
      text: 'Rainfall Analysis',
    },
    axisY: {
      title: 'Units in mm',
      titleFontSize: 24,
    },
    data: [
      {
        type: 'column',
        yValueFormatString: '#,### Units',
        dataPoints: dataPoints,
      },
    ],
  });

  function addData(data) {
    for (var i = 0; i < data.length; i++) {
      dataPoints.push({
        x: new Date(data[i].date),
        y: data[i].units,
      });
    }
    chart.render();
  }
  const hello = new Date(1238540400000);
  const helloo = JSON.stringify(hello);
  console.log(helloo);

  $.getJSON('./includes/data.json', addData);
};

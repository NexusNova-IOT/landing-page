google.charts.load("current", { packages: ["corechart"] });
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
  var data = google.visualization.arrayToDataTable([
    ["Task", "Hours per Day"],
    ["LifeTravel", 11],
    ["Viajes Falabella", 2],
    ["Despegar", 2],
    ["Booking", 2],
    ["LATAM", 7],
  ]);

  var options = {
    title: "Distribución porcentual de descargas por aplicaciones de viaje",
  };

  var chart = new google.visualization.PieChart(
    document.getElementById("piechart")
  );

  chart.draw(data, options);
}

function change(){
  var select = document.getElementById('language');
  var value = select.options[select.selectedIndex].value;
  if(value === "es-ES"){
    location.replace("indexES.html");
  }else if (value === "en-US") {
    location.replace("index.html");
  }
}
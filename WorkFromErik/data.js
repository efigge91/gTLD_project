var pie = d3.pie()
.sort(null)
.value(function(d) { return d.share; });

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {

    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function myFunction() {
  d3.select("svg").remove();
  var csv = document.getElementById("myList").value;
  console.log(csv);
  var csvFile = "/csv/" + csv + ".csv";

d3.csv(csvFile, type, function(error, data) {
if (error) throw error;

console.log(pie(data))

var width = 350,
height = 350,
radius = Math.min(width, height) / 2;

var color = d3.scaleOrdinal()
.range(["#98abc5", "#8a89a6", "#7b6888", "#6b486b", "#a05d56", "#d0743c", "#ff8c00"]);

var arc = d3.arc()
.outerRadius(radius - 10)
.innerRadius(0);

// var labelArc = d3.arc()
// .outerRadius(radius + 20)
// .innerRadius(radius + 10);

var svg = d3.select(".card-body").append("svg")
.attr("width", width + 500)
.attr("height", height + 200)
.append("g")
.attr("transform", "translate(" + (width + 200)/ 2 + "," + (height + 200) / 2 + ")");

var g = svg.selectAll(".arc")
  .data(pie(data))
  .enter().append("g")
  .attr("class", "arc");

g.append("path")
  .attr("d", arc)
  .style("fill", function(d) { return color(d.data.share); });

var pos = d3.arc().innerRadius(radius + 2).outerRadius(radius + 2); 
  
var getAngle = function (d) {
      return (180 / Math.PI * (d.startAngle + d.endAngle) / 2 - 90);
  };

g.append("text")
  .attr("transform", function(d) {
    return "translate(" + pos.centroid(d) + ") " +
    "rotate(" + getAngle(d) + ")"; }) 
  .attr("dy", ".8em")
  .style("text-anchor", "start")
  .text(function(d) { 
    if (csv === 'tld') {
      return d.data.tlds;
    } else if (csv === 'registrars') {
      return d.data.registrars;
    } else {
      return d.data.registries;
    }
  });
});
function type(d) {
  d.share = +d.share;
  return d;
  }
};

function myFunction2() {
  d3.select("svg").remove();
  var csv = document.getElementById("myList2").value;
  console.log(csv);
  var csvFile = "/csv/" + csv + ".csv";

d3.csv(csvFile, type, function(error, data) {
if (error) throw error;

line_graph = new Dygraph(
  document.getElementById("graphdiv2"),
  csvFile,
  // "/csv/tld_historical.csv", 
  {
    rollPeriod: 15,
    errorBars: true,
    showRoller: true,
    labelsKMG2:true,
    legend: 'always',
  }
);

line_graph.ready(function() {
  line_graph.setAnnotations([
  {
    series: "Total Domains",
    x: "1/1/2017",
    shortText: "B",
    text: "Start Date"
  }
  ]);
});

})
function type(d) {
  d.count = +d.count;
  return d;
  }}

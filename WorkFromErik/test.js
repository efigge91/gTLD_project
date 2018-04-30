// $(document).ready(function() {
//     line_graph = new Dygraph(
//     document.getElementById("graphdiv2"),
//     "/csv/tld_historical.csv", 
//     {
//       rollPeriod: 15,
//       errorBars: true,
//       showRoller: true,
//       labelsKMG2:true,
//       legend: 'always',
//     }
//   );
//     loan_graph = new Dygraph(
//     document.getElementById("graphdiv3"),
//     "/csv/loan.csv", 
//     {
//       rollPeriod: 50,
//       errorBars: true,
//       showRoller: true,
//       labelsKMG2:true,
//       legend: 'always',
//     }
//   );
//     var plot ;
//     var select = document.getElementById("dropdown");
//     var presets = {
//       'graphdiv2': [line_graph],
//       'graphdiv3': [loan_graph]
//     };
//     select.onchange = function() {
//       let selectValue = d3.select('#dropdown')
//       var sel = select.selectedIndex;
//       var id = select.options[sel].id;

//       if (id == "custom") { return; }
//       document.getElementById("graphdiv2").value = presets[id][0];
//       document.getElementById("graphdiv3").value = presets[id][1];
      
//       plot(presets);
//     };

//       var plotButton = document.getElementById("dropdown");
//       plot = function(presets) {    
//       plotButton.onclick = plot;
//       var graph = document.getElementById("graph_div");
//       var width = parseInt(graph.style.width, 10);
//       }
//     plot(presets);
//     }
//   );

var width = 960,
height = 500,
radius = Math.min(width, height) / 2;

var color = d3.scaleOrdinal()
.range(["#98abc5", "#8a89a6", "#7b6888", "#6b486b", "#a05d56", "#d0743c", "#ff8c00"]);

var arc = d3.arc()
.outerRadius(radius - 10)
.innerRadius(0);

var labelArc = d3.arc()
.outerRadius(radius - 40)
.innerRadius(radius - 40);

var pie = d3.pie()
.sort(null)
.value(function(d) { return d.count; });

var svg = d3.select("body").append("svg")
.attr("width", width)
.attr("height", height)
.append("g")
.attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");


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
    var csv = document.getElementById("myList").value;
    console.log(csv);
    var csvFile = "/csv/" + csv + ".csv";

d3.csv(csvFile, type, function(error, data) {
if (error) throw error;

console.log(pie(data))

var g = svg.selectAll(".arc")
  .data(pie(data))
.enter().append("g")
  .attr("class", "arc");

g.append("path")
  .attr("d", arc)
  .style("fill", function(d) { return color(d.data.share); });

g.append("text")
  .attr("transform", function(d) { return "translate(" + labelArc.centroid(d) + ")"; })
  .attr("dy", ".35em")
  .text(function(d) { return d.data.tlds; });
});


function type(d) {
d.share = +d.share;
return d;
}
}




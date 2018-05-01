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

var width = 960,
height = 600,
radius = Math.min(width, height) / 2;

var color = d3.scaleOrdinal()
.range(["#98abc5", "#8a89a6", "#7b6888", "#6b486b", "#a05d56", "#d0743c", "#ff8c00"]);

var arc = d3.arc()
.outerRadius(radius - 10)
.innerRadius(0);

var labelArc = d3.arc()
.outerRadius(radius + 20)
.innerRadius(radius + 10);

var svg = d3.select("body").append("svg")
.attr("width", width + 100)
.attr("height", height + 50)
.append("g")
.attr("transform", "translate(" + (width + 100)/ 2 + "," + (height + 50) / 2 + ")");

var g = svg.selectAll(".arc")
  .data(pie(data))
  .enter().append("g")
  .attr("class", "arc");

g.append("path")
  .attr("d", arc)
  .style("fill", function(d) { return color(d.data.share); });

g.append("text")
  .attr("transform", function(d) { return "translate(" + labelArc.centroid(d) + ")"; })
  .attr("dy", ".00001em")
  .text(function(d) { 
    if (csv === 'tld') {
      return d.data.tlds;
    } else {
    if (csv === 'registrars') {
      return d.data.registrars;
    } else 
    if (csv === 'registries') {
      return d.data.registries;
    } else
      return d.data.registrar;
    }});
});
function type(d) {
  d.share = +d.share;
  return d;
  }
}




line_graph = new Dygraph(
  document.getElementById("total_domains"),
  "/data/tld_historical.csv", 
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

function myFunction() {
  var x = document.getElementById("total_domains");
  if (x.style.display === "none") {
      x.style.display = "block";
  } else {
      x.style.display = "none";
  }
}
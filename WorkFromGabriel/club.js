club_graph = new Dygraph(
document.getElementById("club"),
"/data/club.csv", 
{
    rollPeriod: 10,
    errorBars: true,
    showRoller: true,
    labelsKMG2:true,
    legend: 'always',
}
);

club_graph.ready(function() {
club_graph.setAnnotations([
{
    series: "Club",
    x: "1/1/2017",
    shortText: "B",
    text: "Start Date"
}
]);
});

function button() {
    var x = document.getElementById("club");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
  }
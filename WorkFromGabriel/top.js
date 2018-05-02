top_graph = new Dygraph(
document.getElementById("top"),
"/data/top.csv", 
{
    rollPeriod: 20,
    errorBars: true,
    showRoller: true,
    labelsKMG2:true,
    legend: 'always',
}
);

top_graph.ready(function() {
top_graph.setAnnotations([
{
    series: "Top",
    x: "1/1/2017",
    shortText: "B",
    text: "Start Date"
}
]);
});

function button4() {
    var x = document.getElementById("top");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
    }
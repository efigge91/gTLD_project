xyz_graph = new Dygraph(
document.getElementById("xyz"),
"/data/xyz.csv", 
{
    rollPeriod: 10,
    errorBars: true,
    showRoller: true,
    labelsKMG2:true,
    legend: 'always',
}
);

xyz_graph.ready(function() {
xyz_graph.setAnnotations([
{
    series: "XYZ",
    x: "1/1/2017",
    shortText: "B",
    text: "Start Date"
}
]);
});

function button12() {
    var x = document.getElementById("xyz");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
    }
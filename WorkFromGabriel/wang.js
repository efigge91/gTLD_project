wang_graph = new Dygraph(
document.getElementById("wang"),
"/data/wang.csv", 
{
    rollPeriod: 10,
    errorBars: true,
    showRoller: true,
    labelsKMG2:true,
    legend: 'always',
}
);

wang_graph.ready(function() {
wang_graph.setAnnotations([
{
    series: "Wang",
    x: "1/1/2017",
    shortText: "B",
    text: "Start Date"
}
]);
});

function button10() {
    var x = document.getElementById("wang");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
    }
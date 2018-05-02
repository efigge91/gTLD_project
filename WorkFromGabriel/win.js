win_graph = new Dygraph(
document.getElementById("win"),
"/data/win.csv", 
{
    rollPeriod: 10,
    errorBars: true,
    showRoller: true,
    labelsKMG2:true,
    legend: 'always',
}
);

win_graph.ready(function() {
win_graph.setAnnotations([
{
    series: "Win",
    x: "1/1/2017",
    shortText: "B",
    text: "Start Date"
}
]);
});

function button11() {
    var x = document.getElementById("win");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
    }
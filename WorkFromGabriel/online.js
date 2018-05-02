online_graph = new Dygraph(
document.getElementById("online"),
"/data/online.csv", 
{
    rollPeriod: 30,
    errorBars: true,
    showRoller: true,
    labelsKMG2:true,
    legend: 'always',
}
);

online_graph.ready(function() {
online_graph.setAnnotations([
{
    series: "Online",
    x: "1/1/2017",
    shortText: "B",
    text: "Start Date"
}
]);
});

function button9() {
    var x = document.getElementById("online");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
    }
men_graph = new Dygraph(
document.getElementById("men"),
"/data/men.csv", 
{
    rollPeriod: 30,
    errorBars: true,
    showRoller: true,
    labelsKMG2:true,
    legend: 'always',
}
);

men_graph.ready(function() {
men_graph.setAnnotations([
{
    series: "Men",
    x: "1/1/2017",
    shortText: "B",
    text: "Start Date"
}
]);
});

function button3() {
    var x = document.getElementById("men");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
    }
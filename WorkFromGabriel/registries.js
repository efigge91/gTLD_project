registries_graph = new Dygraph(
document.getElementById("registries"),
"/data/registries.csv", 
{
    rollPeriod: 20,
    errorBars: true,
    showRoller: true,
    labelsKMG2:true,
    legend: 'always',
}
);

registries_graph.ready(function() {
    registries_graph.setAnnotations([
{
    series: "Registries",
    x: "1/1/2017",
    shortText: "B",
    text: "Start Date"
}
]);
});

function button7() {
    var x = document.getElementById("registries");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
    }
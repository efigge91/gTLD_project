registrars_graph = new Dygraph(
document.getElementById("registrars"),
"/data/registrars.csv", 
{
    rollPeriod: 20,
    errorBars: true,
    showRoller: true,
    labelsKMG2:true,
    legend: 'always',
}
);

registrars_graph.ready(function() {
    registrars_graph.setAnnotations([
{
    series: "Registrars",
    x: "1/1/2017",
    shortText: "B",
    text: "Start Date"
}
]);
});

function button6() {
    var x = document.getElementById("registrars");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
    }
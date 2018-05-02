vip_graph = new Dygraph(
document.getElementById("vip"),
"/data/vip.csv", 
{
    rollPeriod: 20,
    errorBars: true,
    showRoller: true,
    labelsKMG2:true,
    legend: 'always',
}
);

vip_graph.ready(function() {
vip_graph.setAnnotations([
{
    series: "Vip",
    x: "1/1/2017",
    shortText: "B",
    text: "Start Date"
}
]);
});

function button5() {
    var x = document.getElementById("vip");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
    }
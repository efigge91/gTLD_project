shop_graph = new Dygraph(
document.getElementById("shop"),
"/data/shop.csv", 
{
    rollPeriod: 8,
    errorBars: true,
    showRoller: true,
    labelsKMG2:true,
    legend: 'always',
}
);

shop_graph.ready(function() {
    shop_graph.setAnnotations([
{
    series: "Shop",
    x: "1/1/2017",
    shortText: "B",
    text: "Start Date"
}
]);
});

function button8() {
    var x = document.getElementById("shop");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
    }
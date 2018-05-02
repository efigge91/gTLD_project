loan_graph = new Dygraph(
document.getElementById("loan"),
"/data/loan.csv", 
{
    rollPeriod: 20,
    errorBars: true,
    showRoller: true,
    labelsKMG2:true,
    legend: 'always',
}
);

loan_graph.ready(function() {
loan_graph.setAnnotations([
{
    series: "Loan",
    x: "1/1/2017",
    shortText: "B",
    text: "Start Date"
}
]);
});

function button2() {
    var x = document.getElementById("loan");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
    }
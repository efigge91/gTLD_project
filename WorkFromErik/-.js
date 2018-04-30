$(document).ready(function() {
    line_graph = new Dygraph(
    document.getElementById("graphdiv2"),
    "/data/tld_historical.csv", 
    {
      rollPeriod: 15,
      errorBars: true,
      showRoller: true,
      labelsKMG2:true,
      legend: 'always',
    }
  );
    loan_graph = new Dygraph(
    document.getElementById("graphdiv3"),
    "/data/loan.csv", 
    {
      rollPeriod: 50,
      errorBars: true,
      showRoller: true,
      labelsKMG2:true,
      legend: 'always',
    }
  );
    var plot ;
    var select = document.getElementById("dropdown");
    var presets = {
      'graphdiv2': [line_graph],
      'graphdiv3': [loan_graph]
    };
    select.onchange = function() {
      let selectValue = d3.select('#dropdown')
      var sel = select.selectedIndex;
      var id = select.options[sel].id;

      if (id == "custom") { return; }
      document.getElementById("graphdiv2").value = presets[id][0];
      document.getElementById("graphdiv3").value = presets[id][1];
      
      plot(presets);
    };

      var plotButton = document.getElementById("dropdown");
      plot = function(presets) {    
      plotButton.onclick = plot;
      var graph = document.getElementById("graph_div");
      var width = parseInt(graph.style.width, 10);
      }
    plot(presets);
    }
  );
var vg_1 = "map_visualisation.vg.json";
vegaEmbed("#map", vg_1, {"actions": false}).then(function(result) {
    // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);

var vg_2 = "heat_map.vg.json";
vegaEmbed("#heatmap", vg_2, {"actions": false}).then(function(result) {
    // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);

var vg_3 = "bar_chart_gender.vg.json";
vegaEmbed("#bar_chart_2", vg_3, {"actions": false}).then(function(result) {
    // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);

var vg_4 = "line_chart_gender.vg.json";
vegaEmbed("#line_chart", vg_4, {"actions": false}).then(function(result) {
    // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);

var vg_5 = "bar_chart_region.vg.json";
vegaEmbed("#bar_chart_1", vg_5, {"actions": false}).then(function(result) {
    // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);

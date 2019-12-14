
//resize

var map_chart = document.getElementById("map"),
    map_aspect = map_chart.clientWidth / map_chart.clientHeight,
    map_container = map_chart.parentElement;

var inc_chart = document.getElementById("inc_dec_svg"),
    inc_aspect = inc_chart.clientWidth / inc_chart.clientHeight,
    inc_container = inc_chart.parentElement;

var world_chart = document.getElementById("world_beehives_svg"),
    world_aspect = world_chart.clientWidth / world_chart.clientHeight,
    world_container = world_chart.parentElement;

var stacked_chart = document.getElementById("stacked_svg"),
    stacked_aspect = stacked_chart.clientWidth / stacked_chart.clientHeight,
    stacked_container = stacked_chart.parentElement;

var top10_chart = document.getElementById("top10_svg"),
    top10_aspect = top10_chart.clientWidth / top10_chart.clientHeight,
    top10_container = top10_chart.parentElement;


    
    
window.onresize = function(event) {
    var map_targetWidth = map_container.offsetWidth;
    map_chart.setAttribute("width", map_targetWidth);
    map_chart.setAttribute("height",  Math.round(map_targetWidth / map_aspect));

    var inc_targetWidth = inc_container.offsetWidth;
    inc_chart.setAttribute("width", inc_targetWidth);
    inc_chart.setAttribute("height",  Math.round(inc_targetWidth / inc_aspect));

    var world_targetWidth = world_container.offsetWidth;
    world_chart.setAttribute("width", world_targetWidth);
    world_chart.setAttribute("height",  Math.round(world_targetWidth / world_aspect));

    var stacked_targetWidth = stacked_container.offsetWidth;
    stacked_chart.setAttribute("width", stacked_targetWidth);
    stacked_chart.setAttribute("height",  Math.round(stacked_targetWidth / stacked_aspect));

    var top10_targetWidth = top10_container.offsetWidth;
    top10_chart.setAttribute("width", top10_targetWidth);
    top10_chart.setAttribute("height",  Math.round(top10_targetWidth / top10_aspect));

};

window.dispatchEvent(new Event('resize'));
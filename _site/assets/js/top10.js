// set the dimensions and margin_top10s of the graph
var margin_top10 = {top: 30, right: 30, bottom: 100, left: 60},
    width_top10 = 960 - margin_top10.left - margin_top10.right,
    height_top10 = 600 - margin_top10.top - margin_top10.bottom;

// append the svg object to the body of the page
var top_10 = d3.select("#top10_svg")
    .attr("width", width_top10 + margin_top10.left + margin_top10.right)
    .attr("height", height_top10 + margin_top10.top + margin_top10.bottom)
  .append("g")
    .attr("transform",
          "translate(" + margin_top10.left + "," + margin_top10.top + ")");

top_10_scale={
  'beehives':[0, 13000000],
  'land_density':[0,200]
}
top10_data='beehives'

ready_top10()

function ready_top10(){
  // X axis
  let x = d3.scaleBand()
    .range([ 0, width_top10 ])
    .domain(top10_Data().map(function(d) { return d.Area; }))
    .padding(0.2);
  top_10.append("g")
    .attr('id','x_top10')
    .attr("transform", "translate(0," + height_top10 + ")")
    .call(d3.axisBottom(x))
    .selectAll("text")
      .attr("transform", "translate(-10,0)rotate(-45)")
      .style("text-anchor", "end");

  // Add Y axis
  let y = d3.scaleLinear()
    .domain(top_10_scale[top10_data])
    .range([ height_top10, 0]);
  top_10.append("g")
    .attr('id','y_top10')
    .call(d3.axisLeft(y));

  // Bars
  top_10.selectAll("mybar")
    .data(top10_Data())
    .enter()
    .append("rect")
      .attr("x", function(d) { return x(d.Area); })
      .attr("y", function(d) { return y(d.Value); })
      .attr("width", x.bandwidth())
      .attr("height", function(d) { return height_top10 - y(d.Value); })
      .attr("fill", "#69b3a2")
}

function update_top_10(){
  // X axis
  let x = d3.scaleBand()
    .range([ 0, width_top10 ])
    .domain(top10_Data().map(function(d) { return d.Area; }))
    .padding(0.2);
  d3.select('#x_top10').remove()
  top_10.append("g")
    .attr('id','x_top10')
    .attr("transform", "translate(0," + height_top10 + ")")
    .call(d3.axisBottom(x))
    .selectAll("text")
      .attr("transform", "translate(-10,0)rotate(-45)")
      .style("text-anchor", "end");

  // Add Y axis
  let y = d3.scaleLinear()
    .domain(top_10_scale[top10_data])
    .range([ height_top10, 0]);
  d3.select('#y_top10').remove()  
  top_10.append("g")
    .attr('id','y_top10')
    .call(d3.axisLeft(y));

  // Bars
  top_10.selectAll("rect")
    .data(top10_Data())
      .transition()
      .duration(200)
      .attr("y", function(d) { return y(d.Value); })
      .attr("height", function(d) { return height_top10 - y(d.Value); })
      

}

function top10_Data(){
  if(top10_data == 'beehives'){
    return top10_beehives['beehives']
  }
  if (top10_data=='land_density'){
    return top10_beehives['density']
  }


}

//Data selection events
d3.select("#data_selection_top_10").on("change", function(){
    let form = d3.select("#data_selection_top_10")
    for(var i=0; i<form["_groups"][0][0].length; i++){
        if(form["_groups"][0][0][i].checked){
          top10_data = form["_groups"][0][0][i].id;}
    }
    update_top_10()
})
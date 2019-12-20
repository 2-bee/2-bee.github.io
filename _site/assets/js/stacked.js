// set the dimensions and stacked_margins of the graph
var stacked_margin = {top: 20, right: 250, bottom: 30, left: 20},
    stacked_width = 960 - stacked_margin.left - stacked_margin.right,
    stacked_height = 600 - stacked_margin.top - stacked_margin.bottom;

// append the stacked_svg object to the body of the page
var stacked_svg = d3.select("#stacked_svg")
    .attr("width", stacked_width + stacked_margin.left + stacked_margin.right)
    .attr("height", stacked_height + stacked_margin.top + stacked_margin.bottom)
  .append("g")
    .attr("transform",
          "translate(" + stacked_margin.left + "," + stacked_margin.top + ")");

// List of groups = header of the csv files
var stacked_keys = ["Africa","Europe","America","Asia","Oceania"]

// Add X axis
var stacked_x = d3.scaleLinear()
  .domain(d3.extent(continent_beehives, function(d) { return d.Year; }))
  .range([ 0, stacked_width ]);
stacked_svg.append("g")
  .attr("transform", "translate(0," + stacked_height + ")")
  .call(d3.axisBottom(stacked_x).ticks(5))
  .style("font", "14px times")
  .append('text')
  .text('Years')
  .attr("font-family", "sans-serif")
  .attr("font-size", "14px")
  .attr("transform", "translate("+stacked_width/2+", 30)")
  .attr('fill','black');

// Add Y axis
var stacked_y = d3.scaleLinear()
  .domain([0, 100000000])
  .range([ stacked_height, 0 ]);
stacked_svg.append("g")
  .attr("transform", "translate("+stacked_width+",0)")
  .call(d3.axisRight(stacked_y))
  .style("font", "14px times")
  .append('text')
  .text('Number of Beehives')
  .attr("font-family", "sans-serif")
  .attr("font-size", "14px")
  .attr("transform", "translate(80, "+(stacked_height/2-40)+") rotate(90)")
  .attr('fill','black')


// color palette
var stacked_color = d3.scaleOrdinal()
  .domain(stacked_keys)
  .range(['#58A4B0','#D64933','#2B303A','#D8A48F','#0C7C59'])

//stack the data?
var stackedData = d3.stack()
  .keys(stacked_keys)
  (continent_beehives)


// Show the areas
var areas = stacked_svg.append('g')
areas.on('mousemove',function(){
    var scale_coeff = 960/document.getElementById('stacked_svg').getBoundingClientRect().width
    let x = (d3.event.x-document.getElementById('stacked_svg').getBoundingClientRect().x)*scale_coeff-stacked_margin.left
    d3.select('#line_info')
      .attr("opacity", 1)
      .attr("x1", x)  
      .attr("x2", x) 

    let year = Math.round(stacked_x.invert(x))

    
    //get data
    let year_data
    for(let i=0 ; i< continent_beehives.length;i++){
      if (continent_beehives[i].Year == year){
        year_data=continent_beehives[i]
      }
    }
    function numberWithCommas(x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
    let info_data = "<label style='font-size:20px'>"+year_data.Year+'</label>'
        info_data = info_data+ "<div style='display:flex;justify-content:space-between;'><label style='color:"+stacked_color('Europe')+"'>Europe: </label><label style='color:"+stacked_color('Europe')+"'>"+numberWithCommas(year_data.Europe)+'</label></div>'
        info_data = info_data+ "<div style='display:flex;justify-content:space-between;'><label style='color:"+stacked_color('Africa')+"'>Africa: </label><label style='color:"+stacked_color('Africa')+"'>"+numberWithCommas(year_data.Africa)+'</label></div>'
        info_data = info_data+ "<div style='display:flex;justify-content:space-between;'><label style='color:"+stacked_color('America')+"'>America: </label><label style='color:"+stacked_color('America')+"'>"+numberWithCommas(year_data.America)+'</label></div>'
        info_data = info_data+ "<div style='display:flex;justify-content:space-between;'><label style='color:"+stacked_color('Asia')+"'>Asia: </label><label style='color:"+stacked_color('Asia')+"'>"+numberWithCommas(year_data.Asia)+'</label></div>'
        info_data = info_data+ "<div style='display:flex;justify-content:space-between;'><label style='color:"+stacked_color('Oceania')+"'>Oceania: </label><label style='color:"+stacked_color('Oceania')+"'>"+numberWithCommas(year_data.Oceania)+'</label></div>'

    let doc = document.documentElement;
    let left = (window.pageXOffset || doc.scrollLeft) - (doc.clientLeft || 0);
    let top = (window.pageYOffset || doc.scrollTop)  - (doc.clientTop || 0);

    d3.select('#stacked_card')
      .html(info_data)
      .style('left',(d3.event.x-document.getElementById('stacked_card').offsetWidth/2)+'px') 
      .style('top',(18+document.getElementById('stacked_svg').getBoundingClientRect().y+top)+'px') 
      .style('display','flex') 
  })
  .on('mouseleave',function(){
      d3.select('#line_info')
        .attr("opacity", 0)  
      d3.select('#stacked_card')
        .style('display','none') 

    })
  .selectAll("mylayers")
  .data(stackedData)
  .enter()
  .append("path")
    .attr("class", function(d) { return "myArea " + d.key })
    .style("fill", function(d) { console.log(d.key) ; return stacked_color(d.key); })
    .attr("d", d3.area()
      .x(function(d, i) { return stacked_x(d.data.Year); })
      .y0(function(d) { return stacked_y(d[0]); })
      .y1(function(d) { return stacked_y(d[1]); })
)
areas.append("line")
  .attr('id','line_info')
  .attr('opacity',0)
  .attr("x1", stacked_x(1980))  //<<== change your code here
  .attr("y1", 130)
  .attr("x2", stacked_x(1980))  //<<== and here
  .attr("y2", stacked_height )
  .style("stroke-width", 2)
  .style("stroke", "black")
  .style("fill", "none");

// Legend

  // What to do when one group is hovered
var highlight = function(d){
  // reduce opacity of all groups
  d3.selectAll(".myArea").style("opacity", .1)
  // expect the one that is hovered
  d3.select("."+d).style("opacity", 1)
}

// And when it is not hovered anymore
var noHighlight = function(d){
  d3.selectAll(".myArea").style("opacity", 1)
}


// Add one dot in the legend for each name.
var size = 20
stacked_svg.selectAll("myrect")
  .data(stacked_keys)
  .enter()
  .append("rect")
    .attr("x", stacked_width+stacked_margin.right/2)
    .attr("y", function(d,i){ return stacked_height/2 - 55 + i*(size+5)}) // 100 is where the first dot appears. 25 is the distance between dots
    .attr("width", size)
    .attr("height", size)
    .style("fill", function(d){ return stacked_color(d)})
    .on("mouseover", highlight)
    .on("mouseleave", noHighlight)

// Add one dot in the legend for each name.
stacked_svg.selectAll("mylabels")
  .data(stacked_keys)
  .enter()
  .append("text")
    .attr("x", stacked_width+stacked_margin.right/2 + size*1.2)
    .attr("y", function(d,i){ return stacked_height/2 -55 + i*(size+5) + (size/2)}) // 100 is where the first dot appears. 25 is the distance between dots
    .style("fill", function(d){ return stacked_color(d)})
    .text(function(d){ return d})
    .attr("text-anchor", "left")
    .style("alignment-baseline", "middle")
    .on("mouseover", highlight)
    .on("mouseleave", noHighlight)



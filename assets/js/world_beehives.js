

var wb_margin = {top: 100, right: 100, bottom: 100, left: 100},
    wb_width = 960 - wb_margin.left - wb_margin.right,
    wb_height = 600 - wb_margin.top - wb_margin.bottom;

var interp = d3.interpolateBasis(beehives_world.map(function(p) {
  return p.y;
}));
var wb_scaleX = d3.scaleLinear()
  .domain([start_year,end_year ])
  .range([0, wb_width]);
var wb_scaleY = d3.scaleLinear()
  .domain([49173473, 90999730])
  .range([wb_height, 0]);
var lineGen = d3.line()
  .x(function(d) {
    return wb_scaleX(d.x);
  })
  .y(function(d) {
    return wb_scaleY(d.y);
  })
  .curve(d3.curveBasis);



var world_bee_plot = d3.select("#world_beehives_svg")
  .attr("width", 960)
  .attr("height", 600)
  .append('g')
  .attr('transform','translate('+wb_margin.left/2+','+wb_margin.top/2+')');

function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

world_bee_plot.append('rect')
  .attr('width', wb_width)
  .attr('height', wb_height)
  .on('mousemove', function() {
    var scale_coeff = 960/document.getElementById('world_beehives_svg').getBoundingClientRect().width
    var x = d3.event.x-document.getElementById('world_beehives_svg').getBoundingClientRect().x;
    x= x *scale_coeff -wb_margin.left/2 
    var y = interp(x / wb_scaleX(end_year ));
    world_bee_plot.select('circle')
      .attr('cx', x)
      .attr('cy', wb_scaleY(y));

    let year = Math.round(wb_scaleX.invert(x))
    let val = Math.round(y)

    let info_data = "<label>beehives: "+numberWithCommas(val)+'</label>'
    info_data = info_data+ "<label>year: "+year+'</label>'

    var doc = document.documentElement;
    var left = (window.pageXOffset || doc.scrollLeft) - (doc.clientLeft || 0);
    var top = (window.pageYOffset || doc.scrollTop)  - (doc.clientTop || 0);

    x = d3.event.x//-document.getElementById('world_beehives_svg').getBoundingClientRect().x;

    d3.select('#world_card').html(info_data)
       .style("left", (x-document.getElementById('world_card').offsetWidth/2) + "px")
       .style("top", ((wb_scaleY(y)+wb_margin.top/2)/scale_coeff+10+document.getElementById('world_beehives_svg').getBoundingClientRect().y)+top + "px")
       .style("display", 'flex');

  })
  d3.select('#world_beehives')
  .on('mouseleave', function() {
    world_bee_plot.select('circle')
    .attr('cx', '-1000')
    d3.select('#world_card')
      .style('display','none')
  })

world_bee_plot.append('path')
 .attr('d', lineGen(beehives_world))
 .style('stroke','red')
 .style('stroke-width','2')

world_bee_plot.append('circle')
  .attr('cx', '-1000')
  .attr('r', 3);

world_bee_plot.append('text')
  .text('Number of Beehives')
  .attr("font-family", "sans-serif")
  .attr("font-size", "30px")
  .attr("transform", "translate(10, 20)")
world_bee_plot.append('text')
  .text('In the world')
  .attr("font-family", "sans-serif")
  .attr("font-size", "30px")
  .attr("transform", "translate(10, 55)")


var wb_xAxis = d3.axisBottom()
      .scale(wb_scaleX)
d3.select("#world_beehives_svg").append("g")
    .attr("class", "x axis")
    .attr("transform", "translate("+wb_margin.left/2+"," + (wb_height +wb_margin.top/2)+ ")")
    .call(wb_xAxis)
    .append('text')
    .text('Years')
    .attr("font-family", "sans-serif")
    .attr("font-size", "10px")
    .attr("transform", "translate("+wb_width/2+", 40)")
    .attr('fill','black')

var wb_yAxis = d3.axisRight()
      .scale(wb_scaleY)
d3.select("#world_beehives_svg").append("g")
    .attr("class", "y axis")
    .attr("transform", "translate("+(wb_width+wb_margin.left/2)+"," + (wb_margin.top/2)+ ")")
    .call(wb_yAxis)
    .append('text')
    .text('Number of Beehives')
    .attr("font-family", "sans-serif")
    .attr("font-size", "10px")
    .attr("transform", "translate(80, "+(wb_height/2-40)+") rotate(90)")
    .attr('fill','black')
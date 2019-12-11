

//Data options
data_names=['beehives','land_density','pop_density']


//year to show
var year_id = 56 //2017
//Data to show
var data_name=data_names[0]


//The info card
var info_card = d3.select("#map_card")

//For the color scale
var scale_dict={
    'beehives':10000000,
    'land_density':150,
    'pop_density':350
}

var low_color='white'
var high_color='yellow'

//color scale used to colr the counties
var bee_color = d3.scaleLinear()
                  .domain([0,scale_dict[data_name]])
                  .range([low_color,high_color])

// The svg containing the map
var svg = d3.select("#map"),
    width = +svg.attr("width"),
    height = +svg.attr("height");

//Data selection events
d3.select("#data_selection").on("change", function(){
    let form = d3.select("#data_selection")
    for(var i=0; i<form["_groups"][0][0].length; i++){
        if(form["_groups"][0][0][i].checked){
          data_name = form["_groups"][0][0][i].id;}
    }
    update_map(years[year_id])
})

//Create the map legend (the gradient, the color bar, and the ticks)
//the gradient
var legend = svg.append("defs")
      .append("svg:linearGradient")
      .attr("id", "gradient")
      .attr("x1", "0%")
      .attr("y1", "100%")
      .attr("x2", "100%")
      .attr("y2", "100%")
      .attr("spreadMethod", "pad");

    legend.append("stop")
      .attr("offset", "0%")
      .attr("stop-color", low_color)
      .attr("stop-opacity", 1);

    legend.append("stop")
      .attr("offset", "100%")
      .attr("stop-color", high_color)
      .attr("stop-opacity", 1);

//add the colorbar
svg.append("rect")
      .attr("width", width-200)
      .attr("height", 40)
      .style("fill", "url(#gradient)")
      .attr("transform", "translate(100,820)");


// Map and projection
var projection = d3.geoMercator()
    .center([0,20])                // GPS of location to zoom on
    .scale(199)                       // This is like the zoom
    .translate([ width/2, height/2 ])

//will contain map data
var dataGeo = {}

d3.json("https://raw.githubusercontent.com/holtzy/D3-graph-gallery/master/DATA/world.geojson",function(error,data) {
  ready(data)
});

function update_map(y){

    //Change color scale
    bee_color = d3.scaleLinear()
                  .domain([0,scale_dict[data_name]])
                  .range([low_color,high_color])

    //Redraw legend ticks
    //create ticks
    var ticks = d3.scaleLinear()
          .range([ 0,width-200])
          .domain([0,scale_dict[data_name]]);
    var yAxis = d3.axisBottom()
          .scale(ticks)
          .ticks(5);
    //add ticks
    d3.select('#legendTicks').remove()
    svg.append("g")
      .attr('id','legendTicks')
      .attr("transform", "translate(100, 860)")
      .call(yAxis)
      .append("text")// add legend title
      .attr('fill','black')
      .attr("y", -30)
      .attr('x',(width-180)/2)
      .text(data_name);
  
    //update map data
    d3.select('#MapPaths')
      .selectAll("path")
      .data(mapData(y))
      .transition()
      .duration('200')
      .attr("fill", function(d) {if (d.properties[data_name] !== null){return bee_color(d.properties[data_name]);} else{ return "#b8b8b8"} })

    d3.select('#MapPaths')
      .selectAll("path")
      .data(mapData(y))    
      .on('mouseover', function (d, i) {
          d3.select(this).transition()
               .duration('200')
               .style('opacity', '0.5');


          let info_data = "<label style='font-size:30px'>"+d.properties.name+'</label>'

          function numberWithCommas(x) {
                return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
            }
          for (let i = 0; i<data_names.length; i++){
            let value = (d.properties[data_names[i]] == null) ? "N/A" : numberWithCommas(Math.round(d.properties[data_names[i]]*100)/100)

            if (i==0){//Number of beehives
                info_data = info_data +'<Label>Number of beehives: '+value+'</label>'
            }
            if (i==1){//Number of beehives
                info_data = info_data +'<Label>Beehives density: '+value+'</label>'
            }
            if (i==2){//Number of beehives
                info_data = info_data +'<Label>Beehives per habitant: '+value+'</label>'
            }

          }


          info_card.html(info_data)
             .style("left", (d3.event.pageX + 10) + "px")
             .style("top", (d3.event.pageY - 15) + "px");
          //Makes the new div appear on hover:
          info_card.style("display", 'flex');

       })
       .on('mouseout', function (d, i) {
            d3.select(this).transition()
                 .duration('200')
                 .style('opacity', '1');
            //Makes the new div disappear:
            info_card.style("display", 'none');
       });



  //update year label
  /*d3.select('#MapPaths')
  .selectAll("text")// add Year Label
  .text('Beehives distribution in '+y);*/


}

function ready(data) {

    dataGeo = data  // World shape

    //take out antartica
    for (let i=0; i < dataGeo.features.length; i++){
      if (dataGeo.features[i].properties.name=='Antarctica'){
        dataGeo.features.splice(i, 1);
        break
      }
    }

    // Draw the map
    svg.append("g")
      .attr('id','MapPaths')
      .attr('transform','translate(65,0)')
      .selectAll("path")
      .data(mapData(years[year_id]))
      .enter()
      .append("path")
      .attr("fill", function(d) { if (d.properties[data_name] !== null){return bee_color(d.properties[data_name]);} else{ return "#b8b8b8"} })
      .attr("d", d3.geoPath()
                   .projection(projection))
      .style("stroke", "black")
      .style("opacity", 1)
      .on('mouseover', function (d, i) {
          d3.select(this).transition()
               .duration('1s')
               .style('opacity', '0.5');

          let info_data = "<label style='font-size:30px'>"+d.properties.name+'</label>'

          function numberWithCommas(x) {
                return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
            }
          for (let i = 0; i<data_names.length; i++){
            let value = (d.properties[data_names[i]] == null) ? "N/A" : numberWithCommas(Math.round(d.properties[data_names[i]]*100)/100)

            if (i==0){//Number of beehives
                info_data = info_data +'<Label>Number of beehives: '+value+'</label>'
            }
            if (i==1){//Number of beehives
                info_data = info_data +'<Label>Beehives density: '+value+'</label>'
            }
            if (i==2){//Number of beehives
                info_data = info_data +'<Label>Beehives per habitant: '+value+'</label>'
            }

          }


          info_card.html(info_data)
             .style("left", (d3.event.pageX + 10) + "px")
             .style("top", (d3.event.pageY - 15) + "px");
          //Makes the new div appear on hover:
          info_card.style("display", 'flex');

       })
       .on('mouseout', function (d, i) {
            d3.select(this).transition()
                 .duration('1s')
                 .style('opacity', '1');
            //Makes the new div disappear:
            info_card.style("display", 'none');
       });

    //add year Label
    /*d3.select('#MapPaths')
      .append("text")// add Year Label
      .style('font','bold 20px sans-serif')
      .attr('fill','black')
      .attr("y", 50)
      .attr('x',150)
      .text('Beehives distribution in '+years[year_id]);
    */

    //draw timeline
    //timeline area
    svg.append('g')
        .attr('id','timeline')
        .attr('transform',"translate(100 150)")
        .append('rect')
        .attrs({ x: 0, y: 0 , width: 150, height: 800, fill:'orange' ,opacity:'0'})
        .attr('transform',"translate(-10 -110)")
        .on('mouseout',function (){
            update_map(years[year_id]);
            d3.select('#timeline')
            .selectAll('text')
            .attr('y',year_id*10+8)
            .text(years[year_id])
        })
    //selected year label
    d3.select('#timeline')
       .append('text')
       .style('font','bold 15px sans-serif')
       .attr('fill','black')
       .attr("y", year_id * 10 + 8) //year id * 10 + 8
       .attr('x', 65)
       .text(years[year_id]);
    //ticks
    d3.select('#timeline')
        .append('g')
        .attr('id','yearTicks')
        .selectAll("rect")
        .data(years)
        .enter()
        .append("rect")
        .attrs(function(d,i){
            if(i != year_id){
                return { x: 0, y: 10*i , width: 40, height: 7, fill: 'black' , opacity:'0.5'}
            }else{
                return { x: 0, y: 10*i , width: 60, height: 7, fill: 'black' , opacity:'0.5'}
            
            }
        })
        .on('mouseover', function (d, i) {
              d3.select(this).transition()
                   .duration('300')
                   .attr('width', '60')
              d3.select('#timeline')
                .selectAll('text')
                .attr('y',i*10+8)
                .text(years[i])
              update_map(years[i])

           })
        .on('click', function (d, i) {
              //year = years[i]
              year_id=i

              //set size of other ticks to not selected width
              d3.select('#yearTicks')
                .selectAll('rect')
                .attrs(function(d,i){
                    if(i != year_id){
                        return {  width: 40}
                    }

                })

           })
        .on('mouseout', function (d, i) {
              if(i != year_id){
              d3.select(this).transition()
                   .duration('400')
                   .attr('width', '40');}
           })



    // Change color scale
    bee_color = d3.scaleLinear()
                  .domain([0,scale_dict[data_name]])
                  .range([low_color,high_color])

    //Draw legend ticks
    //create ticks
    var y = d3.scaleLinear()
          .range([ 0,width-200])
          .domain([0,scale_dict[data_name]]);
    var yAxis = d3.axisBottom()
          .scale(y)
          .ticks(5);
    //add ticks
    svg.append("g")
      .attr('id','legendTicks')
      .attr("transform", "translate(100, 860)")
      .call(yAxis)
      .append("text")// add legend title
      .attr('fill','black')
      .attr("y", -30)
      .attr('x',(width-180)/2)
      .text(data_name);

}


function mapData(year){
  var res = JSON.parse(JSON.stringify(dataGeo))

  let max_bee=0
  let max_pop=0
  let max_land=0

    //Build final map data
  for (let i=0; i < res.features.length; i++){
      let countrie = res.features[i].properties.name

      if (countrie in country_correspondance){

        countrie=country_correspondance[countrie]

      }

      if(Array.isArray(countrie)){
        for (let i =0; i<countrie.length; i++){
            if (countrie[i] in beehives[year]){
                countrie=countrie[i]
            }
        }
      }

      if (countrie in beehives[year]){
        let beehive=beehives[year][countrie]['beehives']
        let population = null
        let land_size =null

        if('population' in beehives[year][countrie]){
            population=beehives[year][countrie]['population']
        }
        if('land_size' in beehives[year][countrie]){
            land_size=beehives[year][countrie]['land_size']
        }

        let land_density = beehive/land_size
        let pop_density = beehive/population

        if (land_density == Infinity || beehive==null){land_density=null}
        if (pop_density == Infinity || beehive==null){pop_density=null}

        res.features[i].properties.beehives=beehive
        res.features[i].properties.land_density=land_density
        res.features[i].properties.pop_density=pop_density

        if(beehive > max_bee){max_bee=beehive}
        if(land_density > max_land){max_land=land_density}
        if(pop_density > max_pop){max_pop=pop_density}
      }
      else{
        res.features[i].properties.beehives=null
        res.features[i].properties.land_density=null
        res.features[i].properties.pop_density=null
        //console.log(res.features[i].properties.name)
      }
      
      
  }
  return res.features
}
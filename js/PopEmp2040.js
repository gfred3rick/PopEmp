	$(document).ready(function() {
  // Bind the onchange event for select#alunos
  $('.form-control').change(function() {
    // If the load_image option was selected, call the loadImage() function
    if ($(this).val() == 'load_image') {
      loadImage();
    }
    else {
       if ($(this).val() == 'load_image1') {
      loadImage1();
     }
	  else {
       if ($(this).val() == 'load_image2') {
      loadImage2();
    }
	 else {
       if ($(this).val() == 'load_image3') {
      loadImage3();
    }
	 else {
       if ($(this).val() == 'load_image4') {
      loadImage4();
    }
   else {
       if ($(this).val() == 'load_image5') {
      loadImage5();
    }
	}
	}
	}
	}
	}
	});
	});	
	
function loadImage(){
  $('#legendBox').css('backgroundImage', 'url(img/POP.png)');
  $('#legendBox').css('width', '130');
  $('#legendBox').css('height', '125');
}
function loadImage1(){
  $('#legendBox').css('backgroundImage', 'url(img/POPabs.png)');
  $('#legendBox').css('width', '140');
  $('#legendBox').css('height', '125');
}
function loadImage2(){
  $('#legendBox').css('backgroundImage', 'url(img/POPpct.png)');
  $('#legendBox').css('width', '130');
  $('#legendBox').css('height', '125');
}
function loadImage3(){
  $('#legendBox').css('backgroundImage', 'url(img/EMP.png)');
  $('#legendBox').css('width', '130');
  $('#legendBox').css('height', '125');
}
function loadImage4(){
  $('#legendBox').css('backgroundImage', 'url(img/EMPabs.png)');
  $('#legendBox').css('width', '145');
  $('#legendBox').css('height', '125');
}
function loadImage5(){
  $('#legendBox').css('backgroundImage', 'url(img/EMPpct.png)');
  $('#legendBox').css('width', '115');
  $('#legendBox').css('height', '125');
}
		
/*
 $('[rel=tooltip]').tooltip();
            if (document.body.clientWidth <= 767) {
                $('#sidebar').toggle();
                $('a.toggle i').toggleClass('icon-chevron-left icon-chevron-right');
            };
       */
        $(window).resize(function() {
            $('.tt-dropdown-menu').css('max-height', $('#container').height()-$('.navbar').height()-20);
        });
/*
        $('a.toggle').click(function() {
            $('a.toggle i').toggleClass('icon-chevron-left icon-chevron-right');
            $('#map').toggleClass('col-sm-9 col-lg-9 col-sm-12 col-lg-12');
            $('#sidebar').toggle();
            map.invalidateSize();
            return false;
        });
		*/
  var getParameterByName = function(name) {
      var match = RegExp('[?&]' + name + '=([^&]*)')
                        .exec(window.location.search);
      return match ?
           decodeURIComponent(match[1].replace(/\+/g, ' '))
           : null;
  }

  var map = L.map("map", {
            zoom: 9,
            center: new L.LatLng(39.97, -75.16),
			});
			
	var Stamen_TonerLite = L.tileLayer('http://stamen-tiles-{s}.a.ssl.fastly.net/toner-lite/{z}/{x}/{y}.{ext}', {
        attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
        subdomains: 'abcd',
        minZoom: 9,
        maxZoom: 20,
        ext: 'png'
    }).addTo(map);
      // set view to leeds, and add layer. method chaining, yumm.
		
		
  function tboro(e) {
		//	resetHighlight();
			var layer = e.target;
			var props = layer.feature.properties
      var info = '<h1>' + props.Name + '</h1>';
	
			var content = "<div class='MunLabel'>"+ (props.MCD) +", " +(props.State_Name) +"</div>"
										+'<a class="one" href="' + (props.WebLink)+'" target="_blank">' + "View Municipal Website" + "</a>";
			
			document.getElementById('MunHeader').innerHTML = content;
  };
  
  var label = new L.Label(); 
 
  function hover(e) { 
      var layer = e.target;
      var props = layer.feature.properties;
      info.update(layer.feature.properties);
      
      layer.setStyle({
          weight: 3,
          color: '#3AA346',
          opacity:1
      })
	
    if (!L.Browser.ie && !L.Browser.opera) {
        layer.bringToFront();
    }
  }

  function resetHighlight(e) {
	    var layer = e.target;                        
	  //return layer to back of map
	    if (!L.Browser.ie && !L.Browser.opera) {
	        layer.bringToBack();
	    } 
	  
      lsoaLayer.resetStyle(e.target);
	    info.update();
  }
		
  var viewCenter = new L.Control.ViewCenter();
			map.addControl(viewCenter);

  var scaleControl = L.control.scale({
      position: 'bottomright'
  });

  /*
    if (document.body.clientWidth <= 767) {
        var isCollapsed = true;
        } else {
            var isCollapsed = false;
            map.addControl(scaleControl);
        };

  */
  var currentLayer = getParameterByName("l") || "POP_2040";
  var getIMDColor = function(value) {
      layer = currentLayer || "Pop2040";
      var series = {
          "POP_2040": {
            "breaks": [24001, 12001, 6001, 3001, 0],
            "colors": ["#BF6E26", "#E09016", "#FAC370", "#FFE0B3", "#FFF5E6" ]	
          },
          "Abs_10_40": {
            "breaks": [10000, 4001, 1501, 1, -488],
            "colors": ["#6A51A3", "#9E9AC8", "#CBC9E2", "#F2F0F7",  "#9C9C9C" ]	
          },
    	    "Per_10_40": {
            "breaks": [.50, .21, .06, 0, -.05599999 ],
            "colors": ["#2171B5", "#6BAED6", "#BDD7E7", "#EFF3FF",  "#9C9C9C" ]
          },
    	    "Emp40p": {
            "breaks": [42001,18501, 7001,1001, 0 ],
            "colors": ["#B30000", "#E34A33", "#FC8D59", "#FDCC8A",  "#FEF0D9" ]
    		  },
    		  "Abs_10_40p": {
            "breaks": [7001, 3201, 1001, 1, -285 ],
            "colors": ["#980043", "#DD1C77", "#DF65B0", "#D7B5D8",  "#9C9C9C" ]
    		  },
    		  "Per10_40p": {
            "breaks": [.60, .30, .13, 0, -.185668 ],
            "colors": ["#2171B5", "#6BAED6", "#BDD7E7", "#EFF3FF",  "#9C9C9C" ]
    	    },
      }
      for (var i=0; i < series[layer]["breaks"].length; i++){
        if (value > series[layer]["breaks"][i]){
          return series[layer]["colors"][i];
        }
      }
      return "#FFFFFF";
    }

  var getIMDStyle = function(feature) {

    return {
        color: '#666',
        weight: 1,
        opacity: 1,
        fillOpacity: .75,
        fillColor: (feature.properties) ?
        getIMDColor(feature.properties[currentLayer]) : null
    }
  };

  var lsoaLayer = L.geoJson(null, {
      style: getIMDStyle,
      onEachFeature: function(feature, layer){
          if (feature.properties) {
          	 // layer.bindLabel('<b>' + [feature.properties.Mun_Name] + '</b>');
              layer.on({click:populateCounty});
          	  layer.on({click:tboro});
          	  layer.on({mouseover: hover});
          	  layer.on({mouseout: resetHighlight});
          }
      }
  });

  $.getJSON('data/PopEmp.js', function (data) {
      lsoaLayer.addData(data);
        });

  var DVRPC = L.geoJson(null, {
      style: {
          color: 'black',
          weight: 4,
          fill: false,
          opacity: 0.75,
          clickable: false
      }
  });
  
  $.getJSON("data/County_DVRPC.js", function (data) {
      DVRPC.addData(data);
  });

var info = L.control();

info.onAdd = function (map) {
    this._div = L.DomUtil.create('div', 'info'); // create a div with a class "info"
    this.update();
    return this._div;
};

// method that we will use to update the control based on feature properties passed
info.update = function (props) {
    this._div.innerHTML = '<B></B>' +  (props ?
        '<h4>' + props.Mun_Name + '</h4>'
        : '');
};

info.addTo(map);


map.addLayer(lsoaLayer);
map.addLayer(DVRPC);

//////hack to resolve layerOrder add after layers added
lsoaLayer.once('mouseover', function(e){        //create eventListener on mouseover of lsoaLayer (only active once rendered)
    DVRPC.bringToFront();                     //push counties to front of map pane
   // lsoaLayer.off();                          //kill eventListener          
});

$(function () {
    var chart = new Highcharts.Chart({
        chart: {
            renderTo: 'containerRegValue',
			type: 'column',
			
        }, 
		title: {
            text: 'DVRPC Region Forecasts 2010-2040',
            x: -20 //center
        },
			colors: ['#BD6C24','#B30000'],
		xAxis: {
            categories: ['2000', '2010', '2015', '2020', '2025', '2030',
                '2035', '2040']
        },
        series: [{
            name:'Employment',
			data: [3435121,2950387,2977104,3024245,3105562,3189518,3239154,3268882], 
			},{
			name:'Population',
			data: [5371837,5609921,5664674,5760562,5917138,6079713,6177813,6244165],
 			
        }]
    });

    $(".test").change(function(){
        var value = this.getAttribute("value");
        
        if(value == 'a'){
            chart.series[0].setData([3435121,2950387,2977104,3024245,3105562,3189518,3239154,3268882]);   
			      chart.series[1].setData([5371837,5609921,5664674,5760562,5917138,6079713,6177813,6244165]);   
        } else if(value == 'b'){
      			chart.series[0].setData([2455064,2086929,2107656,2142392,2199768,2259821,2297798,2322643]); 
      			chart.series[1].setData([3849665,4008994,4055616,4128746,4231683,4340620,4414768,4471792]);   
        } else if(value == 'c') {
      			chart.series[0].setData([980057,863458,869448,881853,905793,929697,941356,946239]);   
      			chart.series[1].setData([1522172,1600927,1609058,1631816,1685455,1739093,1763046,1772373]);   			
        } else {
            alert("Error!");    
        }
    }); 
});

  $(function () {
    var chart = new Highcharts.Chart({
        chart: {
            renderTo: 'containerCountyPopValue',
      			type: 'line',
      			marginBottom: 120,
                  marginLeft: 75,
      			//marginRight: 20,
            width: 500
        }, 
    		title: {
            text: 'DVRPC County Population Forecasts 2010-2040',
            x: -20 //center
        },
    		legend: {
            width:300,
            floating: true,
            align: 'center',
            x: 10, // = marginLeft - default spacingLeft
            itemWidth: 100,
            borderWidth: 1
        },
    		colors: ['#3961A2','#82D38C','#D382CA','#A27A39','#A24539','#3996A2','#A23961','#39A27A','#A23996'],
    		xAxis: {
            categories: ['2000', '2010', '2015', '2020', '2025', '2030','2035', '2040']
        },
    		yAxis: {
            title: {
                text: 'People'
            }
        },
        series: [{
            name:'Bucks',
    		    data: [597636,625249,634879,654140,673290,692440,709795,727150], 
    			  },{
      			name:'Burlington',
      			data: [423397,448734,450916,457125,471733,486341,492551,494733],
       			},{
      			name:'Camden',
      			data: [508929,513657,514352,516329,520980,525631,527608,528303],
       			},{
      			name:'Chester',
      			data: [433512,498886,516581,538809,573108,607407,629635,647330],
       			},{
      			name:'Delaware',
      			data: [551989,558979,559501,560986,564481,567976,569461,569983],
       			},{
      			name:'Gloucester',
      			data: [255719,288288,292453,304310,332203,360538,371953,376118],
       			},{
      			name:'Mercer',
      			data: [334127,350248,351337,354051,360538,367025,370934,373219],
       			},{
      			name:'Montgomery',
      			data: [748978,799874,808531,823564,848463,873361,887364,896740],
       			},{
      			name:'Philadelphia',
      			data: [1517550,1526006,1536124,1551247,1572342,1599436,1618512,1630589],
     
            }]
    });
   $(function () {
    var chart = new Highcharts.Chart({
        chart: {
            renderTo: 'containerCountyEmpValue',
			      type: 'line',
			      marginBottom: 120,
            marginLeft: 75,
			//marginRight: 20,
            width: 500
      }, 
  		title: {
            text: 'DVRPC County Employment Forecasts 2010-2040',
            x: -20 //center
      },
			legend: {
            width:300,
            floating: true,
            align: 'center',
            x: 10, // = marginLeft - default spacingLeft
            itemWidth: 100,
            borderWidth: 1
      },
  		colors: ['#3961A2','#82D38C','#D382CA','#A27A39','#A24539','#3996A2','#A23961','#39A27A','#A23996'],
  		xAxis: {
            categories: ['2000', '2010', '2015', '2020', '2025', '2030','2035', '2040']
      },
		  yAxis: {
            title: {
                text: 'Jobs'
            }
      },
      series: [{
          name:'Bucks',
			data: [325336,293325,296215,302961,313899,324832,331329,335747], 
			},{
			name:'Burlington',
			data: [300146,217229,218472,221440,228422,235404,238372,239414],
 			},{
			name:'Camden',
			data: [286264,263406,265886,267425,269769,272076,273581,274124],
 			},{
			name:'Chester',
			data: [316144,292015,301075,312456,330019,347581,358962,368022],
 			},{
			name:'Delaware',
			data: [273943,238488,238733,239431,241072,242713,243410,243655],
 			},{
			name:'Gloucester',
			data: [111032,116151,117596,121708,131382,141056,145169,146614],
 			},{
			name:'Mercer',
			data: [282615,266672,267493,271279,276220,281160,284235,286087],
 			},{
			name:'Montgomery',
			data: [710353,542264,548136,558371,575496,592621,601597,605507],
 			},{
			name:'Philadelphia',
			data: [829288,720837,723497,729173,739283,752075,762499,769711],
 
        }]
    }); 
     }); 
});

function updatePopCty(Values){
    var CtyChart = {
        chart: {
            renderTo: 'containerMunPop',
            type: 'line',
            backgroundColor: 'white',	
        },
        
        title: {
            text: 'Municipal Population 2010-2040',
            x: -20 //center
        },	
		
		   xAxis: {
            categories: ['2000', '2010', '2015', '2020', '2025', '2030','2035', '2040']
        },
		
      	colors: ['#B30000'],
        yAxis: {
            title: {
                text: 'Population'
            }
        },
        legend:{
			      enabled: false
		    },
		    tooltip: {
            valueDecimals: 0,
            //valuePrefix: '$',
           // valueSuffix: ' USD'
        },
        credits: {
            enabled: false
        },
        series: [{
            name:'Population',
			      id: 'Values',
            data: []
        }]
    };
    var Labels = ["2000", "2010", "2015", "2020","2025", "2030", "2035","2040"],
        counData = [];
        for (var i = 0; i < Values.length; i++){
            counData.push({
                name: Labels[i],
                y: Values[i]
            })
        }
    CtyChart.series[0].data = counData;
    var chart2 = new Highcharts.Chart(CtyChart)

}

function updateEmpChart(emp){
    var PopCty = {
        chart: {
            renderTo: 'containerMunEmp',
            type: 'line',
            backgroundColor: 'white',	
        },
        title: {
            text: 'Municipal Employment 2010-2040',
            x: -20 //center
        },
		   	colors: ['#BD6C24'],
		    xAxis: {
            categories: ['2000', '2010', '2015', '2020', '2025', '2030','2035', '2040']
        },
        yAxis: {
            title: {
                text: 'Population'
            }
        },
			  legend:{
			      enabled: false
		    },
        credits: {
            enabled: false
        },
			  tooltip: {
            valueDecimals: 0,
            //valuePrefix: '$',
           // valueSuffix: ' USD'
        },
        series: [{
            name:'Employment',
				    id: 'Values',
            data: []
        }]
    };
    
    var Labels = ["2000", "2010", "2015", "2020","2025", "2030", "2035","2040"],
        counData = [];
    
    for (var i = 0; i < emp.length; i++){
        counData.push({
            name: Labels[i],
            y: emp[i]
        })
    }
    
    PopCty.series[0].data = counData;
    
    var chart3 = new Highcharts.Chart(PopCty)

}



   //////FROM CRASH
	   
     // $("#layer-" + currentLayer).attr("selected", true);
        $('select option[name="layer"]').click(function(){
		//$(".layers input").click(function(){
          currentLayer = $(this).data("layer");
          if (currentLayer == "none") {
            map.removeLayer(lsoaLayer);
          } else {
            if (!map.hasLayer(lsoaLayer)){
              map.addLayer(lsoaLayer);
            } else {
              lsoaLayer.setStyle(getIMDStyle);
            }
          }
        });




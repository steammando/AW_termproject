 
var chart; 
var temp; 

var index = [10,10,10,10,10,10,10,10,10];


                                            $(function () { 

                                               
                                                $(document).ready(function() { 
                                                    
                                                    chart = new Highcharts.Chart({
                                                         chart: { 
                                                            renderTo: 'container',
                                                             plotBackgroundColor: null,
                                                             plotBorderWidth: null,
                                                             plotShadow: true
                                                        }, 
                                                        title: { 
                                                            text: '진행중인 투표 현황'
                                                         }, 
                                                        tooltip: { 
                                                            formatter: function() {
                                                                 return '<b>'+ this.point.name +'</b>: '+ this.y +'W';
                                                             } 
                                                        }, 
                                                        plotOptions: { 
                                                            pie: { 
                                                                allowPointSelect: true,
                                                                 cursor: 'pointer',
                                                                 dataLabels: { 
                                                                    enabled: true,
                                                                     color: '#000000',
                                                                     connectorColor: '#000000',
                                                                     formatter: function() {
                                                                         return '<b>'+ this.point.name +'</b>: '+ this.y +'W';
                                                                     } 
                                                                } 
                                                            } 
                                                        }, 
                                                        series: [{ 
                                                            type: 'pie', 
                                                            name: 'Browser share',
                                                             data: [ 
                                                                ['사용량',  index[0]],
                                                                 { 
                                                                    name: '절전량',
                                                                     y:index[1],
                                                                     sliced: true,
                                                                     selected: true
                                                                 }, 
                                                                ['직접끔',  index[2]]
                                                             ]                         
                                                        }], 
                                                        colors: [ 
                                                            '#DDDDDD', 
                                                            '#89C54E', 
                                                            '#92A8CD' 
                                                        ] 
                                                    }); 
                                                }); 
                                            }); 

 function start(value) { 
         
        $("#container").addClass("playing");
         var series = chart.series[0];
        
        
        index[value-1]++;
        temp = setTimeout( function() { 
            series.addPoint( { 
                                name: '사용량',
                                 y: index[0],
                                 color: '#DDDDDD'
                                 } ,false,true,false);
 
            series.addPoint( {    name: '절전량',
                                 y: index[1],
                                 sliced: true,
                                 selected: true,
                                 color: '#89C54E'
                                 } ,false,true,false);
 
            series.addPoint( {    name: '직접끔',
                                 y: index[2],
                                 color: '#92A8CD'
                                 } ,true,true,false);
            
            
        }, 100); 
    } 

    function stop(value) { 
       // $("#container").removeClass("playing");
         //clearTimeout(temp); 
        
        $("#container").addClass("playing");
         var series = chart.series[0];
          index[value-1]--;
        temp = setTimeout( function() { 
            series.addPoint( { 
                                name: '사용량',
                                 y: index[0],
                                 color: '#DDDDDD'
                                 } ,false,true,false);
 
            series.addPoint( {    name: '절전량',
                                 y: index[1],
                                 sliced: true,
                                 selected: true,
                                 color: '#89C54E'
                                 } ,false,true,false);
 
            series.addPoint( {    name: '직접끔',
                                 y: index[2],
                                 color: '#92A8CD'
                                 } ,true,true,false);
            
        }, 100); 
    } 



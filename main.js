const elevDate = (elevation) => {
  if(elevation>=5500){
    return 'Oct. 1 - Oct. 6'
  }else{
    return 'other'
  }
}

Highcharts.chart('container', {
    title: {
        text: '2021 Fall Foliage Guide'
    },
    subtitle: {
        text: 'Blue Ridge Parkway, NC'
    },
    xAxis: {
        reversed: true,
        title: {
            enabled: true,
            text: 'Milepost'
        },
        labels: {
            format: '{value}'
        },
        accessibility: {
            rangeDescription: 'Range: 0 to 80 km.'
        },
        maxPadding: 0.05,
        showLastLabel: true,
        max: 469.1,
        min: 215.5
    },
    yAxis: {
        title: {
            text: 'Elevation'
        },
        gridLineWidth: 0,
        labels: {
            format: '{value} ft'
        },
        accessibility: {
            rangeDescription: 'Range: -90°C to 20°C.'
        },
        plotBands: [{
          from: 5500,
          to: 7000,
          color: '#8f2f94',
          label: {
            text: 'Oct. 1 - Oct. 6',
            style: {
              color: 'black',
              fontWeight: 'bold'
            },
            align: 'right',
            x: -5
          },
        },{
          from: 4500,
          to: 5500,
          color: '#f72b24',
          label: {
            text: 'Oct. 7 - Oct. 13',
            style: {
              color: 'black',
              fontWeight: 'bold'
            },
            align: 'right',
            x: -5
          }
        },{
          from: 3500,
          to: 4500,
          color: '#ff7033',
          label: {
            text: 'Oct. 14 - Oct. 20',
            style: {
              color: 'black',
              fontWeight: 'bold'
            },
            align: 'right',
            x: -5
          }
        },{
          from: 2500,
          to: 3500,
          color: '#ffab45',
          label: {
            text: 'Oct. 21 - Oct. 27',
            style: {
              color: 'black',
              fontWeight: 'bold'
            },
            align: 'right',
            x: -5
          },
        },{
          from: 1500,
          to: 2500,
          color: '#f6e953',
          label: {
            text: 'Oct. 28 - Nov. 3',
            style: {
              color: 'black',
              fontWeight: 'bold'
            },
            align: 'right',
            x: -5
          }
        },{
          from: 1000,
          to: 1500,
          color: '#ffff8d',
          label: {
            text: 'Nov. 4 - Nov. 11',
            style: {
              color: 'black',
              fontWeight: 'bold'
            },
            align: 'right',
            x: -5
          }
        }]
    },
    legend: {
        enabled: false
    },
    tooltip: {
      formatter: function() {
        let elev = this.y
        let name = this.series.name
        let timeFrame
        let formatting = `<b>${name}:</b>`
        if(elev>=5500){
          timeFrame = 'Oct. 1 - Oct. 6'
        }else if(elev>=4500 && elev<5500){
          timeFrame = 'Oct. 7 - Oct. 13'
        }else if(elev>=3500 && elev<4500){
          timeFrame = 'Oct. 14 - Oct. 20'
        }else if(elev>=2500 && elev<3500){
          timeFrame = 'Oct. 21 - Oct. 27'
        }else if(elev>=1500 && elev<2500){
          timeFrame = 'Oct. 28 - Nov. 3'
        }
        formatting += `</br><br/><p>Peak leaf color is expected from</p><br/>${timeFrame}`

        return formatting
      }
        /*headerFormat: '<b>{series.name}</b><br/>',
        pointFormat: `{point.x}: {point.y} ft`*/
    },
    plotOptions: {
        spline: {
            marker: {
                enable: false
            },
        },
        scatter: {
          marker: {
            symbol: 'diamond',
          }
        }
    },
    series: [{
      type: 'spline',
      name: 'Blue Ridge Parkway',
      data: profData,
      color: 'black',
      lineWidth: 4,
      zIndex: 1,
    },{
      type: 'spline',
      name:'Temp Wider',
      data: profData,
      color: 'white',
      lineWidth: 6,
      zIndex: 0,
    },{
      type: 'scatter',
      name: 'All Locations',
      data: allLocs,
      color: 'gold',
      zIndex: 2,
      marker: {
        radius: 10
      }
    },{
      type: 'scatter',
      name: 'Waterrock Knob',
      data: waterrock,
      color: 'green',
      zIndex: 3,
      marker: {
        radius: 6
      }
    },{
      type: 'scatter',
      name: 'Richland Balsam',
      data: richland,
      color: 'green',
      zIndex: 3,
      marker: {
        radius: 6
      }
    },{
      type: 'scatter',
      name: 'Black Balsam',
      data: balsam,
      color: 'green',
      zIndex: 3,
      marker: {
        radius: 6
      }
    },{
      type: 'scatter',
      name: 'Graveyard Fields',
      data: graveyard,
      color: 'green',
      zIndex: 3,
      marker: {
        radius: 6
      }
    },{
      type: 'scatter',
      name: 'Craggy Gardens',
      data: craggy,
      color: 'green',
      zIndex: 3,
      marker: {
        radius: 6
      }
    },{
      type: 'scatter',
      name: 'Mount Pisgah',
      data: pisgah,
      color: 'green',
      zIndex: 3,
      marker: {
        radius: 6
      }
    },{
      type: 'scatter',
      name: 'Asheville/Folk Art Center',
      data: asheville,
      color: 'green',
      zIndex: 3,
      marker: {
        radius: 6
      }
    },{
      type: 'scatter',
      name: 'Mount Mitchell State Park Entrance',
      data: mitchell,
      color: 'green',
      zIndex: 3,
      marker: {
        radius: 6
      }
    },{
      type: 'scatter',
      name: 'Crabtree Falls',
      data: crabtree,
      color: 'green',
      zIndex: 3,
      marker: {
        radius: 6
      }
    },{
      type: 'scatter',
      name: 'Linville Falls',
      data: linville,
      color: 'green',
      zIndex: 3,
      marker: {
        radius: 6
      }
    },{
      type: 'scatter',
      name: 'Linn Cove Viaduct',
      data: viaduct,
      color: 'green',
      zIndex: 3,
      marker: {
        radius: 6
      }
    },{
      type: 'scatter',
      name: 'Moses H. Cone Memorial Park',
      data: moses,
      color: 'green',
      zIndex: 3,
      marker: {
        radius: 6
      }
    }]
});

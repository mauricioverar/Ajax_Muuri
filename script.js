
//          ***   grafico puntos   ***
$(document).ready(function(){
    var dataPoints = [];
    var options = {
        animationEnabled: true,
        theme: "light2",
        title: {
            text: "Daily Sales Data"
        },
        axisX: {
            valueFormatString: "DD MMM YYYY",
        },
        axisY: {
            title: "USD",
            titleFontSize: 24,
        },
        data: [{
            type: "spline",
            dataPoints: dataPoints
        }]
    };
    $.ajax({
        type:"GET",
        url:"https://mindicador.cl/api/dolar",
        dataType:"json",
        success: function(datos) {
            let datosApi = datos.serie;
            console.log(datosApi);
            for (var i = 0; i < datosApi.length; i++){// ojo cierre de llave }  33 
                dataPoints.push({
                    x: new Date(datosApi[i].fecha),
                    y: datosApi[i].valor
                });
            }
        $("#chartContainer").CanvasJSChart(options);
        },
        error: function(error) {
            console.log(error)
        }
    });
});

// muuri concepto drag & drop(arrastrar y soltar)
var grid = new Muuri('.grid',
    {
    dragEnabled: true,
    dragReleaseEasing: 'ease',
    },
)
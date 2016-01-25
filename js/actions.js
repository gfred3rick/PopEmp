
var layersearch, props, header, content, featureName, featureClass, featureIcon;

function populateCounty(e) {
  //  lsoaLayer.setStyle({fillColor: "#396ab2"});
    var layer = e.target;
    layer.setStyle({fillColor: "#312867"});

    var props = layer.feature.properties,

    MunPop = [props.POP_2000, props.POP_2010, props.POP_2015, props.POP_2020, props.POP_2025, props.POP_2030, props.POP_2035, props.POP_2040],
    CtyPop = [props.SUM_POP00, props.SUM_POP10, props.SUM_POP15, props.SUM_POP20, props.SUM_POP25, props.SUM_POP30, props.SUM_POP35, props.SUM_POP40],
    MunEmp =  [props.Emp00, props.Emp10, props.Emp15, props.Emp20, props.Emp25, props.Emp30, props.Emp35, props.Emp40],
    CtyEmp =  [props.SUM_Emp00, props.SUM_Emp10, props.SUM_Emp15, props.SUM_Emp20, props.SUM_Emp25, props.SUM_Emp30, props.SUM_Emp35, props.SUM_Emp40];

    updatePopCty(MunPop);
   // updateCtyChart(CtyPop);
    updateEmpChart(MunEmp);
    //updateEmpCty(CtyEmp);
    $('#myTab a[href="#POP"]').tab('show')
}

		

var wms_layers = [];


        var lyr_GoogleHybrid_0 = new ol.layer.Tile({
            'title': 'Google Hybrid',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var lyr_ARBEQUINA_1 = new ol.layer.Image({
                            opacity: 1,
                            title: "ARBEQUINA",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/ARBEQUINA_1.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-652854.899831, 4343816.938978, -651374.505478, 4345438.416252]
                            })
                        });
var lyr_ARBOSANA_2 = new ol.layer.Image({
                            opacity: 1,
                            title: "ARBOSANA",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/ARBOSANA_2.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-651324.492155, 4343957.066644, -650014.143099, 4344587.641139]
                            })
                        });
var format_MUESTRAS_ARBOSANA_3 = new ol.format.GeoJSON();
var features_MUESTRAS_ARBOSANA_3 = format_MUESTRAS_ARBOSANA_3.readFeatures(json_MUESTRAS_ARBOSANA_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MUESTRAS_ARBOSANA_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MUESTRAS_ARBOSANA_3.addFeatures(features_MUESTRAS_ARBOSANA_3);
var lyr_MUESTRAS_ARBOSANA_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_MUESTRAS_ARBOSANA_3, 
                style: style_MUESTRAS_ARBOSANA_3,
                interactive: true,
    title: 'MUESTRAS_ARBOSANA<br />\
    <img src="styles/legend/MUESTRAS_ARBOSANA_3_0.png" /> 1<br />\
    <img src="styles/legend/MUESTRAS_ARBOSANA_3_1.png" /> 2<br />'
        });
var format_MUESTRAS_ARBEQUINA_4 = new ol.format.GeoJSON();
var features_MUESTRAS_ARBEQUINA_4 = format_MUESTRAS_ARBEQUINA_4.readFeatures(json_MUESTRAS_ARBEQUINA_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MUESTRAS_ARBEQUINA_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MUESTRAS_ARBEQUINA_4.addFeatures(features_MUESTRAS_ARBEQUINA_4);
var lyr_MUESTRAS_ARBEQUINA_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_MUESTRAS_ARBEQUINA_4, 
                style: style_MUESTRAS_ARBEQUINA_4,
                interactive: true,
    title: 'MUESTRAS_ARBEQUINA<br />\
    <img src="styles/legend/MUESTRAS_ARBEQUINA_4_0.png" /> 1<br />\
    <img src="styles/legend/MUESTRAS_ARBEQUINA_4_1.png" /> 2<br />\
    <img src="styles/legend/MUESTRAS_ARBEQUINA_4_2.png" /> 3<br />'
        });

lyr_GoogleHybrid_0.setVisible(true);lyr_ARBEQUINA_1.setVisible(true);lyr_ARBOSANA_2.setVisible(true);lyr_MUESTRAS_ARBOSANA_3.setVisible(true);lyr_MUESTRAS_ARBEQUINA_4.setVisible(true);
var layersList = [lyr_GoogleHybrid_0,lyr_ARBEQUINA_1,lyr_ARBOSANA_2,lyr_MUESTRAS_ARBOSANA_3,lyr_MUESTRAS_ARBEQUINA_4];
lyr_MUESTRAS_ARBOSANA_3.set('fieldAliases', {'ZONA': 'ZONA', 'MUESTRA_N�': 'MUESTRA_N�', });
lyr_MUESTRAS_ARBEQUINA_4.set('fieldAliases', {'ZONA': 'ZONA', 'MUESTRA_N': 'MUESTRA_N', });
lyr_MUESTRAS_ARBOSANA_3.set('fieldImages', {'ZONA': 'Range', 'MUESTRA_N�': 'Range', });
lyr_MUESTRAS_ARBEQUINA_4.set('fieldImages', {'ZONA': 'Range', 'MUESTRA_N': 'Range', });
lyr_MUESTRAS_ARBOSANA_3.set('fieldLabels', {'ZONA': 'no label', 'MUESTRA_N�': 'no label', });
lyr_MUESTRAS_ARBEQUINA_4.set('fieldLabels', {'ZONA': 'no label', 'MUESTRA_N': 'no label', });
lyr_MUESTRAS_ARBEQUINA_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});
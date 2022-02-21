var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_WinnebagoFarmParcels_1 = new ol.format.GeoJSON();
var features_WinnebagoFarmParcels_1 = format_WinnebagoFarmParcels_1.readFeatures(json_WinnebagoFarmParcels_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_WinnebagoFarmParcels_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_WinnebagoFarmParcels_1.addFeatures(features_WinnebagoFarmParcels_1);
var lyr_WinnebagoFarmParcels_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_WinnebagoFarmParcels_1, 
                style: style_WinnebagoFarmParcels_1,
                interactive: true,
                title: '<img src="styles/legend/WinnebagoFarmParcels_1.png" /> WinnebagoFarmParcels'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_WinnebagoFarmParcels_1.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_WinnebagoFarmParcels_1];
lyr_WinnebagoFarmParcels_1.set('fieldAliases', {'CVTTXCD': 'CVTTXCD', 'CVTTXDSCRP': 'CVTTXDSCRP', 'PARCELID': 'PARCELID', 'STATEDAREA': 'STATEDAREA', 'OWNERNME1': 'OWNERNME1', 'OWNERNME2': 'OWNERNME2', 'OWNERNAMES': 'OWNERNAMES', 'PSTLADDRES': 'PSTLADDRES', 'PSTLADDR_1': 'PSTLADDR_1', 'PSTLCITY': 'PSTLCITY', 'PSTLSTATE': 'PSTLSTATE', 'PSTLZIP5': 'PSTLZIP5', 'PSTLZIP4': 'PSTLZIP4', 'FULLCSZ': 'FULLCSZ', 'SCHLTXCD': 'SCHLTXCD', 'SCHLDSCRP': 'SCHLDSCRP', 'LNDVALUE': 'LNDVALUE', 'CNTASSDVAL': 'CNTASSDVAL', 'CNTTXBLVAL': 'CNTTXBLVAL', 'ASSMTURL': 'ASSMTURL', 'SRCREF': 'SRCREF', 'PRPRTYDSCR': 'PRPRTYDSCR', 'GISACRE': 'GISACRE', 'SITEADDRES': 'SITEADDRES', 'SITECSZ': 'SITECSZ', 'CVTURL': 'CVTURL', 'TAX_PAR_ID': 'TAX_PAR_ID', 'LASTUPDATE': 'LASTUPDATE', 'HOOKDATE': 'HOOKDATE', });
lyr_WinnebagoFarmParcels_1.set('fieldImages', {'CVTTXCD': '', 'CVTTXDSCRP': '', 'PARCELID': '', 'STATEDAREA': '', 'OWNERNME1': '', 'OWNERNME2': '', 'OWNERNAMES': '', 'PSTLADDRES': '', 'PSTLADDR_1': '', 'PSTLCITY': '', 'PSTLSTATE': '', 'PSTLZIP5': '', 'PSTLZIP4': '', 'FULLCSZ': '', 'SCHLTXCD': '', 'SCHLDSCRP': '', 'LNDVALUE': '', 'CNTASSDVAL': '', 'CNTTXBLVAL': '', 'ASSMTURL': '', 'SRCREF': '', 'PRPRTYDSCR': '', 'GISACRE': '', 'SITEADDRES': '', 'SITECSZ': '', 'CVTURL': '', 'TAX_PAR_ID': '', 'LASTUPDATE': '', 'HOOKDATE': '', });
lyr_WinnebagoFarmParcels_1.set('fieldLabels', {'CVTTXCD': 'no label', 'CVTTXDSCRP': 'no label', 'PARCELID': 'inline label', 'STATEDAREA': 'no label', 'OWNERNME1': 'no label', 'OWNERNME2': 'no label', 'OWNERNAMES': 'no label', 'PSTLADDRES': 'no label', 'PSTLADDR_1': 'no label', 'PSTLCITY': 'no label', 'PSTLSTATE': 'no label', 'PSTLZIP5': 'no label', 'PSTLZIP4': 'no label', 'FULLCSZ': 'no label', 'SCHLTXCD': 'no label', 'SCHLDSCRP': 'no label', 'LNDVALUE': 'no label', 'CNTASSDVAL': 'no label', 'CNTTXBLVAL': 'no label', 'ASSMTURL': 'no label', 'SRCREF': 'no label', 'PRPRTYDSCR': 'no label', 'GISACRE': 'no label', 'SITEADDRES': 'no label', 'SITECSZ': 'no label', 'CVTURL': 'no label', 'TAX_PAR_ID': 'no label', 'LASTUPDATE': 'no label', 'HOOKDATE': 'no label', });
lyr_WinnebagoFarmParcels_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});
import React from 'react';
import 'https://cdn.jsdelivr.net/gh/openlayers/openlayers.github.io@master/en/v6.14.1/build/ol.js';
import './app.css'

function App() {
  
   new ol.Map({
    target: 'map',
    layers: [
      new ol.layer.Tile({
        source: new ol.source.OSM(),
        
        
      })
    ],
    view: new ol.View({
      center: ol.proj.fromLonLat([-47.0615633,-22.8979047]),
      zoom: 15
    })
  });
  
  return (
    <>
       
    
    
    
    
    
  
  
    <h2>My Map</h2>
    <div id="map" class="map"></div>
    
    
  
    
    </>
     
  )
}
export default App

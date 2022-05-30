import React from "react";

import './googleMaps.scss'

  function Map() {
    return (
      <div className="wrapper">
          <div className="container">
            <div className="textContainer">
        <h3 className="header">Søg på stedet</h3>
        <p className="text">Kan du ikke finde stedet du søger på kortet? Prøv at skrive navnet på den café eller restaurant du søger og se efter resultatet under.</p>
        </div>
        <div className="mapContainer">
        <iframe className="map" src="https://storage.googleapis.com/maps-solutions-a4wpvqs0s9/locator-plus/scpm/locator-plus.html"   loading="lazy"></iframe>
      </div>
      </div>
      </div>
    );
  }
  
  export default Map;


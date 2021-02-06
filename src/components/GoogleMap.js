import React, { useState } from 'react';
import GoogleMapReact from 'google-map-react';
import Marker from '../components/Marker';
import mapStyles from './mapStyles';

const GoogleMap = (props: any) => {
  const getMapOptions = (maps: any) => {
    return {
      disableDefaultUI: true,
      mapTypeControl: true,
      streetViewControl: true,
      styles: [{ featureType: 'poi', elementType: 'labels', stylers: [{ visibility: 'on' }] }],
    };
  };


    const [center, setCenter] = useState({ lat: 47.51407, lng: 19.03726 });
    const [zoom, setZoom] = useState(15);
    return (
        <div style={{ height: '70vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_MAP_API_KEY }}
          key={ 'G27P+MW Budapest, Magyarország' }
          defaultCenter={center}
          defaultZoom={zoom}
          options={{ styles: mapStyles.dark }}
        >
          <Marker
            lat={47.5142}
            lng={19.0372}
            name="NYOLCÁGÚ JÓGA ALAPÍTVÁNY"
            color="#007BFF"
          />
        </GoogleMapReact>
      </div>
    );
}
 
export default GoogleMap;
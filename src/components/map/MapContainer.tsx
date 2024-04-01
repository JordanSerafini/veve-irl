import React, { useEffect } from 'react';

const MapContainer: React.FC = () => {
  useEffect(() => {
    // Assurez-vous que la clé API Google Maps est chargée avant d'initialiser la carte
    const loadMapScript = () => {
      const script = document.createElement('script');
      script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyA-trwhbkyRulsCxvkzQLE-SOKR2WPzlbg&callback=initMap&libraries=places`;
      script.async = true;
      script.defer = true;
      script.onload = initMap;
      document.body.appendChild(script);
    };

    loadMapScript();

    // Nettoyage du script après le démontage du composant
    return () => {
      const scripts = document.getElementsByTagName('script');
      for (let i = scripts.length - 1; i >= 0; i--) {
        const script = scripts[i];
        if (script.src.includes('maps.googleapis')) {
          script.remove();
        }
      }
    };
  }, []);

  const initMap = () => {
    // Initialiser la carte ici
    const map = new window.google.maps.Map(document.getElementById('map'), {
      center: { lat: -34.397, lng: 150.644 },
      zoom: 8,
    });
  };

  return <div id="map" style={{ width: '100%', height: '400px' }}></div>;
};

export default MapContainer;

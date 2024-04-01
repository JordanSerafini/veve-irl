import React, { useState, useEffect } from 'react';
import veveEvent from '../../types/veve.type';

import { url } from '../../utils/url';

function AddPicModal() {
  const [userLocation, setUserLocation] = useState<veveEvent | null>(null);
  const [formData, setFormData] = useState({
    nom: '',
    description: '',
    latitude: 0,
    longitude: 0,
    image: ''
  });

  useEffect(() => {
    // Vérifie si le navigateur prend en charge la géolocalisation
    if ("geolocation" in navigator) {
      // Demande la position de l'utilisateur
      navigator.geolocation.getCurrentPosition((position) => {
        const { latitude, longitude } = position.coords;
        setUserLocation({
          id: 0,
          name: '',
          description: '',
          url: '',
          lat: latitude,
          lng: longitude,
          owner: 0,
          comment: '',
          rate: 0
        });
        setFormData(prevState => ({
          ...prevState,
          latitude,
          longitude
        }));
      }, (error) => {
        console.error('Erreur de géolocalisation:', error);
      });
    } else {
      console.error("La géolocalisation n'est pas prise en charge par ce navigateur.");
    }
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch(`${url.local}/poi`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      if (response.ok) {
        console.log('Créé avec succès');
      } else {
        console.error('Échec de la création:', response.statusText);
      }
    } catch (error) {
      console.error('Erreur lors de la création:', error);
    }
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <h2>Ajouter une photo</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="nom">Nom:</label>
            <input type="text" id="nom" name="nom" value={formData.nom} onChange={handleChange} />
          </div>
          <div>
            <label htmlFor="description">Description:</label>
            <input type="text" id="description" name="description" value={formData.description} onChange={handleChange} />
          </div>
          {userLocation && (
            <>
              <input type="hidden" name="latitude" value={userLocation.lat} />
              <input type="hidden" name="longitude" value={userLocation.lng} />
            </>
          )}
          <div>
            <label htmlFor="image">Image:</label>
            <input type="text" id="image" name="image" value={formData.image} onChange={handleChange} />
          </div>
          <button type="submit">Ajouter</button>
        </form>
      </div>
    </div>
  );
}

export default AddPicModal;

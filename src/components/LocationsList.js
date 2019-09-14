import React, { useEffect, useState } from "react";
import axios from 'axios';
import LocationCard from './LocationCard';

export default function LocationsList() {
    const [locations, setLocations] = useState([])

    useEffect(() => {
      axios
        .get('https://rickandmortyapi.com/api/location/')
        .then(response => {
          setLocations(response.data.results);
        })
        .catch(error => {
          console.log(error);
        })
  
      // TODO: Add API Request here - must run in `useEffect`
      //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    }, []);
  
    return (
      <section className="character-list grid-view">
        {locations.map((location, index)=>(
          <LocationCard key={index} location={location} />
        ))}
      </section>
    )
}

import React, { useEffect, useState } from "react";
import axios from 'axios';
import EpisodeCard from './episodecard';

export default function EpisodeList() {
    const [episodes, setEpisodes] = useState([])

    useEffect(() => {
      axios
        .get('https://rickandmortyapi.com/api/episode/')
        .then(response => {
          setEpisodes(response.data.results);
        })
        .catch(error => {
          console.log(error);
        })
  
      // TODO: Add API Request here - must run in `useEffect`
      //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    }, []);
  
    return (
      <section className="character-list grid-view">
        {episodes.map(episode=>(
          <EpisodeCard episode={episode} />
        ))}
      </section>
    )
}
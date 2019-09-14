import React from "react";
import styled from 'styled-components';
const EpisodeCards = styled.div`
  height: 100%;
  border: lightgrey .5px solid;
  border-radius: 10px;
  width: 350px;
  display: flex;
  flex-direction: column;
  margin-top: 1%;
  padding: 2%;
`
const EpisodeH1 = styled.h1`
  font-size: 1.5rem;
  font-weight: bold;
`

const EpisodeGreyTexts = styled.p`
  color: grey;
  font-size: 1rem;
  margin-top: 1%;
`

export default function EpisodeCard(props) {
  return <EpisodeCards>
    <EpisodeH1>{props.episode.name}</EpisodeH1>
    <EpisodeGreyTexts>Air Date:{props.episode.air_date}</EpisodeGreyTexts>
    <p>Created: {props.episode.created}</p>
  </EpisodeCards>;
}
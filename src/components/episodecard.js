import React from "react";
import styled from 'styled-components';

const EpisodeCards2 = styled.div`
  height: 100%;
  border: lightgrey .5px solid;
  border-radius: 10px;
  width: 350px;
  display: flex;
  flex-direction: column;
  margin-top: 1%;
  padding: 2%;
`;
const EpisodeH12 = styled.h1`
  font-size: 1.5rem;
  font-weight: bold;
`;

const EpisodeGreyTexts2 = styled.p`
  color: grey;
  font-size: 1rem;
  margin-top: 1%;
`;

export default function EpisodeCard(props) {
  return <EpisodeCards2>
    <EpisodeH12>{props.episode.name}</EpisodeH12>
    <EpisodeGreyTexts2>Air Date:{props.episode.air_date}</EpisodeGreyTexts2>
    <p>Created: {props.episode.created}</p>
  </EpisodeCards2>;
}
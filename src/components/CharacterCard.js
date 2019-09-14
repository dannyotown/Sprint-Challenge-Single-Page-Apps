import React from "react";
import styled from 'styled-components';

const CharacterGreyText2 = styled.span`
  color: grey;
  margin-bottom: 1%;
`;
const CharacterCards2 = styled.div`
  height: 100%;
  border: lightgrey .5px solid;
  border-radius: 10px;
  width: 350px;
  display: flex;
  flex-direction: column;
  margin-top: 1%;
`;
const Infodiv2 = styled.div`
  padding: 4%;
  margin-top: 2%;
  font-weight: bold;
`;
const CharacterH12 = styled.h1`
  font-size: 1.5rem;'
  margin-top: 0;
  margin-bottom:.5%;
`;

const Para2 = styled.p`
  margin: 0% !important;
`;
export default function CharacterCard(props) {
  return (
    <CharacterCards2>
      <img src={props.character.image} alt={props.character.id} />
      <Infodiv2>
        <CharacterH12>{props.character.name}</CharacterH12>
        <CharacterGreyText2>{props.character.species} {props.character.status}</CharacterGreyText2>
        <Para2>Location: {props.character.location.name}</Para2>
        <Para2>Origin: {props.character.origin.name}</Para2>
        <hr />
        <p>Episodes</p>
      </Infodiv2>
    </CharacterCards2>
  )
}

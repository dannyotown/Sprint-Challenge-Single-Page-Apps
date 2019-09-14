import React from "react";
import styled from 'styled-components';

const Greytext = styled.span`
  color: grey;
  margin-bottom: 1%;
`;
const Card = styled.div`
  height: 100%;
  border: lightgrey .5px solid;
  border-radius: 10px;
  width: 350px;
  display: flex;
  flex-direction: column;
  margin-top: 1%;
`;
const Infodiv = styled.div`
  padding: 4%;
  margin-top: 2%;
  font-weight: bold;

`;
const H1 = styled.h1`
  font-size: 1.5rem;'
  margin-top: 0;
  margin-bottom:.5%;
`;

const Para = styled.p`
margin: 0% !important;
`;
export default function CharacterCard(props) {
  return (
    <Card>
      <img src={props.character.image} />
      <Infodiv>
      <H1>{props.character.name}</H1>
      <Greytext>{props.character.species} {props.character.status}</Greytext>
      <Para>Location: {props.character.location.name}</Para>
      <Para>Origin: {props.character.origin.name}</Para>
      <hr/>
      <p>Episodes</p>
      </Infodiv>
      </Card>
  )
}

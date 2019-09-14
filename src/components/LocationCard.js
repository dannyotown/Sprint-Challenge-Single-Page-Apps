import React from "react";
import styled from 'styled-components';
const Card = styled.div`
  height: 100%;
  border: lightgrey .5px solid;
  border-radius: 10px;
  width: 350px;
  display: flex;
  flex-direction: column;
  margin-top: 1%;
  padding: 2%;
`;
const H1 = styled.h1`
  font-size: 1.5rem;
  font-weight: bold;
`;

const GreyTexts = styled.p`
  color: grey;
  font-size: 1rem;
  margin-top: 1%;
`;
const ResidentsBox = styled.div`
  background-color: lightgrey;
  color: white;
  font-weight: bold;
  width: 30%;
`;
const FlexDiv = styled.div`
  display: flex;
  flex-flow: row nowrap;
`;
const HR = styled.hr`
  width: 70%;
`;
export default function LocationCard(props) {
  return (<Card>
    <H1>{props.location.name}</H1>
    <GreyTexts>{props.location.type} - {props.location.dimension}</GreyTexts>
    <FlexDiv>
    <HR></HR>
    <ResidentsBox>
      # : Residents
    </ResidentsBox>
    </FlexDiv>
  </Card>);
}

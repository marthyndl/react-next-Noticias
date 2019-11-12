import styled, { css } from "styled-components";
import {TimeAndSource, Picture, TitleList} 
       from './GeneralStyled.js';

export const Grid = styled.div`
  grid-template-columns: repeat(3,1fr);
  display: grid;
  grid-column-gap: 30px;
  grid-row-gap: 35px;
`;

export const EmptyGrid = styled.div`
  font-size: 18px;
  font-weight: 400;
  margin-top: 50px;
  margin-bottom: 50px;
  font-weight: bold;
`; 

export const Card = styled.div`
  border-radius: 5px;
  background: white;
  border: 1px solid #ededf0;
  box-shadow: 0 20px 40px -14px rgba(0,0,0,0.25);
  overflow: hidden;
`;

export const TitleCard = styled(TitleList)`
  font-weight: 600;
  min-height: 63px;
`;

export const PictureCard = styled(Picture)`
  height: 200px;
`;

export const TimeAndSourceCard  = styled(TimeAndSource)`
    font-weight: 400;
    font-size: 18px;
`;
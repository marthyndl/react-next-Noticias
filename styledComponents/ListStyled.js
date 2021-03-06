import styled, { css } from "styled-components";
import {TimeAndSource, Picture, TitleList} 
    from './GeneralStyled.js';

export const List = styled.div`
  width: 100%;
`;

export const EmptyList = styled.div`
  font-size: 18px;
  font-weight: 400;
  margin-top: 50px;
  margin-bottom: 50px;
  font-weight: bold;
`; 

export const ListItem = styled.div`
  display: flex;
  margin-bottom: 10px;
  background: white;
  border-width: 1px;
  border-style: solid;
  border-color: rgb(237, 237, 240);
  border-image: initial;
  overflow: hidden;
  border-radius: 5px;
  transition: box-shadow 0.15s ease-in-out 0s;
`;

export const TitleItemList =  styled(TitleList)`
  font-size: 20px;
  font-weight: 300;
  margin-bottom: 5px;
`;

export const PictureItemList = styled(Picture)`
  height: 120px;
  width: 200px;
  flex-shrink: 0;
`;

export const TimeAndSourceItemList =styled(TimeAndSource)`
  font-size: 16px;
  font-weight: 300;
`
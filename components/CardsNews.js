import React from "react";
import styled from "styled-components";
import moment from 'moment';
import { Container, Title, Divider, Content, Href} 
      from '../styledComponents/GeneralStyled.js';
import { Grid, Card, TitleCard, PictureCard, TimeAndSourceCard} 
      from '../styledComponents/CardsStyled.js';
  

const CardNews = (props) => (  
  <Container>
    <Title>{props.title}</Title>
    <Divider></Divider>
    <Grid>
        {props.news.map(item => (
          <Card key={item.news_id}>
            <PictureCard><img src={item.img_url} alt={item.title} height="200" width="390"/></PictureCard>
            <Content>
              <Href href={item.url} target="_blank">
                <TitleCard>{item.title}</TitleCard>
              </Href>
              <TimeAndSourceCard>
                <span>{item.source_name}</span> | 
                { item.category ? ` ${item.category} | ` : '' }
                <span>{moment(new Date(item.date*1000)).format('DD-MM-YYYY HH:mm')}</span>
              </TimeAndSourceCard>
            </Content>
          </Card>
        ))}
    </Grid>
  </Container>
);

export default CardNews;
import moment from 'moment';
import { Container, TitleContainer, Divider, Content, Href} 
      from '../styledComponents/GeneralStyled.js';
import { Grid, EmptyGrid, Card, TitleCard, PictureCard, TimeAndSourceCard} 
      from '../styledComponents/CardsStyled.js';
  

const CardNews = (props) => (  
  <Container>
    <TitleContainer>{props.title}</TitleContainer>
    <Divider></Divider>
    { props.news.length ?
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
    : (
      <EmptyGrid>
        No hay noticias para la busqueda realizada.
      </EmptyGrid>
    )
  }
  </Container>
);

export default CardNews;
import moment from 'moment';
import { Container, TitleContainer, Divider, Content, Href} 
      from '../styledComponents/GeneralStyled.js';
import { List, EmptyList, ListItem, TitleItemList, PictureItemList, TimeAndSourceItemList} 
      from '../styledComponents/ListStyled.js';

const ListNews = (props) => (
  <Container>
    <TitleContainer>{props.title}</TitleContainer>
    <Divider></Divider>
      { props.news.length ?
        <List>
          {props.news.map(item => (
            <ListItem key={item.news_id}>
              <PictureItemList>
                <img src={item.img_url} alt={item.title} height="120" width="200"/>
              </PictureItemList>
              <Content>
                <Href href={item.url} target="_blank">
                  <TitleItemList>{item.title}</TitleItemList>
                </Href>
                <TimeAndSourceItemList>
                  <span>{item.source_name}</span> | 
                  <span>{moment(new Date(item.date*1000)).format('DD-MM-YYYY HH:mm')}</span>
                </TimeAndSourceItemList>
                <div></div>
              </Content>
            </ListItem>
          ))}
          </List>
        : (
          <EmptyList>
            No hay noticias para la busqueda realizada.
          </EmptyList>
        )
      }
  </Container>
);

export default ListNews;
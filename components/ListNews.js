import styled from "styled-components";
import moment from 'moment';
import { Container, Title, Divider, Content, Href} 
      from '../styledComponents/GeneralStyled.js';
import { List, ListItem, TitleItemList, PictureItemList, TimeAndSourceItemList} 
      from '../styledComponents/ListStyled.js';

const ListNews = (props) => (
  <Container>
    <Title>{props.title}</Title>
    <Divider></Divider>
    <List>
        {props.news.map(item => (
          <ListItem key={item.news_id}>
            <PictureItemList>
              <img src={item.img_url} alt={item.title} height="160" width="200"/>
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
  </Container>
);

export default ListNews;
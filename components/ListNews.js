import styled from "styled-components";
import moment from 'moment';


// Grays
const gray1 = '#383737';
const gray2 = '#565555';
const gray3 = '#857c81';
const gray4 = '#b9b9b9';
const gray5 = '#e0dddd';

// Colors
const primary1 = '#6ca583';
const accent1 = '#9b8dab';

// Fonts
const fontFamily = '-apple-system,BlinkMacSystemFont,"Segoe UI","Roboto","Oxygen","Ubuntu","Cantarell","Fira Sans","Droid Sans","Helvetica Neue",sans-serif';
const fontSize = '15px';

const Container = styled.div`
  width: 100%;
  margin: 30px auto;
  font-family: ${fontFamily};
  font-size: ${fontSize};
  color: ${gray2};
  padding: 20px;
  box-sizing: border-box
`;

const List = styled.div`
  width: 100%;
`;

const ListItem = styled.div`
    width: 90%;
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

const Title = styled.h3`
  font-size: 20px;
  font-weight: 300;
  color: ${gray1};
  transition: color 150ms ease 0s;
  margin-bottom: 5px;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  text-decoration: none;

`;

const Href = styled.a`
  text-decoration: none;
`;

const Picture = styled.span`
    display: block;
    position: relative;
    flex-shrink: 0;
    width: 200px;
    height: 160px;
    color: rgba(0, 0, 0, 0);
    font-size: 1px;
    background: 50% 50% / cover rgb(240, 240, 240);
    background-position: 50% 50%;
    overflow: hidden;
`;

const Content = styled.div` {
  color: black;
  display: flex;
  flex-direction: column;
  -webkit-box-pack: justify;
  justify-content: space-between;
  padding: 10px;
`;

const TimeAndSource = styled.div` {
  font-size: 16px;
  margin-top: 10px;
  color: rgb(130, 137, 158);
  font-weight: 300;
`;


const ListNews = (props) => (
  <Container>
  <List>
      {props.news.map(item => (
        <ListItem key={item.news_id}>
          <Picture><img src={item.img_url} alt={item.title} height="160" width="200"/></Picture>
          <Content>
            <Href href={item.url} target="_blank">
             <Title>{item.title}</Title>
            </Href>
            <TimeAndSource>
              <span>{item.source_name}</span> | 
              <span>{moment(new Date(item.date*1000)).format('DD-MM-YYYY HH:MM')}</span>
            </TimeAndSource>
            <div></div>
          </Content>
        </ListItem>
      ))}
    
  </List>
  
  </Container>
);

export default ListNews;
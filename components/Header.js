import Link from 'next/link';
import InputSearch from '../components/InputSearch';
import styled from "styled-components";


const linkStyle = {
  marginRight: 15
};

const optionsCountry = [
{value: '1', name: 'Política'},
{value: '2', name: 'Internacionales'}, 
{value: '3', name: 'Tecnología'}, 
{value: '4', name: 'Espectáculos'},
{value: '5', name: 'Deportes'}];


const List = styled.ul `
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  background-color: #333;
`;

const ListItem = styled.li `
  float: ${props => (props.right ? 'right' : 'left')};
  a {
    display: block;
    color: white;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
    &:hover:not(.active) {
      background-color: #111;
    }
    &:active {
      background-color: #4CAF50;
    }
}
`;




const Header = () => (
  <div>
    <List>
      <ListItem>
        <Link href="/">
          <a class="active" >Home</a>
        </Link>
      </ListItem>
        {optionsCountry.map(option => ( 
          <ListItem>  
            <Link key={option.value} href="/post/[category]" as={`/post/${option.value}`}>
              <a>{option.name}</a>
            </Link>
        </ListItem>
        ))}
        <ListItem right>
          <InputSearch/>
        </ListItem>
    </List>
  </div>
);

export default Header;

import Link from 'next/link';
//import InputSearch from '../components/InputSearch';
import { MainHeader, NavHeader, TopHeader, TitleHeader, NavList, NavListItem } from '../styledComponents/GeneralStyled.js';


const optionsCountry = [
{value: '1', name: 'Política'},
{value: '2', name: 'Internacionales'}, 
{value: '3', name: 'Tecnología'}, 
{value: '4', name: 'Espectáculos'},
{value: '5', name: 'Deportes'}];


const Header = () => (
  <MainHeader>
    <TopHeader>
      <TitleHeader>El canillita</TitleHeader>
    </TopHeader>
    <NavHeader>
      <NavList>
        <NavListItem>
          <Link href="/">
            <a>Home</a>
          </Link>
        </NavListItem>
          {optionsCountry.map(option => ( 
            <NavListItem>  
              <Link key={option.value} href="/post/[category]" as={`/post/${option.value}`}>
                <a>{option.name}</a>
              </Link>
          </NavListItem>
          ))}
      </NavList>
    </NavHeader>
  </MainHeader>
);

export default Header;

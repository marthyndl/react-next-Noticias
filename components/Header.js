import Link from 'next/link';
import InputSearch from '../components/InputSearch';
import { MainHeader, NavHeader, TopHeader, TitleHeader, NavList, NavListItem, StyledLinkHeader } 
      from '../styledComponents/GeneralStyled.js';


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
      <InputSearch/>
    </TopHeader>
    <NavHeader>
      <NavList>
        <NavListItem>
          <Link href="/">
          <StyledLinkHeader>Home</StyledLinkHeader>
          </Link>
        </NavListItem>
          {optionsCountry.map(option => ( 
            <NavListItem>  
              <Link key={option.value} href="/post/[category]" as={`/post/${option.name.toLowerCase()}-${option.value}`}>
                <StyledLinkHeader>{option.name}</StyledLinkHeader>
              </Link>
          </NavListItem>
          ))}
      </NavList>
    </NavHeader>
  </MainHeader>
);

export default Header;

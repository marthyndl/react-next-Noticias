import Link from 'next/link';
import Constants from '../constants/Constants';
import InputSearch from '../components/InputSearch';
import { MainHeader, NavHeader, TopHeader, TitleHeader, NavList, NavListItem, StyledLinkHeader } 
      from '../styledComponents/GeneralStyled.js';
   
const Header = (props) => (
  <MainHeader>
    <TopHeader>
      <TitleHeader>El canillita</TitleHeader>
      <InputSearch searchtext={props.searchtext}/>
    </TopHeader>
    <NavHeader>
      <NavList>
        <NavListItem>
          <Link href="/">
          <StyledLinkHeader>Home</StyledLinkHeader>
          </Link>
        </NavListItem>
          {Object.keys(Constants.optionsCategories).map(option => ( 
            <NavListItem key={Constants.optionsCategories[option].value}>  
              <Link href="/post/[category]" as={`/post/${option}`}>
                <StyledLinkHeader>{Constants.optionsCategories[option].name}</StyledLinkHeader>
              </Link>
          </NavListItem>
          ))}
      </NavList>
    </NavHeader>
  </MainHeader>
);

export default Header;

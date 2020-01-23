import styled, { css } from "styled-components";
import PropTypes from 'prop-types';

const fontFamily = '-apple-system,BlinkMacSystemFont,"Segoe UI","Roboto","Oxygen","Ubuntu","Cantarell","Fira Sans","Droid Sans","Helvetica Neue",sans-serif';
const color_background = '#f5f5f5';
const color_gray = '#e5e5e5';
const color_pink = '#4bb5fc';
const gray_title_List = '#383737';


export const Layout = styled.div`
  margin: 0;
  padding: 0;
  border: 0;
  list-style: none;
  box-sizing: border-box;
  flex-direction: column;
  display: flex;
  align-items: center;
  font-family: ${fontFamily};
  background: ${color_background};
`;

export const MainHeader = styled.header`
  padding: 0;
  width: 100%;
  background: linear-gradient(to bottom, rgb(75, 208, 252) 0%, 
              rgba(255, 255, 255, 0.01) 100%);
`;

export const TopHeader = styled.nav`
  padding: 30px 100px;
`;

export const NavHeader = styled.nav`
  display: block;
  position: relative;
  margin: 0 auto;
  border-bottom: 5px solid ${color_gray};
  list-style: none;
  box-sizing: border-box;
  background:transparent;
`;

export const NavList = styled.ul`
  display: flex;
  max-width: 1108px;
  padding: 30px 20px;
  margin: 0 auto;
  justify-content: space-between;
  list-style: none;
  box-sizing: border-box;
`;

export const NavListItem = styled.li`
  text-decoration: none;
  padding: 7px 5px;
  background-color: transparent!important;
`;

export const TitleHeader = styled.div`
  font-size: 62px;
  text-align: center;
  font-weight: bold;
  max-width: 1108px;
  color: black
`;

export const StyledLinkHeader = styled.a`
  color: black;
  font-weight: bold;
  font-size: 18px;
  &:hover {
    opacity: 0.5;
    cursor: pointer;
  }
`;

export const SearchContainer = styled.div`
  margin: 0px auto;
  border-bottom: 2px solid black;
  float: right;
`;

export const SearchItem = styled.input`
  font-size: 14px;
  background: transparent;
  border: none; 
  &:focus {
    outline: none
  }
`;

export const StyledButtonSearch = styled.button`
  background: transparent;
  border: none;   
  &:focus {
  outline: none
  }
  cursor:${props => props.disabled? "auto" : "pointer"};
  opacity: ${props => props.disabled ? "0.2" : "1"}; 
`;

StyledButtonSearch.propTypes = {
  disabled: PropTypes.bool
};

StyledButtonSearch.defaultProps = {
  cursor: "pointer",
  opacity: "1"
};

export const ErrorContainer = styled.div`
  font-size: 18px;
  font-weight: 400;
  margin-top: 50px;
  margin-bottom: 50px;
  font-weight: bold;
`; 

export const Container = styled.div`
  width: 100%;
  padding: 20px;
  max-width: 1108px;
  box-sizing: border-box
`;

export const TitleContainer = styled.div`
  font-size: 52px;
  font-weight: 400;
  margin-bottom: 20px;
`;

export const Divider = styled.div`
  width: 140px;
  height: 3px;
  display: block;
  margin: 0px 0px 30px;
  background: linear-gradient(to right, rgb(252, 75, 99) 0%, 
              rgba(255, 255, 255, 0.01) 100%);
`;

export const Content = styled.div`
  padding: 16px 20px;
  color: black;
`;

export const Href = styled.a`
  text-decoration: none;
`;

export const TimeAndSource = styled.div` {
  margin-top: 10px;
  color: rgb(130, 137, 158);
`;

export const Picture = styled.div`
  max-width: 100%;
  position: relative;
  overflow: hidden;
  background: #F0F0F0;
  background-size: cover;
`;

export const TitleList = styled.h3`
  font-size: 20px;
  color: ${gray_title_List};
  &:hover {
    opacity: 0.5;
    cursor: pointer;
    color: ${color_pink};
  }
`;


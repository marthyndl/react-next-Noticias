import styled, { css } from "styled-components";

const fontFamily = '-apple-system,BlinkMacSystemFont,"Segoe UI","Roboto","Oxygen","Ubuntu","Cantarell","Fira Sans","Droid Sans","Helvetica Neue",sans-serif';
const color_background = '#f5f5f5';
const color_gray = '#e5e5e5';
const color_pink = '#FC4B63';
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
  background: white;
`;

export const TopHeader = styled.nav`
  padding: 44px 0px;
`;

export const NavHeader = styled.nav`
  display: block;
  position: relative;
  margin: 0 auto;
  margin-bottom: 24px;
  border-top: 1px solid ${color_gray};
  border-bottom: 1px solid ${color_gray};
  list-style: none;
  box-sizing: border-box
`;

export const NavList = styled.ul`
  display: flex;
  max-width: 1108px;
  padding: 0 20px;
  margin: 0 auto;
  justify-content: space-between;
  list-style: none;
  box-sizing: border-box;
`;

export const NavListItem = styled.li`
  text-decoration: none;
`;

export const TitleHeader = styled.div`
    font-size: 62px;
    align: center;
    color: ${color_pink}
`;

export const Container = styled.div`
  width: 100%;
  padding: 20px;
  max-width: 1108px;
  box-sizing: border-box
`;

export const Title = styled.div`
  font-size: 52px;
  font-weight: 400;
  margin-bottom: 20px;
  text-transform: capitalize;
`;

export const Divider = styled.div`
  width: 140px;
  height: 3px;
  display: block;
  margin: 0px 0px 30px;
  background: linear-gradient(to right, rgb(252, 75, 99) 0%, rgba(255, 255, 255, 0.01) 100%);
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

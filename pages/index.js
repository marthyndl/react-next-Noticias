import React from 'react'
import Header from '../components/Header';
import ListNews from '../components/ListNews';
import Error from './_error';
import { fetchNews } from '../rest-api/news';
import styled from "styled-components";



const Heading = styled.h1`
  font-size: 40px;
  color: green;
  font-family: -apple-system,BlinkMacSystemFont,"Segoe UI","Roboto",
  "Oxygen","Ubuntu","Cantarell","Fira Sans","Droid Sans","Helvetica Neue",
  sans-serif;
`;

/*News
const Title = styled.h1`
  font-size: 50px;
  color: ${({ theme }) => theme.colors.primary};
`;*/

const Index = ({ errorCode, news }) => {
  if (errorCode) {
    return <Error statusCode={errorCode} />
  }
     
  return (
    <div>
      <Header />
      <Heading>News</Heading>
      <ListNews news={news} />
    </div>
  )
}

Index.getInitialProps = async () => {
  const data = await fetchNews();
  if(!data.errorCode) { 
    console.log(`Show data fetched. Count: ${data.news.length}`);
  }
  return {
    errorCode: data.errorCode, news: data.news
  }
}

export default Index;

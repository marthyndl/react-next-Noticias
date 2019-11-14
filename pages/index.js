import React from 'react'
import Header from '../components/Header';
import CardsNews from '../components/CardsNews';
import Error from './_error';
import { fetchNews } from '../rest-api/news';
import { Layout } from '../styledComponents/GeneralStyled.js';


const Index = ({ errorCode, news }) => {
  if (errorCode) {
    return <Error statusCode={errorCode} />
  }
  return (
    <Layout>
      <Header />
      <CardsNews news={news} title="Hoy"/>
    </Layout>
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

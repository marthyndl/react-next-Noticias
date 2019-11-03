import React from 'react'
import Header from '../components/Header';
import ListNews from '../components/ListNews';
import Error from './_error';
import { fetchNews } from '../rest-api/news';


const Index = ({ errorCode, news }) => {
  if (errorCode) {
    return <Error statusCode={errorCode} />
  }

  return (
    <div>
    <Header />
    <h1>News</h1>
    <ul>
      <ListNews news={news} />
    </ul>
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

import Header from '../../components/Header';
import ListNews from '../../components/ListNews';
import { fetchNewsByText } from '../../rest-api/news';
import Error from '../_error';
import { Layout } from '../../styledComponents/GeneralStyled.js';

const SearchText = ({ errorCode, news, title }) => {
  if (errorCode) {
    return <Error statusCode={errorCode} />
  }

  return (
    <Layout>
      <Header />
      <ListNews news={news} title={title}/>
    </Layout>
  )
};

SearchText.getInitialProps = async (context) => {

  const { searchtext } = context.query;
  const data = await fetchNewsByText(searchtext);
  if(!data.errorCode) { 
    console.log(`Show data fetched. Count: ${data.news.length}`);
  }
  return {
    errorCode: data.errorCode, news: data.news, title:searchtext
  }
}

export default SearchText;
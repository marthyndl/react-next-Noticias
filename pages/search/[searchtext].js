import Header from '../../components/Header';
import ListNews from '../../components/ListNews';
import { fetchNewsByText } from '../../rest-api/news';
import Error from '../_error';

const SearchText = ({ errorCode, news }) => {
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
};

SearchText.getInitialProps = async (context) => {

  const { searchText } = context.query;
  const data = await fetchNewsByText(searchText);
  if(!data.errorCode) { 
    console.log(`Show data fetched. Count: ${data.news.length}`);
  }
  return {
    errorCode: data.errorCode, news: data.news
  }
}

export default SearchText;
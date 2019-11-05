import Header from '../../components/Header';
import ListNews from '../../components/ListNews';
import { fetchNewsByCategory } from '../../rest-api/news';
import Error from '../_error';

const Category = ({ errorCode, news }) => {
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

Category.getInitialProps = async (context) => {

  const { category } = context.query;
  const data = await fetchNewsByCategory(category);
  if(!data.errorCode) { 
    console.log(`Show data fetched. Count: ${data.news.length}`);
  }
  return {
    errorCode: data.errorCode, news: data.news
  }
}

export default Category;
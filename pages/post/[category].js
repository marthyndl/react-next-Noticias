import Header from '../../components/Header';
import ListNews from '../../components/ListNews';
import { fetchNewsByCategory } from '../../rest-api/news';
import Error from '../_error';
import { Layout } from '../../styledComponents/GeneralStyled.js';


const Category = ({ errorCode, news, title }) => {
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

Category.getInitialProps = async (context) => {

  const { category } = context.query;
  const data = await fetchNewsByCategory(category);
  if(!data.errorCode) { 
    console.log(`Show data fetched. Count: ${data.news.length}`);
  }
  return {
    errorCode: data.errorCode, news: data.news, title:category
  }
}

export default Category;
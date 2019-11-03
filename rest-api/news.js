import fetch from 'isomorphic-unfetch';
import moment from 'moment';

const today = moment().format('YYYY-MM-DD')
const baseRoot = 'https://api.canillitapp.com';
const latestUrl= `${baseRoot}/latest/${today}`;
const categoryUrl = `${baseRoot}/news/category`;
const searchTextUrl = `${baseRoot}/search`;

export const fetchNews = async () => {
  try{
    console.log(latestUrl);
    const res = await fetch(latestUrl)
    const errorCode = res.status > 200 ? res.status : false;
    let data = null;
    if (res.status == 200) {
      data = await res.json();
    }
    return { errorCode, news: data }
  } catch(error) {
    console.log(error);
    return { errorCode:500, news: null }
  }

}

export const fetchNewsByCategory = async (category) => {

  try{
    console.log(`${categoryUrl}/${category}`);
    const res = await fetch(`${categoryUrl}/${category}`)
    const errorCode = res.status > 200 ? res.status : false;
    let data = null;
    if (res.status == 200) {
      data = await res.json();
    }
    return { errorCode, news: data }
  } catch(error) {
    console.log(error);
    return { errorCode:500, news: null }
  }
};

export const fetchNewsByText = async (searchText) => {

  try{
    console.log(`${searchTextUrl}/${searchText}`);
    const res = await fetch(`${searchTextUrl}/${searchText}`)
    const errorCode = res.status > 200 ? res.status : false;
    let data = null;
    if (res.status == 200) {
      data = await res.json();
    }
    return { errorCode, news: data }
  } catch(error) {
    console.log(error);
    return { errorCode:500, news: null }
  }
};




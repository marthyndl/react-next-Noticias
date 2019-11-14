import fetch from 'isomorphic-unfetch';
import moment from 'moment';
import { sanitizeText } from '../utils/StringUtils';

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
    let dataSlice = null;
    if (res.status == 200) {
      data = await res.json();
      //solo devuelvo los ultimos 21 para mostrar
      dataSlice = data.slice(0,21);
    }
    return { errorCode:errorCode, news: dataSlice }
  } catch(error) {
    console.log(error);
    return { errorCode:500, news: null }
  }
}

export const fetchNewsByCategory = async (category) => {
  try {
    console.log(`${categoryUrl}/${category}`);
    const res = await fetch(`${categoryUrl}/${category}`)
    const errorCode = res.status > 200 ? res.status : false;
    let data = null;
    if (res.status == 200) {
      data = await res.json();
    }
    return { errorCode:errorCode, news: data }
  } catch(error) {
    console.log(error);
    return { errorCode:500, news: null }
  }
};

export const fetchNewsByText = async (searchText) => {
  try {
    let finalSearchText = (sanitizeText(searchText)).trim();
    if(finalSearchText != '') {
      console.log(`${searchTextUrl}/${finalSearchText}`);
      const res = await fetch(`${searchTextUrl}/${finalSearchText}`)
      const errorCode = res.status > 200 ? res.status : false;
      let data = null;
      if (res.status == 200) {
        data = await res.json()
      }
      return { errorCode:errorCode, news: data }
    } else {
      return { errorCode:null, news: null }
    }
  } catch(error) {
    console.log(error);
    return { errorCode:500, news: null }
  }
};




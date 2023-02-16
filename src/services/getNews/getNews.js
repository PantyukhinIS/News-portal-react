import axios from "axios";

const getNews = () => {
  const options = {
    method: 'GET',
    url: 'https://newscatcher.p.rapidapi.com/v1/search_enterprise',
    params: {q: 'Elon Musk', lang: 'en', sort_by: 'relevancy', page: '1', media: 'True'},
    headers: {
      'X-RapidAPI-Key': '97fef8c48amsha0f4a8e8ec25336p1325f5jsn55a9b294aef6',
      'X-RapidAPI-Host': 'newscatcher.p.rapidapi.com'
    }
  };
  
  return axios.request(options);
}
export default getNews;
import React, { useState, useEffect } from 'react';
import Navbar from '../components/UI/Navbar/Navbar';
import NewsList from '../components/NewsList';
import NewsService from '../components/API/NewsService';
import { useNews } from '../hooks/useNews';
import NewsSearch from '../components/NewsSearch';


const News = () => {
    const [news, setNews] = useState([])
    const [search, setSearch] = useState('')

    const searchedNews = useNews(news,search)

    async function fetchNews() {
      const response = await NewsService.getAll()
      console.log(response);
      setNews(response["articles"])
    }
    
    useEffect(() => {
      fetchNews()
    }, []);
    
    
      return (
        <div className="App">
          <NewsSearch search={search} setSearch={setSearch}/>

          <NewsList news={searchedNews}/>
        </div>
      );
};

export default News;
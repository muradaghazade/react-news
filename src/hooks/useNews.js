import React, {useMemo} from "react";

export const useNews = (news, query) => {
    const SearchedNews = useMemo(() => {
      return news.filter(post => post.title.toLowerCase().includes(query.toLowerCase()))
    }, [query, news])
  
        return SearchedNews
        
  }
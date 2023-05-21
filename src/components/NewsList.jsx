import React from 'react';
import NewsItem from './NewsItem';

const NewsList = ({news}) => {
    return (
    <div class="container-fluid">
        <div class="row">

        {news.map((post) => 
                <NewsItem key={post.title} post={post}/>
            )
            }
          
        </div>
    </div>
    );
};

export default NewsList;
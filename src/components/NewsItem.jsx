import React from 'react';
import Card from './UI/Card/Card';

const NewsItem = ({post}) => {
    return (
        <div class="col-md-4">
            <Card post={post}/>
        </div>
    );
};

export default NewsItem;
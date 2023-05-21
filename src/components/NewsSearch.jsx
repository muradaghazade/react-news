import React from 'react';

const NewsSearch = ({search, setSearch}) => {
    console.log(search);
    return (
        <div>
            <input type="text" value={search} onChange={e => setSearch(e.target.value)} />
        </div>
    );
};

export default NewsSearch;
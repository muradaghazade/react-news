import React from 'react';

const Card = ({post}) => {
    return (
        <div class="card" style={{height: "600px", marginTop: "20px"}}>
                    <img src={post.urlToImage} class="card-img-top" alt="..."/>
                    <div class="card-body">
                      <h5 class="card-title">{post.title}</h5>
                      <p class="card-text">{post.description}</p>
                      <a href="#" class="btn btn-primary">{post.author}</a>
                    </div>
                  </div>
    );
};

export default Card;
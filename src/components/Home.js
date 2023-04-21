import React from 'react';
import '../App.css';
import AuthorList from './author/AuthorList';
import PostList from './post/PostList';

export function Home () {


  return (
    <>
       <div className="grid-container">
        <AuthorList/>
        <div className="grid-item"/>
        <div className="grid-item middle">
          <div className="card-list">
            <PostList/>
          </div>
        </div>
        <div className="grid-item"/>
    </div>
  </>
  );
};

export default Home;

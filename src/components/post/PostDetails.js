import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchPostById } from '../../features/postsSlice';
import './PostDetails.css';
import { useParams } from 'react-router-dom';

export function PostDetails() {
  const dispatch = useDispatch();
  //const { post, loading, error } = useSelector((state) => state.posts);
  const { postId } = useParams();

  const post = useSelector((state) => state.post.post);
  const status = useSelector((state) => state.post.status);
  const error = useSelector((state) => state.post.error);
  //console.log('post',post);
  //console.log('post.post',post.post);
  useEffect(() => {
    dispatch(fetchPostById(postId));
  }, [dispatch]);
  let content;

  if (status === 'loading') 
  {
    content = <div className="loader">Loading...</div>;
  } 
  else if (status === 'succeeded')
  {
    content =       
       <div key={post?.id || ""} className="post-details">
       <h1>{post?.title || ""}</h1>
       <p>{post?.body || ""}</p>
       <ul className="tags">
         {post?.tags?.map((tag, index) => (
           <li key={index}># {tag}</li>
         ))}
       </ul>
       <div className="reactions">
         <span className="likes">{post?.reactions || ""} Reactions</span>
       </div>
     </div>
    ;
  } else if (status === 'failed') {
    content = <div>{error}</div>;
  }
  return (
    <div>
      {content}
    </div>
  );
};

export default PostDetails;

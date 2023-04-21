import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchPosts } from '../../features/postsSlice';
import { Link } from 'react-router-dom';
import '../../App.css';

export function PostList() 
{
    const dispatch = useDispatch();
    const [skip,setSkip] = useState(0);
    const posts = useSelector((state) => state.post.posts);
    const status = useSelector((state) => state.post.status);
    const error = useSelector((state) => state.post.error);
    //const skip = useSelector((state) => state.post.skip);
    

    useEffect(() => 
    {
      dispatch(fetchPosts(skip));        
    }, [dispatch]);

    function onPreviousClick()
    {
      setSkip(skip - 5);      
      dispatch(fetchPosts(skip - 5))
    }
    function onNextClick()
    {
      setSkip(skip + 5);      
      dispatch(fetchPosts(skip + 5))      
    }
    //console.log('skip = ',skip);

    let content;

    if (status === 'loading') 
    {
      content = <div className="loader">Loading...</div>;
    } 
    else if (status === 'succeeded') 
    {
      content = posts.map((post) => (
        
        <div key={post.id} className="card-list" >
        <div className="card">
          <div className="card-title">{post.id}. {post.title}</div>
          <div className="card-body">{post.body}</div>
          <Link className="card-body" to={`/posts/${post.id}`}>View detail</Link>
        </div>
        
      </div>
      ));
    } 
    else if (status === 'failed')
    {
      content = <div>{error}</div>;
    }

    return (
        <div className="author-list">
        <div className='postheader'>Posts</div>

        <div className="pagination">
        {skip > 0 && (
          <button className="prev" onClick={() => onPreviousClick()} >Previous</button>
          )}
          <button className="next" onClick={() => onNextClick()}>Next</button>
        </div>
       
        
        {content}
      
        </div>
    );
    }

export default PostList;

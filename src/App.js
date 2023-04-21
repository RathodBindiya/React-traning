import { Provider } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import store from './app/store';
import './App.css';
import AuthorList from './components/author/AuthorList';
import PostList from './components/post/PostList';
import PostDetails from './components/post/PostDetails';
import Home from './components/Home';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route exact path='/' element={<Home/>} />
            <Route exact path="/authors" element={<AuthorList/>} />
            <Route exact path="/posts" element={<PostList/>} />
            <Route exact path="/posts/:postId" element={<PostDetails/>} />
          </Routes>
        </BrowserRouter> 
      </Provider>
    </div>
  );
}

export default App;

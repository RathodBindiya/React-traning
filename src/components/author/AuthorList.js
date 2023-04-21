import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchAuthors } from '../../features/authorsSlice';
import AuthorPopup from './AuthorPopup';
import '../../App.css';

function AuthorList() {
  const dispatch = useDispatch();
  const authors = useSelector((state) => state.authors.authors);
  const [popupOpen, setPopupOpen] = useState(false);
  const [selectedAuthor, setSelectedAuthor] = useState(null);

  useEffect(() => {
    dispatch(fetchAuthors({ limit: 5, skip: 0 }));
  }, [dispatch]);

  function handleAuthorClick(author) {
    setSelectedAuthor(author);
    setPopupOpen(true);
  }

  function handleClosePopup() {
    setPopupOpen(false);
  }
  return (
        <div className="grid-item header">
          {authors.map((author) => 
          (
            <div key={author.id} className="avatar-container" onClick={() => handleAuthorClick(author)}>
              <img src={author.image} alt={author.image} className="avatar" />
              <div className="name">{author.firstName}</div>
            </div>
          ))}
          {popupOpen && <AuthorPopup author={selectedAuthor} onClose={handleClosePopup} />}
        </div>
  );
}

export default AuthorList;

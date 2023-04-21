import React from 'react';
import './AuthorPopup.css';

function AuthorPopup({ author, onClose }) {
  return (
    <div className="author-popup">
      
      <div className="popup">
  <div className="popup-header">
    <h2>User Information</h2>
    <button onClick={onClose}>Close</button>
  </div>
  <div className="popup-body">
    <div className="popup-image">
      <img src={author.image} alt={author.image} />
    </div>
    <div className="popup-address">
      <h3>Address</h3>
      <p>{author.address.address}, {author.address.city}, {author.address.state} {author.address.postalCode}</p>
    </div>
    <div className="popup-contact">
      <h3>Contact</h3>
      <p>Phone: {author.phone}</p>
      <p>Email: {author.email}</p>
    </div>
    <div className="popup-info">
      <h3>Additional Information</h3>
      <p>Age: {author.age}</p>
      <p>Gender: {author.gender}</p>
      <p>Blood Group: {author.bloodGroup}</p>
      <p>Height: {author.height} cm</p>
      <p>Weight: {author.weight} kg</p>
    </div>
  </div>
</div>

    </div>
  );
}

export default AuthorPopup;

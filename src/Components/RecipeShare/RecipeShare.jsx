
import React, { useState } from 'react';
import{FaShareAlt, FaCopy} from 'react-icons/fa';
import './RecipeShare.css';

const RecipeShare = () => {
  const [isOpen, setIsOpen] = useState(false);
  
 
  const currentLink = window.location.href;

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(currentLink);
  };

  return (
    <div>
      <button onClick={togglePopup} className = "print-button">
        <FaShareAlt className = "print-icon"/> Dela
        </button>
      {isOpen && (
        <div className="popup">
          <div className="popup-content">
            <span className="close" onClick={togglePopup}>&times;</span>
            <input type="text" value={currentLink} readOnly />
            <button onClick={copyToClipboard} className='copy-icon'>
                <FaCopy />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default RecipeShare;
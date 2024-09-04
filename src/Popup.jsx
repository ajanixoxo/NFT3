import React from 'react';
import './Popup.css'; // Import your CSS for styling

function Popup({ onClose }) {
  return (
    <div className="popup-overlay">
      <div className="popup-content ">
        <h2 className='text-black'>Crownz Designed this UI</h2>
        <a href='https://x.com/Crownzdesigns'  className='text-blue-500'>@Crownzdesigns on twitter</a>
        <img src='Crownz.jpg' alt=''/>
        <button onClick={onClose} className='z-10 text-black mt-2 border-1'>Close</button>
      </div>
    </div>
  );
}

export default Popup;

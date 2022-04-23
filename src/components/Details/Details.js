import { useEffect, useRef } from 'react';
import './Details.css';

export const Details = ({ currentListItem, onClose }) => {
  const buttonRef = useRef();

  useEffect(() => {
    if (buttonRef?.current) {
      buttonRef.current.focus();
    }
  });

  return (
    <div className="details">
      <button type="button">Just example button</button>
      <button type="button" onClick={onClose} ref={buttonRef}>
        Back
      </button>
      <div>Selected item: {currentListItem.title}</div>
    </div>
  );
};

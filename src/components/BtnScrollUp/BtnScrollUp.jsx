import { useEffect, useState } from 'react';
import { FaPhoneAlt } from 'react-icons/fa';

import './BtnScrollUp.scss';

const BtnScrollUp = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 1) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);


  return (
    <div
      className={`btn-scroll-up-container ${isVisible ? 'visible' : 'hidden'}`}
    >
      <a href='tel:+380936288818' className="btn-scroll-up">
        <FaPhoneAlt className="phone" />
      </a>
    </div>
  );
};

export default BtnScrollUp;

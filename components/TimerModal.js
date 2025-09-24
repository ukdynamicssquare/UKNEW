import React, { useState, useEffect } from 'react';
import Cookies from 'js-cookie';

const TimerModal = () => {
  const [showModal, setShowModal] = useState(false);
    useEffect(() => {
      const cookieExists = Cookies.get('popupModalShown');
      if (!cookieExists) {
        const timeoutId = setTimeout(() => {
          setShowModal(true);
        }, 15000); // Delay of 15 seconds

        return () => {
          clearTimeout(timeoutId);
        };
      }
  
  }, []);

  // useEffect(() => {
  //   if (window.innerWidth >= 768) {
  //     const cookieExists = Cookies.get('popupModalShown');
  //     if (!cookieExists) {
  //       const timeoutId = setTimeout(() => {
  //         setShowModal(true);
  //       }, 15000); // Delay of 15 seconds

  //       return () => {
  //         clearTimeout(timeoutId);
  //       };
  //     }
  //   }
  // }, []);



  const handleCloseModal = () => {
    Cookies.set('popupModalShown', true, { expires: 1 });
    setShowModal(false);
  };

  return (
    <div>
      {showModal && (
        <div className='backdrop-mod backdrop-mod-d' id='popuphide'>
          <div className="popup-cust">
            <div className="modal-content">
              <button className='bbt' onClick={handleCloseModal}>
                <span aria-hidden="true">×</span>
              </button>

              <a 
                href="https://www.forbes.com/councils/forbestechcouncil/2025/09/19/how-to-integrate-generative-ai-as-a-strategic-partner/" 
                target="_blank" 
                rel="nofollow"
                onClick={handleCloseModal}
              >
                <img src="/img/forber-03.png" alt="" />
              </a>

              <div className="buttonn-clo">
               
        
                {/* <a
                  href="https://www.forbes.com/councils/forbestechcouncil/2025/09/19/how-to-integrate-generative-ai-as-a-strategic-partner/"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={handleCloseModal}
                  className="btn btn-redirect"
                >
                  Get Insights
                </a>
  
                <button onClick={handleCloseModal} className="btn btn-ttt">
                  Stay on site
                </button> */}

              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TimerModal;

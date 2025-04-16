'use client'
import { useEffect } from 'react'

const ScrollCardsStatic = () => {
  useEffect(() => {
    const handleScroll = () => {
      const cards = document.querySelectorAll('.mycard')

      cards.forEach((card, index) => {
        const inner = card.querySelector('.mycard__inner')
        const nextCard = cards[index + 1]
        const cardRect = card.getBoundingClientRect()

        let overlapPoint

        if (nextCard) {
          const nextRect = nextCard.getBoundingClientRect()
          overlapPoint = cardRect.top + card.offsetHeight * 0.2

          if (nextRect.top <= overlapPoint) {
            inner.style.transform = 'scale(0.95) translateY(-10px)'
            inner.style.boxShadow = '0 10px 20px rgba(0, 0, 0, 0.15)'
          } else {
            inner.style.transform = 'scale(1) translateY(0)'
            inner.style.boxShadow = '0 12px 20px rgba(0, 0, 0, 0.1), 0 4px 8px rgba(0, 0, 0, 0.2)'
          }
        } else {
          // Last card logic
          overlapPoint = cardRect.top + card.offsetHeight * 0.2
          const windowHeight = window.innerHeight

          if (windowHeight - cardRect.top <= 100) {
            inner.style.transform = 'scale(0.95) translateY(-10px)'
            inner.style.boxShadow = '0 10px 20px rgba(0, 0, 0, 0.15)'
          } else {
            inner.style.transform = 'scale(1) translateY(0)'
            inner.style.boxShadow = '0 12px 20px rgba(0, 0, 0, 0.1), 0 4px 8px rgba(0, 0, 0, 0.2)'
          }
        }
      })
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll()

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <div className="space space--small" />
      <div className="mycard-container">
        {/* Static Cards */}
        <div className="mycard">
          <div className="mycard__inner">
            <div className="mycard__image-container">
              <img src="https://source.unsplash.com/random/800x600?sig=1" className="mycard__image" />
            </div>
            <div className="mycard__content">
              <h1 className="mycard__title">Card 1</h1>
              <p className="mycard__description">This is card 1 content.</p>
            </div>
          </div>
        </div>

        <div className="mycard">
          <div className="mycard__inner">
            <div className="mycard__image-container">
              <img src="https://source.unsplash.com/random/800x600?sig=2" className="mycard__image" />
            </div>
            <div className="mycard__content">
              <h1 className="mycard__title">Card 2</h1>
              <p className="mycard__description">This is card 2 content.</p>
            </div>
          </div>
        </div>

        <div className="mycard">
          <div className="mycard__inner">
            <div className="mycard__image-container">
              <img src="https://source.unsplash.com/random/800x600?sig=3" className="mycard__image" />
            </div>
            <div className="mycard__content">
              <h1 className="mycard__title">Card 3</h1>
              <p className="mycard__description">This is card 3 content.</p>
            </div>
          </div>
        </div>

        <div className="mycard">
          <div className="mycard__inner">
            <div className="mycard__image-container">
              <img src="https://source.unsplash.com/random/800x600?sig=4" className="mycard__image" />
            </div>
            <div className="mycard__content">
              <h1 className="mycard__title">Card 4</h1>
              <p className="mycard__description">This is card 4 content.</p>
            </div>
          </div>
        </div>

        <div className="mycard">
          <div className="mycard__inner">
            <div className="mycard__image-container">
              <img src="https://source.unsplash.com/random/800x600?sig=5" className="mycard__image" />
            </div>
            <div className="mycard__content">
              <h1 className="mycard__title">Card 5</h1>
              <p className="mycard__description">This is card 5 content.</p>
            </div>
          </div>
        </div>

        <div className="mycard">
          <div className="mycard__inner">
            <div className="mycard__image-container">
              <img src="https://source.unsplash.com/random/800x600?sig=6" className="mycard__image" />
            </div>
            <div className="mycard__content">
              <h1 className="mycard__title">Card 6</h1>
              <p className="mycard__description">This is card 6 content.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="space" />

      <style jsx>{`

        .mycard-container {
          width: 100%;
          max-width: 900px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          gap: 40px;
        }

        .mycard {
          position: sticky;
          top: 200px;
          transform: translateY(0);
        }

        .mycard:nth-child(2) {
          z-index: 2;
          transform: translateY(5px);
        }

        .mycard:nth-child(3) {
          z-index: 3;
          transform: translateY(10px);
        }

        .mycard:nth-child(4) {
          z-index: 4;
          transform: translateY(15px);
        }

        .mycard:nth-child(5) {
          z-index: 5;
          transform: translateY(20px);
        }

        .mycard:nth-child(6) {
          z-index: 6;
          transform: translateY(25px);
        }

        .mycard__inner {
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          background: white;
          border-radius: 14px;
          display: flex;
          overflow: hidden;
          box-shadow: 0 12px 20px rgba(0, 0, 0, 0.1), 0 4px 8px rgba(0, 0, 0, 0.2);
          transform-origin: center top;
        }

        .mycard__image-container {
          width: 40%;
        }

        .mycard__image {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .mycard__content {
          padding: 40px 30px;
          display: flex;
          flex-direction: column;
        }

        .mycard__title {
          font-size: 60px;
          font-weight: 600;
          color: #16263a;
          margin: 0;
        }

        .mycard__description {
          font-size: 24px;
          color: #16263a;
          margin-top: 10px;
        }

        @media (max-width: 600px) {
          .mycard__inner {
            flex-direction: column;
          }

          .mycard__image-container {
            width: 100%;
          }

          .mycard__image {
            aspect-ratio: 16 / 9;
          }

          .mycard__title {
            font-size: 32px;
          }

          .mycard__description {
            font-size: 16px;
          }

          .mycard__content {
            padding: 30px 20px;
          }
        }
      `}</style>
    </>
  )
}

export default ScrollCardsStatic

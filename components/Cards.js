'use client'
import { useEffect, useRef } from 'react'

const ScrollCard = () => {
  const card1 = useRef(null)
  const card2 = useRef(null)
  const card3 = useRef(null)
  const card4 = useRef(null)
  const card5 = useRef(null)

  const inner1 = useRef(null)
  const inner2 = useRef(null)
  const inner3 = useRef(null)
  const inner4 = useRef(null)
  const inner5 = useRef(null)

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '200px 0px 0px 0px', // Start when the card is 200px away from the top
      threshold: 1, // Trigger when 10% of the element is visible
    }

    const handlePinning = (entry) => {
      if (entry.isIntersecting) {
        // When Card 2 is pinned at the top, start scaling Card 1 down
        inner1.current.style.transform = 'scale(0.9)'
        inner1.current.style.filter = 'brightness(0.8)'
      } else {
        // Reset when Card 2 leaves the pinned position
        inner1.current.style.transform = 'scale(1)'
        inner1.current.style.filter = 'brightness(1)'
      }
    }

    const observer2 = new IntersectionObserver(([entry]) => {
      handlePinning(entry)
    }, options)

    // Observe Card 2's pinning position
    if (card2.current) observer2.observe(card2.current)

    return () => {
      observer2.disconnect()
    }
  }, [])

  return (
    <>
      <div className="space space--small" />
      <div className="mycard-container">
        <div className="mycard" ref={card1}>
          <div className="mycard__inner" ref={inner1}>
            <div className="mycard__image-container">
              <img
                className="mycard__image"
                src="https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1200&q=100"
                alt=""
              />
            </div>
            <div className="mycard__content">
              <h1 className="mycard__title">Card One</h1>
              <p className="mycard__description">This is the first card.</p>
            </div>
          </div>
        </div>

        <div className="mycard" ref={card2}>
          <div className="mycard__inner" ref={inner2}>
            <div className="mycard__image-container">
              <img
                className="mycard__image"
                src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=100"
                alt=""
              />
            </div>
            <div className="mycard__content">
              <h1 className="mycard__title">Card Two</h1>
              <p className="mycard__description">This is the second card.</p>
            </div>
          </div>
        </div>

        <div className="mycard" ref={card3}>
          <div className="mycard__inner" ref={inner3}>
            <div className="mycard__image-container">
              <img
                className="mycard__image"
                src="https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1200&q=100"
                alt=""
              />
            </div>
            <div className="mycard__content">
              <h1 className="mycard__title">Card Three</h1>
              <p className="mycard__description">This is the third card.</p>
            </div>
          </div>
        </div>
        <div className="mycard" ref={card4}>
          <div className="mycard__inner" ref={inner4}>
            <div className="mycard__image-container">
              <img
                className="mycard__image"
                src="https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1200&q=100"
                alt=""
              />
            </div>
            <div className="mycard__content">
              <h1 className="mycard__title">Card Three</h1>
              <p className="mycard__description">This is the third card.</p>
            </div>
          </div>
        </div>
        <div className="mycard" ref={card5}>
          <div className="mycard__inner" ref={inner5}>
            <div className="mycard__image-container">
              <img
                className="mycard__image"
                src="https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1200&q=100"
                alt=""
              />
            </div>
            <div className="mycard__content">
              <h1 className="mycard__title">Card Three</h1>
              <p className="mycard__description">This is the third card.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="space" />

      <style jsx>{`
        // .space {
        //   height: 90vh;
        // }

        // .space--small {
        //   height: 40vh;
        // }

        .mycard-container {
          width: 100%;
          max-width: 1200px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          gap: 40px;
        }

        .mycard {
          position: sticky;
          top: 150px;
        }

        .mycard__inner {
          transition: transform 0.4s ease, filter 0.4s ease;
          background: white;
          border-radius: 14px;
          display: flex;
          overflow: hidden;
          box-shadow: 0 25px 50px -12px hsla(265.3, 20%, 10%, 35%);
          transform-origin: center top;
        }

        .mycard__image-container {
          width: 40%;
          flex-shrink: 0;
        }

        .mycard__image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          aspect-ratio: 1;
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
        }

        .mycard__description {
          line-height: 1.4;
          font-size: 24px;
          color: #16263a;
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

export default ScrollCard

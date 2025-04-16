import { useEffect } from 'react'

const useCardScrollEffect = (cardSelector = '.mycard', innerSelector = '.mycard__inner') => {
  useEffect(() => {
    // Don't run on mobile screens
    if (window.innerWidth <= 993) return

    const handleScroll = () => {
      const cards = document.querySelectorAll(cardSelector)

      cards.forEach((card, index) => {
        const inner = card.querySelector(innerSelector)
        const nextCard = cards[index + 1]
        const cardRect = card.getBoundingClientRect()

        let overlapPoint

        if (nextCard) {
          const nextRect = nextCard.getBoundingClientRect()
          overlapPoint = cardRect.top + card.offsetHeight * 0.2

          if (nextRect.top <= overlapPoint) {
            inner.style.transform = 'scale(0.95) translateY(-10px)'
            // inner.style.boxShadow = '0 10px 20px rgba(0, 0, 0, 0.15)'
          } else {
            inner.style.transform = 'scale(1) translateY(0)'
            // inner.style.boxShadow = '0 12px 20px rgba(0, 0, 0, 0.1), 0 4px 8px rgba(0, 0, 0, 0.2)'
          }
        } else {
          // Last card logic
          overlapPoint = cardRect.top + card.offsetHeight * 0.2
          const windowHeight = window.innerHeight

          if (windowHeight - cardRect.top <= 100) {
            inner.style.transform = 'scale(1) translateY(-10px)'
            // inner.style.boxShadow = '0 10px 20px rgba(0, 0, 0, 0.15)'
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
  }, [cardSelector, innerSelector])
}

export default useCardScrollEffect

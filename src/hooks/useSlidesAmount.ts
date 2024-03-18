import { useEffect, useState } from "react"

export const useSlidesAmount = () => {
  const [slidesAmount, setSlidesAmount] = useState(2)

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 576) {
        setSlidesAmount(1)
      } else if (window.innerWidth <= 992) {
        setSlidesAmount(2)
      } else {
        setSlidesAmount(4)
      }
    };

    handleResize()

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return slidesAmount
}
import { useState, useEffect } from 'react'
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs'
import { RxDotFilled } from 'react-icons/rx'

function Carousel() {
  const slides = [
    {
      img: '/homoeonic-img-1.png',
      title: 'Homoeonic Radionics Machines',
    },
    {
      img: '/homoeonic-img-2.png',
      title: 'Homoeonic Radionics Machines 2',
    },
  ]

  const [currentIndex, setCurrentIndex] = useState(0)

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1
    setCurrentIndex(newIndex)
  }
  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1
    const newIndex = isLastSlide ? 0 : currentIndex + 1
    setCurrentIndex(newIndex)
  }

  const goToSlide = slideIndex => {
    setCurrentIndex(slideIndex)
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prev => (prev === slides.length - 1 ? 0 : prev + 1))
    }, 5000) // cada 5 segundos

    return () => clearInterval(interval) // limpieza
  }, [slides.length])

  return (
    <div className=' h-[200px] sm:h-[300px] md:h-[400px] lg:h-[500px] w-full m-auto py-8 relative group'>
      <img
        src={slides[currentIndex].img}
        alt={slides[currentIndex].title}
        className='w-full h-full object-cover duration-200'
      />
      <div className='hidden group-hover:block absolute top-[50%] left-5 translate-x-0 translate-y-[-50%] text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
        {/* left arrow */}
        <BsChevronCompactLeft onClick={prevSlide} size={30} />
      </div>

      <div className='hidden group-hover:block absolute top-[50%] right-5 translate-x-0 translate-y-[-50%] text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
        {/* right arrow */}
        <BsChevronCompactRight onClick={nextSlide} size={30} />
      </div>
      <div className='flex justify-center py-2 top-4'>
        {slides.map((slide, index) => (
          <div className='text-2xl cursor-pointer' key={index} onClick={() => goToSlide(index)}>
            <RxDotFilled />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Carousel

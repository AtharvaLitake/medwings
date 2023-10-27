import React from 'react'
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import poster1 from '../../Images/Poster1.png';
import poster2 from '../../Images/Poster2.png';


const handleDragStart = (e) => e.preventDefault();

const items = [
  <img src={poster1} className='max-h-[580px] w-[100%]' onDragStart={handleDragStart} role="presentation" />,
  <img src={poster2} className='max-h-[580px] w-[100%]' onDragStart={handleDragStart} role="presentation"  />,
  // <img src="." onDragStart={handleDragStart} role="presentation" />,
];


const HomeCarousel = () => {
  return (
    <div className='w-[100%] m-auto'>
       <AliceCarousel mouseTracking items={items}
        autoHeight = 'true'
        responsive
        infinite
        autoPlayInterval={1000}
        disableButtonsControls
        autoPlay='true'
        />
    </div>
  )
}

export default HomeCarousel

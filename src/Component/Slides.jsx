import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import img1 from "../assets/image.webp"

function Slides() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img src={img1} alt="" />
        
      </Carousel.Item>
      <Carousel.Item>
        <img src={img1} alt="" />
        
      </Carousel.Item>
      <Carousel.Item>
       <img src={img1} alt="" />
       
      </Carousel.Item>
    </Carousel>
  );
}

export default Slides;
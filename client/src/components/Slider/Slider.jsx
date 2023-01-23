import React ,{ useState } from 'react'
import "./Slider.scss"
import EastOutlinedIcon from "@mui/icons-material/EastOutlined";
import WestOutlinedIcon from "@mui/icons-material/WestOutlined";
const Slider = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const data = [
        "https://images.pexels.com/photos/298863/pexels-photo-298863.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "https://images.pexels.com/photos/135620/pexels-photo-135620.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "https://images.pexels.com/photos/896291/pexels-photo-896291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    ]
    const prevSlide = () => { 
        setCurrentSlide(currentSlide === 0 ? 2 : (prev) => prev - 1);
    };
    const nextSlide = () => { 
        setCurrentSlide(currentSlide === 2 ? 0 : (prev) => prev + 1);
    };

  return (
      <div className='slider'>
          <div class="container" style={{transform:`translateX(-${currentSlide * 100}vw)`}}>
              <img src={data[0]} alt=""/>
              <img src={data[1]} alt=""/>
              <img src={data[2]} alt=""/>
          </div>
          <div class="icons">
              <div class="icon" onClick={prevSlide}>
              <WestOutlinedIcon />   
              </div>
              <div class="icon" onClick={nextSlide}>
              <EastOutlinedIcon />
              </div>
          </div>
      </div>
  )
}

export default Slider
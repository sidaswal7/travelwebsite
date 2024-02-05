import { useState } from "react";
import { BsArrowLeftSquareFill, BsArrowRightSquareFill } from "react-icons/bs";

const sliderData= [
    {
        url:'https://images.unsplash.com/photo-1706780518618-db72ee4271e0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDE1fEZ6bzN6dU9ITjZ3fHxlbnwwfHx8fHw%3D'
    },
    {
        url:'https://images.unsplash.com/photo-1706561038071-6db568890c12?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0fHx8ZW58MHx8fHx8'
    },
    {
        url:'https://images.unsplash.com/photo-1706815774376-fac23b511ef5?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxM3x8fGVufDB8fHx8fA%3D%3D'
    },
];
function Carousel() {
    const [slide,setSlide] =useState(0)
    const length = sliderData.length;
    const prevSlide=()=>{
        setSlide(slide === length-1?0:slide+1)
    }
    const nextSlide=()=>{
        setSlide(slide === 0?length-1:slide-1)
    }
  return (
    <div className="max-w-[1240px] mx-auto px-4 py-16 relative flex justify-center items-center">
        <BsArrowLeftSquareFill onClick={prevSlide} className="absolute top-[50%] text-3xl cursor-pointer left-8"/>
        <BsArrowRightSquareFill onClick={nextSlide} className="absolute top-[50%] text-3xl cursor-pointer right-8"/>
        {sliderData.map((item,index)=>(
            <div className={index === slide ? 'opacity-100':'opacity-0'}>
                {index === slide && (<img className="w-full rounded-md" src={item.url}
                alt="/"/>)}
            
            </div>

        ))}
    </div>
  )
}

export default Carousel
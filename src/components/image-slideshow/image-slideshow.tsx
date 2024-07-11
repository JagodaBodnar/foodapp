'use client'
import {useEffect, useState} from "react";
import Image from "next/image"
import {images} from "@/components/image-slideshow/image-data";
import "./image-slideshow.css"

const ImageSlideshow = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex < images.length - 1 ? prevIndex + 1 : 0);
    }, 5000)
    return () => clearInterval(interval)
  }, []);

  return (
    <div className="image-slideshow__container">
      {images.map((imageEl, index) => {
        const {image, alt} = imageEl;
        return (
          <Image src={image}
                 alt={alt}
                 key={index}
                 className={index === currentImageIndex ? "active" : ''}/>
        )
      })
      }
    </div>
  );
};

export default ImageSlideshow;
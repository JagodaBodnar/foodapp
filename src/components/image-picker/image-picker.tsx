"use client";
import {useRef, useState} from "react";
import Image from "next/image"

type Props = {
  name: string,
  label: string
}
import "./image-picker.css"

const ImagePicker = ({name, label}: Props) => {
  const imageInputRef = useRef<HTMLInputElement | null>(null)
  const [image, setImage] = useState<string | null>()
  const handlePickClick = () => {
    if (imageInputRef.current !== null) {
      imageInputRef.current!.click();
    }
  }
  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (!file) {
      setImage(null)
      return;
    }
    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);
    fileReader.onload = () => {
      setImage(fileReader.result.toString())
    }
  }
  return (
    <div className="image-picker">
      <label htmlFor={name}>{label}</label>
      <div className="image-picker__controls">
        <input type="file"
               ref={imageInputRef}
               id={name}
               accept="image/png, image/jpeg"
               name={name}
               className="image-picker__input"
               onChange={handleImageChange}
               required/>

        <button type="button" className="image-picker__button"
                onClick={handlePickClick}>
          Pick an image
        </button>
        <div className="image-picker__preview">
          {!image && <p>No image picked yet.</p>}
          {image && <Image src={image} alt="image selected by user" fill/>}
        </div>
      </div>
    </div>
  );
};

export default ImagePicker;
"use client";
import { useRef, useState } from "react";
import styleClasses from "./ImagePicker.module.css";
import Image from "next/image";

export default function ImagePicker({ label, name }) {
  const input = useRef();
  const [pickedImage, setPickedImage] = useState();

  const pickImage = () => {
    input.current.click();
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];

    if (!file) {
      setPickedImage(null);
      return;
    }

    const fileReader = new FileReader();

    fileReader.onload = () => {
      setPickedImage(fileReader.result);
    };

    fileReader.readAsDataURL(file);
  };

  return (
    <div className={styleClasses.picker}>
      <label htmlFor={name}>{label}</label>

      <div className={styleClasses.controls}>
        <div className={styleClasses.preview}>
          {!pickedImage && <p>No image picked yet.</p>}

          {pickedImage && (
            <Image src={pickedImage} alt="image selected by user" fill />
          )}
        </div>

        <input
          type="file"
          id={name}
          name={name}
          accept="image/png, image/jpeg"
          className={styleClasses.input}
          ref={input}
          onChange={handleImageChange}
          required
        />

        <button
          className={styleClasses.button}
          type="button"
          onClick={pickImage}
        >
          Pick an Image
        </button>
      </div>
    </div>
  );
}
